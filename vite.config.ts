import * as process from "node:process";
import rescript from "@jihchi/vite-plugin-rescript";
import reactScan from "@react-scan/vite-plugin-react-scan";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.CI ? "/rescript-videojs-example/" : "/",
  plugins: [tailwindcss(), rescript({ silent: true }), reactScan()],
  server: {
    port: 3000,
  },
});
