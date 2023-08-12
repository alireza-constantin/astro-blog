import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch"

// https://astro.build/config
export default defineConfig({
  // change it with actual site url in prod
  site:"http://localhost:3000",
  markdown: {
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    }
  },
  integrations: [tailwind({
    applyBaseStyles: true,
    configFile: './tailwind.config.cjs'
  }),
  prefetch()]
});