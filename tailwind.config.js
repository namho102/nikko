module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: '#00A4B8'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
