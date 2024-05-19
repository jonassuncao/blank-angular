var defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./src/index.html"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1366px",
        "2xl": "1440px",
        "5xl": "1920px",
      },
      fontSize: {
        "2xl": "2rem",
        "3xl": "2.5rem",
        "4xl": "3rem",
        "5xl": "3.5rem",
        "6xl": "4rem",
      },
      colors: {
        base: require("./src/tailwind/colors/base.json"),
      },
    },
    fontFamily: {
      ubiquitous: ["Ubiquitous", defaultTheme.fontFamily.sans],
      exo2: ['"Exo 2"', defaultTheme.fontFamily.sans],
      montserrat: ["Montserrat", defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animated")],
};
