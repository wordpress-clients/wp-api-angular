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
import jsBase64 from 'js-base64';

export default function($httpProvider) {
    'ngInject';

    let baseUrl,
        authType = null,
        httpProperties = {};

    const namespace = '/wp/v2';

    // Give access to total ans pages header by default
    $httpProvider.interceptors.push(() => {
        return {
            response: (response) => {
                response.wpApiHeaders = {
                    total: response.headers('X-WP-Total'),
                    pages: response.headers('X-WP-TotalPages')
                }
                return response;
            }
        }
    });

    return {
        $get,
        setBaseUrl,
        setBasicCredentials,
        // $http configuration
        addInterceptor,
        setDefaultHttpProperties
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
        return this;
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.WpApiProvider#setBasicCredentials
     * @access public
     * @methodOf wp-api-angularjs.WpApiProvider
     *
     * @description
     * Set the basic auth credentials during configuration. This is not recommended as it exposes credential out of the open.
     * Please use WpApi.setBasicCredentials instead, with user input (this lib do not provides the form needed)
     * @param {string} login    login
     * @param {string} password password
     */

    /**
     * @ngdoc function
     * @name wp-api-angularjs.WpApi#setBasicCredentials
     * @access public
     * @methodOf wp-api-angularjs.WpApi
     *
     * @description
     * Set the basic auth credentials during runtime. Make sure your WP-API runs with an SSL certificate (https) otherwise this will expose your credentials at every request. Display a form for users to connect and use the following code to register credentials.
     * @param {string} login    login
     * @param {string} password password
     */
    function setBasicCredentials(login, password) {
        let encodedCredentials = jsBase64.Base64.encode(`${login}:${password}`);
        $httpProvider.defaults.headers.common['Authorization'] = 'Basic ' + encodedCredentials;
        return this;
    }

    /**
     * @ngdoc function
     * @name wp-api-angularjs.WpApiProvider#addInterceptor
     * @access public
     * @methodOf wp-api-angularjs.WpApiProvider
     *
     * @description
     * Allow you to modify requests, responses or errors
     * https://docs.angularjs.org/api/ng/service/$http#interceptors
     * @example
     * <pre>
     * WpApiProvider.addInterceptor(() => {
     *     return {
     *         response: (response) => {
     *             // DO something with the response here
     *             return response;
     *         }
     *     }
     * });
     * </pre>
     * @param {function} func   the interceptor definition
     */
    function addInterceptor(func) {
        $httpProvider.interceptors.push(func);
        return this;
    }


    /**
     * @ngdoc function
     * @name wp-api-angularjs.WpApiProvider#setDefaultHttpProperties
     * @access public
     * @methodOf wp-api-angularjs.WpApiProvider
     *
     * @description
     * Allow you to overwrite http defaults
     * https://docs.angularjs.org/api/ng/service/$http#setting-http-headers
     * @example
     * <pre>
     * WpApiProvider.setDefaultHttpProperties({
     *     timeout: 20000
     * });
     * </pre>
     * @param {object} properties   the properties to overwrite
     */
    function setDefaultHttpProperties(properties = {}) {
        angular.merge(httpProperties, properties);
        return this;
    }

    function $get($http) {
        'ngInject';

        return {
            getBaseUrl,
            setBasicCredentials,
            getDefaultHttpProperties
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

        /**
         * @ngdoc function
         * @name wp-api-angularjs.WpApi#getDefaultHttpProperties
         * @access public
         * @methodOf wp-api-angularjs.WpApi
         *
         * @description
         * Get the http properties to inejct in each http request
         */
        function getDefaultHttpProperties() {
            return httpProperties;
        }
    }

    function stripTrailingSlash(str) {
        return str.replace(/\/$/, "");
    }
};
