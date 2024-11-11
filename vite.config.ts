import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: false,

      manifest: {
        name: "Medallo Tour",
        short_name: "M-Tour",
        description:
          "Descubre lo mágico de Medellín a través de nuestra aplicación!",
        theme_color: "#000000", // Cambié a un color hexadecimal válido
        background_color: "#000000", // Color de fondo para pantallas de carga
        lang: "es",
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,jpg,jpeg,ico}"], // Incluir todos los formatos comunes
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 días
              },
            },
          },
          {
            urlPattern: ({ request }) =>
              ["style", "script", "worker"].includes(request.destination),
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "assets-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 días
              },
            },
          },
        ],
      },

      devOptions: {
        enabled: true, // Activa el PWA en modo de desarrollo si quieres probar
        navigateFallback: "index.html",
        suppressWarnings: true,
      },
    }),
  ],
});
