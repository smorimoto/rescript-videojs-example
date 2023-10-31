import rescript from "@jihchi/vite-plugin-rescript";
import { defineConfig } from "vite";
import { dependencies } from "./package.json";
import * as process from "node:process";

function createManualChunks(
  deps: Record<string, string>,
): Record<string, string[]> {
  const ignore = new Set(["react", "react-dom", "modern-css-reset"]);
  const chunks = Object.keys(deps)
    .filter((dep) => !ignore.has(dep))
    .reduce((acc, dep) => ({ ...acc, [dep]: [dep] }), {});
  return chunks;
}

export default defineConfig({
  base: process.env.CI
    ? "https://smorimoto.github.io/rescript-videojs-example/"
    : "/",
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
  },
  css: {
    transformer: "lightningcss",
  },
  plugins: [rescript()],
  server: {
    port: 3000,
  },
});
