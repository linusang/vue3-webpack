const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.config");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/[name].[contenthash].js",
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "css/[name].[contenthash].css" }),
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
  ],
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
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
});
