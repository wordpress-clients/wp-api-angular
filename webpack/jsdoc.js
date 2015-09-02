var gulp = require('gulp'),
    ngdocs = require('gulp-ngdocs'),
    path = require('path');

function jsdocPlugin(options) {
    this.options = options || {};
}

jsdocPlugin.prototype.apply = function(compiler) {
    var self = this;
    compiler.plugin('emit', function(compiler, callback) {
        if (!self.options.glob) {
            compiler.errors.push(new Error('Need an input for docs'));
            callback();
        }
        if (!self.options.output) {
            compiler.errors.push(new Error('Need an output for docs'));
            callback();
        }
        ngdocsOptions = self.options.ngdocs || {};
        gulp.src(self.options.glob)
            .pipe(ngdocs.process(ngdocsOptions))
            .pipe(gulp.dest(self.options.output));
        callback();
    });
};
module.exports = jsdocPlugin;
