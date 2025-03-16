import { defineConfig } from 'tsup'
import { name } from './package.json'

export default defineConfig((options) => {
  return {
    name: name.split('@lekoarts/')[1],
    entry: ['src/index.ts'],
    dts: true,
    sourcemap: !!options.watch,
    format: 'esm',
    clean: true,
  }
})
