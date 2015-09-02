/**
 * @ngdoc service
 * @name wp-api-angularjs.WpApi
 * @description
 * wp-api-angularjs service
 */
 /**
  * @ngdoc service
  * @name wp-api-angularjs.WpApiProvider
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
     * @name wp-api-angularjs.WpApiProvider#setBaseUrl
     * @access public
     * @methodOf wp-api-angularjs.WpApiProvider
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

        /**
         * @ngdoc function
         * @name wp-api-angularjs.WpApi#getBaseUrl
         * @access public
         * @methodOf wp-api-angularjs.WpApi
         *
         * @description
         * Get the webserver base url
         */
        function getBaseUrl() {
            return baseUrl;
        }
    }

    function stripTrailingSlash(str) {
        return str.replace(/\/$/, "");
    }
};
