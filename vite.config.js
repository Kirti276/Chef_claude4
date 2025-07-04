import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base: '/Chef_claude2/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  
});
