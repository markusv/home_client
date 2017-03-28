const webpack = require('webpack');
const path = require('path');

const config = {
  entry: path.join(__dirname, '..', 'src', 'entry.jsx'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js',
    publicPath: 'http://localhost:' + (process.env.HTTP || 3000) + '/'
  },
  module: {
    rules: [
      { test: /\.jsx$/, use: 'babel-loader' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.(png|jpg|jpeg)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  devServer: {
    contentBase: './assets',
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
    new webpack.HotModuleReplacementPlugin()
  ]

};
module.exports = config;