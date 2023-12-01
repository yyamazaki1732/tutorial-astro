/** @type {import('tailwindcss').Config} */
const data = require("./plugins/editValue.js");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: () => ({
        text: data.theme.colors.text,
        surface: data.theme.colors.surface,
      }),
    },
  },
  plugins: [],
};
