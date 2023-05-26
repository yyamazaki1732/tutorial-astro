import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  base: process.env.NODE_ENV === "internal" ? "/test" : "",
  compressHTML: true,
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "entry.js",
          chunkFileNames: "scripts/script.[hash].js",
          assetFileNames: "styles/style.[hash][extname]",
        },
      },
    },
  },
});
