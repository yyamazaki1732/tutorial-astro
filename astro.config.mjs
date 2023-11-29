import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  base:
    process.env.NODE_ENV === "development"
      ? "/"
      : process.env.NODE_ENV === "production"
      ? "/test/"
      : null,
  compressHTML: false,
  outDir: "./my-custom-build-directory",
  server: { port: 1234, host: true },
  vite: {
    build: {
      buildOptions: {
        env: {
          NODE_ENV: process.env.NODE_ENV,
        },
      },
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
