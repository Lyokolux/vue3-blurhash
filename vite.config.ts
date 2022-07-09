/// <reference types="histoire" />

import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

const LIBRARY_NAME = 'vue3-blurhash'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: 'lib',
      outputDir: 'dist/types'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/index.ts"),
      name: LIBRARY_NAME,
      formats: ['es', 'umd', 'cjs'],
      fileName: (format) => `${LIBRARY_NAME}.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  histoire: {}
})
