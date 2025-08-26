import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(),tailwindcss(),],
   base: '/', 
   server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true, 
    hmr: {
      clientPort: 5173,
      protocol: 'ws',
      host: 'localhost'
    }
  },
  preview: {
    port: 5173,
    strictPort: true
  }
  
})




