module.exports = {
	content: ['./src/*.html'],
	theme: {
		extend: {
			colors: {
				'custom-color': '#eee',
				'super-blue-color': '#0e8ef1',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
  },
}