/**
 * @ngdoc service
 * @name wp-api-angularjs.$wpApiPosts
 * @description
 * Posts entity
 * @requires  $injector
 */
import Parent from './parent.service.js';

export default class extends Parent {

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiPosts#getList
     * @access public
     * @methodOf wp-api-angularjs.$wpApiPosts
     *
     * @description
     * Get post list
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @example
     * <pre>
     * $wpApiPosts.getList({
     *  page: 1,
     *  per_page: 10,
     *  "filter[orderby]": "date"
     *  "filter[orderby]": "asc"
     * });
     * </pre>
     * @returns {Object} Promise
     */
    getList(params, data, headers) {
        return super.getList(`/posts`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiPosts#get
     * @access public
     * @methodOf wp-api-angularjs.$wpApiPosts
     *
     * @description
     * Get a specific post by its ID
     *
     * @param {int} postId  The post id
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    get(postId, params, data, headers) {
        super.requiredInput('$wpApiPosts:get', {
            postId
        });
        return super.get(`/posts/${postId}`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiPosts#getMetaList
     * @access public
     * @methodOf wp-api-angularjs.$wpApiPosts
     *
     * @description
     * [REQUIRES AUTH] Get a specific post metas
     *
     * @param {int} postId  The post id
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    getMetaList(postId, params, data, headers) {
        super.requiredInput('$wpApiPosts:getMetaList', {
            postId
        });
        return super.getList(`/posts/${postId}/meta`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiPosts#getMeta
     * @access public
     * @methodOf wp-api-angularjs.$wpApiPosts
     *
     * @description
     * [REQUIRES AUTH] Get a specific post meta by its ID
     *
     * @param {int} postId  The post id
     * @param {int} metaId  The meta id
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    getMeta(postId, metaId, params, data, headers) {
        super.requiredInput('$wpApiPosts:getMeta', {
            postId,
            metaId
        });
        return super.get(`/posts/${postId}/meta/${metaId}`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiPosts#getRevisionList
     * @access public
     * @methodOf wp-api-angularjs.$wpApiPosts
     *
     * @description
     * [REQUIRES AUTH] Get a specific post revisions
     *
     * @param {int} postId  The post id
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    getRevisionList(postId, params, data, headers) {
        super.requiredInput('$wpApiPosts:getRevisionList', {
            postId
        });
        return super.getList(`/posts/${postId}/revisions`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiPosts#getRevision
     * @access public
     * @methodOf wp-api-angularjs.$wpApiPosts
     *
     * @description
     * [REQUIRES AUTH] Get a specific post revision its ID
     *
     * @param {int} postId  The post id
     * @param {int} getRevision  The revision id
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    getRevision(postId, revisionId, params, data, headers) {
        super.requiredInput('$wpApiPosts:getRevision', {
            postId,
            revisionId
        });
        return super.get(`/posts/${postId}/revisions/${revisionId}`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiPosts#getCategoryList
     * @access public
     * @methodOf wp-api-angularjs.$wpApiPosts
     *
     * @description
     * Get a specific post category list
     *
     * @param {int} postId  The post id
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    getCategoryList(postId, params, data, headers) {
        super.requiredInput('$wpApiPosts:getCategoryList', {
            postId
        });
        return super.getList(`/posts/${postId}/terms/category`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiPosts#getCategory
     * @access public
     * @methodOf wp-api-angularjs.$wpApiPosts
     *
     * @description
     * Get a specific post category its ID
     *
     * @param {int} postId  The post id
     * @param {int} categoryId  The category id
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    getCategory(postId, categoryId, params, data, headers) {
        super.requiredInput('$wpApiPosts:getCategory', {
            postId,
            categoryId
        });
        return super.get(`/posts/${postId}/terms/category/${categoryId}`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiPosts#getTagList
     * @access public
     * @methodOf wp-api-angularjs.$wpApiPosts
     *
     * @description
     * Get a specific post tag list
     *
     * @param {int} postId  The post id
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    getTagList(postId, params, data, headers) {
        super.requiredInput('$wpApiPosts:getTagList', {
            postId
        });
        return super.getList(`/posts/${postId}/terms/tag`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiPosts#getTag
     * @access public
     * @methodOf wp-api-angularjs.$wpApiPosts
     *
     * @description
     * Get a specific post tag its ID

     * @param {int} postId  The post id
     * @param {int} tagId  The tag id
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    getTag(postId, tagId, params, data, headers) {
        super.requiredInput('$wpApiPosts:getTag', {
            postId,
            tagId
        });
        return super.get(`/posts/${postId}/terms/tag/${tagId}`, params, data, headers);
    }
}
