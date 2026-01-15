import { defineConfig } from 'vite'

export default defineConfig({
  // Use relative base path so it works on any GitHub Pages subdirectory (e.g. /repo-name/)
  base: './', 
  build: {
    outDir: 'dist',
  }
})
