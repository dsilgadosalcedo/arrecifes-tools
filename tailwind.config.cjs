/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				cold: {
					900: "rgb(4, 5, 8)",
					800: "rgb(9, 11, 17)",
					700: "rgb(14, 18, 27)",
					600: "rgb(20, 25, 37)",
					500: "rgb(26, 32, 47)",
					400: "rgb(32, 39, 57)",
					300: "rgb(38, 46, 67)",
					200: "rgb(44, 53, 77)",
					100: "rgb(50, 60, 87)",
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
