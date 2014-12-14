module.exports = angular
    .module('wp-api-angularjs.services.posts', [])
    .factory('$wpApiPosts', function($log, Restangular) {
        return Restangular.service('posts');
    });