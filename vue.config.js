module.exports = {
  /* configureWebpack: {
    plugins: [
      new HtmlWebpackPlugin({
        template: '!!pug-loader!index.pug',
        title: 'Page Title',
        custom: 'Custom'
      })
    ]
  }, */
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].template = '!!pug-loader!index.pug'
        args[0].title = 'Page Title'
        args[0].template = 'public/index.pug'
        return args
      })
  },
  /* pages: {
    index: {
      entry: './src/main.ts',
      template: './public/index.pug'
    }
  }, */
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/scss/_fonts.scss";
          @import "~@/scss/helpers/_normalize.scss";
          @import "~@/scss/helpers/_variables.scss";
          @import "~@/scss/mixins/mixins.scss";
          @import "~@/scss/_base.scss";
          @import "~@/scss/_container.scss";
          @import "~@/scss/_typography.scss";`
      }
    }
  }
};
