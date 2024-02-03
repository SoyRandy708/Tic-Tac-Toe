/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          one: "#191919",
          two: "#0faa1a",
          three: "#126919",
          button: "#0faa1a",
          hover: "#108519",
          selected: "#1acd27"
        }
      }
    },
  },
  plugins: [],
}