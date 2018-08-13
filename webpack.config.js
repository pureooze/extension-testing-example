const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = function webpackConfig() {
  const config = {
    resolve: {
      alias: {
        "react-dom/server": "preact-render-to-string",
        react: "preact-compat",
        "react-dom": "preact-compat",
        src: path.join(__dirname, "src")
      },
      modules: ["./src", "./node_modules"]
    },
    entry: {
      background: "src/background.js",
      popup: "src/popup.js"
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            chunks: "all"
          }
        }
      }
    },
    output: {
      path: `${__dirname}/dist`,
      filename: "[name].js"
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          exclude: /node_modules/,
          loaders: ["babel-loader"]
        },
        {
          test: /\.(html)$/,
          use: {
            loader: "html-loader"
          }
        }
      ]
    },
    plugins: [
      new webpack.optimize.ModuleConcatenationPlugin(),
      new CopyWebpackPlugin([
        {
          from: "static"
        },
        {
          context: "src/modes",
          from: "**/default.json",
          to: "default_[folder].json"
        },
        {
          context: "src/modes",
          from: "**/config.json",
          to: "config_[folder].json"
        }
      ])
    ]
  };

  return config;
};
