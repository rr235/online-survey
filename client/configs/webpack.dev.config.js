const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.config');

const cssModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    localIdentName: '[name]__[local]__[hash:base64:5]',
    importLoaders: 1,
    sourceMap: true,
    minimize: true
  }
};

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        use: ['style-loader', cssModuleLoader, 'sass-loader']
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api/**': {
        target: 'http://localhost:5000'
      }
    }
  }
});
