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
					600: '#2c287d',
					500: '#935085',
					400: '#9380ff'
				},
				hot: {
					900: '#f20103',
					800: '#ff9885'
				},
				gray: {
					100: '#266c67',
					200: '#143635'
				},
				white: '#93f0ff'
				
			},
			fontFamily: {
				'splineSans-bold': ['SplineSans-Bold', 'sans-serif'],
				'monoDisplay-normal': ['MonoDisplay-normal', 'mono']
			}
		},
		
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
