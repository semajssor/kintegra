import { defineConfig } from "astro/config";
import react from "@astrojs/renderer-react";
import mdx from "@astrojs/mdx";

export default defineConfig({
	integrations: [react(), mdx()],
	site: "https://kintegra.example",
});