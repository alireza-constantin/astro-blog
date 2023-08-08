import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // change it with actual site url in prod
  site:"http://localhost:3000",
  integrations: [tailwind({
    applyBaseStyles: true,
    configFile: './tailwind.config.cjs'
  })]
});