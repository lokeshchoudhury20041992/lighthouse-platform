import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages project sites are served from /<repo-name>/, so built asset
  // URLs need a matching prefix. The deploy workflow sets VITE_BASE from the
  // repo name; local dev and preview keep the root default.
  base: process.env.VITE_BASE || '/',
})
