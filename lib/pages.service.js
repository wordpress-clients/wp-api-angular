/**
 * @ngdoc service
 * @name wp-api-angularjs.$wpApiPages
 * @description
 * Pages entity
 * @requires  wp-api-angularjs:WpApi
 * @requires  $http
 */
import Parent from './parent.service.js';

export default class extends Parent {

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiPages#getList
     * @access public
     * @methodOf wp-api-angularjs.$wpApiPages
     *
     * @description
     * Get page list
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be serialized with the paramSerializer and appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers to send to the server. If the return value of a function is null, the header will not be sent. Functions accept a config object as an argument.
     * @example
     * <pre>
     * $wpApiPages.getList({
     *  page: 1,
     *  per_page: 10,
     *  "filter[orderby]": "date"
     *  "filter[orderby]": "asc"
     * });
     * </pre>
     * @returns {Object} Promise
     */
    getList(params = {}, data = {}, headers = {}) {
        return super.getList('/pages', params, data, headers);
    }



    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiPages#get
     * @access public
     * @methodOf wp-api-angularjs.$wpApiPages
     *
     * @description
     * Get a specific page by its ID
     *
     * @param {int} pageId  The page id
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    get(pageId, params, data, headers) {
        super.requiredInput('$wpApiPages:get', {
            pageId
        });
        return super.get(`/pages/${pageId}`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiPages#getMetaList
     * @access public
     * @methodOf wp-api-angularjs.$wpApiPages
     *
     * @description
     * [REQUIRES AUTH] Get a specific page metas
     *
     * @param {int} pageId  The page id
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    getMetaList(pageId, params, data, headers) {
        super.requiredInput('$wpApiPages:getMetaList', {
            pageId
        });
        return super.getList(`/pages/${pageId}/meta`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiPages#getMeta
     * @access public
     * @methodOf wp-api-angularjs.$wpApiPages
     *
     * @description
     * [REQUIRES AUTH] Get a specific page meta by its ID
     *
     * @param {int} pageId  The page id
     * @param {int} metaId  The meta id
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    getMeta(pageId, metaId, params, data, headers) {
        super.requiredInput('$wpApiPages:getMeta', {
            pageId,
            metaId
        });
        return super.get(`/pages/${pageId}/meta/${metaId}`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiPages#getRevisionList
     * @access public
     * @methodOf wp-api-angularjs.$wpApiPages
     *
     * @description
     * [REQUIRES AUTH] Get a specific page revisions
     *
     * @param {int} pageId  The page id
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    getRevisionList(pageId, params, data, headers) {
        super.requiredInput('$wpApiPages:getRevisionList', {
            pageId
        });
        return super.getList(`/pages/${pageId}/revisions`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiPages#getRevision
     * @access public
     * @methodOf wp-api-angularjs.$wpApiPages
     *
     * @description
     * [REQUIRES AUTH] Get a specific page revision its ID
     *
     * @param {int} pageId  The page id
     * @param {int} getRevision  The revision id
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    getRevision(pageId, revisionId, params, data, headers) {
        super.requiredInput('$wpApiPages:getRevision', {
            pageId,
            revisionId
        });
        return super.get(`/pages/${pageId}/revisions/${revisionId}`, params, data, headers);
    }
}
