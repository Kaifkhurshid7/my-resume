/**
 * @file vite.config.js
 * @description Vite build tool configuration.
 *
 * Optimized for a React SPA with:
 * - Fast HMR via @vitejs/plugin-react
 * - Clean build output targeting modern browsers
 * - Path alias for cleaner imports
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2020',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
});
