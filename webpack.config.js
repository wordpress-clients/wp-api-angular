var path = require('path'),
  demoPath = path.join(__dirname, 'demo'),
  wwwPath = path.join(__dirname, 'www'),
  docsPath = path.join(__dirname, 'docs'),
  pkg = require('./package.json'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    polyfills: [
      'core-js',
      'reflect-metadata',
      'zone.js'
    ],
    vendors: [
      'rxjs',
      'rxjs/add/operator/toPromise'
    ],
    app: path.join(demoPath, 'index.ts')
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
    extensions: ['', '.ts', '.js', '.json']
  },
  plugins: [new HtmlWebpackPlugin({
    pkg: pkg,
    inject: 'body',
    template: path.join(demoPath, 'index.html')
  })]
};
