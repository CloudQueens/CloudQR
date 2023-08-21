export const tokens = {
	grey: {
		100: '#f0f0f3',
		200: '#e1e2e7',
		300: '#d1d3da',
		400: '#c2c5ce',
		500: '#b3b6c2',
		600: '#8f929b',
		700: '#6b6d74',
		800: '#48494e',
		900: '#242427',
	},
	primary: {
		// light blue
		100: '#DEE5FC',
		200: '#93ABFD',
		300: '#7375FF',
		400: '#B1B7C9',
		500: '#6A7BFD',
		600: '#0A1880',
		700: '#8E95C6',
		800: '#5A5E7D',
		900: '#806AFD',
	},
	secondary: {
		100: '#EAFCFE',
		200: '#9EF5FF',
		300: '#BCCACC',
		400: '#78C0C8',
		500: '#00E3FC',
		600: '#c29044',
		700: '#39B0BD',
		800: '#009EB0',
		900: '#00707D',
	},
	tertiary: {
		// pink
		500: '#FF00D4',
	},
	background: {
		light: '#2d2d34',
		main: '#1f2026',
	},
};

// mui theme settings
export const themeSettings = {
	palette: {
		primary: {
			...tokens.primary,
			main: tokens.primary[500],
			light: tokens.primary[400],
		},
		secondary: {
			...tokens.secondary,
			main: tokens.secondary[500],
		},
		tertiary: {
			...tokens.tertiary,
		},
		grey: {
			...tokens.grey,
			main: tokens.grey[500],
		},
		background: {
			default: tokens.background.main,
			light: tokens.background.light,
		},
	},
	typography: {
		fontFamily: ['Montserrat', 'sans-serif'].join(','),
		fontSize: 12,
		h1: {
			fontFamily: ['Montserrat', 'sans-serif'].join(','),
			fontSize: 32,
		},
		h2: {
			fontFamily: ['Montserrat', 'sans-serif'].join(','),
			fontSize: 24,
		},
		h3: {
			fontFamily: ['Montserrat', 'sans-serif'].join(','),
			fontSize: 20,
			fontWeight: 800,
			color: tokens.grey[200],
		},
		h4: {
			fontFamily: ['Montserrat', 'sans-serif'].join(','),
			fontSize: 14,
			fontWeight: 600,
			color: tokens.grey[300],
		},
		h5: {
			fontFamily: ['Montserrat', 'sans-serif'].join(','),
			fontSize: 12,
			fontWeight: 400,
			color: tokens.grey[500],
		},
		h6: {
			fontFamily: ['Montserrat', 'sans-serif'].join(','),
			fontSize: 10,
			color: tokens.grey[700],
		},
	},
};
