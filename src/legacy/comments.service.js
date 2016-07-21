/**
 * @ngdoc service
 * @name wp-api-angularjs.$wpApiComments
 * @description
 * Comments entity
 * @requires  $injector
 */
import Parent from './parent.service.js';

export default class extends Parent {

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiComments#getList
     * @access public
     * @methodOf wp-api-angularjs.$wpApiComments
     *
     * @description
     * Get comment list
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be serialized with the paramSerializer and appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers to send to the server. If the return value of a function is null, the header will not be sent. Functions accept a config object as an argument.
     * @example
     * <pre>
     * $wpApiComments.getList({
     *  page: 1,
     *  per_page: 10,
     *  search: '',
     *  author_email: '',
     *  karma: '',
     *  parent: 9,
     *  comment: 5,
     *  comment_author: '',
     *  comment_slug: '',
     *  comment_parent: '',
     *  comment_status: '',
     *  comment_type: 'page',
     *  status: 'approve',
     *  type: 'comment',
     *  user: 9
     * });
     * </pre>
     * @returns {Object} Promise
     */
    getList(params = {}, data = {}, headers = {}) {
        return super.getList('/comments', params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiComments#get
     * @access public
     * @methodOf wp-api-angularjs.$wpApiComments
     *
     * @description
     * Get a specific comment by its ID
     *
     * @param {int} commentId  The comment id
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    get(commentId, params, data, headers) {
        super.requiredInput('$wpApiComments:get', {
            commentId
        });
        return super.get(`/comments/${commentId}`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiComments#create
     * @access public
     * @methodOf wp-api-angularjs.$wpApiComments
     *
     * @description
     * [REQUIRES AUTH] Create a new comment
     *
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    create(data, params, headers) {
        return super.post(`/comments`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiComments#update
     * @access public
     * @methodOf wp-api-angularjs.$wpApiComments
     *
     * @description
     * [REQUIRES AUTH] Update a specific comment by its ID
     *
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    update(commentId, data, params, headers) {
        super.requiredInput('$wpApiComments:update', {
            commentId
        });
        return super.post(`/comments/${commentId}`, params, data, headers);
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiComments#delete
     * @access public
     * @methodOf wp-api-angularjs.$wpApiComments
     *
     * @description
     * [REQUIRES AUTH] Delete a specific comment by its ID
     *
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    delete(commentId, data, params, headers) {
        super.requiredInput('$wpApiComments:delete', {
            commentId
        });
        return super.delete(`/comments/${commentId}`, data, params, headers);
    }
}
