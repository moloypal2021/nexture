/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: {
          1: "#161616",
        },
        gray: {
          1: "#f3f3f3",
          2: "#e5e5e5",
          3: "#8d8d8d",
          4: "#f4f4f4",
          5: "#e0e0e0",
        },
        blue: {
          1: "#0f62fe",
        },
      },
      fontFamily: {
        ibm: ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
};