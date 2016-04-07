var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/3_entry.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '3_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', ['css', 'less'])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('3_styles.css')
  ]
};
