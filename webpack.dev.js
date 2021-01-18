const path = require("path");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",

  devServer: {
    host: "0.0.0.0",
    port: 3000,
    open: false,
    contentBase: path.join(__dirname, "assets"),
    historyApiFallback: true,
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assets/js/[name].js",
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: {
                path: "postcss.config.js",
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].css",
    }),
  ],
});
