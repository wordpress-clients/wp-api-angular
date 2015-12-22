/**
 * @ngdoc service
 * @name wp-api-angularjs.$wpApiTerms
 * @description
 * Posts entity
 * @requires  $injector
 */
import Parent from './parent.service.js';

export default class extends Parent {

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiTerms#getCustomList
     * @access public
     * @methodOf wp-api-angularjs.$wpApiTerms
     *
     * @description
     * Get category list
     * @param {string} taxonomiesType  (category|post_tag|anythingYouWant)
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @example
     * <pre>
     * $wpApiTerms.getCustomList('anything', {
     *  page: 1,
     *  per_page: 10,
     *  search: '',
     *  order: '',
     *  orderby: '',
     *  parent: '',
     * });
     * </pre>
     * @returns {Object} Promise
     */
    getCustomList(taxonomiesType, params, data, headers) {
        return super.getList(`/${taxonomiesType}`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiTerms#getCustom
     * @access public
     * @methodOf wp-api-angularjs.$wpApiTerms
     *
     * @description
     * Get a specific tag by its ID
     *
     * @param {string} taxonomiesType  (category|post_tag|anythingYouWant)
     * @param {int} termId  The term id
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    getCustom(taxonomiesType, termId, params, data, headers) {
        super.requiredInput('$wpApiTerms:getCustom', {
            taxonomiesType,
            termId
        });
        return super.get(`/${taxonomiesType}/${termId}`, params, data, headers);
    }

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
     * <pre>
     * $wpApiTerms.getCategoryList({
     *  page: 1,
     *  per_page: 10,
     *  search: '',
     *  order: '',
     *  orderby: '',
     *  parent: '',
     * });
     * </pre>
     * @returns {Object} Promise
     */
    getCategoryList(params, data, headers) {
        return super.getList(`/categories`, params, data, headers);
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
     * <pre>
     * $wpApiTerms.getTagList({
     *  page: 1,
     *  per_page: 10,
     *  search: '',
     *  order: '',
     *  orderby: ''
     * });
     * </pre>
     * @returns {Object} Promise
     */
    getTagList(params, data, headers) {
        return super.getList(`/tags`, params, data, headers);
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
        return super.get(`/categories/${termId}`, params, data, headers);
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
        return super.get(`/tags/${termId}`, params, data, headers);
    }
}
