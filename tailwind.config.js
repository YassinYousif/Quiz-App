/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        luckiest: ["Luckiest Guy", "cursive"],
        lexend: ["Lexend", "sans-serif"],
        cursive: ["cursive"]
      }
    },
  },
  plugins: [],
}