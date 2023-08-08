/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				cold: {
					900: '#050412',
					800: '#0a071c',
					700: '#19164d',
					600: '#332c61',
					500: '#2c287d',
					400: '#935085',
					300: '#9380ff',
					200: '#9c9eff',
				},
				hot: {
					900: '#f20103',
					800: '#ff9885'
				},
				white: '#93f0ff'
			},
			fontFamily: {
				'splineSans-bold': ['SplineSans-Bold', 'sans-serif'],
				'splineSans-regular': ['SplineSans-Regular', 'sans-serif'],
				'monoDisplay-normal': ['MonoDisplay-normal', 'mono']
			}
		},
		
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
