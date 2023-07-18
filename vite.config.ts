import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.indexOf('react') !== -1 || id.indexOf('scheduler') !== -1) {
            return 'react';
          } else if (id.indexOf('html-to-image') !== -1) {
            return 'html-to-image';
          } else {
            return 'vendor';
          }
        },
      },
    },
  },
  plugins: [react(), splitVendorChunkPlugin()],
});
