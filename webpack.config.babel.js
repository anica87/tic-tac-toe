import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';

// see: https://github.com/webpack/webpack/issues/2537
const isProd = process.env.NODE_ENV === 'production';

export default {
  context: __dirname,
  mode: isProd ? 'production' : 'development',
  bail: isProd,
  devtool: 'source-map',
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },

  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.jsx?$/,
            enforce: 'pre',
            exclude: /node_modules|coverage/,
            use: [
              'babel-loader',
              // 'eslint-loader',
            ],
          },
          {
            test: /\.scss$/,
            use: [
              'style-loader', // creates style nodes from JS strings
              'css-loader', // translates CSS into CommonJS
              'sass-loader', // compiles Sass to CSS, using Node Sass by default
            ],
          },
          {
            test: /\.(jpe?g|png)(\?[a-z0-9=.]+)?$/,
            loader: 'url-loader?limit=100000',
          },
          {
            test: /\.svg$/,
            use: [
              'babel-loader',
              {
                loader: 'react-svg-loader',
                options: {
                  svgo: {
                    plugins: [
                      { moveStyleElement: true },
                      { removeTitle: true },
                      { removeDesc: true },
                      { removeUselessDefs: true },
                      { removeDimensions: false },
                      { removeViewBox: false },
                      { removeRasterImages: true },
                      { collapseGroups: true },
                      { cleanupNumericValues: { floatPrecision: 1 } },
                      { removeEmptyContainers: true },
                      { removeEmptyAttrs: true },
                      { cleanupAttrs: true },
                      { cleanupIDs: false },
                    ],
                    floatPrecision: 2,
                  },
                },
              },
            ],
          },
          {
            // Exclude `js` files to keep "css" loader working as it injects
            // its runtime that would otherwise processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
    }),

    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Project is running at http://localhost:8080'],
        notes: ['Run linter with: yarn lint', 'Run tests with: yarn test'],
      },
    }),
  ],

  devServer: {
    historyApiFallback: true,
    contentBase: false,
    noInfo: true,
    quiet: true,

    // Shows a full-screen overlay in the browser when there
    // are compiler errors or warnings.
    overlay: {
      errors: true,
    },
  },
};
