/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      BeVietnamPro: "BeVietnamPro"
    },
    extend: {
      colors: {
        grey: "#e5e5dc",
        glass: "rgba(255,255,255,0.45)",
        transparentBlack : "rgba(0,0,0,0.7)"
      }
    },
    screens: {
      ss: "480px",
      sm: "600px",
      md: "768px",
      lg: "1099px"
    },
  },
  plugins: [],
};