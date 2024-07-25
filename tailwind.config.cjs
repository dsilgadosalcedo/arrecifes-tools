/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				cold: {
					900: "rgb(10, 12, 18)",
					800: "rgb(20, 23, 32)",
					700: "rgb(30, 34, 46)",
					600: "rgb(40, 45, 60)",
					500: "rgb(50, 56, 74)",
					400: "rgb(60, 67, 88)",
					300: "rgb(70, 78, 102)",
					200: "rgb(80, 89, 116)",
					100: "rgb(90, 91, 130)",
					50: "rgb(100, 92, 144)",
				},
				hot: {
					900: "#f20103",
					800: "#ff9885",
				},
				white: "#93f0ff",
			},
			fontFamily: {
				"splineSans-bold": ["SplineSans-Bold", "sans-serif"],
				"splineSans-regular": ["SplineSans-Regular", "sans-serif"],
				"monoDisplay-normal": ["MonoDisplay-normal", "mono"],
			},
		},
	},
	plugins: [require("tailwindcss-animated")],
}
