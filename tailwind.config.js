/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      mobile: {"max": "575px"},
      md: "575px",
      desktop: "1440px"
    },
    extend: {
      letterSpacing: {
        wtWidest: ".25em"
      },
      colors: {
        darkCyan: "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        veryDarkBlue: "hsl(212, 21%, 14%)",
        darkGrayishBlue: "hsl(228, 12%, 48%)"
      },
      fontFamily: {
        fraunces: "'Fraunces', serif;",
        montserrat: "'Montserrat', sans-serif;"
      }
    },
  },
  plugins: [],
}

