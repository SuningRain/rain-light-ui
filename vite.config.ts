import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
import dts from 'vite-plugin-dts'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'production',
  build: {
    sourcemap: true,
    rollupOptions: {
      // 忽略打包vue文件
      external: ['vue'],
      output: {
        dir: 'dist',
        globals: { // 给vue包设置一个全局别名
          vue: 'Vue'
        }
      }
    },
    lib: { // 库模式打包
      entry: path.resolve(__dirname, './packages/index.ts'),
      name: 'RainLightUi', // 导出名
      fileName: 'rain-light-ui', // 文件名
      formats: ['es', 'umd'] // 默认也是这两种
    }
  },
  resolve: {
    // 设置路径别名，设置完后需要在tsconfig.json中配置
    alias: {
      '@/src': path.resolve(__dirname, './src'),
      '@/packages': path.resolve(__dirname, './packages')
    }
  },
  plugins: [
    vue(),
    // 用于在vue3 setup中定义组件name
    DefineOptions(),
    // 生成声明文件
    dts({
      outputDir: 'dist',
      staticImport: true,
      insertTypesEntry: true
    })
  ]
})
