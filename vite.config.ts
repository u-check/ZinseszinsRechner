import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react'; // Wichtig: füge auch den React-Plugin-Import hinzu

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      // Füge hier die 'base' Eigenschaft hinzu
      base: '/ZinseszinsRechner/',

      // Füge hier das React Plugin hinzu, falls es fehlt
      plugins: [react()], 

      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
