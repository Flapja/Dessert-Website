/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        wix: ["Wix Madefor Text", "sans-serif"],
      },
      colors: {
        "main-white": "#f2f2f2",
        "main-black": "rgba(0, 0, 0, 0.6)",
        "second-black": "rgba(0,0,0, 0.4)",
        "hover-white": "rgba(255, 255, 255, 0.6)",
        "main-red": "rgba(183, 4, 4, 1)",
        "hover-red": "rgba(183, 4, 4, 0.5)",
        "banner-end": "rgba(255, 255, 255, 0.1)",
        "banner-start": "rgba(255, 255, 255, 0.4)",
      },
      width: {
        "1200px": "1300px",
        "1400px": "1450px",
        "main-width": "1200px",
        "with-44": "44px",
        "449px": "449px",
      },
      height: {
        227: "250.2px",
        534: "534px",
        "452px": "400px",
        "44px": "44px",
        "340px": "340px",
      },
      flexBasis: {
        "1/100": "28%",
        "1/30": "31%",
      },
      spacing: {
        "22px": "22px",
      },
    },
  },
  plugins: [],
};
