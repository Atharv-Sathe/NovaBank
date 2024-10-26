/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      '2xl': {'max': '1535px'}, // => @media (max-width: 1535px) { ... }
      'xl': {'max': '1279px'}, // => @media (max-width: 1279px) { ... }
      'lg': {'max': '1113px'}, // => @media (max-width: 1023px) { ... }
      'md': {'max': '767px'}, // => @media (max-width: 767px) { ... }
      'sm': {'max': '500px'}, // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        primary: "var(--color-text)",
        secondary: "var(--color-sec)",
        bgCol: "var(--color-bg)",
        bgColSec: "var(--color-bg-sec)",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
