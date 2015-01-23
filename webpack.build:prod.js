var path = require('path'),
    webpack = require("webpack"),
    libPath = path.join(__dirname, 'lib'),
    distPath = path.join(__dirname, 'dist'),
    ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    // entry: path.join(libPath, 'index.js'),
    output: {
        path: distPath,
        // filename: 'wp-api-angularjs.min.js'
    },
    plugins: [
        new ngAnnotatePlugin({
            add: true
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
};