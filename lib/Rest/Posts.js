var helper = require("../helper.js");

module.exports = angular
    .module('wp-api-angularjs.services.posts', ['restangular'])
    .factory('$wpApiPosts', function (Restangular) {
        var posts = Restangular.service('posts');

        posts.$getList = getList;
        posts.$get = get;
        posts.$create = create;

        return posts;

        function getList(filters) {
            return posts.getList(helper.filterize(filters));
        }

        function get(id, query) {
            var query = query || {};
            return posts.one(id).get(query);
        }

        function create(object) {
            return posts.post(object);
        }
    });