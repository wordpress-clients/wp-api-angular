module.exports = angular
    .module('wp-api-angularjs.services.media', ['restangular'])
    .factory('$wpApiMedia', function(Restangular) {
        var media = Restangular.service('media');

        media.$getList = getList;
        media.$get = get;
        media.$create = create;

        return media;

        function getList(query) {
            return media.getList(query);
        }

        function get(id, query) {
            return media.one(id).get(query);
        }

        function create(object) {
            return media.post(object);
        }
    });