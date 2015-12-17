var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './app/App.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: false,
  },
};
