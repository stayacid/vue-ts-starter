const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // clean dist folder before build

// Main const. Feel free to change it
const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/',
  scss: './src/scss',
};

// Pages const for HtmlWebpackPlugin
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#html-dir-folder
const PAGES_DIR = `${PATHS.src}/pug/pages/`;
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith('.pug'));

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    app: PATHS.src,
    // common: `${PATHS.src}/common.js`, 
  },
  output: {
    filename: `${PATHS.assets}js/[name].[contenthash].js`,
    path: PATHS.dist,
    // publicPath: '/html/edge/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendore: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      // PUG
      {
        test: /\.pug$/,
        oneOf: [
          // this applies to <template lang="pug"> in Vue components
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader'],
          },
          // this applies to pug imports inside JavaScript
          {
            use: ['pug-loader'],
          },
        ],
      },
      // JavaScript and `<script>` внутри файлов `.vue`
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // Vue
      {
        test: /\.vue$/,
        use: ['vue-loader', 'eslint-loader'],
      },
      // CSS and `<style>` внутри файлов `.vue`
      { 
        test: /\.css$/,
        use: [
          'vue-style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
            },
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: './postcss.config.js',
              },
            },
          },
        ],
      },
      // SCSS and `<style lang="scss">` в файлах `.vue`
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
            },
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: './postcss.config.js',
              },
            },
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            // import global vars/mixins/ styles into every component
            loader: 'sass-resources-loader',
            options: {
              resources: [
                // helpers
                // `${PATHS.scss}/global/helpers/_normalize.scss`,
                `${PATHS.scss}/helpers/_variables.scss`,
                // mixins
                `${PATHS.scss}/mixins/_clearfix.scss`,
                `${PATHS.scss}/mixins/_fluid-type.scss`,
                `${PATHS.scss}/mixins/_font-face.scss`,
                `${PATHS.scss}/mixins/_mediaquery.scss`,
                `${PATHS.scss}/mixins/_pseudo.scss`,
              ],
            },
          },
        ],
      },
      // IMG
      {
        test: /\.(png|jpg|gif|svg|webp)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      // fonts
      {
        test: /\.(woff(2)?)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    // alias for shorter name
    alias: {
      '~': 'src', // why do i need this?
      // eslint-disable-next-line quote-props
      'vue$': 'vue/dist/vue.esm.js',
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[contenthash].css`,
    }),
    new CopyWebpackPlugin([{
      from: `${PATHS.src}/${PATHS.assets}/img`,
      to: `${PATHS.assets}img`,
    },
    {
      from: `${PATHS.src}/${PATHS.assets}/fonts`,
      to: `${PATHS.assets}fonts`,
    },
    {
      from: `${PATHS.src}/${PATHS.assets}/static`,
      to: '',
    },
    ]),
    /*
      Automatic creation any html pages (Don't forget to RERUN dev server!)
      See more:
      https://github.com/vedees/webpack-template/blob/master/README.md#create-another-html-files
      Best way to create pages:
      https://github.com/vedees/webpack-template/blob/master/README.md#third-method-best
    */
    ...PAGES.map(
      (page) => new HtmlWebpackPlugin({
        template: `${PAGES_DIR}/${page}`,
        filename: `./${page.replace(/\.pug/, '.html')}`,
      }),
    ),
  ],
};
