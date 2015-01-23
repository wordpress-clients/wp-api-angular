var gulp = require('gulp'),
    path = require('path'),
    gutil = require("gulp-util"),
    header = require('gulp-header'),
    webpack = require('gulp-webpack'),
    extend = require('util')._extend,
    pkg = require('./package.json'),
    clone = require('clone'),
    // webpack = require("webpack"),
    webpackDevConfig = require("./webpack.build:dev"),
    webpackProdConfig = require("./webpack.build:prod");

var banner = ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @author <%= pkg.author %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''
].join('\n');

gulp.task('default', ['build']);
gulp.task('build', ['build:dev', 'build:dev.bundle', 'build:prod', 'build:prod.bundle']);

gulp.task("build:dev", function (callback) {
    var webpackConfig = clone(webpackDevConfig);
    webpackConfig.entry = path.join(__dirname, 'lib', 'index.js');
    webpackConfig.output.filename = pkg.name + '.js';
    return gulp.src(webpackConfig.entry)
        .pipe(webpack(webpackConfig))
        .pipe(header(banner, {
            pkg: pkg
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task("build:dev.bundle", function (callback) {
    var webpackConfig = clone(webpackDevConfig);
    webpackConfig.entry = path.join(__dirname, 'lib', 'index.bundle.js');
    webpackConfig.output.filename = pkg.name + '.bundle.js';
    return gulp.src(webpackConfig.entry)
        .pipe(webpack(webpackConfig))
        .pipe(header(banner, {
            pkg: pkg
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task("build:prod", function (callback) {
    var webpackConfig = clone(webpackProdConfig);
    webpackConfig.entry = path.join(__dirname, 'lib', 'index.js');
    webpackConfig.output.filename = pkg.name + '.min.js';
    return gulp.src(webpackConfig.entry)
        .pipe(webpack(webpackConfig))
        .pipe(header(banner, {
            pkg: pkg
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task("build:prod.bundle", function (callback) {
    var webpackConfig = clone(webpackProdConfig);
    webpackConfig.entry = path.join(__dirname, 'lib', 'index.bundle.js');
    webpackConfig.output.filename = pkg.name + '.bundle.min.js';
    return gulp.src(webpackConfig.entry)
        .pipe(webpack(webpackConfig))
        .pipe(header(banner, {
            pkg: pkg
        }))
        .pipe(gulp.dest('dist/'));
});