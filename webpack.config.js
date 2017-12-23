var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/scripts.js",
  module: {
    loaders: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-decorators-legacy']
        }

      }, {
        test: /\.css$/,
        loader: "style!css"
      }
      
    ]
  },
  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js",
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
  ],
};
