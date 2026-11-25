import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/**
 * Dedicated Vite config for generating a zero-dependency IIFE bundle
 * that `scripts/build-singlefile.mjs` inlines into a standalone, double-clickable `.html` file
 * working directly over `file://` in Chrome, Safari, Edge, and Firefox.
 */
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    outDir: 'dist-single-tmp',
    emptyOutDir: true,
    cssCodeSplit: false,
    assetsInlineLimit: 100_000_000,
    sourcemap: false,
    rollupOptions: {
      output: {
        format: 'iife',
        name: 'KiwiPathApp',
        inlineDynamicImports: true,
        entryFileNames: 'bundle.js',
        assetFileNames: 'bundle.[ext]',
      },
    },
  },
});
