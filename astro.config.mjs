// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import AstroPWA from '@vite-pwa/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), AstroPWA({
 registerType: 'autoUpdate',
        outDir: 'dist', // Das Verzeichnis, in das Astro baut
        manifest: {
          name: 'Offline Bilder App',
          short_name: 'OfflineBilder',
          theme_color: '#262626', // Dein Hintergrundfarbe
          icons: [
            // Hier definierst du Icons für die PWA
            // {
            //   src: 'pwa-192x192.png',
            //   sizes: '192x192',
            //   type: 'image/png'
            // },
            // {
            //   src: 'pwa-512x512.png',
            //   sizes: '512x512',
            //   type: 'image/png'
            // }
          ],
        },
        workbox: {
          // Hier konfigurierst du das Caching
          globDirectory: 'dist', // Das Verzeichnis, das durchsucht wird
          globPatterns: [
            '**/*.{html,css,js,ico,png,svg,avif}', // Cache HTML, CSS, JS und alle relevanten Bildformate
          ],
          // Füge weitere Caching-Strategien hinzu, falls nötig
        },
        devOptions: {
            enabled: true // PWA auch im Entwicklungsmodus testen
        }
      })],
  vite: {
    plugins: [tailwindcss()]
  }
});