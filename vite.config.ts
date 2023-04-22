import rescript from "@jihchi/vite-plugin-rescript";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { dependencies } from "./package.json";

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
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ...createManualChunks(dependencies),
        },
      },
    },
  },
  plugins: [react(), rescript()],
});
