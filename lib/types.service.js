/**
 * @ngdoc service
 * @name wp-api-angularjs.$wpApiTypes
 * @description
 * postType entity post|page|attachment
 * @requires  wp-api-angularjs:WpApi
 * @requires  $http
 */
import Parent from './parent.service.js';

export default class extends Parent {

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiTypes#getList
     * @access public
     * @methodOf wp-api-angularjs.$wpApiTypes
     *
     * @description
     * Get type list
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be serialized with the paramSerializer and appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers to send to the server. If the return value of a function is null, the header will not be sent. Functions accept a config object as an argument.
     * @example
     * <pre>
     * $wpApiTypes.getList({
     *  post_type: "attachment"
     * });
     * </pre>
     * @returns {Object} Promise
     */
    getList(params = {}, data = {}, headers = {}) {
        return super.getList('/types', params, data, headers);
    }



    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiTypes#get
     * @access public
     * @methodOf wp-api-angularjs.$wpApiTypes
     *
     * @description
     * Get a specific postType
     *
     * @param {string} postType  (post|page|attachment)
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    get(postType, params, data, headers) {
        super.requiredInput('$wpApiTypes:get', {
            postType
        });
        return super.get(`/types/${postType}`, params, data, headers);
    }
}
