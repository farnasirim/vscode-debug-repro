const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = (env: any) => {
  return {
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      fallback: {
        url: require.resolve("url"),
        assert: require.resolve("assert"),
        crypto: require.resolve("crypto-browserify"),
        buffer: require.resolve("buffer"),
        stream: require.resolve("stream-browserify"),
      },
    },
    entry: {
      index: [path.resolve(__dirname, "src", "index.ts")],
    },
    mode: "development",
    target: "web",
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "ts-loader" },
        { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      ],
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "serve"),
      publicPath: "/",
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
      new webpack.ProvidePlugin({
        CANNON: "cannon",
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html"),
        filename: "index.html",
        chunks: ["index"],
      }),
    ],
  };
};
