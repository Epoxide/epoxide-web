import prettierConfig from 'eslint-config-prettier/flat'
import vue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import baseConfig from '../../eslint.config.js'

export default [
  ...baseConfig,
  ...vue.configs['flat/recommended'],
  prettierConfig,
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    ignores: ['.output/', '.data/', '.nuxt/', '.nitro/', '.cache/', 'dist/'],
  },
]
