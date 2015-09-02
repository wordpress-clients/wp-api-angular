/**
 * @ngdoc service
 * @name wp-api-angularjs.$wpApiTerms
 * @description
 * Posts entity
 * @requires  wp-api-angularjs.WpApi
 * @requires  $http
 */
import Parent from './parent.service.js';

export default class extends Parent {

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiTerms#getCategoryList
     * @access public
     * @methodOf wp-api-angularjs.$wpApiTerms
     *
     * @description
     * Get category list
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @example
     * $wpApiTerms.getList({
     *  page: 1,
     *  per_page: 10,
     *  search: '',
     *  order: '',
     *  orderby: '',
     *  parent: '',
     * });
     * @returns {Object} Promise
     */
    getCategoryList(params, data, headers) {
        return super.getList(`/terms/category`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiTerms#getTagList
     * @access public
     * @methodOf wp-api-angularjs.$wpApiTerms
     *
     * @description
     * Get category list
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @example
     * $wpApiTerms.getList({
     *  page: 1,
     *  per_page: 10,
     *  search: '',
     *  order: '',
     *  orderby: ''
     * });
     * @returns {Object} Promise
     */
    getTagList(params, data, headers) {
        return super.getList(`/terms/tag`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiTerms#getCategory
     * @access public
     * @methodOf wp-api-angularjs.$wpApiTerms
     *
     * @description
     * Get a specific category by its ID
     *
     * @param {int} termId  The term id
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    getCategory(termId, params, data, headers) {
        super.requiredInput('$wpApiTerms:get', {
            termId
        });
        return super.get(`/terms/category/${termId}`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiTerms#getTag
     * @access public
     * @methodOf wp-api-angularjs.$wpApiTerms
     *
     * @description
     * Get a specific tag by its ID
     *
     * @param {int} termId  The term id
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    getTag(termId, params, data, headers) {
        super.requiredInput('$wpApiTerms:get', {
            termId
        });
        return super.get(`/terms/tag/${termId}`, params, data, headers);
    }
}
