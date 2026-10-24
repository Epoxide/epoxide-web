import nextVitals from 'eslint-config-next/core-web-vitals'
import tseslint from 'typescript-eslint'
import baseConfig from '../../eslint.config.js'

const eslintConfig = [
  ...baseConfig,
  ...nextVitals,
  {
    languageOptions: {
      parser: tseslint.parser,
    },
  },
  {
    ignores: ['.next/', 'next-env.d.ts'],
  },
]

export default eslintConfig
