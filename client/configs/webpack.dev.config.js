const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.config');

const cssModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    localIdentName: '[name]_[local]',
    importLoaders: 1,
    sourceMap: true,
    minimize: true
  }
};

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        use: ['style-loader', cssModuleLoader, 'sass-loader']
      }
    ]
  }
});
