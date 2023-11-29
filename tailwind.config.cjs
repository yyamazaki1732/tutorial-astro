/** @type {import('tailwindcss').Config} */
import { colors, spacing } from "./data/tokentest.json";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: colors.red.value,
      },
      spacing: {
        4: `${spacing[4].value}px`,
        8: `${spacing[8].value}px`,
        12: `${spacing[12].value}px`,
      },
    },
  },
  plugins: [],
};
