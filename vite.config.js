import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "./",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
      },
      output: {
        entryFileNames: "js/[name].js",
        chunkFileNames: "js/[name].js",
        assetFileNames: (assetInfo) => {
          return "[name].[ext]";
        },
      },
    },
  },
});
