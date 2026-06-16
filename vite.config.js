import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Add these for stability and performance
  server: {
    port: 5173,
    open: true, // Opens browser automatically
    hmr: {
      overlay: true, // Shows errors in a nice overlay
    },
  },
  build: {
    sourcemap: true, // Essential for debugging production errors
    minify: 'terser', // More robust minification
    rollupOptions: {
      output: {
        manualChunks: {
          // Splits vendor libraries to keep your main code small
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});
