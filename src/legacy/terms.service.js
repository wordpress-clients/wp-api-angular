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
     * Get a specific term by its ID
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
     * @name wp-api-angularjs.$wpApiTerms#createCustom
     * @access public
     * @methodOf wp-api-angularjs.$wpApiTerms
     *
     * @description
     * [REQUIRES AUTH] Create a term
     *
     * @param {string} taxonomiesType  (category|post_tag|anythingYouWant)
     * @param {object} data  Required: {string|Object} – Data to be sent as the request message data.
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    createCustom(taxonomiesType, data, params, headers) {
        super.requiredInput('$wpApiTerms:create', {
            taxonomiesType
        });
        return super.post(`/${taxonomiesType}`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiTerms#updateCustom
     * @access public
     * @methodOf wp-api-angularjs.$wpApiTerms
     *
     * @description
     * [REQUIRES AUTH] Update a specific term by its ID
     *
     * @param {string} taxonomiesType  (category|post_tag|anythingYouWant)
     * @param {int} termId  The term id
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    updateCustom(taxonomiesType, termId, data, params, headers) {
        super.requiredInput('$wpApiTerms:update', {
            taxonomiesType,
            termId
        });
        return super.post(`/${taxonomiesType}/${termId}`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiTerms#deleteCustom
     * @access public
     * @methodOf wp-api-angularjs.$wpApiTerms
     *
     * @description
     * [REQUIRES AUTH] Delete a specific term by its ID
     *
     * @param {string} taxonomiesType  (category|post_tag|anythingYouWant)
     * @param {int} termId  The term id
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    deleteCustom(taxonomiesType, termId, data = { force: true }, params, headers) {
        super.requiredInput('$wpApiTerms:delete', {
            taxonomiesType,
            termId
        });
        return super.delete(`/${taxonomiesType}/${termId}`, params, data, headers);
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
     * @name wp-api-angularjs.$wpApiTerms#createCategory
     * @access public
     * @methodOf wp-api-angularjs.$wpApiTerms
     *
     * @description
     * [REQUIRES AUTH] Create a category
     *
     * @param {object} data  Required: {string|Object} – Data to be sent as the request message data.
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    createCategory(data, params, headers) {
        return super.post(`/categories`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiTerms#updateCategory
     * @access public
     * @methodOf wp-api-angularjs.$wpApiTerms
     *
     * @description
     * [REQUIRES AUTH] Update a specific category by its ID
     *
     * @param {int} termId  The term id
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    updateCategory(termId, data, params, headers) {
        super.requiredInput('$wpApiTerms:update', {
            termId
        });
        return super.post(`/categories/${termId}`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiTerms#deleteCategory
     * @access public
     * @methodOf wp-api-angularjs.$wpApiTerms
     *
     * @description
     * [REQUIRES AUTH] Delete a specific category by its ID
     *
     * @param {int} termId  The term id
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    deleteCategory(termId, data = { force: true }, params, headers) {
        super.requiredInput('$wpApiTerms:delete', {
            termId
        });
        return super.delete(`/categories/${termId}`, params, data, headers);
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

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiTerms#createTag
     * @access public
     * @methodOf wp-api-angularjs.$wpApiTerms
     *
     * @description
     * [REQUIRES AUTH] Create a tag
     *
     * @param {object} data  Required: {string|Object} – Data to be sent as the request message data.
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    createTag(data, params, headers) {
        return super.post(`/tags`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiTerms#updateTag
     * @access public
     * @methodOf wp-api-angularjs.$wpApiTerms
     *
     * @description
     * [REQUIRES AUTH] Update a specific tag by its ID
     *
     * @param {int} termId  The term id
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    updateTag(termId, data, params, headers) {
        super.requiredInput('$wpApiTerms:update', {
            termId
        });
        return super.post(`/tags/${termId}`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiTerms#deleteTag
     * @access public
     * @methodOf wp-api-angularjs.$wpApiTerms
     *
     * @description
     * [REQUIRES AUTH] Delete a specific tag by its ID
     *
     * @param {int} termId  The term id
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    deleteTag(termId, data = { force: true }, params, headers) {
        super.requiredInput('$wpApiTerms:delete', {
            termId
        });
        return super.delete(`/tags/${termId}`, params, data, headers);
    }
}
