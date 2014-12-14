var path = require('path'),
    testPath = path.join(__dirname, 'test'),
    wwwPath = path.join(__dirname, 'www'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

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
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'test.html',
        title: 'wp-api-angularjs',
        template: path.join(testPath, 'test.html')
    })]
};