const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  plugins: [
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      pngquant: {
        quality: '50'
      }
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})
