import astro from 'eslint-plugin-astro'
import tseslint from 'typescript-eslint'
import baseConfig from '../../eslint.config.js'

export default [
  ...baseConfig,
  ...astro.configs['flat/recommended'],
  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.astro'],
      },
    },
  },
  {
    files: ['**/*.astro/*.ts', '*.astro/*.ts'],
    rules: {
      'prettier/prettier': 'off',
    },
  },
  {
    ignores: ['.astro/', 'dist/'],
  },
]
