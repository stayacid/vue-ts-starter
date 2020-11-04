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
        prependData: `
          @import "~@/scss/helpers/helpers.scss";
          @import "~@/scss/mixins/mixins.scss";
          @import "~@/scss/components/components.scss";
        `,
      },
    },
  },

  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
  },
}
