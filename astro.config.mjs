// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import AstroPWA from '@vite-pwa/astro'

export default defineConfig({
  integrations: [AstroPWA({
    registerType: 'autoUpdate',
    manifest: {
      name: 'Mein React template',
      short_name: 'ReactTemplate',
      description: 'A simple React template application.',
      theme_color: '#ffffff', // Light theme primary color
      background_color: '#f3f4f6', // Light theme secondary color
      display: 'standalone',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: 'icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ],
    },
    workbox: {
      globPatterns: [
        '**/*.{html,css,js,ico,png,svg,avif}',
      ],
    },
    devOptions: {
      enabled: true 
    },
    
  })],
  vite: {
    plugins: [tailwindcss()]
  }
});