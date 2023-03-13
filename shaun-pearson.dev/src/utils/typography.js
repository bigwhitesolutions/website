import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  googleFonts: [
    {
      name: "Raleway",
      styles: ["300"],
    },
    {
      name: "Raleway",
      styles: ["400"]
    }
  ],
  headerFontFamily: ["Raleway", "sans-serif"],
  bodyFontFamily: ["Raleway", "sans-serif"]
});

typography.injectStyles();

export default typography;