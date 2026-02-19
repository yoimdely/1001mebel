import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "server",
  adapter: node({ mode: "standalone" }),
  site: "https://xn--1001-e4dxb2cf8n.xn--p1ai",
  integrations: [tailwind(), sitemap()]
});
