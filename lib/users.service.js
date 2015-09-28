/**
 * @ngdoc service
 * @name wp-api-angularjs.$wpApiUsers
 * @description
 * Users entity
 * @requires  wp-api-angularjs.WpApi
 * @requires  $http
 */
import Parent from './parent.service.js';

export default class extends Parent {

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiUsers#getList
     * @access public
     * @methodOf wp-api-angularjs.$wpApiUsers
     *
     * @description
     * Get users list
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @example
     * <pre>
     * $wpApiUsers.getList({
     *  page: 1,
     *  per_page: 10,
     *  search: '',
     *  order: '',
     *  orderby: '',
     *  context: ''
     * });
     * </pre>
     * @returns {Object} Promise
     */
    getList(params, data, headers) {
        return super.getList(`/users`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiUsers#get
     * @access public
     * @methodOf wp-api-angularjs.$wpApiUsers
     *
     * @description
     * Get a specific user by its ID
     *
     * @param {int} userId  The users id
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    get(userId, params, data, headers) {
        super.requiredInput('$wpApiUsers:get', {
            userId
        });
        return super.get(`/users/${userId}`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiUsers#me
     * @access public
     * @methodOf wp-api-angularjs.$wpApiUsers
     *
     * @description
     * [REQUIRES AUTH] Get your user object
     *
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    me(params, data, headers) {
        return super.get(`/users/me`, params, data, headers);
    }
}
