module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      default: {
        discardComments: {
          removeAll: ' true', // not necessary
        },
      },
    }),
  ],
}
