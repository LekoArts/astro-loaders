import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  typescript: true,
  rules: {
    'pnpm/json-enforce-catalog': 'off',
  },
})
