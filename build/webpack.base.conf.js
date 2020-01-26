const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //clean dist folder before build

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
}

module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src,
    lk: `${PATHS.src}/lk.js`,
  },
  output: {
    filename: `${PATHS.assets}js/[name].[contenthash].js`,
    path: PATHS.dist,
    // publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendore: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      // Vue
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options:{
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader'
          }
        }
      },
      //CSS
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false
            },
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: `${PATHS.src}/js/postcss.config.js`
              }
            },
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            },
          }
        ]
      },
      //SCSS
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false
            },
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: `${PATHS.src}/js/postcss.config.js`
              }
            },
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            },
          }
        ]
      }, 
      //IMG
      {
        test: /\.(png|jpg|gif|svg|webp)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    //alias for shorter name
    alias: {
      'vue$': 'vue/dist/vue.esm.js' 
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[contenthash].css`,
    }),
    new htmlWebpackPlugin({
      template: `${PATHS.src}/index.html`,
      filename: './index.html',
      //inject: false //remove css and js injection
    }),
    new copyWebpackPlugin([{
      from: `${PATHS.src}/img`,
      to: `${PATHS.assets}img`
    }, {
      from: `${PATHS.src}/static`,
      to: ''
    }])
  ],
}