/**
 * @ngdoc service
 * @name wp-api-angularjs.$wpApiMedia
 * @description
 * media entity
 * @requires  wp-api-angularjs:WpApi
 * @requires  $http
 */
import Parent from './parent.service.js';

export default class extends Parent {

    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiMedia#getList
     * @access public
     * @methodOf wp-api-angularjs.$wpApiMedia
     *
     * @description
     * Get media list
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be serialized with the paramSerializer and appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers to send to the server. If the return value of a function is null, the header will not be sent. Functions accept a config object as an argument.
     * @example
     * $wpApiMedia.getList({
     *  page: 1,
     *  per_page: 10,
     *  "filter[orderby]": "date"
     *  "filter[orderby]": "asc"
     * });
     * @returns {Object} Promise
     */
    getList(params = {}, data = {}, headers = {}) {
        return super.getList('/media', params, data, headers);
    }



    /**
     * @ngdoc function
     * @name wp-api-angularjs.$wpApiMedia#get
     * @access public
     * @methodOf wp-api-angularjs.$wpApiMedia
     *
     * @description
     * Get a specific media by its ID
     *
     * @param {int} mediaId  The media id
     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
     * @returns {Object} Promise
     */
    get(mediaId, params, data, headers) {
        super.requiredInput('$wpApiMedia:get', {
            mediaId
        });
        return super.get(`/media/${mediaId}`, params, data, headers);
    }
}
