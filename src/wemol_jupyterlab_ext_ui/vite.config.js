import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/main.js', // 你的入口文件
      name: 'wemol_jupyterlab_ext_ui', // 你的库的名称
      fileName: 'wemol_jupyterlab_ext_ui', // 输出文件的名称
      formats: ['umd'], // 输出格式
    },
    rollupOptions: {
      // 确保外部化处理 Vue（使其不被打包进最终的 js 文件中）
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下提供全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://',
        changeOrigin: true,
        followRedirects: true,
      },
    },
  }
})
