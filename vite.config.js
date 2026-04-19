import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
 
  },
  test: {
    environment: 'jsdom',
    globals: true,
  }
})
export default {
   base: '/https://github.com/AleRoa2025/login-form-app/', 
}
