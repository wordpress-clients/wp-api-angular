module.exports = angular.module('wp-api-angularjs.provider', [
    'restangular'
]).provider('WpApi', function WpApiProvider(RestangularProvider) {
    var restangularProvider = RestangularProvider;

    this.getRestangularProvider = function() {
        return restangularProvider;
    };

    this.$get = function() {
        return restangularProvider;
    };
});