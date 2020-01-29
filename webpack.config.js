const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const src = path.join(__dirname, "src");
const dist = path.join(__dirname, "dist");

module.exports = {
  entry: "./src/index.js",
  devServer: {
    contentBase: dist
  },
  module: {
    rules: [{ test: /\.hbs$/, loader: "handlebars-loader" }]
  },
  plugins: [
    new CleanWebpackPlugin({ dist }),
    new webpack.LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {}
      }
    }),
    new HtmlWebpackPlugin({
      title: "My awesome service",
      template: "./src/index.hbs",
      filename: "index.html"
    })
  ],
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    path: dist
  }
};
