import { defineConfig } from 'vite';

// base './' agar hasil build (dist/) bisa dibuka via Laragon
// http://localhost/TR4_scss/dist/index.html tanpa npm run dev.
// Struktur src / SCSS tidak diubah.
export default defineConfig({
  base: './',
});
