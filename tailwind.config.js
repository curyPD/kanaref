const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/index.html', './src/js/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '475px',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      gridRowStart: {
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
      },
      gridRowEnd: {
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
      },
    },
  },

  plugins: [],
};
