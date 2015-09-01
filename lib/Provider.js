/**
 * @ngdoc service
 * @name wp-api-angularjs.WpApi
 * @description
 * wp-api-angularjs provider
 */
export default function() {
    'ngInject';
    let baseUrl;
    const namespace = '/wp/v2';

    return {
        $get,
        setBaseUrl
    };

    /**
     * @ngdoc function
     * @name wp-api-angularjs.WpApi#setBaseUrl
     * @access public
     * @methodOf wp-api-angularjs.WpApi
     *
     * @description
     * Set the webserver base url
     * @param {string} newBaseUrl   the url to the webservice
     */
    function setBaseUrl(newBaseUrl) {
        newBaseUrl = stripTrailingSlash(newBaseUrl);
        baseUrl = newBaseUrl + namespace;
    }

    function $get() {
        return {
            getBaseUrl
        };

        function getBaseUrl() {
            return baseUrl;
        }
    }

    function stripTrailingSlash(str) {
        return str.replace(/\/$/, "");
    }
};
