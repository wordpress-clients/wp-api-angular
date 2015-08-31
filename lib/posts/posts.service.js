/**
 * @ngdoc service
 * @name wp-api-angularjs.post
 * @description
 * Posts entity
 * @requires  wp-api-angularjs:WpApi
 * @requires  $http
 */

export default class {
    constructor(WpApi, $http) {
        'ngInject';

        this.baseUrl = WpApi.getBaseUrl();
        this.$http = $http;
    }

    /**
     * @ngdoc function
     * @name getPosts
     * @access public
     * @methodOf wp-api-angularjs.post:getPosts
     *
     * @description
     * Get post list
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be serialized with the paramSerializer and appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers to send to the server. If the return value of a function is null, the header will not be sent. Functions accept a config object as an argument.
     * @example
     * $wpApiPosts.getPosts({
     *  page: 1,
     *  per_page: 10,
     *  "filter[orderby]": "date"
     *  "filter[orderby]": "asc"
     * });
     * @returns {Object} Promise
     */
    getPosts(params = {}, data = {}, headers = {}) {
        return this.$http.get(this.baseUrl + '/posts', {
            params,
            data,
            headers
        });
    }
}
