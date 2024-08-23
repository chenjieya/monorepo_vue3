// packages/shared/vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    // 产物输出目录，默认值就是 dist。我们使用默认值，注释掉此字段。
    // outDir: 'dist',

    // 参考：https://cn.vitejs.dev/config/build-options.html#build-lib
    lib: {
      // 构建的入口文件
      entry: './src/index.ts',
      // 当产物为 umd、iife 格式时，该模块暴露的全局变量名称
      name: 'LearnVue3Components',
      // 产物文件名称
      fileName: 'learn_vue3-components'
    },
    // 为了方便学习，查看构建产物，将此置为 false，不要混淆产物代码
    minify: false,

    // 参考：https://cn.vitejs.dev/config/build-options.html#build-rollupoptions
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [/@learn_vue3.*/, 'vue']
    }
  }
})
