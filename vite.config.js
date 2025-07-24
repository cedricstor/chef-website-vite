import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/chef-website-vite/', // OR '/matric64.online/' if custom domain
})