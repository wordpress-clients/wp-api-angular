module.exports = angular
    .module('wp-api-angularjs.services.taxonomies', ['restangular'])
    .factory('$wpApiTaxonomies', function(Restangular) {
        var taxonomies = Restangular.service('taxonomies');

        taxonomies.$getList = getList;
        taxonomies.$get = get;
        taxonomies.$getTermList = getTerms;
        taxonomies.$getTerm = getTerm;

        return taxonomies;

        function getList(query) {
            return taxonomies.getList(query);
        }

        function get(taxonomy, query) {
            return taxonomies.one(taxonomy).get(query);
        }

        function getTerms(taxonomy) {
            return taxonomies.one(taxonomy).getList('terms');
        }

        function getTerm(taxonomy, id) {
            return taxonomies.one(taxonomy).one('terms', id).get();
        }
    });