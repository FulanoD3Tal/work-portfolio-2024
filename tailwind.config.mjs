/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "media",
	theme: {
		fontSize: {
			base: '1rem',
			xl: '2rem',
			heading: '3rem',
			'2xl': '5.25rem'
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
				rubik: ['Rubik', ...defaultTheme.fontFamily.mono]
			}
		},
	},
	plugins: [],
}
