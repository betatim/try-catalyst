const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  optimization: {
    // You could completely disable minimisation by uncommenting the following
    // line
    //minimize: false,
    // or you can set the `keey_classnames` option of the terser plugin to true
    // This seems more desirable
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_classnames: true,
        }
      })
    ]
  },
  mode: "production",
  devtool: "inline-source-map",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  }
};
