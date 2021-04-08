const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.config");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "js/[name].[contenthash].js",
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 9000,
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      // SASS and CSS files from Vue Single File Components:
      {
        test: /\.vue\.(s?[ac]ss)$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      // SASS and CSS files (standalone):
      {
        test: /(?<!\.vue)\.(s?[ac]ss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});
