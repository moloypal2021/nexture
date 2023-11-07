/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: {
          1: "#161616",
          2: "#393939",
          3: "#2d3f49",
          4: "#262626",
          5: "#323232",
          6: "#393939",
          7: "#525252",
          8: "#6f6f6f",
        },
        gray: {
          1: "#f3f3f3",
          2: "#e5e5e5",
          3: "#8d8d8d",
          4: "#f4f4f4",
          5: "#e0e0e0",
          6: "#D8D8D8",
        },
        blue: {
          1: "#0f62fe",
          2: "#0062ff",
        },
        teal: {
          1: "#394b54",
        },
      },
      fontFamily: {
        ibm: ["IBM Plex Sans", "sans-serif"],
        "ibm-serif": ["IBM Plex Serif", "serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
};
