// import { fileURLToPath, URL } from 'node:url'
import { join } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), Inspect()],
  server:{
    host: true
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: join(__dirname, './src')
      },
      {
        find: /^@learn_vue3\/(.+)$/,
        replacement: join(__dirname, '../', '$1', 'src')
      }
    ]
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})
