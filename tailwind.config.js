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
      DEFAULT: "var(--geist-border)",
    },
  },
  plugins: [],
};
