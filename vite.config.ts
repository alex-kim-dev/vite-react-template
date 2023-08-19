import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { createHtmlPlugin as html } from 'vite-plugin-html';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => ({
  plugins: [
    react(),
    html({
      entry: '/src/main.tsx',
      template: 'src/index.html',
      minify: true,
    }),
    tsconfigPaths(),
    svgr(),
  ],

  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './test.setup.ts',
    css: false,
  },
}));
