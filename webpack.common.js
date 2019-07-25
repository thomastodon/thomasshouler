const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/main.js',
  stats: {
    all: false,
    assets: true,
    colors: true,
    errors: true,
    errorDetails: true,
    moduleTrace: true,
    performance: true,
    warnings: true,
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'index.html', title: 'Production'}),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(['dist']),
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {loaders: {}}
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
        options: {name: 'assets/[name].[ext]'}
      },
      {
        test: /\.csv$/,
        loader: 'file-loader',
        options: {name: 'data/[name].[ext]'}
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  performance: {
    hints: false
  }
};