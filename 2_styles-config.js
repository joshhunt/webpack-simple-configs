var path = require('path');

module.exports = {
  entry: './src/2_entry.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '2_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.less$/,
        loaders: ['style', 'css', 'less']
      }
    ]
  }
};
