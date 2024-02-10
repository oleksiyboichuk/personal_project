/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#F83D2F',
        'back': '#F1F1F0',
        'back-text': '#B4B4B4',
        'banner': '#2A0E0C',
        'banner-blue': '#75AFA9'
      },
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        'protest': ['Protest Revolution', 'sans-serif',],
        'story': ['Poor Story', 'system-ui']
      },
      fontSize: {
        'banner': '14rem',
      }
    },
  },
  plugins: [],
}