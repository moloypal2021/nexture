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
          9: "#121619",
          10: "#343a3f",
          11: "#697077",
        },
        gray: {
          1: "#f3f3f3",
          2: "#e5e5e5",
          3: "#8d8d8d",
          4: "#f4f4f4",
          5: "#e0e0e0",
          6: "#D8D8D8",
          7: "#f1f1f1",
          8: "#4d5358",
          9: "#dde1e6",
          10: "#f2f4f8",
          11: "#c6c6c6",
        },
        blue: {
          1: "#0f62fe",
          2: "#0062ff",
          3: "#2d4691",
          4: "#28285f",
          5: "#002063",
          6: "#002d9c",
          7: "#d0e2ff",
          8: "#a6c8ff",
        },
        teal: {
          1: "#394b54",
          2: "#375668",
          3: "#188d6d",
          4: "#55be9b",
          5: "#a7f0ba",
          6: "#044317",
          7: "#6fdc8c",
        },
        pink: {
          1: "#d946ef",
        },
      },
      fontSize: {
        13: "13px",
        42: "42px",
      },
      lineHeight: {
        50: "50px",
      },
      boxShadow: {
        1: "0 2px 24px 0 rgba(0,0,0,.15)",
        2: "0 2px 100px 0 rgba(0,0,0,.25)",
        3: "0 2px 24px 0 rgba(0,0,0,.2)",
      },
      backgroundImage: {
        1: "linear-gradient(90deg,#28285f,#188d6d)",
      },
      fontFamily: {
        ibm: ["IBM Plex Sans", "sans-serif"],
        "ibm-serif": ["IBM Plex Serif", "serif"],
        graphik: ["Graphik", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
};
