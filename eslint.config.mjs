import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  typescript: true,
  ignores: [
    'packages/clerk/openapi/*.yml',
    'packages/clerk/src/openapi.ts',
  ],
  rules: {
    'pnpm/json-enforce-catalog': 'off',
    'pnpm/yaml-enforce-settings': 'off',
  },
})
