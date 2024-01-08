const fs = require("fs");
const path = require("path");

const files = fs.readdirSync(path.resolve(__dirname, "./src/html"), "utf-8");
const html = files
  .filter((file) => /\.html/.test(file))
  .map((filename) => {
    return [filename.split(".")[0], "./src/html/" + filename];
  });
const htmlObj = Object.fromEntries(html);

console.log(htmlObj);
