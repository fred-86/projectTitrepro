const paths = require('./paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { config } = require('dotenv');

const env = config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  entry: [
    // SCSS
    paths.src + '/styles/index.scss',
    // JS
    paths.src + '/index.js',
  ],
  output: {
    path: paths.build,
    publicPath: '/',
    filename: 'js/[name].[contenthash].js',
  },
  resolve: {
    alias: {
      src: paths.src,
      app: paths.src,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.static,
          to: '',
        }
      ],
    }),

    new HtmlWebpackPlugin({
      favicon: paths.assets + '/favicon.ico',
      template: paths.assets + '/index.html',
    }),

    new webpack.DefinePlugin(envKeys),
  ],

  module: {
    rules: [
      //JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },

      // Fonts
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts/',
        },
      },

      // Images
      {
        test: /\.(ico|gif|png|jpe?g|webp|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { outputPath: 'images/' },
          },
        ],
      },
    ],
  },
};
