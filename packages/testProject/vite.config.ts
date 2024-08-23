// import { fileURLToPath, URL } from 'node:url'
import { join } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: [
      {
        find: /^@learn_vue3\/(.+)$/,
        replacement: join(__dirname, '../', '$1', 'src')
      }
    ]
  }
})
