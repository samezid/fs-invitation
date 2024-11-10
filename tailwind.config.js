/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        belgan: ["belgan", "sans-serif"],
        poppins: ["poppins"],
      }
    },
  },
  plugins: [],
}

