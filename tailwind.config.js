/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#0C513F",
        text: "#333333",
        yellow: "#FCD310",
      },

      fontFamily: {
        family_bold: ["bold"],
        family_semibold: ["semibold"],
        family_regular: ["regular"],

      },
    },
  },
  plugins: [],
};
