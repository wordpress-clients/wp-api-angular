var path = require('path'),
  webpack = require("webpack"),
  demoPath = path.join(__dirname, 'demo'),
  wwwPath = path.join(__dirname, 'www'),
  docsPath = path.join(__dirname, 'docs'),
  pkg = require('./package.json'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: [
      'core-js',
      'reflect-metadata/Reflect.js',
      'zone.js',
      '@angular/core',
      'rxjs',
      'rxjs/add/operator/toPromise',
      path.join(demoPath, 'index.ts')
    ]
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
    extensions: ['', '.ts', '.js', '.json']
  },
  ts: {
    configFileName: './tsconfig.demo.json'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      pkg: pkg,
      inject: 'body',
      template: path.join(demoPath, 'index.html')
    })]
};
