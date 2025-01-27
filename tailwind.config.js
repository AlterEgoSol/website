/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f0f7ff',
					100: '#e0effe',
					200: '#bae0fd',
					300: '#7cc8fb',
					400: '#36aaf4',
					500: '#0c8de4',
					600: '#006fc3',
					700: '#015a9e',
					800: '#064b83',
					900: '#0a406d',
					950: '#07284a'
				},
				secondary: {
					50: '#f4f7fb',
					100: '#e9eff7',
					200: '#cedeed',
					300: '#a3c3dd',
					400: '#72a3ca',
					500: '#4f85b7',
					600: '#3b6a9a',
					700: '#31557d',
					800: '#2c4868',
					900: '#293e58',
					950: '#1c2839'
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Space Grotesk', 'sans-serif']
			}
		}
	},
	plugins: []
}; 