module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mali: ["Mali", "sans-serif"],
        parisienne: ["Parisienne", "sans-serif"],
      },
      colors: {
        sunflower: "#FAD54D",
      },
    },
  },
  plugins: [],
};
