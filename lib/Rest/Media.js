module.exports = angular
    .module('wp-api-angularjs.services.media', ['restangular'])
    .factory('$wpApiMedia', function(Restangular) {
        var media = Restangular.service('media');

        media.$getList = getList;
        media.$get = get;
        media.$create = create;

        return media;

        function getList() {
            return media.getList();
        }

        function get(id) {
            return media.one(id).get();
        }

        function create(object) {
            return media.post(object);
        }
    });