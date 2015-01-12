require('angular');
require('expose?_!underscore');
require('restangular');

module.exports = angular.module('wp-api-angularjs.test', [
        require('../dist/wp-api-angularjs.js').name, // import the lib
        require('./MainController').name
    ])
    .config(function(WpApiProvider) {
        var RestangularProvider = WpApiProvider.getRestangularProvider();
        RestangularProvider.setBaseUrl('http://shprinkone.julienrenaux.fr/wp-json');
        RestangularProvider.setRestangularFields({
            id: "ID"
        });
    })
    .run(function($log) {
        $log.info('test running');
    });