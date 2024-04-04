import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/user/api': 'https://login-auth-server-i8hl.onrender.com',
    },
  },
  plugins: [react()],
})
