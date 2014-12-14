require('angular');
require('expose?_!underscore');
require('restangular');

module.exports = angular.module('wp-api-angularjs.test', [
        require('../lib/index.js').name, // import the lib
        require('./MainController').name
    ])
    .run(function($log) {
        $log.info('test running');
    });