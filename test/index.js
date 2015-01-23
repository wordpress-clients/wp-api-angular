require('angular');
require('../dist/wp-api-angularjs.bundle.js');

module.exports = angular.module('wp-api-angularjs.test', [
        'wp-api-angularjs', // import the lib
        require('./MainController').name
    ])
    .config(function (WpApiProvider) {
        var RestangularProvider = WpApiProvider.getRestangularProvider();
        RestangularProvider.setBaseUrl('http://shprinkone.julienrenaux.fr/wp-json');
        RestangularProvider.setRestangularFields({
            id: "ID"
        });
    })
    .run(function ($log) {
        $log.info('test running');
    });