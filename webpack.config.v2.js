var path = require('path'),
    testPath = path.join(__dirname, 'test'),
    wwwPath = path.join(__dirname, 'www'),
    docsPath = path.join(__dirname, 'docs'),
    JSdoc = require('./webpack/jsdoc.js'),
    pkg = require('./package.json'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'app': path.join(testPath, 'v2', 'bootstrap.ts')
    },
    output: {
        path: wwwPath,
        filename: '[name]-[hash:6].js'
    },
    module: {
        loaders: [{
            test: /\.json$/,
            loader: "json"
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: "ng-annotate?add=true!babel"
        }, {
            test: /\.ts$/,
            loader: 'ts',
            query: {
                'ignoreDiagnostics': [
                    // 2300, // 2300 -> Duplicate identifier
                    // 2309 // 2309 -> An export assignment cannot be used in a module with other exported elements.
                ]
            },
            exclude: [
                /\.min\.js$/,
                /\.spec\.ts$/,
                /\.e2e\.ts$/,
                /web_modules/,
                /node_modules/
            ]
        }]
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.json']
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        pkg: pkg,
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
