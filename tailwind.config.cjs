/** @type {import('tailwindcss').Config} */
import { core } from "./data/tokens.json";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: core.colors.black.value,
      },
    },
  },
  plugins: [],
};
