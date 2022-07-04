module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  // 全局自定义规则
  rules: {
    // 关闭 Require component names to be always multi-word
    'vue/multi-word-component-names': 'off'
  }
  // 针对某些文件的自定义规则
  // overrides: [
  //   {
  //     files: ['src/api/**/*.ts'],
  //     rules: {
  //       camelcase: 'off'
  //     }
  //   }
  // ]
}
