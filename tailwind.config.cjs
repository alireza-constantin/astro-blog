/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,md,mdx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				bgColor: "var(--theme-bg)",
				textColor: "var(--theme-text)",
				link: "var(--theme-link)",
				accent: "var(--theme-accent)",
				"accent-2": "var(--theme-accent-2)",
			},
			animation: {
				appear: "appear 1s ease-in forwards",
			},
			keyframes: {
				appear: {
					"0%": { opacity: "0"},
					"100%": { opacity: "1" },
				},
			},
			// fontFamily: {
			//     sans: [...fontFamily.sans],
			//     serif: [...fontFamily.serif],
			// },
		},
	},
	plugins: [],
};
