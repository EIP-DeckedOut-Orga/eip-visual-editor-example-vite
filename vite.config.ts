import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['fc11abc4-b004-4c23-89cb-14c2bbd3cf6a-00-1c65k0mdttmn3.janeway.replit.dev'],
    host: '0.0.0.0',
    port: 5000,
    strictPort: true,
    hmr: {
      clientPort: 5000
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@deckedout/visual-editor']
  }
})
