var path = require('path');

module.exports = {
  entry: './src/1_entry.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '1_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      },
    ]
  }
};
