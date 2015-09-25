var path = require('path'),
    testPath = path.join(__dirname, 'test'),
    wwwPath = path.join(__dirname, 'www'),
    docsPath = path.join(__dirname, 'docs'),
    JSdoc = require('./webpack/jsdoc.js'),
    pkg = require('./package.json'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(JSdoc)

module.exports = {
    entry: path.join(testPath, 'index.js'),
    output: {
        path: wwwPath,
        filename: 'test.js'
    },
    module: {
        loaders: [{
            test: /[\/]angular\.js$/,
            loader: 'expose?angular!exports?window.angular'
        }, {
            test: /\.json$/,
            loader: "json"
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: "ng-annotate?add=true!babel"
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        title: 'wp-api-angularjs',
        template: path.join(testPath, 'index.html')
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
