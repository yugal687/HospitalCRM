const defaultTheme = require('tailwindcss/defaultTheme')
const windmill = require('@windmill/react-ui/config')

module.exports = windmill({
  purge: ['src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        bottom: '0 5px 6px -7px rgba(0, 0, 0, 0.6), 0 2px 4px -5px rgba(0, 0, 0, 0.06)',
      },
    },
  },
})

// module.exports = {
//   theme: {
//     linearGradientDirections: { // defaults to these values
//       't': 'to top',
//       'tr': 'to top right',
//       'r': 'to right',
//       'br': 'to bottom right',
//       'b': 'to bottom',
//       'bl': 'to bottom left',
//       'l': 'to left',
//       'tl': 'to top left',
//     },
//     linearGradientColors: { // defaults to {}
//       'red': '#f00',
//       'red-blue': ['#f00', '#00f'],
//       'red-green-blue': ['#f00', '#0f0', '#00f'],
//       'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
//     },
//     radialGradientShapes: { // defaults to this value
//       'default': 'ellipse',
//     },
//     radialGradientSizes: { // defaults to this value
//       'default': 'closest-side',
//     },
//     radialGradientPositions: { // defaults to these values
//       'default': 'center',
//       't': 'top',
//       'tr': 'top right',
//       'r': 'right',
//       'br': 'bottom right',
//       'b': 'bottom',
//       'bl': 'bottom left',
//       'l': 'left',
//       'tl': 'top left',
//     },
//     radialGradientColors: { // defaults to {}
//       'red': '#f00',
//       'red-blue': ['#f00', '#00f'],
//       'red-green-blue': ['#f00', '#0f0', '#00f'],
//       'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
//     },
//     conicGradientStartingAngles: { // defaults to this value
//       'default': '0',
//     },
//     conicGradientPositions: { // defaults to these values
//       'default': 'center',
//       't': 'top',
//       'tr': 'top right',
//       'r': 'right',
//       'br': 'bottom right',
//       'b': 'bottom',
//       'bl': 'bottom left',
//       'l': 'left',
//       'tl': 'top left',
//     },
//     conicGradientColors: { // defaults to {}
//       'red': '#f00',
//       'red-blue': ['#f00', '#00f'],
//       'red-green-blue': ['#f00', '#0f0', '#00f'],
//       'checkerboard': ['white 90deg', 'black 90deg 180deg', 'white 180deg 270deg', 'black 270deg'],
//     },
//     repeatingLinearGradientDirections: theme => theme('linearGradientDirections'), // defaults to this value
//     repeatingLinearGradientColors: theme => theme('linearGradientColors'), // defaults to {}
//     repeatingLinearGradientLengths: { // defaults to {}
//       'sm': '25px',
//       'md': '50px',
//       'lg': '100px',
//     },
//     repeatingRadialGradientShapes: theme => theme('radialGradientShapes'), // defaults to this value
//     repeatingRadialGradientSizes: { // defaults to this value
//       'default': 'farthest-corner',
//     },
//     repeatingRadialGradientPositions: theme => theme('radialGradientPositions'), // defaults to this value
//     repeatingRadialGradientColors: theme => theme('radialGradientColors'), // defaults to {}
//     repeatingRadialGradientLengths: { // defaults to {}
//       'sm': '25px',
//       'md': '50px',
//       'lg': '100px',
//     },
//     repeatingConicGradientStartingAngles: theme => theme('conicGradientStartingAngles'), // defaults to this value
//     repeatingConicGradientPositions: theme => theme('conicGradientPositions'), // defaults to this value
//     repeatingConicGradientColors: { // defaults to {}
//       'red': '#f00',
//       'red-blue': ['#f00', '#00f'],
//       'red-green-blue': ['#f00', '#0f0', '#00f'],
//       'starburst': ['white 0 5deg', 'blue 5deg'],
//     },
//     repeatingConicGradientLengths: { // defaults to {}
//       'sm': '10deg',
//       'md': '20deg',
//       'lg': '40deg',
//     },
//   },
//   variants: { // all the following default to ['responsive']
//     backgroundImage: ['responsive'], // this is for the "bg-none" utility
//     linearGradients: ['responsive'],
//     radialGradients: ['responsive'],
//     conicGradients: ['responsive'],
//     repeatingLinearGradients: ['responsive'],
//     repeatingRadialGradients: ['responsive'],
//     repeatingConicGradients: ['responsive'],
//   },
//   plugins: [
//     require('tailwindcss-gradients'),
//   ],
// };
