import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // для GitHub Pages: https://mcmaxim.github.io/web_1sem_project/
  base: mode === 'production' ? '/web_1sem_project/' : '/',
}));
