import * as process from "node:process";
import rescript from "@jihchi/vite-plugin-rescript";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.CI ? "/rescript-videojs-example/" : "/",
  plugins: [tailwindcss(), rescript({ silent: true })],
  server: {
    port: 3000,
  },
});
