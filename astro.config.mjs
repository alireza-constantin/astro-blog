import { defineConfig, sharpImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	// change it with actual site url in prod
	site: "https://alirezasoh.vercel.app",
	markdown: {
		shikiConfig: {
			theme: "material-theme-palenight",
			wrap: true,
		},
	},
	integrations: [
		tailwind({
			applyBaseStyles: true,
			configFile: "./tailwind.config.cjs",
		}),
		prefetch(),
		mdx(),
	],
	image: {
		service: sharpImageService(),
	},
	experimental: {
		assets: true,
	},
	compressHTML: true,
	vite: {
		optimizeDeps: true,
	},
});