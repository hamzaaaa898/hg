/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/**/*.{html,js}", "./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:"#164e63",
        second:{
          100:"#8AB6F9",
          200:"#CADCFC",
        }
      }
    },
  },
  plugins: [],
}