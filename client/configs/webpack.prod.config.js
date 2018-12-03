const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.config');

const cssModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    localIdentName: '[name]_[local]_[contenthash]',
    importLoaders: 1,
    sourceMap: true,
    minimize: true
  }
};

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        use: [MiniCssExtractPlugin.loader, cssModuleLoader, 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[hash].css'
    })
  ]
});
