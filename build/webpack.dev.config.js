const path = require('path');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    contentBase: baseWebpackConfig.externals.paths.src,
    compress: true,
    port: 8001
  }
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
})
