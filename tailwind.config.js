const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    // enabled: true,
    content: [
      "./src/**/*.html",
      "./src/**/*.jsx",
      "./src/**/*.js",
      "./src/**/*.css",
      "./src/**/*.scss",
    ],
  },
  theme: {
    fontFamily: {
      sans: ["Heebo", "sans-serif"],
      serif: ["Libre Baskerville", "serif"],
    },
    extend: {
      boxShadow: {
        outline: "0 0 0 3px rgba(72, 187, 120, 0.5)",
        "outline-secondary": `0 0 0 3px rgba(45, 55, 72, 0.5)`,
      },
      colors: {
        subheader: colors.gray["600"],
      },
    },
  },
  variants: {
    margin: ["responsive", "last"],
    borderWidth: ["responsive", "last"],
  },
  plugins: [],
};
