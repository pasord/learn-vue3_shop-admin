import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'

// note: 在ts 模块中 加载node核心模块，需要安装 node 的类型补充模块 @types/node
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    eslint()
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  css: {
    // 为CSS预处理器注入全局: 执行语句
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";' // 是一条sass语句
      }
    }
  }
})
