import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier/flat'
import prettierPlugin from 'eslint-plugin-prettier'
import promisePlugin from 'eslint-plugin-promise'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: [
      '**/test-results/',
      '**/playwright-report/',
      '**/playwright-json/',
    ],
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.stylistic,
  promisePlugin.configs['flat/recommended'],
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      eqeqeq: 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prettier/prettier': 'warn',
      'prefer-template': 'error',
      'no-useless-concat': 'error',
      quotes: ['error', 'single', { avoidEscape: true }],
      'promise/prefer-await-to-callbacks': 'error',
      'promise/prefer-await-to-then': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
)
