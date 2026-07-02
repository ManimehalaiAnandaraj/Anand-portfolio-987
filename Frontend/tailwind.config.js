/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B2545",
        "navy-deep": "#071A33",
        paper: "#F1F3EF",
        brass: "#B8902E",
        "brass-light": "#E3C878",
        green: "#1F4D3A",
        ink: "#1B1F27",
        line: "#D7DBD3",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["IBM Plex Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
        sign: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};
