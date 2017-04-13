const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
  entry: path.join(__dirname, '..', 'src', 'entry.jsx'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app-[hash:8].js',
  },
  module: {
    rules: [
      { test: /\.js(x?)$/, use: 'babel-loader' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.(png|jpg|jpeg)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  devServer: {
    contentBase: './',
    port: process.env.HTTP || 3000,
    noInfo: false,
    hot: true,
    inline: true,
    proxy: {
      '/api': {
        target: 'http://localhost:9333',
        pathRewrite: {"^/api" : ""}
      },
      '/': {
        bypass: function (req, res, proxyOptions) {
          if (req.url === '/') return 'index.html';
          return false;
        }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/templates/default.hbs'
    })
  ]

};
module.exports = config;