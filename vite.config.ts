import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { createHtmlPlugin as html } from 'vite-plugin-html';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => ({
  plugins: [
    react(),
    html({
      entry: 'src/main.tsx',
      template: 'src/index.html',
      minify: true,
    }),
    tsconfigPaths(),
    svgr(),
  ],
}));
