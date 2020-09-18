const path = require('path');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      template: path.join(baseWebpackConfig.externals.paths.src, './index.html'),
      filename: path.join(baseWebpackConfig.externals.paths.dist, './index.html')
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
})
