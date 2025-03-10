---
sidebarDepth: 0
pageClass: rule-list
---

# Available rules

<!-- This file is automatically generated in tools/update-docs-rules-index.js, do not change! -->

::: tip Legend
  :wrench: Indicates that the rule is fixable, and using `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the reported problems.

  :bulb: Indicates that some problems reported by the rule are manually fixable by editor [suggestions](https://eslint.org/docs/developer-guide/working-with-rules#providing-suggestions).
:::

Mark indicating rule type:

- <span class="emoji">:warning:</span> Possible Problems: These rules relate to possible logic errors in code.
- :hammer: Suggestions: These rules suggest alternate ways of doing things.
- :lipstick: Layout & Formatting: These rules care about how the code looks rather than how it executes.

## Base Rules (Enabling Correct ESLint Parsing)

Rules in this category are enabled for all presets provided by eslint-plugin-vue.

<rules-table>

| Rule ID | Description |    |    |
|:--------|:------------|:--:|:--:|
| [vue/comment-directive](./comment-directive.md) | support comment-directives in `<template>` |  | :warning: |
| [vue/jsx-uses-vars](./jsx-uses-vars.md) | prevent variables used in JSX to be marked as unused |  | :warning: |

</rules-table>

## Priority A: Essential (Error Prevention)

- :three: Indicates that the rule is for Vue 3 and is included in all of `"plugin:vue/vue3-essential"`, `"plugin:vue/vue3-strongly-recommended"` and `"plugin:vue/vue3-recommended"` presets.
- :two: Indicates that the rule is for Vue 2 and is included in all of `"plugin:vue/essential"`, `"plugin:vue/strongly-recommended"` and `"plugin:vue/recommended"` presets.

<rules-table>

| Rule ID | Description |    |    |
|:--------|:------------|:--:|:--:|
| [vue/multi-word-component-names](./multi-word-component-names.md) | require component names to be always multi-word |  | :three::two::hammer: |
| [vue/no-arrow-functions-in-watch](./no-arrow-functions-in-watch.md) | disallow using arrow functions to define watcher |  | :three::two::warning: |
| [vue/no-async-in-computed-properties](./no-async-in-computed-properties.md) | disallow asynchronous actions in computed properties |  | :three::two::warning: |
| [vue/no-child-content](./no-child-content.md) | disallow element's child contents which would be overwritten by a directive like `v-html` or `v-text` | :bulb: | :three::two::warning: |
| [vue/no-computed-properties-in-data](./no-computed-properties-in-data.md) | disallow accessing computed properties in `data`. |  | :three::two::warning: |
| [vue/no-custom-modifiers-on-v-model](./no-custom-modifiers-on-v-model.md) | disallow custom modifiers on v-model used on the component |  | :two::warning: |
| [vue/no-deprecated-data-object-declaration](./no-deprecated-data-object-declaration.md) | disallow using deprecated object declaration on data (in Vue.js 3.0.0+) | :wrench: | :three::warning: |
| [vue/no-deprecated-destroyed-lifecycle](./no-deprecated-destroyed-lifecycle.md) | disallow using deprecated `destroyed` and `beforeDestroy` lifecycle hooks (in Vue.js 3.0.0+) | :wrench: | :three::warning: |
| [vue/no-deprecated-dollar-listeners-api](./no-deprecated-dollar-listeners-api.md) | disallow using deprecated `$listeners` (in Vue.js 3.0.0+) |  | :three::warning: |
| [vue/no-deprecated-dollar-scopedslots-api](./no-deprecated-dollar-scopedslots-api.md) | disallow using deprecated `$scopedSlots` (in Vue.js 3.0.0+) | :wrench: | :three::warning: |
| [vue/no-deprecated-events-api](./no-deprecated-events-api.md) | disallow using deprecated events api (in Vue.js 3.0.0+) |  | :three::warning: |
| [vue/no-deprecated-filter](./no-deprecated-filter.md) | disallow using deprecated filters syntax (in Vue.js 3.0.0+) |  | :three::warning: |
| [vue/no-deprecated-functional-template](./no-deprecated-functional-template.md) | disallow using deprecated the `functional` template (in Vue.js 3.0.0+) |  | :three::warning: |
| [vue/no-deprecated-html-element-is](./no-deprecated-html-element-is.md) | disallow using deprecated the `is` attribute on HTML elements (in Vue.js 3.0.0+) |  | :three::warning: |
| [vue/no-deprecated-inline-template](./no-deprecated-inline-template.md) | disallow using deprecated `inline-template` attribute (in Vue.js 3.0.0+) |  | :three::warning: |
| [vue/no-deprecated-props-default-this](./no-deprecated-props-default-this.md) | disallow deprecated `this` access in props default function (in Vue.js 3.0.0+) |  | :three::warning: |
| [vue/no-deprecated-router-link-tag-prop](./no-deprecated-router-link-tag-prop.md) | disallow using deprecated `tag` property on `RouterLink` (in Vue.js 3.0.0+) |  | :three::warning: |
| [vue/no-deprecated-scope-attribute](./no-deprecated-scope-attribute.md) | disallow deprecated `scope` attribute (in Vue.js 2.5.0+) | :wrench: | :three::hammer: |
| [vue/no-deprecated-slot-attribute](./no-deprecated-slot-attribute.md) | disallow deprecated `slot` attribute (in Vue.js 2.6.0+) | :wrench: | :three::hammer: |
| [vue/no-deprecated-slot-scope-attribute](./no-deprecated-slot-scope-attribute.md) | disallow deprecated `slot-scope` attribute (in Vue.js 2.6.0+) | :wrench: | :three::hammer: |
| [vue/no-deprecated-v-bind-sync](./no-deprecated-v-bind-sync.md) | disallow use of deprecated `.sync` modifier on `v-bind` directive (in Vue.js 3.0.0+) | :wrench: | :three::warning: |
| [vue/no-deprecated-v-is](./no-deprecated-v-is.md) | disallow deprecated `v-is` directive (in Vue.js 3.1.0+) | :wrench: | :three::hammer: |
| [vue/no-deprecated-v-on-native-modifier](./no-deprecated-v-on-native-modifier.md) | disallow using deprecated `.native` modifiers (in Vue.js 3.0.0+) |  | :three::warning: |
| [vue/no-deprecated-v-on-number-modifiers](./no-deprecated-v-on-number-modifiers.md) | disallow using deprecated number (keycode) modifiers (in Vue.js 3.0.0+) | :wrench: | :three::warning: |
| [vue/no-deprecated-vue-config-keycodes](./no-deprecated-vue-config-keycodes.md) | disallow using deprecated `Vue.config.keyCodes` (in Vue.js 3.0.0+) |  | :three::warning: |
| [vue/no-dupe-keys](./no-dupe-keys.md) | disallow duplication of field names |  | :three::two::warning: |
| [vue/no-dupe-v-else-if](./no-dupe-v-else-if.md) | disallow duplicate conditions in `v-if` / `v-else-if` chains |  | :three::two::warning: |
| [vue/no-duplicate-attributes](./no-duplicate-attributes.md) | disallow duplication of attributes |  | :three::two::warning: |
| [vue/no-export-in-script-setup](./no-export-in-script-setup.md) | disallow `export` in `<script setup>` |  | :three::two::warning: |
| [vue/no-expose-after-await](./no-expose-after-await.md) | disallow asynchronously registered `expose` |  | :three::warning: |
| [vue/no-lifecycle-after-await](./no-lifecycle-after-await.md) | disallow asynchronously registered lifecycle hooks |  | :three::hammer: |
| [vue/no-multiple-template-root](./no-multiple-template-root.md) | disallow adding multiple root nodes to the template |  | :two::warning: |
| [vue/no-mutating-props](./no-mutating-props.md) | disallow mutation of component props |  | :three::two::hammer: |
| [vue/no-parsing-error](./no-parsing-error.md) | disallow parsing errors in `<template>` |  | :three::two::warning: |
| [vue/no-ref-as-operand](./no-ref-as-operand.md) | disallow use of value wrapped by `ref()` (Composition API) as an operand | :wrench: | :three::two::hammer: |
| [vue/no-reserved-component-names](./no-reserved-component-names.md) | disallow the use of reserved names in component definitions |  | :three::two::hammer: |
| [vue/no-reserved-keys](./no-reserved-keys.md) | disallow overwriting reserved keys |  | :three::two::hammer: |
| [vue/no-reserved-props](./no-reserved-props.md) | disallow reserved names in props |  | :three::two::warning: |
| [vue/no-setup-props-destructure](./no-setup-props-destructure.md) | disallow destructuring of `props` passed to `setup` |  | :three::two::hammer: |
| [vue/no-shared-component-data](./no-shared-component-data.md) | enforce component's data property to be a function | :wrench: | :three::two::warning: |
| [vue/no-side-effects-in-computed-properties](./no-side-effects-in-computed-properties.md) | disallow side effects in computed properties |  | :three::two::warning: |
| [vue/no-template-key](./no-template-key.md) | disallow `key` attribute on `<template>` |  | :three::two::warning: |
| [vue/no-textarea-mustache](./no-textarea-mustache.md) | disallow mustaches in `<textarea>` |  | :three::two::warning: |
| [vue/no-unused-components](./no-unused-components.md) | disallow registering components that are not used inside templates |  | :three::two::hammer: |
| [vue/no-unused-vars](./no-unused-vars.md) | disallow unused variable definitions of v-for directives or scope attributes | :bulb: | :three::two::hammer: |
| [vue/no-use-computed-property-like-method](./no-use-computed-property-like-method.md) | disallow use computed property like method |  | :three::two::warning: |
| [vue/no-use-v-if-with-v-for](./no-use-v-if-with-v-for.md) | disallow use v-if on the same element as v-for |  | :three::two::hammer: |
| [vue/no-useless-template-attributes](./no-useless-template-attributes.md) | disallow useless attribute on `<template>` |  | :three::two::warning: |
| [vue/no-v-for-template-key-on-child](./no-v-for-template-key-on-child.md) | disallow key of `<template v-for>` placed on child elements |  | :three::warning: |
| [vue/no-v-for-template-key](./no-v-for-template-key.md) | disallow `key` attribute on `<template v-for>` |  | :two::warning: |
| [vue/no-v-model-argument](./no-v-model-argument.md) | disallow adding an argument to `v-model` used in custom component |  | :two::warning: |
| [vue/no-v-text-v-html-on-component](./no-v-text-v-html-on-component.md) | disallow v-text / v-html on component |  | :three::two::warning: |
| [vue/no-watch-after-await](./no-watch-after-await.md) | disallow asynchronously registered `watch` |  | :three::hammer: |
| [vue/prefer-import-from-vue](./prefer-import-from-vue.md) | enforce import from 'vue' instead of import from '@vue/*' | :wrench: | :three::hammer: |
| [vue/require-component-is](./require-component-is.md) | require `v-bind:is` of `<component>` elements |  | :three::two::warning: |
| [vue/require-prop-type-constructor](./require-prop-type-constructor.md) | require prop type to be a constructor | :wrench: | :three::two::hammer: |
| [vue/require-render-return](./require-render-return.md) | enforce render function to always return value |  | :three::two::warning: |
| [vue/require-slots-as-functions](./require-slots-as-functions.md) | enforce properties of `$slots` to be used as a function |  | :three::warning: |
| [vue/require-toggle-inside-transition](./require-toggle-inside-transition.md) | require control the display of the content inside `<transition>` |  | :three::warning: |
| [vue/require-v-for-key](./require-v-for-key.md) | require `v-bind:key` with `v-for` directives |  | :three::two::warning: |
| [vue/require-valid-default-prop](./require-valid-default-prop.md) | enforce props default values to be valid |  | :three::two::hammer: |
| [vue/return-in-computed-property](./return-in-computed-property.md) | enforce that a return statement is present in computed property |  | :three::two::warning: |
| [vue/return-in-emits-validator](./return-in-emits-validator.md) | enforce that a return statement is present in emits validator |  | :three::two::warning: |
| [vue/use-v-on-exact](./use-v-on-exact.md) | enforce usage of `exact` modifier on `v-on` |  | :three::two::hammer: |
| [vue/valid-attribute-name](./valid-attribute-name.md) | require valid attribute names |  | :three::two::warning: |
| [vue/valid-define-emits](./valid-define-emits.md) | enforce valid `defineEmits` compiler macro |  | :three::two::warning: |
| [vue/valid-define-props](./valid-define-props.md) | enforce valid `defineProps` compiler macro |  | :three::two::warning: |
| [vue/valid-model-definition](./valid-model-definition.md) | require valid keys in model option |  | :two::warning: |
| [vue/valid-next-tick](./valid-next-tick.md) | enforce valid `nextTick` function calls | :wrench::bulb: | :three::two::warning: |
| [vue/valid-template-root](./valid-template-root.md) | enforce valid template root |  | :three::two::warning: |
| [vue/valid-v-bind-sync](./valid-v-bind-sync.md) | enforce valid `.sync` modifier on `v-bind` directives |  | :two::warning: |
| [vue/valid-v-bind](./valid-v-bind.md) | enforce valid `v-bind` directives |  | :three::two::warning: |
| [vue/valid-v-cloak](./valid-v-cloak.md) | enforce valid `v-cloak` directives |  | :three::two::warning: |
| [vue/valid-v-else-if](./valid-v-else-if.md) | enforce valid `v-else-if` directives |  | :three::two::warning: |
| [vue/valid-v-else](./valid-v-else.md) | enforce valid `v-else` directives |  | :three::two::warning: |
| [vue/valid-v-for](./valid-v-for.md) | enforce valid `v-for` directives |  | :three::two::warning: |
| [vue/valid-v-html](./valid-v-html.md) | enforce valid `v-html` directives |  | :three::two::warning: |
| [vue/valid-v-if](./valid-v-if.md) | enforce valid `v-if` directives |  | :three::two::warning: |
| [vue/valid-v-is](./valid-v-is.md) | enforce valid `v-is` directives |  | :three::warning: |
| [vue/valid-v-memo](./valid-v-memo.md) | enforce valid `v-memo` directives |  | :three::warning: |
| [vue/valid-v-model](./valid-v-model.md) | enforce valid `v-model` directives |  | :three::two::warning: |
| [vue/valid-v-on](./valid-v-on.md) | enforce valid `v-on` directives |  | :three::two::warning: |
| [vue/valid-v-once](./valid-v-once.md) | enforce valid `v-once` directives |  | :three::two::warning: |
| [vue/valid-v-pre](./valid-v-pre.md) | enforce valid `v-pre` directives |  | :three::two::warning: |
| [vue/valid-v-show](./valid-v-show.md) | enforce valid `v-show` directives |  | :three::two::warning: |
| [vue/valid-v-slot](./valid-v-slot.md) | enforce valid `v-slot` directives |  | :three::two::warning: |
| [vue/valid-v-text](./valid-v-text.md) | enforce valid `v-text` directives |  | :three::two::warning: |

</rules-table>

## Priority B: Strongly Recommended (Improving Readability)

- :three: Indicates that the rule is for Vue 3 and is included in `"plugin:vue/vue3-strongly-recommended"` and `"plugin:vue/vue3-recommended"` presets.
- :two: Indicates that the rule is for Vue 2 and is included in `"plugin:vue/strongly-recommended"` and `"plugin:vue/recommended"` presets.

<rules-table>

| Rule ID | Description |    |    |
|:--------|:------------|:--:|:--:|
| [vue/attribute-hyphenation](./attribute-hyphenation.md) | enforce attribute naming style on custom components in template | :wrench: | :three::two::hammer: |
| [vue/component-definition-name-casing](./component-definition-name-casing.md) | enforce specific casing for component definition name | :wrench: | :three::two::hammer: |
| [vue/first-attribute-linebreak](./first-attribute-linebreak.md) | enforce the location of first attribute | :wrench: | :three::two::lipstick: |
| [vue/html-closing-bracket-newline](./html-closing-bracket-newline.md) | require or disallow a line break before tag's closing brackets | :wrench: | :three::two::lipstick: |
| [vue/html-closing-bracket-spacing](./html-closing-bracket-spacing.md) | require or disallow a space before tag's closing brackets | :wrench: | :three::two::lipstick: |
| [vue/html-end-tags](./html-end-tags.md) | enforce end tag style | :wrench: | :three::two::hammer: |
| [vue/html-indent](./html-indent.md) | enforce consistent indentation in `<template>` | :wrench: | :three::two::lipstick: |
| [vue/html-quotes](./html-quotes.md) | enforce quotes style of HTML attributes | :wrench: | :three::two::lipstick: |
| [vue/html-self-closing](./html-self-closing.md) | enforce self-closing style | :wrench: | :three::two::lipstick: |
| [vue/max-attributes-per-line](./max-attributes-per-line.md) | enforce the maximum number of attributes per line | :wrench: | :three::two::lipstick: |
| [vue/multiline-html-element-content-newline](./multiline-html-element-content-newline.md) | require a line break before and after the contents of a multiline element | :wrench: | :three::two::lipstick: |
| [vue/mustache-interpolation-spacing](./mustache-interpolation-spacing.md) | enforce unified spacing in mustache interpolations | :wrench: | :three::two::lipstick: |
| [vue/no-multi-spaces](./no-multi-spaces.md) | disallow multiple spaces | :wrench: | :three::two::lipstick: |
| [vue/no-spaces-around-equal-signs-in-attribute](./no-spaces-around-equal-signs-in-attribute.md) | disallow spaces around equal signs in attribute | :wrench: | :three::two::lipstick: |
| [vue/no-template-shadow](./no-template-shadow.md) | disallow variable declarations from shadowing variables declared in the outer scope |  | :three::two::hammer: |
| [vue/one-component-per-file](./one-component-per-file.md) | enforce that each component should be in its own file |  | :three::two::hammer: |
| [vue/prop-name-casing](./prop-name-casing.md) | enforce specific casing for the Prop name in Vue components |  | :three::two::hammer: |
| [vue/require-default-prop](./require-default-prop.md) | require default value for props |  | :three::two::hammer: |
| [vue/require-explicit-emits](./require-explicit-emits.md) | require `emits` option with name triggered by `$emit()` | :bulb: | :three::hammer: |
| [vue/require-prop-types](./require-prop-types.md) | require type definitions in props |  | :three::two::hammer: |
| [vue/singleline-html-element-content-newline](./singleline-html-element-content-newline.md) | require a line break before and after the contents of a singleline element | :wrench: | :three::two::lipstick: |
| [vue/v-bind-style](./v-bind-style.md) | enforce `v-bind` directive style | :wrench: | :three::two::hammer: |
| [vue/v-on-event-hyphenation](./v-on-event-hyphenation.md) | enforce v-on event naming style on custom components in template | :wrench: | :three::hammer: |
| [vue/v-on-style](./v-on-style.md) | enforce `v-on` directive style | :wrench: | :three::two::hammer: |
| [vue/v-slot-style](./v-slot-style.md) | enforce `v-slot` directive style | :wrench: | :three::two::hammer: |

</rules-table>

## Priority C: Recommended (Potentially Dangerous Patterns)

- :three: Indicates that the rule is for Vue 3 and is included in `"plugin:vue/vue3-recommended"` preset.
- :two: Indicates that the rule is for Vue 2 and is included in `"plugin:vue/recommended"` preset.

<rules-table>

| Rule ID | Description |    |    |
|:--------|:------------|:--:|:--:|
| [vue/attributes-order](./attributes-order.md) | enforce order of attributes | :wrench: | :three::two::hammer: |
| [vue/component-tags-order](./component-tags-order.md) | enforce order of component top-level elements | :wrench: | :three::two::hammer: |
| [vue/no-lone-template](./no-lone-template.md) | disallow unnecessary `<template>` |  | :three::two::warning: |
| [vue/no-multiple-slot-args](./no-multiple-slot-args.md) | disallow to pass multiple arguments to scoped slots |  | :three::two::warning: |
| [vue/no-v-html](./no-v-html.md) | disallow use of v-html to prevent XSS attack |  | :three::two::hammer: |
| [vue/order-in-components](./order-in-components.md) | enforce order of properties in components | :wrench: | :three::two::hammer: |
| [vue/this-in-template](./this-in-template.md) | disallow usage of `this` in template | :wrench: | :three::two::hammer: |

</rules-table>

## Uncategorized

No preset enables the rules in this category.
Please enable each rule if you want.

For example:

```json
{
  "rules": {
    "vue/block-lang": "error"
  }
}
```

<rules-table>

| Rule ID | Description |    |    |
|:--------|:------------|:--:|:--:|
| [vue/block-lang](./block-lang.md) | disallow use other than available `lang` |  | :hammer: |
| [vue/block-tag-newline](./block-tag-newline.md) | enforce line breaks after opening and before closing block-level tags | :wrench: | :lipstick: |
| [vue/component-api-style](./component-api-style.md) | enforce component API style |  | :hammer: |
| [vue/component-name-in-template-casing](./component-name-in-template-casing.md) | enforce specific casing for the component naming style in template | :wrench: | :hammer: |
| [vue/component-options-name-casing](./component-options-name-casing.md) | enforce the casing of component name in `components` options | :wrench::bulb: | :hammer: |
| [vue/custom-event-name-casing](./custom-event-name-casing.md) | enforce specific casing for custom event name |  | :hammer: |
| [vue/define-macros-order](./define-macros-order.md) | enforce order of `defineEmits` and `defineProps` compiler macros | :wrench: | :lipstick: |
| [vue/html-button-has-type](./html-button-has-type.md) | disallow usage of button without an explicit type attribute |  | :hammer: |
| [vue/html-comment-content-newline](./html-comment-content-newline.md) | enforce unified line brake in HTML comments | :wrench: | :lipstick: |
| [vue/html-comment-content-spacing](./html-comment-content-spacing.md) | enforce unified spacing in HTML comments | :wrench: | :lipstick: |
| [vue/html-comment-indent](./html-comment-indent.md) | enforce consistent indentation in HTML comments | :wrench: | :lipstick: |
| [vue/match-component-file-name](./match-component-file-name.md) | require component name property to match its file name | :bulb: | :hammer: |
| [vue/match-component-import-name](./match-component-import-name.md) | require the registered component name to match the imported component name |  | :warning: |
| [vue/new-line-between-multi-line-property](./new-line-between-multi-line-property.md) | enforce new lines between multi-line properties in Vue components | :wrench: | :lipstick: |
| [vue/next-tick-style](./next-tick-style.md) | enforce Promise or callback style in `nextTick` | :wrench: | :hammer: |
| [vue/no-bare-strings-in-template](./no-bare-strings-in-template.md) | disallow the use of bare strings in `<template>` |  | :hammer: |
| [vue/no-boolean-default](./no-boolean-default.md) | disallow boolean defaults | :wrench: | :hammer: |
| [vue/no-duplicate-attr-inheritance](./no-duplicate-attr-inheritance.md) | enforce `inheritAttrs` to be set to `false` when using `v-bind="$attrs"` |  | :hammer: |
| [vue/no-empty-component-block](./no-empty-component-block.md) | disallow the `<template>` `<script>` `<style>` block to be empty |  | :hammer: |
| [vue/no-multiple-objects-in-class](./no-multiple-objects-in-class.md) | disallow to pass multiple objects into array to class |  | :hammer: |
| [vue/no-potential-component-option-typo](./no-potential-component-option-typo.md) | disallow a potential typo in your component property | :bulb: | :hammer: |
| [vue/no-restricted-block](./no-restricted-block.md) | disallow specific block |  | :hammer: |
| [vue/no-restricted-call-after-await](./no-restricted-call-after-await.md) | disallow asynchronously called restricted methods |  | :hammer: |
| [vue/no-restricted-class](./no-restricted-class.md) | disallow specific classes in Vue components |  | :warning: |
| [vue/no-restricted-component-options](./no-restricted-component-options.md) | disallow specific component option |  | :hammer: |
| [vue/no-restricted-custom-event](./no-restricted-custom-event.md) | disallow specific custom event | :bulb: | :hammer: |
| [vue/no-restricted-html-elements](./no-restricted-html-elements.md) | disallow specific HTML elements |  | :hammer: |
| [vue/no-restricted-props](./no-restricted-props.md) | disallow specific props | :bulb: | :hammer: |
| [vue/no-restricted-static-attribute](./no-restricted-static-attribute.md) | disallow specific attribute |  | :hammer: |
| [vue/no-restricted-v-bind](./no-restricted-v-bind.md) | disallow specific argument in `v-bind` |  | :hammer: |
| [vue/no-static-inline-styles](./no-static-inline-styles.md) | disallow static inline `style` attributes |  | :hammer: |
| [vue/no-template-target-blank](./no-template-target-blank.md) | disallow target="_blank" attribute without rel="noopener noreferrer" |  | :warning: |
| [vue/no-this-in-before-route-enter](./no-this-in-before-route-enter.md) | disallow `this` usage in a `beforeRouteEnter` method |  | :warning: |
| [vue/no-undef-components](./no-undef-components.md) | disallow use of undefined components in `<template>` |  | :hammer: |
| [vue/no-undef-properties](./no-undef-properties.md) | disallow undefined properties |  | :hammer: |
| [vue/no-unsupported-features](./no-unsupported-features.md) | disallow unsupported Vue.js syntax on the specified version | :wrench: | :hammer: |
| [vue/no-unused-properties](./no-unused-properties.md) | disallow unused properties |  | :hammer: |
| [vue/no-unused-refs](./no-unused-refs.md) | disallow unused refs |  | :hammer: |
| [vue/no-useless-mustaches](./no-useless-mustaches.md) | disallow unnecessary mustache interpolations | :wrench: | :hammer: |
| [vue/no-useless-v-bind](./no-useless-v-bind.md) | disallow unnecessary `v-bind` directives | :wrench: | :hammer: |
| [vue/no-v-text](./no-v-text.md) | disallow use of v-text |  | :hammer: |
| [vue/padding-line-between-blocks](./padding-line-between-blocks.md) | require or disallow padding lines between blocks | :wrench: | :lipstick: |
| [vue/prefer-prop-type-boolean-first](./prefer-prop-type-boolean-first.md) | enforce `Boolean` comes first in component prop types | :bulb: | :warning: |
| [vue/prefer-separate-static-class](./prefer-separate-static-class.md) | require static class names in template to be in a separate `class` attribute | :wrench: | :hammer: |
| [vue/prefer-true-attribute-shorthand](./prefer-true-attribute-shorthand.md) | require shorthand form attribute when `v-bind` value is `true` | :bulb: | :hammer: |
| [vue/require-direct-export](./require-direct-export.md) | require the component to be directly exported |  | :hammer: |
| [vue/require-emit-validator](./require-emit-validator.md) | require type definitions in emits | :bulb: | :hammer: |
| [vue/require-expose](./require-expose.md) | require declare public properties using `expose` | :bulb: | :hammer: |
| [vue/require-name-property](./require-name-property.md) | require a name property in Vue components |  | :hammer: |
| [vue/script-indent](./script-indent.md) | enforce consistent indentation in `<script>` | :wrench: | :lipstick: |
| [vue/sort-keys](./sort-keys.md) | enforce sort-keys in a manner that is compatible with order-in-components |  | :hammer: |
| [vue/static-class-names-order](./static-class-names-order.md) | enforce static class names order | :wrench: | :hammer: |
| [vue/v-for-delimiter-style](./v-for-delimiter-style.md) | enforce `v-for` directive's delimiter style | :wrench: | :lipstick: |
| [vue/v-on-function-call](./v-on-function-call.md) | enforce or forbid parentheses after method calls without arguments in `v-on` directives | :wrench: | :hammer: |

</rules-table>

### Extension Rules

The following rules extend the rules provided by ESLint itself and apply them to the expressions in the `<template>`.

<rules-table>

| Rule ID | Description |    |    |
|:--------|:------------|:--:|:--:|
| [vue/array-bracket-newline](./array-bracket-newline.md) | enforce linebreaks after opening and before closing array brackets in `<template>` | :wrench: | :lipstick: |
| [vue/array-bracket-spacing](./array-bracket-spacing.md) | enforce consistent spacing inside array brackets in `<template>` | :wrench: | :lipstick: |
| [vue/arrow-spacing](./arrow-spacing.md) | enforce consistent spacing before and after the arrow in arrow functions in `<template>` | :wrench: | :lipstick: |
| [vue/block-spacing](./block-spacing.md) | disallow or enforce spaces inside of blocks after opening block and before closing block in `<template>` | :wrench: | :lipstick: |
| [vue/brace-style](./brace-style.md) | enforce consistent brace style for blocks in `<template>` | :wrench: | :lipstick: |
| [vue/camelcase](./camelcase.md) | enforce camelcase naming convention in `<template>` |  | :hammer: |
| [vue/comma-dangle](./comma-dangle.md) | require or disallow trailing commas in `<template>` | :wrench: | :lipstick: |
| [vue/comma-spacing](./comma-spacing.md) | enforce consistent spacing before and after commas in `<template>` | :wrench: | :lipstick: |
| [vue/comma-style](./comma-style.md) | enforce consistent comma style in `<template>` | :wrench: | :lipstick: |
| [vue/dot-location](./dot-location.md) | enforce consistent newlines before and after dots in `<template>` | :wrench: | :lipstick: |
| [vue/dot-notation](./dot-notation.md) | enforce dot notation whenever possible in `<template>` | :wrench: | :hammer: |
| [vue/eqeqeq](./eqeqeq.md) | require the use of `===` and `!==` in `<template>` | :wrench: | :hammer: |
| [vue/func-call-spacing](./func-call-spacing.md) | require or disallow spacing between function identifiers and their invocations in `<template>` | :wrench: | :lipstick: |
| [vue/key-spacing](./key-spacing.md) | enforce consistent spacing between keys and values in object literal properties in `<template>` | :wrench: | :lipstick: |
| [vue/keyword-spacing](./keyword-spacing.md) | enforce consistent spacing before and after keywords in `<template>` | :wrench: | :lipstick: |
| [vue/max-len](./max-len.md) | enforce a maximum line length in `.vue` files |  | :lipstick: |
| [vue/no-constant-condition](./no-constant-condition.md) | disallow constant expressions in conditions in `<template>` |  | :warning: |
| [vue/no-empty-pattern](./no-empty-pattern.md) | disallow empty destructuring patterns in `<template>` |  | :warning: |
| [vue/no-extra-parens](./no-extra-parens.md) | disallow unnecessary parentheses in `<template>` | :wrench: | :lipstick: |
| [vue/no-irregular-whitespace](./no-irregular-whitespace.md) | disallow irregular whitespace in `.vue` files |  | :warning: |
| [vue/no-loss-of-precision](./no-loss-of-precision.md) | disallow literal numbers that lose precision in `<template>` |  | :warning: |
| [vue/no-restricted-syntax](./no-restricted-syntax.md) | disallow specified syntax in `<template>` |  | :hammer: |
| [vue/no-sparse-arrays](./no-sparse-arrays.md) | disallow sparse arrays in `<template>` |  | :warning: |
| [vue/no-useless-concat](./no-useless-concat.md) | disallow unnecessary concatenation of literals or template literals in `<template>` |  | :hammer: |
| [vue/object-curly-newline](./object-curly-newline.md) | enforce consistent line breaks after opening and before closing braces in `<template>` | :wrench: | :lipstick: |
| [vue/object-curly-spacing](./object-curly-spacing.md) | enforce consistent spacing inside braces in `<template>` | :wrench: | :lipstick: |
| [vue/object-property-newline](./object-property-newline.md) | enforce placing object properties on separate lines in `<template>` | :wrench: | :lipstick: |
| [vue/object-shorthand](./object-shorthand.md) | require or disallow method and property shorthand syntax for object literals in `<template>` | :wrench: | :hammer: |
| [vue/operator-linebreak](./operator-linebreak.md) | enforce consistent linebreak style for operators in `<template>` | :wrench: | :lipstick: |
| [vue/prefer-template](./prefer-template.md) | require template literals instead of string concatenation in `<template>` | :wrench: | :hammer: |
| [vue/quote-props](./quote-props.md) | require quotes around object literal property names in `<template>` | :wrench: | :hammer: |
| [vue/space-in-parens](./space-in-parens.md) | enforce consistent spacing inside parentheses in `<template>` | :wrench: | :lipstick: |
| [vue/space-infix-ops](./space-infix-ops.md) | require spacing around infix operators in `<template>` | :wrench: | :lipstick: |
| [vue/space-unary-ops](./space-unary-ops.md) | enforce consistent spacing before or after unary operators in `<template>` | :wrench: | :lipstick: |
| [vue/template-curly-spacing](./template-curly-spacing.md) | require or disallow spacing around embedded expressions of template strings in `<template>` | :wrench: | :lipstick: |

</rules-table>

## Deprecated

- :warning: We're going to remove deprecated rules in the next major release. Please migrate to successor/new rules.
- :innocent: We don't fix bugs which are in deprecated rules since we don't have enough resources.

| Rule ID | Replaced by |
|:--------|:------------|
| [vue/no-invalid-model-keys](./no-invalid-model-keys.md) | [vue/valid-model-definition](./valid-model-definition.md) |
| [vue/script-setup-uses-vars](./script-setup-uses-vars.md) | (no replacement) |

## Removed

- :no_entry_sign: These rules have been removed in a previous major release, after they have been deprecated for a while.

| Rule ID | Replaced by | Deprecated in version  | Removed in version |
|:--------|:------------|:-----------------------|:-------------------|
| [vue/experimental-script-setup-vars](./experimental-script-setup-vars.md) | (no replacement) | [v7.13.0](https://github.com/vuejs/eslint-plugin-vue/releases/tag/v7.13.0) | [v9.0.0](https://github.com/vuejs/eslint-plugin-vue/releases/tag/v9.0.0) |
| [vue/name-property-casing](./name-property-casing.md) | [vue/component-definition-name-casing](./component-definition-name-casing.md) | [v7.0.0](https://github.com/vuejs/eslint-plugin-vue/releases/tag/v7.0.0) | [v9.0.0](https://github.com/vuejs/eslint-plugin-vue/releases/tag/v9.0.0) |
| [vue/no-confusing-v-for-v-if](./no-confusing-v-for-v-if.md) | [vue/no-use-v-if-with-v-for](./no-use-v-if-with-v-for.md) | [v5.0.0](https://github.com/vuejs/eslint-plugin-vue/releases/tag/v5.0.0) | [v9.0.0](https://github.com/vuejs/eslint-plugin-vue/releases/tag/v9.0.0) |
| [vue/no-unregistered-components](./no-unregistered-components.md) | [vue/no-undef-components](./no-undef-components.md) | [v8.4.0](https://github.com/vuejs/eslint-plugin-vue/releases/tag/v8.4.0) | [v9.0.0](https://github.com/vuejs/eslint-plugin-vue/releases/tag/v9.0.0) |
