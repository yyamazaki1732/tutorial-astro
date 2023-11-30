/** @type {import('tailwindcss').Config} */
const Style = require("./plugins/editValue.js").Style;

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: Style.colors.black.value,
      },
    },
  },
  plugins: [],
};
