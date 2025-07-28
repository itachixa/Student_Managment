import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt', // important pour montrer une notification d'installation
      includeAssets: ['favicon.svg', 'favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'SRM App',
        short_name: 'SRM',
        description: '',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'image.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'image.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
