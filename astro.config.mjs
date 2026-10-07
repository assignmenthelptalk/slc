import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { siteConfig } from "./src/site.config.ts";

export default defineConfig({
  site: siteConfig.siteUrl,
  output: "static",
  trailingSlash: "always",
  adapter: vercel(),
  integrations: [sitemap({ filter: (page) => !page.includes("/thank-you") })],
  vite: { plugins: [tailwindcss()] },
});
