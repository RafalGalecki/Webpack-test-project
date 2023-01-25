const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development", //---- this mode can be set here
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  //watch: true,
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
};
