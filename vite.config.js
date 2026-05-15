import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  base: '/allinone/',
  plugins: [
    react(),
    federation({
      name: 'all_in_one',
      remotes: {
        // weather: 'http://localhost:5001/allinone/weather/dist/assets/remoteEntry.js', // for development
        weather: '/allinone/weather/assets/remoteEntry.js', // for production
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
        },
        'react-dom': {
          singleton: true,
          eager: true,
        }
      },
    }),
    tailwindcss()
  ],
  build: {
    target: 'esnext',
    modulePreload: false,
  },
  server: {
    port: 5000,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})
