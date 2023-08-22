import { fontFamily } from "tailwindcss/defaultTheme";

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
				toast: "toast 300ms ease-out forwards",
				appearX: "appearX 700ms ease-out forwards",
			},
			keyframes: {
				appear: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				toast: {
					"0%": { opacity: "0", transform: "translateY(100px) translateX(50%)" },
					"100%": { opacity: "1", transform: "translateY(0px) translateX(50%)" },
				},
				appearX: {
					"0%": { opacity: "0", transform: "translateX(200px)" },
					"70%": { opacity: "1", transform: "translateX(-10px)" },
					"90%": { opacity: "1", transform: "translateX(5px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
			},
			fontFamily: {
				sans: [...fontFamily.sans],
				serif: [...fontFamily.serif],
			},
			typography: (theme) => ({
				wiz: {
					css: {
						"--tw-prose-body": "var(--theme-text)",
						"--tw-prose-headings": "var(--theme-accent-2)",
						"--tw-prose-links": "var(--theme-text)",
						"--tw-prose-bold": "var(--theme-text)",
						"--tw-prose-bullets": "var(--theme-text)",
						"--tw-prose-quotes": "var(--theme-quote)",
						"--tw-prose-code": "var(--theme-text)",
						"--tw-prose-hr": "0.5px dashed #666",
						"--tw-prose-th-borders": "#666",
					},
				},
			}),
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
