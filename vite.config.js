import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
        learnMore: './learn-more.html',
        pricing: './pricing.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})

