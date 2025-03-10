/**
 * @author Yosuke Ota
 * See LICENSE file in root directory for full license.
 */
'use strict'

/**
 * @typedef {import('../utils').ComponentEmit} ComponentEmit
 * @typedef {import('../utils').ComponentProp} ComponentProp
 * @typedef {import('../utils').VueObjectData} VueObjectData
 */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const {
  findVariable,
  isOpeningBraceToken,
  isClosingBraceToken,
  isOpeningBracketToken
} = require('eslint-utils')
const utils = require('../utils')
const { capitalize } = require('../utils/casing')

// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------

const FIX_EMITS_AFTER_OPTIONS = new Set([
  'setup',
  'data',
  'computed',
  'watch',
  'methods',
  'template',
  'render',
  'renderError',

  // lifecycle hooks
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'activated',
  'deactivated',
  'beforeUnmount',
  'unmounted',
  'beforeDestroy',
  'destroyed',
  'renderTracked',
  'renderTriggered',
  'errorCaptured'
])
// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    hasSuggestions: true,
    type: 'suggestion',
    docs: {
      description: 'require `emits` option with name triggered by `$emit()`',
      categories: ['vue3-strongly-recommended'],
      url: 'https://eslint.vuejs.org/rules/require-explicit-emits.html'
    },
    fixable: null,
    schema: [
      {
        type: 'object',
        properties: {
          allowProps: {
            type: 'boolean'
          }
        },
        additionalProperties: false
      }
    ],
    messages: {
      missing:
        'The "{{name}}" event has been triggered but not declared on {{emitsKind}}.',
      addOneOption: 'Add the "{{name}}" to {{emitsKind}}.',
      addArrayEmitsOption:
        'Add the {{emitsKind}} with array syntax and define "{{name}}" event.',
      addObjectEmitsOption:
        'Add the {{emitsKind}} with object syntax and define "{{name}}" event.'
    }
  },
  /** @param {RuleContext} context */
  create(context) {
    const options = context.options[0] || {}
    const allowProps = !!options.allowProps
    /** @type {Map<ObjectExpression | Program, { contextReferenceIds: Set<Identifier>, emitReferenceIds: Set<Identifier> }>} */
    const setupContexts = new Map()
    /** @type {Map<ObjectExpression | Program, ComponentEmit[]>} */
    const vueEmitsDeclarations = new Map()
    /** @type {Map<ObjectExpression | Program, ComponentProp[]>} */
    const vuePropsDeclarations = new Map()

    /**
     * @typedef {object} VueTemplateDefineData
     * @property {'export' | 'mark' | 'definition' | 'setup'} type
     * @property {ObjectExpression | Program} define
     * @property {ComponentEmit[]} emits
     * @property {ComponentProp[]} props
     * @property {CallExpression} [defineEmits]
     */
    /** @type {VueTemplateDefineData | null} */
    let vueTemplateDefineData = null

    /**
     * @param {ComponentEmit[]} emits
     * @param {ComponentProp[]} props
     * @param {Literal} nameLiteralNode
     * @param {ObjectExpression | Program} vueDefineNode
     */
    function verifyEmit(emits, props, nameLiteralNode, vueDefineNode) {
      const name = `${nameLiteralNode.value}`
      if (emits.some((e) => e.emitName === name || e.emitName == null)) {
        return
      }
      if (allowProps) {
        const key = `on${capitalize(name)}`
        if (props.some((e) => e.propName === key || e.propName == null)) {
          return
        }
      }
      context.report({
        node: nameLiteralNode,
        messageId: 'missing',
        data: {
          name,
          emitsKind:
            vueDefineNode.type === 'ObjectExpression'
              ? '`emits` option'
              : '`defineEmits`'
        },
        suggest: buildSuggest(vueDefineNode, emits, nameLiteralNode, context)
      })
    }

    const programNode = context.getSourceCode().ast
    if (utils.isScriptSetup(context)) {
      // init
      vueTemplateDefineData = {
        type: 'setup',
        define: programNode,
        emits: [],
        props: []
      }
    }

    const callVisitor = {
      /**
       * @param {CallExpression & { arguments: [Literal, ...Expression] }} node
       * @param {VueObjectData} [info]
       */
      'CallExpression[arguments.0.type=Literal]'(node, info) {
        const callee = utils.skipChainExpression(node.callee)
        const nameLiteralNode = node.arguments[0]
        if (!nameLiteralNode || typeof nameLiteralNode.value !== 'string') {
          // cannot check
          return
        }
        const vueDefineNode = info ? info.node : programNode
        const emitsDeclarations = vueEmitsDeclarations.get(vueDefineNode)
        if (!emitsDeclarations) {
          return
        }

        let emit
        if (callee.type === 'MemberExpression') {
          const name = utils.getStaticPropertyName(callee)
          if (name === 'emit' || name === '$emit') {
            emit = { name, member: callee }
          }
        }

        // verify setup context
        const setupContext = setupContexts.get(vueDefineNode)
        if (setupContext) {
          const { contextReferenceIds, emitReferenceIds } = setupContext
          if (callee.type === 'Identifier' && emitReferenceIds.has(callee)) {
            // verify setup(props,{emit}) {emit()}
            verifyEmit(
              emitsDeclarations,
              vuePropsDeclarations.get(vueDefineNode) || [],
              nameLiteralNode,
              vueDefineNode
            )
          } else if (emit && emit.name === 'emit') {
            const memObject = utils.skipChainExpression(emit.member.object)
            if (
              memObject.type === 'Identifier' &&
              contextReferenceIds.has(memObject)
            ) {
              // verify setup(props,context) {context.emit()}
              verifyEmit(
                emitsDeclarations,
                vuePropsDeclarations.get(vueDefineNode) || [],
                nameLiteralNode,
                vueDefineNode
              )
            }
          }
        }

        // verify $emit
        if (emit && emit.name === '$emit') {
          const memObject = utils.skipChainExpression(emit.member.object)
          if (utils.isThis(memObject, context)) {
            // verify this.$emit()
            verifyEmit(
              emitsDeclarations,
              vuePropsDeclarations.get(vueDefineNode) || [],
              nameLiteralNode,
              vueDefineNode
            )
          }
        }
      }
    }

    return utils.defineTemplateBodyVisitor(
      context,
      {
        /** @param { CallExpression & { argument: [Literal, ...Expression] } } node */
        'CallExpression[arguments.0.type=Literal]'(node) {
          const callee = utils.skipChainExpression(node.callee)
          const nameLiteralNode = /** @type {Literal} */ (node.arguments[0])
          if (!nameLiteralNode || typeof nameLiteralNode.value !== 'string') {
            // cannot check
            return
          }
          if (!vueTemplateDefineData) {
            return
          }
          if (callee.type === 'Identifier' && callee.name === '$emit') {
            verifyEmit(
              vueTemplateDefineData.emits,
              vueTemplateDefineData.props,
              nameLiteralNode,
              vueTemplateDefineData.define
            )
          }
        }
      },
      utils.compositingVisitors(
        utils.defineScriptSetupVisitor(context, {
          onDefineEmitsEnter(node, emits) {
            vueEmitsDeclarations.set(programNode, emits)

            if (
              vueTemplateDefineData &&
              vueTemplateDefineData.type === 'setup'
            ) {
              vueTemplateDefineData.emits = emits
              vueTemplateDefineData.defineEmits = node
            }

            if (
              !node.parent ||
              node.parent.type !== 'VariableDeclarator' ||
              node.parent.init !== node
            ) {
              return
            }

            const emitParam = node.parent.id
            const variable =
              emitParam.type === 'Identifier'
                ? findVariable(context.getScope(), emitParam)
                : null
            if (!variable) {
              return
            }
            /** @type {Set<Identifier>} */
            const emitReferenceIds = new Set()
            for (const reference of variable.references) {
              if (!reference.isRead()) {
                continue
              }

              emitReferenceIds.add(reference.identifier)
            }
            setupContexts.set(programNode, {
              contextReferenceIds: new Set(),
              emitReferenceIds
            })
          },
          onDefinePropsEnter(_node, props) {
            if (allowProps) {
              vuePropsDeclarations.set(programNode, props)

              if (
                vueTemplateDefineData &&
                vueTemplateDefineData.type === 'setup'
              ) {
                vueTemplateDefineData.props = props
              }
            }
          },
          ...callVisitor
        }),
        utils.defineVueVisitor(context, {
          onVueObjectEnter(node) {
            vueEmitsDeclarations.set(
              node,
              utils.getComponentEmitsFromOptions(node)
            )
            if (allowProps) {
              vuePropsDeclarations.set(
                node,
                utils.getComponentPropsFromOptions(node)
              )
            }
          },
          onSetupFunctionEnter(node, { node: vueNode }) {
            const contextParam = node.params[1]
            if (!contextParam) {
              // no arguments
              return
            }
            if (contextParam.type === 'RestElement') {
              // cannot check
              return
            }
            if (contextParam.type === 'ArrayPattern') {
              // cannot check
              return
            }
            /** @type {Set<Identifier>} */
            const contextReferenceIds = new Set()
            /** @type {Set<Identifier>} */
            const emitReferenceIds = new Set()
            if (contextParam.type === 'ObjectPattern') {
              const emitProperty = utils.findAssignmentProperty(
                contextParam,
                'emit'
              )
              if (!emitProperty) {
                return
              }
              const emitParam = emitProperty.value
              // `setup(props, {emit})`
              const variable =
                emitParam.type === 'Identifier'
                  ? findVariable(context.getScope(), emitParam)
                  : null
              if (!variable) {
                return
              }
              for (const reference of variable.references) {
                if (!reference.isRead()) {
                  continue
                }

                emitReferenceIds.add(reference.identifier)
              }
            } else if (contextParam.type === 'Identifier') {
              // `setup(props, context)`
              const variable = findVariable(context.getScope(), contextParam)
              if (!variable) {
                return
              }
              for (const reference of variable.references) {
                if (!reference.isRead()) {
                  continue
                }

                contextReferenceIds.add(reference.identifier)
              }
            }
            setupContexts.set(vueNode, {
              contextReferenceIds,
              emitReferenceIds
            })
          },
          ...callVisitor,
          onVueObjectExit(node, { type }) {
            const emits = vueEmitsDeclarations.get(node)
            if (
              (!vueTemplateDefineData ||
                (vueTemplateDefineData.type !== 'export' &&
                  vueTemplateDefineData.type !== 'setup')) &&
              emits &&
              (type === 'mark' || type === 'export' || type === 'definition')
            ) {
              vueTemplateDefineData = {
                type,
                define: node,
                emits,
                props: vuePropsDeclarations.get(node) || []
              }
            }
            setupContexts.delete(node)
            vueEmitsDeclarations.delete(node)
            vuePropsDeclarations.delete(node)
          }
        })
      )
    )
  }
}

/**
 * @param {ObjectExpression|Program} define
 * @param {ComponentEmit[]} emits
 * @param {Literal} nameNode
 * @param {RuleContext} context
 * @returns {Rule.SuggestionReportDescriptor[]}
 */
function buildSuggest(define, emits, nameNode, context) {
  const emitsKind =
    define.type === 'ObjectExpression' ? '`emits` option' : '`defineEmits`'
  const certainEmits = emits.filter((e) => e.key)
  if (certainEmits.length > 0) {
    const last = certainEmits[certainEmits.length - 1]
    return [
      {
        messageId: 'addOneOption',
        data: {
          name: `${nameNode.value}`,
          emitsKind
        },
        fix(fixer) {
          if (last.type === 'array') {
            // Array
            return fixer.insertTextAfter(last.node, `, '${nameNode.value}'`)
          } else if (last.type === 'object') {
            // Object
            return fixer.insertTextAfter(
              last.node,
              `, '${nameNode.value}': null`
            )
          } else {
            // type
            // The argument is unknown and cannot be suggested.
            return null
          }
        }
      }
    ]
  }

  if (define.type !== 'ObjectExpression') {
    // We don't know where to put defineEmits.
    return []
  }

  const object = define

  const propertyNodes = object.properties.filter(utils.isProperty)

  const emitsOption = propertyNodes.find(
    (p) => utils.getStaticPropertyName(p) === 'emits'
  )
  if (emitsOption) {
    const sourceCode = context.getSourceCode()
    const emitsOptionValue = emitsOption.value
    if (emitsOptionValue.type === 'ArrayExpression') {
      const leftBracket = /** @type {Token} */ (
        sourceCode.getFirstToken(emitsOptionValue, isOpeningBracketToken)
      )
      return [
        {
          messageId: 'addOneOption',
          data: { name: `${nameNode.value}`, emitsKind },
          fix(fixer) {
            return fixer.insertTextAfter(
              leftBracket,
              `'${nameNode.value}'${
                emitsOptionValue.elements.length > 0 ? ',' : ''
              }`
            )
          }
        }
      ]
    } else if (emitsOptionValue.type === 'ObjectExpression') {
      const leftBrace = /** @type {Token} */ (
        sourceCode.getFirstToken(emitsOptionValue, isOpeningBraceToken)
      )
      return [
        {
          messageId: 'addOneOption',
          data: { name: `${nameNode.value}`, emitsKind },
          fix(fixer) {
            return fixer.insertTextAfter(
              leftBrace,
              `'${nameNode.value}': null${
                emitsOptionValue.properties.length > 0 ? ',' : ''
              }`
            )
          }
        }
      ]
    }
    return []
  }

  const sourceCode = context.getSourceCode()
  const afterOptionNode = propertyNodes.find((p) =>
    FIX_EMITS_AFTER_OPTIONS.has(utils.getStaticPropertyName(p) || '')
  )
  return [
    {
      messageId: 'addArrayEmitsOption',
      data: { name: `${nameNode.value}`, emitsKind },
      fix(fixer) {
        if (afterOptionNode) {
          return fixer.insertTextAfter(
            sourceCode.getTokenBefore(afterOptionNode),
            `\nemits: ['${nameNode.value}'],`
          )
        } else if (object.properties.length > 0) {
          const before =
            propertyNodes[propertyNodes.length - 1] ||
            object.properties[object.properties.length - 1]
          return fixer.insertTextAfter(
            before,
            `,\nemits: ['${nameNode.value}']`
          )
        } else {
          const objectLeftBrace = /** @type {Token} */ (
            sourceCode.getFirstToken(object, isOpeningBraceToken)
          )
          const objectRightBrace = /** @type {Token} */ (
            sourceCode.getLastToken(object, isClosingBraceToken)
          )
          return fixer.insertTextAfter(
            objectLeftBrace,
            `\nemits: ['${nameNode.value}']${
              objectLeftBrace.loc.end.line < objectRightBrace.loc.start.line
                ? ''
                : '\n'
            }`
          )
        }
      }
    },
    {
      messageId: 'addObjectEmitsOption',
      data: { name: `${nameNode.value}`, emitsKind },
      fix(fixer) {
        if (afterOptionNode) {
          return fixer.insertTextAfter(
            sourceCode.getTokenBefore(afterOptionNode),
            `\nemits: {'${nameNode.value}': null},`
          )
        } else if (object.properties.length > 0) {
          const before =
            propertyNodes[propertyNodes.length - 1] ||
            object.properties[object.properties.length - 1]
          return fixer.insertTextAfter(
            before,
            `,\nemits: {'${nameNode.value}': null}`
          )
        } else {
          const objectLeftBrace = /** @type {Token} */ (
            sourceCode.getFirstToken(object, isOpeningBraceToken)
          )
          const objectRightBrace = /** @type {Token} */ (
            sourceCode.getLastToken(object, isClosingBraceToken)
          )
          return fixer.insertTextAfter(
            objectLeftBrace,
            `\nemits: {'${nameNode.value}': null}${
              objectLeftBrace.loc.end.line < objectRightBrace.loc.start.line
                ? ''
                : '\n'
            }`
          )
        }
      }
    }
  ]
}
