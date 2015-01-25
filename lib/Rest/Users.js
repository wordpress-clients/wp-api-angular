module.exports = angular
    .module('wp-api-angularjs.services.users', ['restangular'])
    .factory('$wpApiUsers', function(Restangular) {
        var users = Restangular.service('users');

        users.$getList = getList;
        users.$get = get;
        users.$getMe = getMe;
        users.$create = create;

        return users;

        function getList(query) {
            return users.getList(query);
        }

        function get(id, query) {
            return users.one(id).get(query);
        }

        function getMe() {
            return get('me');
        }

        function create(object) {
            return users.post(object);
        }
    });