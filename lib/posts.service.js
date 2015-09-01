/**
 * @ngdoc service
 * @name wp-api-angularjs.$wpApiPosts
 * @description
 * Posts entity
 * @requires  wp-api-angularjs.WpApi
 * @requires  $http
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
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be serialized with the paramSerializer and appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers to send to the server. If the return value of a function is null, the header will not be sent. Functions accept a config object as an argument.
     * @example
     * $wpApiPosts.getList({
     *  page: 1,
     *  per_page: 10,
     *  "filter[orderby]": "date"
     *  "filter[orderby]": "asc"
     * });
     * @returns {Object} Promise
     */
    getList(params, data, headers) {
        return super.getList(`/posts`, params, data, headers);
    }
    get(postId, params, data, headers) {
        return super.get(`/posts/${postId}`, params, data, headers);
    }
    getMetaList(postId, params, data, headers) {
        return super.getList(`/posts/${postId}/meta`, params, data, headers);
    }
    getMeta(postId, metaId, params, data, headers) {
        return super.get(`/posts/${postId}/meta/${metaId}`, params, data, headers);
    }
    getRevisionList(postId, params, data, headers) {
        return super.getList(`/posts/${postId}/revisions`, params, data, headers);
    }
    getRevision(postId, revisionId, params, data, headers) {
        return super.get(`/posts/${postId}/revisions/${revisionId}`, params, data, headers);
    }
    getCategoryList(postId, params, data, headers) {
        return super.getList(`/posts/${postId}/terms/category`, params, data, headers);
    }
    getCategory(postId, categoryId, params, data, headers) {
        return super.get(`/posts/${postId}/terms/category/${categoryId}`, params, data, headers);
    }
    getTagList(postId, params, data, headers) {
        return super.getList(`/posts/${postId}/terms/tag`, params, data, headers);
    }
    getTag(postId, tagId, params, data, headers) {
        return super.get(`/posts/${postId}/terms/tag/${tagId}`, params, data, headers);
    }
}
