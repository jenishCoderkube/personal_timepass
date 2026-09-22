import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function copyStaticDirs() {
  return {
    name: 'copy-static-dirs',
    closeBundle() {
      const outDir = path.resolve(__dirname, 'dist');
      ['assets', 'css', 'js', 'data'].forEach((dir) => {
        const srcDir = path.resolve(__dirname, dir);
        const destDir = path.resolve(outDir, dir);
        copyDirSync(srcDir, destDir);
      });
      const fav = path.resolve(__dirname, 'favicon.ico');
      if (fs.existsSync(fav)) {
        fs.copyFileSync(fav, path.resolve(outDir, 'favicon.ico'));
      }
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyStaticDirs()],
  server: {
    port: 3000,
    open: true
  }
});