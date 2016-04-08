var webpack = require('webpack');

module.exports = {
  entry: [
    './browser.js'
  ],
  output: {
    path: './public',
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    }]
  }
};
