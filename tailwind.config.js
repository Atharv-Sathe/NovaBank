/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-text)',
        secondary: 'var(--color-sec)',
        bgCol: 'var(--color-bg)',
        bgColSec: 'var(--color-bg-sec)',
      }
    },
  },
  plugins: [],
  darkMode: 'selector',
}

