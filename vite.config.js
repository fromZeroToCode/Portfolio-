import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      strict: true,
      allow: ['.'] // Only allow serving files inside the project root
    }
  },
  optimizeDeps: {
    entries: ['index.html'] // Only scan from index.html, not the whole hard drive
  }
})
