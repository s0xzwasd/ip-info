const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env = {}) => {
  const { mode = "development" } = env;
  const isProduction = mode === "production";
  const isDevelopment = mode === "development";

  const getStyleLoaders = () => {
    return [
      isProduction
        ? {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/build",
            },
          }
        : {
            loader: "style-loader",
          },
      {
        loader: "css-loader",
        options: {
          modules: true,
          sourceMap: true,
        },
      },
      {
        loader: "less-loader",
        options: {
          sourceMap: true,
        },
      },
    ];
  };

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
    ];

    if (isProduction) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: "[hash:10].css",
        })
      );
    }

    return plugins;
  };

  return {
    mode: isProduction ? "production" : isDevelopment && "development",
    entry: "./src/main.js",
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "main.js",
    },
    plugins: getPlugins(),
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/env", "@babel/react"],
              cacheDirectory: true,
            },
          },
        },
        {
          test: /\.less$/i,
          use: getStyleLoaders(),
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: "file-loader",
          options: {
            outputPath: "images",
          },
        },
      ],
    },
    devServer: {
      open: true,
      compress: true,
      port: 1337,
      clientLogLevel: "silent",
    },
  };
};
