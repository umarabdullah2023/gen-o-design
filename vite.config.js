import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
// import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  server: {
    watch: {
      usePolling: true,
    },
    strictPort: true,
    host: true,
    port: 3000,
  },
  optimizeDeps: {
    include: ['react'],
  },
});
