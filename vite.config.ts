import * as process from "node:process";
import rescript from "@jihchi/vite-plugin-rescript";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.CI ? "/rescript-videojs-example/" : "/",
  build: {
    cssMinify: "lightningcss",
  },
  css: {
    transformer: "lightningcss",
  },
  plugins: [rescript({ silent: true })],
  server: {
    port: 3000,
  },
});
