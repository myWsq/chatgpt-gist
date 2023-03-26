/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      ...require("./scripts/geist-palette.js")(),
    },
    borderColor: {
      DEFAULT: "rgb(var(--geist-border))",
    },
    fontFamily: {
      sans: ["MiSans", "sans-serif"],
      mono: ["JetBrains Mono", "monospace"],
    },
    fontWeight: {
      DEFAULT: 450,
      light: 300,
      normal: 450,
      medium: 500,
      bold: 600,
    },
  },
  plugins: [],
};
