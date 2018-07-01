
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: false,
  entry: './js/scripts.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-decorators-legacy']
        }
      }
    ]
  },
  output: {
    path: __dirname + '/js',
    filename: 'scripts.min.js'
  }

};
