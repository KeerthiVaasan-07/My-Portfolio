import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('three')) {
            return 'three-vendor'
          }
          if (id.includes('framer-motion') || id.includes('lenis')) {
            return 'motion-vendor'
          }
        },
      },
    },
  },
})
