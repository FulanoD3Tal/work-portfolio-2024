/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontSize: {
			base: '1rem',
			xl: '2rem',
			'2xl': '6rem'
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
