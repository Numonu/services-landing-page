/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors : {
				"naranja" : "#fb561c",
				"rosa" : "#ce32c8"
			}
		},
	},
	plugins: [],
}
