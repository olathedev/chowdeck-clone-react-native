/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#007B5D',
        text: '#333333',
        yellow: '#FCD310'
      },

      fontFamily: {
        outfit: ['outfit']
      }
    },
  },
  plugins: [],
}