import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin as html } from 'vite-plugin-html'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

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
