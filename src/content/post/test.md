---
title: "My Old Post"
publishDate: "1 August 2023"
description: "Another example post for Astro Cactus, this time written in a plain markdown file"
---

## This is a post made with Markdown

```js
// Example JavaScript
function returnSeven() {
	return 7;
}

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
      
    }
  },
  integrations: [tailwind({
    applyBaseStyles: true,
    configFile: './tailwind.config.cjs'
  }),
  prefetch()]
});
```