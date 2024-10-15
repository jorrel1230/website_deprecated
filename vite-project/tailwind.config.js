/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-white': '#F4F4F4',
        'theme-green': '#687553',
      },
      fontFamily: {
        'playfair-display': ['"Playfair Display"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

