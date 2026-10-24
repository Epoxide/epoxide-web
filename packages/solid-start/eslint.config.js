import solid from 'eslint-plugin-solid/configs/typescript'
import baseConfig from '../../eslint.config.js'

export default [
  ...baseConfig,
  {
    files: ['**/*.{ts,tsx}'],
    ...solid,
  },
  {
    ignores: ['.solid/', '.vinxi/', '.output/'],
  },
]
