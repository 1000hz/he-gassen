var path = require("path");
var webpack = require("webpack");
module.exports = {
  // This is the main file that should include all other JS files
  entry: "./src/js/main.js",
  target: "web",
  debug: true,
  watch: false,
  output: {
    path: path.join(__dirname, "dist", "assets"),
    publicPath: "assets/",
    // If you want to generate a filename with a hash of the content (for cache-busting)
    // filename: "main-[hash].js",
    filename: "main.js",
    chunkFilename: "[chunkhash].js"
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['bower_components', 'node_modules'],
  },
  module: {
    noParse: /\.min\.js/
  },
  plugins: [
    // If you want to minify everything
    // new webpack.optimize.UglifyJsPlugin()
  ]
};