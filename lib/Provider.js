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
        oauth1Description,
        authType = null,
        httpProperties = {},
        oauth1 = {
            key: '',
            signature: '',
            callback: ''
        };

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
        setAuthenticationType,
        setOauth1Description,
        setOauth1Credentials,
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

    function setAuthenticationType(type = null) {
        if (authType) {
            throw new Error('Authentication as been already set, you cannot change it anymore');
        }
        if (['oauth1', 'basic'].indexOf(type) < 0) {
            throw new Error('Authentication can be either basic or oauth1');
        }
        authType = type;
        return this;
    }

    // THIS IS TEMPORARY TILL WP_API TEAM PUT THE DESCRIPTION OBJECT BACK IN v2
    function setOauth1Description(list = {}) {
        oauth1Description = list;
        return this;
    }

    function setOauth1Credentials(key, signature, callback) {
        oauth1.key = key;
        oauth1.signature = signature;
        oauth1.callback = callback;
        return this;
    }

    function setBasicCredentials(login, password) {
        let encodedCredentials = jsBase64.Base64.encode(`${login}:${password}`);
        $httpProvider.defaults.headers.common['Authorization'] = 'Basic ' + encodedCredentials;
        return this;
    }

    function addInterceptor(func) {
        $httpProvider.interceptors.push(func);
        return this;
    }

    function setDefaultHttpProperties(properties = {}) {
        angular.merge(httpProperties, properties);
        return this;
    }

    function $get($http) {
        'ngInject';

        return {
            getBaseUrl,
            sendOauth1Request,
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

        function sendOauth1Request() {
            return $http({
                method: 'POST',
                url: oauth1Description.request,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'Authorization': `OAuth realm="wp-api-angularjs",oauth_consumer_key="${oauth1.key}",oauth_signature_method="HMAC-SHA1",oauth_callback="${oauth1.callback}",oauth_signature="${oauth1.signature}",oauth_timestamp="${new Date().getTime() * 1000}",oauth_nonce="${Math.random().toString(36).substring(7)}"`
                }
            });
        }
    }

    function stripTrailingSlash(str) {
        return str.replace(/\/$/, "");
    }
};
