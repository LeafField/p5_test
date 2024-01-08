import { defineConfig } from "vite";
import path from "path";
import fs from "fs";
import { ViteEjsPlugin } from "vite-plugin-ejs";

const root = "./src";

const files = fs.readdirSync(path.resolve(__dirname, root), "utf-8");
const html = files
  .filter((file) => /\.html/.test(file))
  .map((filename) => {
    return [filename.split(".")[0], root + "/" + filename];
  });
const htmlObj = Object.fromEntries(html);

export default defineConfig({
  base: "./",
  root: root,
  build: {
    outDir: "../docs",
    rollupOptions: {
      input: htmlObj,
      output: {
        entryFileNames: "js/[name].js",
        chunkFileNames: "js/[name].js",
        assetFileNames: (assetInfo) => {
          const extName = assetInfo.name.split(".")[1];
          if (extName === "css") {
            return "style.css";
          }
          return "[name].[ext]";
        },
      },
    },
  },
  plugins: [ViteEjsPlugin()],
});
