("use strict");

const path = require("path");
const TSConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const webpack = require("webpack");

const SOURCE_ROOT = __dirname + "/src/main/webpack";

const resolve = {
  extensions: [".js", ".ts", ".vue"],
  plugins: [
    new TSConfigPathsPlugin({
      configFile: "./tsconfig.json",
    }),
  ],
  alias: {
    vue$: path.resolve(__dirname, "node_modules/vue/dist/vue.esm-bundler"),
    "@": path.resolve(__dirname, "src/main/webpack/Vue"),
  },
};

module.exports = {
  resolve: resolve,
  entry: {
    site: SOURCE_ROOT + "/site/main.ts",
  },
  output: {
    filename: "site/[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
          {
            loader: "glob-import-loader",
            options: {
              resolve: resolve,
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    }),
  ],
  node: {
    global: false,
  },
};
