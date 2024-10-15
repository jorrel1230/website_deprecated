const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair-display': ['"Playfair Display"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'theme-green': '#687553',
        'theme-white': '#F4F4F4',
      },
    },
  },
  plugins: [],
}

