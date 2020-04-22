const merge = require('webpack-merge');
const imageminMozjpeg = require('imagemin-mozjpeg');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const baseWebpackConfig = require('./webpack.base.conf');

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  plugins: [
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      pngquant: {
        quality: '70',
      },
      plugins: [imageminMozjpeg({
        quality: 70,
        progressive: true,
      })],
    }),
  ],
});

module.exports = new Promise((resolve) => {
  resolve(buildWebpackConfig);
});
