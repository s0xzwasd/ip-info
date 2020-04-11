const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
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
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: true, sourceMap: true },
          },
          {
            loader: "less-loader",
          },
        ],
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
};
