var path = require('path'),
  testPath = path.join(__dirname, 'test'),
  wwwPath = path.join(__dirname, 'www'),
  docsPath = path.join(__dirname, 'docs'),
  JSdoc = require('./webpack/jsdoc.js'),
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
    app: path.join(testPath, 'v2', 'index.ts')
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
    template: path.join(testPath, 'v2', 'index.html')
  }), new JSdoc({
    glob: [
      './lib/**/*.js'
    ],
    output: docsPath,
    ngdocs: {
      html5Mode: false,
      title: pkg.name,
      titleLink: '/wp-api-angularjs'
    }
  })]
};
