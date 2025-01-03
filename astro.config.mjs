import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt(), react()],
  site: 'https://brayanpuentes.netlify.app/',
  output: "server",
  adapter: netlify()
});