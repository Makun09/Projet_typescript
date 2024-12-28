import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// vite.config.ts

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Résolution du répertoire 'src'
    },
  },
});
