/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      red: "#FC4747",
      white: "#FFF",
      grey: {
        300: "#5A698F",
        600: "#161D2F",
        900: "#10141E",
      },
    },
    fontFamily: {
      outfit: ["'Outfit'", 'sans-serif']
    }
  },
  plugins: [],
};
