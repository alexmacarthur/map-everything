const webpack = require("webpack");
const pkg = require("./package.json");

let plugins = [];

const banner = `
  ${pkg.name} - ${pkg.description}
  Author: ${pkg.author}
  Version: v${pkg.version}
  URL: ${pkg.homepage}
  License: ${pkg.license}
`;

plugins.push(new webpack.BannerPlugin({ banner }));

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    mapEverything: "./src/index.js"
  },
  output: {
    path: __dirname + "/dist",
    library: "mapEverything",
    libraryTarget: "umd",
    libraryExport: "default",
    filename: "map-everything.min.js",
    globalObject: "this"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          compact: false
        }
      }
    ]
  },
  plugins
};
