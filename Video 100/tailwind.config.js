/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      screens: {
      "mobile" : "500px",
      "tablet" : "750px",
      },
    },
  },
  plugins: [],
}

