module.exports = {
  purge: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      background: "#181818",
      menuColour: "#212121",
      hoverColour: "#3D3D3D",
      textColour: "#FFFFFF",
      secondaryText: "#AAAAAA",
    },
    extend: {
      backgroundImagage: {
        profilePicture:
          "url('./pages/components/images/alex+Alex_GettingReady_0021.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
