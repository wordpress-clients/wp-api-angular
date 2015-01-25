module.exports = angular
    .module('wp-api-angularjs.services.posts', ['restangular'])
    .factory('$wpApiPosts', function(Restangular) {
        var posts = Restangular.service('posts');

        posts.$getList = getList;
        posts.$get = get;
        posts.$create = create;

        return posts;

        function getList(query) {
            return posts.getList(query);
        }

        function get(id, query) {
            return posts.one(id).get(query);
        }

        function create(object) {
            return posts.post(object);
        }
    });