var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: false,
  entry: './js/scripts.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules(?!\/webpack-dev-server)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-decorators-legacy']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  output: {
    path: __dirname + '/js',
    filename: 'scripts.min.js'
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: false,
    proxy: {
      '/medsforlife/*': {
        target: 'http://projectsgono.com',
        secure: false,
        changeOrigin: true
      }
    }
  },
  plugins: debug
    ? []
    : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        })
      ]
};
