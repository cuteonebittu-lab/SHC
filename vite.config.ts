import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Explicitly set base to root for consistent asset loading
  plugins: [react()],
  server: {
    host: true,
    open: true,
  },
  publicDir: 'public',
})
