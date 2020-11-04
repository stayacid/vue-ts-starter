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
        // this is only for scss variables and mixins! All really rendered styles should be imported in main.ts
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
  },
}
