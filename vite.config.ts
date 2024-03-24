import * as process from "node:process";

import rescript from "@jihchi/vite-plugin-rescript";
import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";

import { dependencies } from "./package.json";

function createManualChunks(
  deps: Record<string, string>,
): Record<string, string[]> {
  const ignore = new Set(["react", "react-dom", "modern-css-reset"]);
  const chunks = Object.keys(deps)
    .filter((dep) => !ignore.has(dep))
    .reduce((acc, dep) => {
      acc[dep] = [dep];
      return acc;
    }, {});
  return chunks;
}

export default defineConfig({
  base: process.env.CI ? "/rescript-videojs-example/" : "/",
  build: {
    cssMinify: "lightningcss",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ...createManualChunks(dependencies),
        },
      },
    },
    target: "esnext",
  },
  css: {
    transformer: "lightningcss",
  },
  plugins: [rescript(), ViteEjsPlugin()],
  server: {
    port: 3000,
  },
});
