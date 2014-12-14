module.exports = angular.module('wp-api-angularjs', [
    'restangular',
    require('./Rest/Services').name
]).config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://shprinkone.julienrenaux.fr/wp-json');
    RestangularProvider.setRestangularFields({
        id: "ID"
    });
});