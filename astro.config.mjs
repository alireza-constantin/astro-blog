import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  // change it with actual site url in prod
  site: "https://alirezasoh.vercel.app",
  markdown: {
    shikiConfig: {
      theme: "material-theme-palenight",
      wrap: true
    },
    remarkPlugins: [remarkReadingTime]
  },
  integrations: [tailwind({
    applyBaseStyles: false
  }), mdx(), sitemap()],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  },
});