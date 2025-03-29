import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 7778
  },
  plugins: [react()],
  base: "https://tronheinz.github.io/"
})
