module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          dark: "#03334D",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
