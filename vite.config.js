import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function copyIndexHtmlPlugin() {
  return {
    name: 'copy-index-html',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const srcFile = path.join(distDir, 'index-react.html');
      const destFile = path.join(distDir, 'index.html');
      if (fs.existsSync(srcFile)) {
        fs.copyFileSync(srcFile, destFile);
        console.log('✓ Successfully generated dist/index.html for Vercel deployment');
      }
    }
  };
}

export default defineConfig({
  base: '/',
  plugins: [react(), copyIndexHtmlPlugin()],
  server: {
    port: 3000,
    open: false
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      input: 'index-react.html'
    }
  }
});

