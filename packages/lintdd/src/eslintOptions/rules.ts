export const reactRules = {
  'react/display-name': 0,
  'react/jsx-props-no-spreading': 0,
  'react/state-in-constructor': 0,
  'react/static-property-placement': 0,
  // 对 props, state 和 contenxt 强制使用解构语法，不灵活，会存在 props 内 state 命名一致的情况
  'react/destructuring-assignment': ['warn', 'never'],
  'react/jsx-filename-extension': 'off',
  'react/no-array-index-key': 'warn',
  'react-hooks/rules-of-hooks': 'error',
  // 防止 useEffect 监听变量，导致重复渲染，见 https://stackoverflow.com/questions/58866796/understanding-the-react-hooks-exhaustive-deps-lint-rule
  'react-hooks/exhaustive-deps': 'warn',
  'react/require-default-props': 0,
  'react/jsx-fragments': 0,
  'react/jsx-wrap-multilines': 0,
  'react/prop-types': 0,
  'react/forbid-prop-types': 0,
  'react/sort-comp': 0,
  'react/react-in-jsx-scope': 0,
  'react/jsx-one-expression-per-line': 0,
  'react/self-closing-comp': 1,
  'react/jsx-key': 1,
}

export const vue2Rules = {
  // data 必须为函数
  'vue/no-shared-component-data': 'error',
  // v-for 必须加 key
  'vue/require-v-for-key': 'error',
  // 对JS规约 no-unused-vars 的补充，防止变量被错误地标记为未使用
  'vue/jsx-uses-vars': 'error',
  // 计算属性禁止包含异步方法
  'vue/no-async-in-computed-properties': 'error',
  // 禁止在计算属性内修改 data
  'vue/no-side-effects-in-computed-properties': 'error',
  'vue/no-unused-components': 'warn',
  'vue/no-use-v-if-with-v-for': 'warn',
  'vue/no-unused-vars': 'off',
}

export const eslintRules = {
  semi: ['error', 'never'],
  strict: ['error', 'never'],
  'generator-star-spacing': 0,
  'function-paren-newline': 0,
  'sort-imports': 0,
  'class-methods-use-this': 0,
  'no-confusing-arrow': 0,
  'linebreak-style': 0,
}

// Conflict with prettier
export const prettierConflictRules = {
  'arrow-body-style': 0,
  'arrow-parens': 0,
  'object-curly-newline': 0,
  'implicit-arrow-linebreak': 0,
  'operator-linebreak': 0,
  'no-param-reassign': 2,
  'space-before-function-paren': 0,
}