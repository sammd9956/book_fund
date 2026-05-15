// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'  // ← ADD THIS

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {  // ← ADD THIS SECTION
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})