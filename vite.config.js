import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  preview: {
    host: '0.0.0.0',
    port: 10000,
    allowedHosts: ['mlb-frontend-3.onrender.com']
  }
})
