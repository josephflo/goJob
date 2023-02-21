/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    backgroundImage: {
      landingBackground: "url('./assets/landing.svg')",
    },
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
  // plugins: [],
  // content: ["./node_modules/flowbite/**/*.js"],
  // plugins: [require("flowbite/plugin")],
  // content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // theme: {
  //   extend: {
  //     colors: {
  //       glass: "rgba(255,255,255,0.25)",
  //       brown: "rgb(30, 30, 17);",
  //     },
  //   },
  // },
  plugins: [],
};
