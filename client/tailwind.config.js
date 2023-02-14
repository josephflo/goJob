/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#112240",
        color2: "#1fa2aa",
        color3: "7ad4dd",
        color4: "4fba73",
        color5: "0a572f",
        color6: "062715",
        dimBlue: "rgba(31, 162, 170, 0.3)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
