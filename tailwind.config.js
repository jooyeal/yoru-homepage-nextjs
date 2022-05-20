module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        128: "32rem",
      },
    },
    screens: {
      mobile: { max: "500px" },
    },
  },
  plugins: [],
};
