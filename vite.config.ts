import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { portfolio } from "./src/portfolio.config";

const escapedName = portfolio.name.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll('"', "&quot;");

export default defineConfig({
  base: "./",
  build: {
    modulePreload: false,
    cssCodeSplit: false,
    rollupOptions: { output: { format: "iife", inlineDynamicImports: true } },
  },
  plugins: [
    tailwindcss(),
    {
      name: "portfolio-metadata",
      transformIndexHtml: {
        order: "pre",
        handler: html => html.replaceAll("%PORTFOLIO_NAME%", escapedName)
          .replace(/<script id="local-preview">[^<]*<\/script>/, ""),
      },
    },
    {
      name: "local-file-preview",
      apply: "build",
      transformIndexHtml: {
        order: "post",
        handler: html => html
          .replace(/<script type="module" crossorigin src=/g, "<script defer src=")
          .replace(/<link rel="stylesheet" crossorigin href=/g, '<link rel="stylesheet" href='),
      },
    },
  ],
});

