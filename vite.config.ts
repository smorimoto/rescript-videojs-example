import rescript from "@jihchi/vite-plugin-rescript";
import { defineConfig } from "vite";
import { dependencies } from "./package.json";
import * as process from "node:process";

function createManualChunks(
  deps: Record<string, string>
): Record<string, string[]> {
  const $deps = Object.keys(deps).filter(
    (dep) =>
      dep !== "react" && dep !== "react-dom" && dep !== "modern-css-reset"
  );
  const chunks = $deps.reduce((acc, dep) => ({ ...acc, [dep]: [dep] }), {});
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
});
