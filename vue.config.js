module.exports = {
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
