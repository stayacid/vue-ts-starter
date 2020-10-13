module.exports = {
  plugins: [
    "autoprefixer",
    [
      "cssnano",
      {
        default: {
          discardComments: {
            removeAll: " true", // not necessary
          },
        },
      },
    ],
  ],
};
