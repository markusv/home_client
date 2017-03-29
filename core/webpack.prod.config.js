/**
 * Created by markusvoss on 29.03.2017.
 */
const webpack = require('webpack');
const path = require('path');
const ExtractCSS = require('extract-text-webpack-plugin');

const config = {
  devtool: 'none',
  entry: path.join(__dirname, '..', 'src', 'entry.jsx'),
  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: 'app.js'
  },
  module: {
    rules: [
      { test: /\.js(x?)$/, use: 'babel-loader' },
      {
        test: /\.scss$/,
        use: ExtractCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      { test: /\.(png|jpg|jpeg)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        conditionals: true,
        unused: true,
        unsafe: true, // EXPERIMENTAL
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    }),
    new ExtractCSS({ filename: 'style.css', allChunks: true }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      DEBUG: false
    })
  ]
};
module.exports = config;