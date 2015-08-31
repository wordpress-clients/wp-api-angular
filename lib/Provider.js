/**
 * @ngdoc service
 * @name wp-api-angularjs
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
