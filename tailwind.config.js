module.exports = {
  purge: [
    './src/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'gray': '#A8A8A8',
      'black': "#000000",
      'red': "#FF3F62",
      'slate': "#e2e8f0",
      'white': "#FFFFFF",
      'lightGray' : "#161616"
    },
    fontFamily: {
      'playenSans': "PlayenSans"
    }
  },
  variants: {},
  plugins: [],
}