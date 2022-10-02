import { defineConfig } from 'vite'
import ResolveAlias from 'vite-plugin-easy-resolve-alias'
import Solid from 'vite-plugin-solid'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    // https://github.com/mys1024/vite-plugin-easy-resolve-alias
    ResolveAlias({ '~/': 'src/' }),
    // https://github.com/solidjs/vite-plugin-solid
    Solid(),
    // https://github.com/unocss/unocss
    Unocss(),
  ],
  // https://github.com/vitest-dev/vitest
  test: {
    include: ['test/**/*.test.ts'],
  },
})
