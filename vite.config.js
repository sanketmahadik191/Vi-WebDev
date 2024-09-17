import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const port = process.env.VITE_APP_PORT ? parseInt(process.env.VITE_APP_PORT, 10) : 3000;
const backendLink = process.env.VITE_APP_BACKEND_LINK || 'http://localhost:5000';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port,
    proxy: {
      '/api': {
        target: backendLink,
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
})
