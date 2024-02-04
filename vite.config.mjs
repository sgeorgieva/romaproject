import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  root: 'src',
  outDir: './dist',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './src/index.html'),
        news: resolve(__dirname, './src/news.html')
      }
    },
  },
  server: {
    host: "127.0.0.1",
    port: '8080'
  }
})