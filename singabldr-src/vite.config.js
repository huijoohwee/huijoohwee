import { defineConfig } from "vite";
import { resolve } from "node:path";

/**
 * Singabldr source re-bundle (Vite).
 *
 * Output strategy:
 * - Build a single ESM entry bundle to `content/singabldr/assets/`.
 * - Do NOT wipe the assets folder (it also contains boot scripts, CSS, fonts, etc).
 */
export default defineConfig({
  build: {
    emptyOutDir: false,
    sourcemap: false,
    lib: {
      entry: resolve(__dirname, "src/main.js"),
      formats: ["es"],
      fileName: () => "app.rebundled.js",
    },
    outDir: resolve(__dirname, "..", "content", "singabldr", "assets"),
    rollupOptions: {
      // Keep output predictable for Cloudflare Pages (no hashed filenames).
      output: {
        entryFileNames: "app.rebundled.js",
        chunkFileNames: "chunks/[name].js",
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
});

