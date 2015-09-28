/**
 * @ngdoc service
 * @name wp-api-angularjs.$wpApiTaxonomies
 * @description
 * taxonomies entity
 * @requires  wp-api-angularjs:WpApi
 * @requires  $http
 */
import Parent from './parent.service.js';

export default class extends Parent {

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiTaxonomies#getList
     * @access public
     * @methodOf wp-api-angularjs.$wpApiTaxonomies
     *
     * @description
     * Get taxonomies list
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be serialized with the paramSerializer and appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers to send to the server. If the return value of a function is null, the header will not be sent. Functions accept a config object as an argument.
     * @example
     * <pre>
     * $wpApiTaxonomies.getList({
     *  post_type: "attachment"
     * });
     * </pre>
     * @returns {Object} Promise
     */
    getList(params = {}, data = {}, headers = {}) {
        return super.getList('/taxonomies', params, data, headers);
    }



    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiTaxonomies#get
     * @access public
     * @methodOf wp-api-angularjs.$wpApiTaxonomies
     *
     * @description
     * Get a specific taxonomies by taxonomiesType (category|post_tag)
     *
     * @param {string} taxonomiesType  (category|post_tag)
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    get(taxonomiesType, params, data, headers) {
        super.requiredInput('$wpApiTaxonomies:get', {
            taxonomiesType
        });
        return super.get(`/taxonomies/${taxonomiesType}`, params, data, headers);
    }
}
