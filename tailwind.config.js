module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
       '4': 'repeat(auto-fill, minmax(200px, 1fr))',
      }
    },
    height: {
      max: "max-content"
    }
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
