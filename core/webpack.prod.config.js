const webpack = require('webpack');
const path = require('path');
const ExtractCSS = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require("offline-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = {
  devtool: 'none',
  entry: path.join(__dirname, '..', 'src', 'entry.jsx'),
  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: 'app-[hash:8].js'
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
    new ExtractCSS({ filename: 'style-[contenthash:8].css', allChunks: true }),
    new webpack.DefinePlugin({
      'process.env.DEV': false,
      'process.env.BROWSER': true,
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      DEBUG: false
    }),
    new CopyWebpackPlugin(
      [{ from: "assets", to: "assets" }]
    ),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/templates/default.hbs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyCSS: true
      }
    }),
    new OfflinePlugin({
      caches: "all",
      responseStrategy: "network-first", // 'cache-first' | 'network-first'
      updateStrategy: "changed", // 'changed' | 'all',
    })
  ]
};
module.exports = config;