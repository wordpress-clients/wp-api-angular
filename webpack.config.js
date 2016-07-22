var path = require('path'),
  webpack = require("webpack"),
  demoPath = path.join(__dirname, 'demo'),
  wwwPath = path.join(__dirname, 'www'),
  docsPath = path.join(__dirname, 'docs'),
  pkg = require('./package.json'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    aPolyfills: [
      'core-js',
      'reflect-metadata',
      'zone.js'
    ],
    bVendors: [
      '@angular/core',
      'rxjs',
      'rxjs/add/operator/toPromise'
    ],
    cApp: path.join(demoPath, 'index.ts')
  },
  output: {
    path: wwwPath,
    filename: '[name]-[hash:6].js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        loader: 'ts'
      }
    ]
  },
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      [pkg.name]: pkg.main
    },
    extensions: ['', '.ts', '.js', '.json']
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      pkg: pkg,
      inject: 'body',
      template: path.join(demoPath, 'index.html')
    })]
};
