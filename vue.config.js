const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const minimizerOptions = {
  // Lossless optimization with custom option
  // Feel free to experiment with options for better result for you
  minimizerOptions: {
    plugins: [
      ['gifsicle', { interlaced: true }],
      ['jpegtran', { progressive: true }],
      ['optipng', { optimizationLevel: 5 }],
      [
        'svgo',
        {
          plugins: [
            {
              removeViewBox: false,
            },
          ],
        },
      ],
    ],
  },
}

module.exports = {
  pages: {
    index: {
      entry: './src/main.ts',
      template: './public/index.pug',
    },
  },

  css: {
    loaderOptions: {
      scss: {
        // this is only for scss variables and mixins! All really rendered styles should be imported in App.vue
        prependData: `
          @import "~@/scss/helpers/_variables.scss";
          @import "~@/scss/mixins/mixins.scss";
          @import "~@/scss/helpers/_fonts.scss";`,
      },
    },
  },

  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
    config.plugin('ImageMinimizerPlugin')
      .use(ImageMinimizerPlugin)
      .tap(args => [...args, minimizerOptions])
  },
}
