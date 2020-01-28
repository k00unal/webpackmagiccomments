const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const src = path.join(__dirname, "src");
const dist = path.join(__dirname, "dist");

module.exports = {
  entry: "./src/index.js",
  entry: {
    app: "./src/index.js"
  },
  devServer: {
    contentBase: dist
  },
  plugins: [
    new CleanWebpackPlugin({ dist }),
    new HtmlWebpackPlugin({
      title: "Output Management"
    })
  ],
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    path: dist
  }
};
