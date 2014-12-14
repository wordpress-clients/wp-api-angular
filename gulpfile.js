var gulp = require('gulp'),
    gutil = require("gulp-util"),
    extend = require('util')._extend,
    webpack = require("webpack"),
    webpackDevConfig = require("./webpack.build:dev"),
    webpackProdConfig = require("./webpack.build:prod");

gulp.task('default', ['build:dev', 'build:prod']);
gulp.task('build', ['build:dev', 'build:prod']);

gulp.task("build:dev", function(callback) {
    return webpack(webpackDevConfig, function(err, stats) {
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task("build:prod", function(callback) {
    return webpack(webpackProdConfig, function(err, stats) {
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        callback();
    });
});