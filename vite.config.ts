import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('react') || id.includes('scheduler')) {
            return 'react';
          } else if (id.includes('html-to-image')) {
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
