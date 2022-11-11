/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    colors: {
      "white-color": "#fff",
      "background": "#1D2123",
      "blue": "#609EAF",
      "secondary-yellow": "#FACD66",
      "black-variant": "#1A1E1F",
      "transparent": "transparent",
      "btn": "#ffffff12",
    },
    fontFamily: {
      // sans: ['Graphik', 'sans-serif'],
      sans: ['Quicksand', 'sans-serif'],
    },
    width: {
      "big": "80%",
      "medium": "85%",
      "small": "90%",
      "5": "5%",
      "10": "10%",
      "20": "20%",
      "30": "30%",
      "40": "40%",
      "50": "50%",
      "60": "60%",
      "70": "70%",
      "80": "80%",
      "90": "90%",
      "95": "95%",
      "100": "100%",
    },
    height: {
      "hero": "373px",
    },
    dropShadow: {
      "shade": "0px -25px 100px rgba(16, 16, 16, 0.51)",
    },
    extend: {},
  },
  plugins: [],
}
