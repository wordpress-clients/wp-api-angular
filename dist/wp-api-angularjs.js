/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _providerJs = __webpack_require__(/*! ./provider.js */ 3);
	
	var _providerJs2 = _interopRequireDefault(_providerJs);
	
	var _postsServiceJs = __webpack_require__(/*! ./posts.service.js */ 9);
	
	var _postsServiceJs2 = _interopRequireDefault(_postsServiceJs);
	
	var _pagesServiceJs = __webpack_require__(/*! ./pages.service.js */ 10);
	
	var _pagesServiceJs2 = _interopRequireDefault(_pagesServiceJs);
	
	var _mediaServiceJs = __webpack_require__(/*! ./media.service.js */ 11);
	
	var _mediaServiceJs2 = _interopRequireDefault(_mediaServiceJs);
	
	var _typesServiceJs = __webpack_require__(/*! ./types.service.js */ 12);
	
	var _typesServiceJs2 = _interopRequireDefault(_typesServiceJs);
	
	var _statusesServiceJs = __webpack_require__(/*! ./statuses.service.js */ 1);
	
	var _statusesServiceJs2 = _interopRequireDefault(_statusesServiceJs);
	
	var _taxonomiesServiceJs = __webpack_require__(/*! ./taxonomies.service.js */ 13);
	
	var _taxonomiesServiceJs2 = _interopRequireDefault(_taxonomiesServiceJs);
	
	var _termsServiceJs = __webpack_require__(/*! ./terms.service.js */ 14);
	
	var _termsServiceJs2 = _interopRequireDefault(_termsServiceJs);
	
	var _usersServiceJs = __webpack_require__(/*! ./users.service.js */ 15);
	
	var _usersServiceJs2 = _interopRequireDefault(_usersServiceJs);
	
	var _commentsServiceJs = __webpack_require__(/*! ./comments.service.js */ 16);
	
	var _commentsServiceJs2 = _interopRequireDefault(_commentsServiceJs);
	
	var mod = angular.module('wp-api-angularjs', []);
	
	mod.provider('WpApi', _providerJs2['default']);
	mod.service('$wpApiPosts', _postsServiceJs2['default']);
	mod.service('$wpApiPages', _pagesServiceJs2['default']);
	mod.service('$wpApiMedia', _mediaServiceJs2['default']);
	mod.service('$wpApiTypes', _typesServiceJs2['default']);
	mod.service('$wpApiStatuses', _statusesServiceJs2['default']);
	mod.service('$wpApiTaxonomies', _taxonomiesServiceJs2['default']);
	mod.service('$wpApiTerms', _termsServiceJs2['default']);
	mod.service('$wpApiUsers', _usersServiceJs2['default']);
	mod.service('$wpApiComments', _commentsServiceJs2['default']);
	
	exports['default'] = mod = mod.name;
	module.exports = exports['default'];

/***/ },
/* 1 */
/*!*********************************!*\
  !*** ./lib/statuses.service.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ngdoc service
	 * @name wp-api-angularjs.$wpApiStatuses
	 * @description
	 * statuses entity
	 * @requires  wp-api-angularjs:WpApi
	 * @requires  $http
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _parentServiceJs = __webpack_require__(/*! ./parent.service.js */ 2);
	
	var _parentServiceJs2 = _interopRequireDefault(_parentServiceJs);
	
	var _default = (function (_Parent) {
	    _inherits(_default, _Parent);
	
	    function _default() {
	        _classCallCheck(this, _default);
	
	        _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(_default, [{
	        key: 'getList',
	
	        /**
	         * @ngdoc function
	         * @name wp-api-angularjs.$wpApiStatuses#getList
	         * @access public
	         * @methodOf wp-api-angularjs.$wpApiStatuses
	         *
	         * @description
	         * Get statuses list
	         * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be serialized with the paramSerializer and appended as GET parameters.
	         * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
	         * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers to send to the server. If the return value of a function is null, the header will not be sent. Functions accept a config object as an argument.
	         * @example
	         * <pre>
	         * $wpApiStatuses.getList({});
	         * </pre>
	         * @returns {Object} Promise
	         */
	        value: function getList() {
	            var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	            var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	            var headers = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	            return _get(Object.getPrototypeOf(_default.prototype), 'getList', this).call(this, '/statuses', params, data, headers);
	        }
	
	        /**
	         * @ngdoc function
	         * @name wp-api-angularjs.$wpApiStatuses#get
	         * @access public
	         * @methodOf wp-api-angularjs.$wpApiStatuses
	         *
	         * @description
	         * Get a specific statuses by its ID
	         *
	         * @param {string} statusesName  The statuses name
	         * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
	         * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
	         * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
	         * @returns {Object} Promise
	         */
	    }, {
	        key: 'get',
	        value: function get(statusesName, params, data, headers) {
	            _get(Object.getPrototypeOf(_default.prototype), 'requiredInput', this).call(this, '$wpApiStatuses:get', {
	                statusesName: statusesName
	            });
	            return _get(Object.getPrototypeOf(_default.prototype), 'get', this).call(this, '/statuses/' + statusesName, params, data, headers);
	        }
	    }]);

	    return _default;
	})(_parentServiceJs2['default']);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 2 */
/*!*******************************!*\
  !*** ./lib/parent.service.js ***!
  \*******************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _default = (function () {
	    function _default(WpApi, $http) {
	        'ngInject';
	
	        _classCallCheck(this, _default);
	
	        this.baseUrl = WpApi.getBaseUrl();
	        this.defaultHttpProperties = WpApi.getDefaultHttpProperties();
	        this.$http = $http;
	    }
	    _default.$inject = ["WpApi", "$http"];
	
	    _createClass(_default, [{
	        key: 'getList',
	        value: function getList(suffix) {
	            var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	            var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	            var headers = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	            return this.$http(angular.merge({}, this.defaultHttpProperties, {
	                method: 'GET',
	                url: this.baseUrl + suffix,
	                params: params,
	                data: data,
	                headers: headers
	            }));
	        }
	    }, {
	        key: 'get',
	        value: function get(suffix) {
	            var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	            var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	            var headers = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	            return this.$http(angular.merge({}, this.defaultHttpProperties, {
	                method: 'GET',
	                url: this.baseUrl + suffix,
	                params: params,
	                data: data,
	                headers: headers
	            }));
	        }
	    }, {
	        key: 'requiredInput',
	        value: function requiredInput(functionName, inputs) {
	            angular.forEach(inputs, function (value, name) {
	                if (typeof value !== 'undefined') return;
	                throw new Error('Parameter ' + name + ' from function ' + functionName + ' is required');
	            });
	        }
	    }]);

	    return _default;
	})();

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 3 */
/*!*************************!*\
  !*** ./lib/provider.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

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
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jsBase64 = __webpack_require__(/*! js-base64 */ 4);
	
	var _jsBase642 = _interopRequireDefault(_jsBase64);
	
	exports['default'] = ["$httpProvider", function ($httpProvider) {
	    'ngInject';
	
	    var baseUrl = undefined,
	        authType = null,
	        httpProperties = {};
	
	    var namespace = '/wp/v2';
	
	    // Give access to total ans pages header by default
	    $httpProvider.interceptors.push(function () {
	        return {
	            response: function response(_response) {
	                _response.wpApiHeaders = {
	                    total: _response.headers('X-WP-Total'),
	                    pages: _response.headers('X-WP-TotalPages')
	                };
	                return _response;
	            }
	        };
	    });
	
	    $get.$inject = ["$http"];
	    return {
	        $get: $get,
	        setBaseUrl: setBaseUrl,
	        setBasicCredentials: setBasicCredentials,
	        // $http configuration
	        addInterceptor: addInterceptor,
	        setDefaultHttpProperties: setDefaultHttpProperties
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
	        var encodedCredentials = _jsBase642['default'].Base64.encode(login + ':' + password);
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
	    function setDefaultHttpProperties() {
	        var properties = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        angular.merge(httpProperties, properties);
	        return this;
	    }
	
	    function $get($http) {
	        'ngInject';
	
	        return {
	            getBaseUrl: getBaseUrl,
	            setBasicCredentials: setBasicCredentials,
	            getDefaultHttpProperties: getDefaultHttpProperties
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
	}];
	
	;
	module.exports = exports['default'];

/***/ },
/* 4 */
/*!*******************************!*\
  !*** ./~/js-base64/base64.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/*
	 * $Id: base64.js,v 2.15 2014/04/05 12:58:57 dankogai Exp dankogai $
	 *
	 *  Licensed under the MIT license.
	 *    http://opensource.org/licenses/mit-license
	 *
	 *  References:
	 *    http://en.wikipedia.org/wiki/Base64
	 */
	
	(function(global) {
	    'use strict';
	    // existing version for noConflict()
	    var _Base64 = global.Base64;
	    var version = "2.1.9";
	    // if node.js, we use Buffer
	    var buffer;
	    if (typeof module !== 'undefined' && module.exports) {
	        try {
	            buffer = __webpack_require__(/*! buffer */ 5).Buffer;
	        } catch (err) {}
	    }
	    // constants
	    var b64chars
	        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	    var b64tab = function(bin) {
	        var t = {};
	        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
	        return t;
	    }(b64chars);
	    var fromCharCode = String.fromCharCode;
	    // encoder stuff
	    var cb_utob = function(c) {
	        if (c.length < 2) {
	            var cc = c.charCodeAt(0);
	            return cc < 0x80 ? c
	                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
	                                + fromCharCode(0x80 | (cc & 0x3f)))
	                : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
	                   + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
	                   + fromCharCode(0x80 | ( cc         & 0x3f)));
	        } else {
	            var cc = 0x10000
	                + (c.charCodeAt(0) - 0xD800) * 0x400
	                + (c.charCodeAt(1) - 0xDC00);
	            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
	                    + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
	                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
	                    + fromCharCode(0x80 | ( cc         & 0x3f)));
	        }
	    };
	    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
	    var utob = function(u) {
	        return u.replace(re_utob, cb_utob);
	    };
	    var cb_encode = function(ccc) {
	        var padlen = [0, 2, 1][ccc.length % 3],
	        ord = ccc.charCodeAt(0) << 16
	            | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
	            | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
	        chars = [
	            b64chars.charAt( ord >>> 18),
	            b64chars.charAt((ord >>> 12) & 63),
	            padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
	            padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
	        ];
	        return chars.join('');
	    };
	    var btoa = global.btoa ? function(b) {
	        return global.btoa(b);
	    } : function(b) {
	        return b.replace(/[\s\S]{1,3}/g, cb_encode);
	    };
	    var _encode = buffer ? function (u) {
	        return (u.constructor === buffer.constructor ? u : new buffer(u))
	        .toString('base64')
	    }
	    : function (u) { return btoa(utob(u)) }
	    ;
	    var encode = function(u, urisafe) {
	        return !urisafe
	            ? _encode(String(u))
	            : _encode(String(u)).replace(/[+\/]/g, function(m0) {
	                return m0 == '+' ? '-' : '_';
	            }).replace(/=/g, '');
	    };
	    var encodeURI = function(u) { return encode(u, true) };
	    // decoder stuff
	    var re_btou = new RegExp([
	        '[\xC0-\xDF][\x80-\xBF]',
	        '[\xE0-\xEF][\x80-\xBF]{2}',
	        '[\xF0-\xF7][\x80-\xBF]{3}'
	    ].join('|'), 'g');
	    var cb_btou = function(cccc) {
	        switch(cccc.length) {
	        case 4:
	            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
	                |    ((0x3f & cccc.charCodeAt(1)) << 12)
	                |    ((0x3f & cccc.charCodeAt(2)) <<  6)
	                |     (0x3f & cccc.charCodeAt(3)),
	            offset = cp - 0x10000;
	            return (fromCharCode((offset  >>> 10) + 0xD800)
	                    + fromCharCode((offset & 0x3FF) + 0xDC00));
	        case 3:
	            return fromCharCode(
	                ((0x0f & cccc.charCodeAt(0)) << 12)
	                    | ((0x3f & cccc.charCodeAt(1)) << 6)
	                    |  (0x3f & cccc.charCodeAt(2))
	            );
	        default:
	            return  fromCharCode(
	                ((0x1f & cccc.charCodeAt(0)) << 6)
	                    |  (0x3f & cccc.charCodeAt(1))
	            );
	        }
	    };
	    var btou = function(b) {
	        return b.replace(re_btou, cb_btou);
	    };
	    var cb_decode = function(cccc) {
	        var len = cccc.length,
	        padlen = len % 4,
	        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
	            | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
	            | (len > 2 ? b64tab[cccc.charAt(2)] <<  6 : 0)
	            | (len > 3 ? b64tab[cccc.charAt(3)]       : 0),
	        chars = [
	            fromCharCode( n >>> 16),
	            fromCharCode((n >>>  8) & 0xff),
	            fromCharCode( n         & 0xff)
	        ];
	        chars.length -= [0, 0, 2, 1][padlen];
	        return chars.join('');
	    };
	    var atob = global.atob ? function(a) {
	        return global.atob(a);
	    } : function(a){
	        return a.replace(/[\s\S]{1,4}/g, cb_decode);
	    };
	    var _decode = buffer ? function(a) {
	        return (a.constructor === buffer.constructor
	                ? a : new buffer(a, 'base64')).toString();
	    }
	    : function(a) { return btou(atob(a)) };
	    var decode = function(a){
	        return _decode(
	            String(a).replace(/[-_]/g, function(m0) { return m0 == '-' ? '+' : '/' })
	                .replace(/[^A-Za-z0-9\+\/]/g, '')
	        );
	    };
	    var noConflict = function() {
	        var Base64 = global.Base64;
	        global.Base64 = _Base64;
	        return Base64;
	    };
	    // export Base64
	    global.Base64 = {
	        VERSION: version,
	        atob: atob,
	        btoa: btoa,
	        fromBase64: decode,
	        toBase64: encode,
	        utob: utob,
	        encode: encode,
	        encodeURI: encodeURI,
	        btou: btou,
	        decode: decode,
	        noConflict: noConflict
	    };
	    // if ES5 is available, make Base64.extendString() available
	    if (typeof Object.defineProperty === 'function') {
	        var noEnum = function(v){
	            return {value:v,enumerable:false,writable:true,configurable:true};
	        };
	        global.Base64.extendString = function () {
	            Object.defineProperty(
	                String.prototype, 'fromBase64', noEnum(function () {
	                    return decode(this)
	                }));
	            Object.defineProperty(
	                String.prototype, 'toBase64', noEnum(function (urisafe) {
	                    return encode(this, urisafe)
	                }));
	            Object.defineProperty(
	                String.prototype, 'toBase64URI', noEnum(function () {
	                    return encode(this, true)
	                }));
	        };
	    }
	    // that's it!
	    if (global['Meteor']) {
	       Base64 = global.Base64; // for normal export in Meteor.js
	    }
	})(this);


/***/ },
/* 5 */
/*!*******************************************************!*\
  !*** (webpack)/~/node-libs-browser/~/buffer/index.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	
	var base64 = __webpack_require__(/*! base64-js */ 6)
	var ieee754 = __webpack_require__(/*! ieee754 */ 7)
	var isArray = __webpack_require__(/*! is-array */ 8)
	
	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	Buffer.poolSize = 8192 // not used by this implementation
	
	var rootParent = {}
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property
	 *     on objects.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.
	
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = (function () {
	  function Bar () {}
	  try {
	    var arr = new Uint8Array(1)
	    arr.foo = function () { return 42 }
	    arr.constructor = Bar
	    return arr.foo() === 42 && // typed array instances can be augmented
	        arr.constructor === Bar && // constructor can be set
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	})()
	
	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}
	
	/**
	 * Class: Buffer
	 * =============
	 *
	 * The Buffer constructor returns instances of `Uint8Array` that are augmented
	 * with function properties for all the node `Buffer` API functions. We use
	 * `Uint8Array` so that square bracket notation works as expected -- it returns
	 * a single octet.
	 *
	 * By augmenting the instances, we can avoid modifying the `Uint8Array`
	 * prototype.
	 */
	function Buffer (arg) {
	  if (!(this instanceof Buffer)) {
	    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
	    if (arguments.length > 1) return new Buffer(arg, arguments[1])
	    return new Buffer(arg)
	  }
	
	  this.length = 0
	  this.parent = undefined
	
	  // Common case.
	  if (typeof arg === 'number') {
	    return fromNumber(this, arg)
	  }
	
	  // Slightly less common case.
	  if (typeof arg === 'string') {
	    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
	  }
	
	  // Unusual.
	  return fromObject(this, arg)
	}
	
	function fromNumber (that, length) {
	  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < length; i++) {
	      that[i] = 0
	    }
	  }
	  return that
	}
	
	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'
	
	  // Assumption: byteLength() return value is always < kMaxLength.
	  var length = byteLength(string, encoding) | 0
	  that = allocate(that, length)
	
	  that.write(string, encoding)
	  return that
	}
	
	function fromObject (that, object) {
	  if (Buffer.isBuffer(object)) return fromBuffer(that, object)
	
	  if (isArray(object)) return fromArray(that, object)
	
	  if (object == null) {
	    throw new TypeError('must start with number, buffer, array or string')
	  }
	
	  if (typeof ArrayBuffer !== 'undefined') {
	    if (object.buffer instanceof ArrayBuffer) {
	      return fromTypedArray(that, object)
	    }
	    if (object instanceof ArrayBuffer) {
	      return fromArrayBuffer(that, object)
	    }
	  }
	
	  if (object.length) return fromArrayLike(that, object)
	
	  return fromJsonObject(that, object)
	}
	
	function fromBuffer (that, buffer) {
	  var length = checked(buffer.length) | 0
	  that = allocate(that, length)
	  buffer.copy(that, 0, 0, length)
	  return that
	}
	
	function fromArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	// Duplicate of fromArray() to keep fromArray() monomorphic.
	function fromTypedArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  // Truncating the elements is probably not what people expect from typed
	  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
	  // of the old Buffer constructor.
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	function fromArrayBuffer (that, array) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    array.byteLength
	    that = Buffer._augment(new Uint8Array(array))
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromTypedArray(that, new Uint8Array(array))
	  }
	  return that
	}
	
	function fromArrayLike (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
	// Returns a zero-length buffer for inputs that don't conform to the spec.
	function fromJsonObject (that, object) {
	  var array
	  var length = 0
	
	  if (object.type === 'Buffer' && isArray(object.data)) {
	    array = object.data
	    length = checked(array.length) | 0
	  }
	  that = allocate(that, length)
	
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	function allocate (that, length) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = Buffer._augment(new Uint8Array(length))
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that.length = length
	    that._isBuffer = true
	  }
	
	  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
	  if (fromPool) that.parent = rootParent
	
	  return that
	}
	
	function checked (length) {
	  // Note: cannot use `length < kMaxLength` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	
	function SlowBuffer (subject, encoding) {
	  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)
	
	  var buf = new Buffer(subject, encoding)
	  delete buf.parent
	  return buf
	}
	
	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}
	
	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }
	
	  if (a === b) return 0
	
	  var x = a.length
	  var y = b.length
	
	  var i = 0
	  var len = Math.min(x, y)
	  while (i < len) {
	    if (a[i] !== b[i]) break
	
	    ++i
	  }
	
	  if (i !== len) {
	    x = a[i]
	    y = b[i]
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'binary':
	    case 'base64':
	    case 'raw':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}
	
	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')
	
	  if (list.length === 0) {
	    return new Buffer(0)
	  }
	
	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; i++) {
	      length += list[i].length
	    }
	  }
	
	  var buf = new Buffer(length)
	  var pos = 0
	  for (i = 0; i < list.length; i++) {
	    var item = list[i]
	    item.copy(buf, pos)
	    pos += item.length
	  }
	  return buf
	}
	
	function byteLength (string, encoding) {
	  if (typeof string !== 'string') string = '' + string
	
	  var len = string.length
	  if (len === 0) return 0
	
	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'binary':
	      // Deprecated
	      case 'raw':
	      case 'raws':
	        return len
	      case 'utf8':
	      case 'utf-8':
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength
	
	// pre-set for values that may exist in the future
	Buffer.prototype.length = undefined
	Buffer.prototype.parent = undefined
	
	function slowToString (encoding, start, end) {
	  var loweredCase = false
	
	  start = start | 0
	  end = end === undefined || end === Infinity ? this.length : end | 0
	
	  if (!encoding) encoding = 'utf8'
	  if (start < 0) start = 0
	  if (end > this.length) end = this.length
	  if (end <= start) return ''
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	
	      case 'ascii':
	        return asciiSlice(this, start, end)
	
	      case 'binary':
	        return binarySlice(this, start, end)
	
	      case 'base64':
	        return base64Slice(this, start, end)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}
	
	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}
	
	Buffer.prototype.compare = function compare (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return 0
	  return Buffer.compare(this, b)
	}
	
	Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
	  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
	  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
	  byteOffset >>= 0
	
	  if (this.length === 0) return -1
	  if (byteOffset >= this.length) return -1
	
	  // Negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)
	
	  if (typeof val === 'string') {
	    if (val.length === 0) return -1 // special case: looking for empty string always fails
	    return String.prototype.indexOf.call(this, val, byteOffset)
	  }
	  if (Buffer.isBuffer(val)) {
	    return arrayIndexOf(this, val, byteOffset)
	  }
	  if (typeof val === 'number') {
	    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
	      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
	    }
	    return arrayIndexOf(this, [ val ], byteOffset)
	  }
	
	  function arrayIndexOf (arr, val, byteOffset) {
	    var foundIndex = -1
	    for (var i = 0; byteOffset + i < arr.length; i++) {
	      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
	      } else {
	        foundIndex = -1
	      }
	    }
	    return -1
	  }
	
	  throw new TypeError('val must be string, number or Buffer')
	}
	
	// `get` is deprecated
	Buffer.prototype.get = function get (offset) {
	  console.log('.get() is deprecated. Access using array indexes instead.')
	  return this.readUInt8(offset)
	}
	
	// `set` is deprecated
	Buffer.prototype.set = function set (v, offset) {
	  console.log('.set() is deprecated. Access using array indexes instead.')
	  return this.writeUInt8(v, offset)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	
	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new Error('Invalid hex string')
	
	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; i++) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) throw new Error('Invalid hex string')
	    buf[offset + i] = parsed
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	
	function binaryWrite (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    var swap = encoding
	    encoding = offset
	    offset = length | 0
	    length = swap
	  }
	
	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining
	
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('attempt to write outside buffer bounds')
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)
	
	      case 'ascii':
	        return asciiWrite(this, string, offset, length)
	
	      case 'binary':
	        return binaryWrite(this, string, offset, length)
	
	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []
	
	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1
	
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint
	
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }
	
	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }
	
	    res.push(codePoint)
	    i += bytesPerSequence
	  }
	
	  return decodeCodePointsArray(res)
	}
	
	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000
	
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }
	
	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}
	
	function binarySlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; i++) {
	    out += toHex(buf[i])
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}
	
	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }
	
	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }
	
	  if (end < start) end = start
	
	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = Buffer._augment(this.subarray(start, end))
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; i++) {
	      newBuf[i] = this[i + start]
	    }
	  }
	
	  if (newBuf.length) newBuf.parent = this.parent || this
	
	  return newBuf
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }
	
	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}
	
	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	}
	
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)
	
	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)
	
	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = value
	  return offset + 1
	}
	
	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}
	
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = value
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}
	
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = value
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = value
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = 0
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = value
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = value
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = value
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	  if (offset < 0) throw new RangeError('index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start
	
	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	
	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }
	
	  var len = end - start
	  var i
	
	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; i--) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; i++) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    target._set(this.subarray(start, start + len), targetStart)
	  }
	
	  return len
	}
	
	// fill(value, start=0, end=buffer.length)
	Buffer.prototype.fill = function fill (value, start, end) {
	  if (!value) value = 0
	  if (!start) start = 0
	  if (!end) end = this.length
	
	  if (end < start) throw new RangeError('end < start')
	
	  // Fill 0 bytes; we're done
	  if (end === start) return
	  if (this.length === 0) return
	
	  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
	  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')
	
	  var i
	  if (typeof value === 'number') {
	    for (i = start; i < end; i++) {
	      this[i] = value
	    }
	  } else {
	    var bytes = utf8ToBytes(value.toString())
	    var len = bytes.length
	    for (i = start; i < end; i++) {
	      this[i] = bytes[i % len]
	    }
	  }
	
	  return this
	}
	
	/**
	 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
	 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
	 */
	Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
	  if (typeof Uint8Array !== 'undefined') {
	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      return (new Buffer(this)).buffer
	    } else {
	      var buf = new Uint8Array(this.length)
	      for (var i = 0, len = buf.length; i < len; i += 1) {
	        buf[i] = this[i]
	      }
	      return buf.buffer
	    }
	  } else {
	    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
	  }
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var BP = Buffer.prototype
	
	/**
	 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
	 */
	Buffer._augment = function _augment (arr) {
	  arr.constructor = Buffer
	  arr._isBuffer = true
	
	  // save reference to original Uint8Array set method before overwriting
	  arr._set = arr.set
	
	  // deprecated
	  arr.get = BP.get
	  arr.set = BP.set
	
	  arr.write = BP.write
	  arr.toString = BP.toString
	  arr.toLocaleString = BP.toString
	  arr.toJSON = BP.toJSON
	  arr.equals = BP.equals
	  arr.compare = BP.compare
	  arr.indexOf = BP.indexOf
	  arr.copy = BP.copy
	  arr.slice = BP.slice
	  arr.readUIntLE = BP.readUIntLE
	  arr.readUIntBE = BP.readUIntBE
	  arr.readUInt8 = BP.readUInt8
	  arr.readUInt16LE = BP.readUInt16LE
	  arr.readUInt16BE = BP.readUInt16BE
	  arr.readUInt32LE = BP.readUInt32LE
	  arr.readUInt32BE = BP.readUInt32BE
	  arr.readIntLE = BP.readIntLE
	  arr.readIntBE = BP.readIntBE
	  arr.readInt8 = BP.readInt8
	  arr.readInt16LE = BP.readInt16LE
	  arr.readInt16BE = BP.readInt16BE
	  arr.readInt32LE = BP.readInt32LE
	  arr.readInt32BE = BP.readInt32BE
	  arr.readFloatLE = BP.readFloatLE
	  arr.readFloatBE = BP.readFloatBE
	  arr.readDoubleLE = BP.readDoubleLE
	  arr.readDoubleBE = BP.readDoubleBE
	  arr.writeUInt8 = BP.writeUInt8
	  arr.writeUIntLE = BP.writeUIntLE
	  arr.writeUIntBE = BP.writeUIntBE
	  arr.writeUInt16LE = BP.writeUInt16LE
	  arr.writeUInt16BE = BP.writeUInt16BE
	  arr.writeUInt32LE = BP.writeUInt32LE
	  arr.writeUInt32BE = BP.writeUInt32BE
	  arr.writeIntLE = BP.writeIntLE
	  arr.writeIntBE = BP.writeIntBE
	  arr.writeInt8 = BP.writeInt8
	  arr.writeInt16LE = BP.writeInt16LE
	  arr.writeInt16BE = BP.writeInt16BE
	  arr.writeInt32LE = BP.writeInt32LE
	  arr.writeInt32BE = BP.writeInt32BE
	  arr.writeFloatLE = BP.writeFloatLE
	  arr.writeFloatBE = BP.writeFloatBE
	  arr.writeDoubleLE = BP.writeDoubleLE
	  arr.writeDoubleBE = BP.writeDoubleBE
	  arr.fill = BP.fill
	  arr.inspect = BP.inspect
	  arr.toArrayBuffer = BP.toArrayBuffer
	
	  return arr
	}
	
	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g
	
	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}
	
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	
	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	
	  for (var i = 0; i < length; i++) {
	    codePoint = string.charCodeAt(i)
	
	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }
	
	        // valid lead
	        leadSurrogate = codePoint
	
	        continue
	      }
	
	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }
	
	      // valid surrogate pair
	      codePoint = leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00 | 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }
	
	    leadSurrogate = null
	
	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }
	
	  return bytes
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    if ((units -= 2) < 0) break
	
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}
	
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; i++) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/buffer/index.js */ 5).Buffer))

/***/ },
/* 6 */
/*!*********************************************************************!*\
  !*** (webpack)/~/node-libs-browser/~/buffer/~/base64-js/lib/b64.js ***!
  \*********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	
	;(function (exports) {
		'use strict';
	
	  var Arr = (typeof Uint8Array !== 'undefined')
	    ? Uint8Array
	    : Array
	
		var PLUS   = '+'.charCodeAt(0)
		var SLASH  = '/'.charCodeAt(0)
		var NUMBER = '0'.charCodeAt(0)
		var LOWER  = 'a'.charCodeAt(0)
		var UPPER  = 'A'.charCodeAt(0)
		var PLUS_URL_SAFE = '-'.charCodeAt(0)
		var SLASH_URL_SAFE = '_'.charCodeAt(0)
	
		function decode (elt) {
			var code = elt.charCodeAt(0)
			if (code === PLUS ||
			    code === PLUS_URL_SAFE)
				return 62 // '+'
			if (code === SLASH ||
			    code === SLASH_URL_SAFE)
				return 63 // '/'
			if (code < NUMBER)
				return -1 //no match
			if (code < NUMBER + 10)
				return code - NUMBER + 26 + 26
			if (code < UPPER + 26)
				return code - UPPER
			if (code < LOWER + 26)
				return code - LOWER + 26
		}
	
		function b64ToByteArray (b64) {
			var i, j, l, tmp, placeHolders, arr
	
			if (b64.length % 4 > 0) {
				throw new Error('Invalid string. Length must be a multiple of 4')
			}
	
			// the number of equal signs (place holders)
			// if there are two placeholders, than the two characters before it
			// represent one byte
			// if there is only one, then the three characters before it represent 2 bytes
			// this is just a cheap hack to not do indexOf twice
			var len = b64.length
			placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0
	
			// base64 is 4/3 + up to two characters of the original data
			arr = new Arr(b64.length * 3 / 4 - placeHolders)
	
			// if there are placeholders, only get up to the last complete 4 chars
			l = placeHolders > 0 ? b64.length - 4 : b64.length
	
			var L = 0
	
			function push (v) {
				arr[L++] = v
			}
	
			for (i = 0, j = 0; i < l; i += 4, j += 3) {
				tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
				push((tmp & 0xFF0000) >> 16)
				push((tmp & 0xFF00) >> 8)
				push(tmp & 0xFF)
			}
	
			if (placeHolders === 2) {
				tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
				push(tmp & 0xFF)
			} else if (placeHolders === 1) {
				tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
				push((tmp >> 8) & 0xFF)
				push(tmp & 0xFF)
			}
	
			return arr
		}
	
		function uint8ToBase64 (uint8) {
			var i,
				extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
				output = "",
				temp, length
	
			function encode (num) {
				return lookup.charAt(num)
			}
	
			function tripletToBase64 (num) {
				return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
			}
	
			// go through the array every three bytes, we'll deal with trailing stuff later
			for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
				temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
				output += tripletToBase64(temp)
			}
	
			// pad the end with zeros, but make sure to not forget the extra bytes
			switch (extraBytes) {
				case 1:
					temp = uint8[uint8.length - 1]
					output += encode(temp >> 2)
					output += encode((temp << 4) & 0x3F)
					output += '=='
					break
				case 2:
					temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
					output += encode(temp >> 10)
					output += encode((temp >> 4) & 0x3F)
					output += encode((temp << 2) & 0x3F)
					output += '='
					break
			}
	
			return output
		}
	
		exports.toByteArray = b64ToByteArray
		exports.fromByteArray = uint8ToBase64
	}( false ? (this.base64js = {}) : exports))


/***/ },
/* 7 */
/*!*****************************************************************!*\
  !*** (webpack)/~/node-libs-browser/~/buffer/~/ieee754/index.js ***!
  \*****************************************************************/
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]
	
	  i += d
	
	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}
	
	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
	
	  value = Math.abs(value)
	
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }
	
	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	
	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	
	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 8 */
/*!******************************************************************!*\
  !*** (webpack)/~/node-libs-browser/~/buffer/~/is-array/index.js ***!
  \******************************************************************/
/***/ function(module, exports) {

	
	/**
	 * isArray
	 */
	
	var isArray = Array.isArray;
	
	/**
	 * toString
	 */
	
	var str = Object.prototype.toString;
	
	/**
	 * Whether or not the given `val`
	 * is an array.
	 *
	 * example:
	 *
	 *        isArray([]);
	 *        // > true
	 *        isArray(arguments);
	 *        // > false
	 *        isArray('');
	 *        // > false
	 *
	 * @param {mixed} val
	 * @return {bool}
	 */
	
	module.exports = isArray || function (val) {
	  return !! val && '[object Array]' == str.call(val);
	};


/***/ },
/* 9 */
/*!******************************!*\
  !*** ./lib/posts.service.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ngdoc service
	 * @name wp-api-angularjs.$wpApiPosts
	 * @description
	 * Posts entity
	 * @requires  wp-api-angularjs.WpApi
	 * @requires  $http
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _parentServiceJs = __webpack_require__(/*! ./parent.service.js */ 2);
	
	var _parentServiceJs2 = _interopRequireDefault(_parentServiceJs);
	
	var _default = (function (_Parent) {
	    _inherits(_default, _Parent);
	
	    function _default() {
	        _classCallCheck(this, _default);
	
	        _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(_default, [{
	        key: 'getList',
	
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
	        value: function getList(params, data, headers) {
	            return _get(Object.getPrototypeOf(_default.prototype), 'getList', this).call(this, '/posts', params, data, headers);
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
	    }, {
	        key: 'get',
	        value: function get(postId, params, data, headers) {
	            _get(Object.getPrototypeOf(_default.prototype), 'requiredInput', this).call(this, '$wpApiPosts:get', {
	                postId: postId
	            });
	            return _get(Object.getPrototypeOf(_default.prototype), 'get', this).call(this, '/posts/' + postId, params, data, headers);
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
	    }, {
	        key: 'getMetaList',
	        value: function getMetaList(postId, params, data, headers) {
	            _get(Object.getPrototypeOf(_default.prototype), 'requiredInput', this).call(this, '$wpApiPosts:getMetaList', {
	                postId: postId
	            });
	            return _get(Object.getPrototypeOf(_default.prototype), 'getList', this).call(this, '/posts/' + postId + '/meta', params, data, headers);
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
	    }, {
	        key: 'getMeta',
	        value: function getMeta(postId, metaId, params, data, headers) {
	            _get(Object.getPrototypeOf(_default.prototype), 'requiredInput', this).call(this, '$wpApiPosts:getMeta', {
	                postId: postId,
	                metaId: metaId
	            });
	            return _get(Object.getPrototypeOf(_default.prototype), 'get', this).call(this, '/posts/' + postId + '/meta/' + metaId, params, data, headers);
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
	    }, {
	        key: 'getRevisionList',
	        value: function getRevisionList(postId, params, data, headers) {
	            _get(Object.getPrototypeOf(_default.prototype), 'requiredInput', this).call(this, '$wpApiPosts:getRevisionList', {
	                postId: postId
	            });
	            return _get(Object.getPrototypeOf(_default.prototype), 'getList', this).call(this, '/posts/' + postId + '/revisions', params, data, headers);
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
	    }, {
	        key: 'getRevision',
	        value: function getRevision(postId, revisionId, params, data, headers) {
	            _get(Object.getPrototypeOf(_default.prototype), 'requiredInput', this).call(this, '$wpApiPosts:getRevision', {
	                postId: postId,
	                revisionId: revisionId
	            });
	            return _get(Object.getPrototypeOf(_default.prototype), 'get', this).call(this, '/posts/' + postId + '/revisions/' + revisionId, params, data, headers);
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
	    }, {
	        key: 'getCategoryList',
	        value: function getCategoryList(postId, params, data, headers) {
	            _get(Object.getPrototypeOf(_default.prototype), 'requiredInput', this).call(this, '$wpApiPosts:getCategoryList', {
	                postId: postId
	            });
	            return _get(Object.getPrototypeOf(_default.prototype), 'getList', this).call(this, '/posts/' + postId + '/terms/category', params, data, headers);
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
	    }, {
	        key: 'getCategory',
	        value: function getCategory(postId, categoryId, params, data, headers) {
	            _get(Object.getPrototypeOf(_default.prototype), 'requiredInput', this).call(this, '$wpApiPosts:getCategory', {
	                postId: postId,
	                categoryId: categoryId
	            });
	            return _get(Object.getPrototypeOf(_default.prototype), 'get', this).call(this, '/posts/' + postId + '/terms/category/' + categoryId, params, data, headers);
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
	    }, {
	        key: 'getTagList',
	        value: function getTagList(postId, params, data, headers) {
	            _get(Object.getPrototypeOf(_default.prototype), 'requiredInput', this).call(this, '$wpApiPosts:getTagList', {
	                postId: postId
	            });
	            return _get(Object.getPrototypeOf(_default.prototype), 'getList', this).call(this, '/posts/' + postId + '/terms/tag', params, data, headers);
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
	    }, {
	        key: 'getTag',
	        value: function getTag(postId, tagId, params, data, headers) {
	            _get(Object.getPrototypeOf(_default.prototype), 'requiredInput', this).call(this, '$wpApiPosts:getTag', {
	                postId: postId,
	                tagId: tagId
	            });
	            return _get(Object.getPrototypeOf(_default.prototype), 'get', this).call(this, '/posts/' + postId + '/terms/tag/' + tagId, params, data, headers);
	        }
	    }]);

	    return _default;
	})(_parentServiceJs2['default']);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 10 */
/*!******************************!*\
  !*** ./lib/pages.service.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ngdoc service
	 * @name wp-api-angularjs.$wpApiPages
	 * @description
	 * Pages entity
	 * @requires  wp-api-angularjs:WpApi
	 * @requires  $http
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _parentServiceJs = __webpack_require__(/*! ./parent.service.js */ 2);
	
	var _parentServiceJs2 = _interopRequireDefault(_parentServiceJs);
	
	var _default = (function (_Parent) {
	    _inherits(_default, _Parent);
	
	    function _default() {
	        _classCallCheck(this, _default);
	
	        _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(_default, [{
	        key: 'getList',
	
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
	        value: function getList() {
	            var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	            var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	            var headers = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	            return _get(Object.getPrototypeOf(_default.prototype), 'getList', this).call(this, '/pages', params, data, headers);
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
	    }, {
	        key: 'get',
	        value: function get(pageId, params, data, headers) {
	            _get(Object.getPrototypeOf(_default.prototype), 'requiredInput', this).call(this, '$wpApiPages:get', {
	                pageId: pageId
	            });
	            return _get(Object.getPrototypeOf(_default.prototype), 'get', this).call(this, '/pages/' + pageId, params, data, headers);
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
	    }, {
	        key: 'getMetaList',
	        value: function getMetaList(pageId, params, data, headers) {
	            _get(Object.getPrototypeOf(_default.prototype), 'requiredInput', this).call(this, '$wpApiPages:getMetaList', {
	                pageId: pageId
	            });
	            return _get(Object.getPrototypeOf(_default.prototype), 'getList', this).call(this, '/pages/' + pageId + '/meta', params, data, headers);
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
	    }, {
	        key: 'getMeta',
	        value: function getMeta(pageId, metaId, params, data, headers) {
	            _get(Object.getPrototypeOf(_default.prototype), 'requiredInput', this).call(this, '$wpApiPages:getMeta', {
	                pageId: pageId,
	                metaId: metaId
	            });
	            return _get(Object.getPrototypeOf(_default.prototype), 'get', this).call(this, '/pages/' + pageId + '/meta/' + metaId, params, data, headers);
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
	    }, {
	        key: 'getRevisionList',
	        value: function getRevisionList(pageId, params, data, headers) {
	            _get(Object.getPrototypeOf(_default.prototype), 'requiredInput', this).call(this, '$wpApiPages:getRevisionList', {
	                pageId: pageId
	            });
	            return _get(Object.getPrototypeOf(_default.prototype), 'getList', this).call(this, '/pages/' + pageId + '/revisions', params, data, headers);
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
	    }, {
	        key: 'getRevision',
	        value: function getRevision(pageId, revisionId, params, data, headers) {
	            _get(Object.getPrototypeOf(_default.prototype), 'requiredInput', this).call(this, '$wpApiPages:getRevision', {
	                pageId: pageId,
	                revisionId: revisionId
	            });
	            return _get(Object.getPrototypeOf(_default.prototype), 'get', this).call(this, '/pages/' + pageId + '/revisions/' + revisionId, params, data, headers);
	        }
	    }]);

	    return _default;
	})(_parentServiceJs2['default']);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 11 */
/*!******************************!*\
  !*** ./lib/media.service.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ngdoc service
	 * @name wp-api-angularjs.$wpApiMedia
	 * @description
	 * media entity
	 * @requires  wp-api-angularjs:WpApi
	 * @requires  $http
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _parentServiceJs = __webpack_require__(/*! ./parent.service.js */ 2);
	
	var _parentServiceJs2 = _interopRequireDefault(_parentServiceJs);
	
	var _default = (function (_Parent) {
	    _inherits(_default, _Parent);
	
	    function _default() {
	        _classCallCheck(this, _default);
	
	        _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(_default, [{
	        key: 'getList',
	
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
	         * <pre>
	         * $wpApiMedia.getList({
	         *  page: 1,
	         *  per_page: 10,
	         *  "filter[orderby]": "date"
	         *  "filter[orderby]": "asc"
	         * });
	         * </pre>
	         * @returns {Object} Promise
	         */
	        value: function getList() {
	            var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	            var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	            var headers = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	            return _get(Object.getPrototypeOf(_default.prototype), 'getList', this).call(this, '/media', params, data, headers);
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
	    }, {
	        key: 'get',
	        value: function get(mediaId, params, data, headers) {
	            _get(Object.getPrototypeOf(_default.prototype), 'requiredInput', this).call(this, '$wpApiMedia:get', {
	                mediaId: mediaId
	            });
	            return _get(Object.getPrototypeOf(_default.prototype), 'get', this).call(this, '/media/' + mediaId, params, data, headers);
	        }
	    }]);

	    return _default;
	})(_parentServiceJs2['default']);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 12 */
/*!******************************!*\
  !*** ./lib/types.service.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ngdoc service
	 * @name wp-api-angularjs.$wpApiTypes
	 * @description
	 * postType entity post|page|attachment
	 * @requires  wp-api-angularjs:WpApi
	 * @requires  $http
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _parentServiceJs = __webpack_require__(/*! ./parent.service.js */ 2);
	
	var _parentServiceJs2 = _interopRequireDefault(_parentServiceJs);
	
	var _default = (function (_Parent) {
	    _inherits(_default, _Parent);
	
	    function _default() {
	        _classCallCheck(this, _default);
	
	        _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(_default, [{
	        key: 'getList',
	
	        /**
	         * @ngdoc function
	         * @name wp-api-angularjs.$wpApiTypes#getList
	         * @access public
	         * @methodOf wp-api-angularjs.$wpApiTypes
	         *
	         * @description
	         * Get type list
	         * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be serialized with the paramSerializer and appended as GET parameters.
	         * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
	         * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers to send to the server. If the return value of a function is null, the header will not be sent. Functions accept a config object as an argument.
	         * @example
	         * <pre>
	         * $wpApiTypes.getList({
	         *  post_type: "attachment"
	         * });
	         * </pre>
	         * @returns {Object} Promise
	         */
	        value: function getList() {
	            var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	            var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	            var headers = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	            return _get(Object.getPrototypeOf(_default.prototype), 'getList', this).call(this, '/types', params, data, headers);
	        }
	
	        /**
	         * @ngdoc function
	         * @name wp-api-angularjs.$wpApiTypes#get
	         * @access public
	         * @methodOf wp-api-angularjs.$wpApiTypes
	         *
	         * @description
	         * Get a specific postType
	         *
	         * @param {string} postType  (post|page|attachment)
	         * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
	         * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
	         * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
	         * @returns {Object} Promise
	         */
	    }, {
	        key: 'get',
	        value: function get(postType, params, data, headers) {
	            _get(Object.getPrototypeOf(_default.prototype), 'requiredInput', this).call(this, '$wpApiTypes:get', {
	                postType: postType
	            });
	            return _get(Object.getPrototypeOf(_default.prototype), 'get', this).call(this, '/types/' + postType, params, data, headers);
	        }
	    }]);

	    return _default;
	})(_parentServiceJs2['default']);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 13 */
/*!***********************************!*\
  !*** ./lib/taxonomies.service.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ngdoc service
	 * @name wp-api-angularjs.$wpApiTaxonomies
	 * @description
	 * taxonomies entity
	 * @requires  wp-api-angularjs:WpApi
	 * @requires  $http
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _parentServiceJs = __webpack_require__(/*! ./parent.service.js */ 2);
	
	var _parentServiceJs2 = _interopRequireDefault(_parentServiceJs);
	
	var _default = (function (_Parent) {
	    _inherits(_default, _Parent);
	
	    function _default() {
	        _classCallCheck(this, _default);
	
	        _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(_default, [{
	        key: 'getList',
	
	        /**
	         * @ngdoc function
	         * @name wp-api-angularjs.$wpApiTaxonomies#getList
	         * @access public
	         * @methodOf wp-api-angularjs.$wpApiTaxonomies
	         *
	         * @description
	         * Get taxonomies list
	         * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be serialized with the paramSerializer and appended as GET parameters.
	         * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
	         * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers to send to the server. If the return value of a function is null, the header will not be sent. Functions accept a config object as an argument.
	         * @example
	         * <pre>
	         * $wpApiTaxonomies.getList({
	         *  post_type: "attachment"
	         * });
	         * </pre>
	         * @returns {Object} Promise
	         */
	        value: function getList() {
	            var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	            var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	            var headers = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	            return _get(Object.getPrototypeOf(_default.prototype), 'getList', this).call(this, '/taxonomies', params, data, headers);
	        }
	
	        /**
	         * @ngdoc function
	         * @name wp-api-angularjs.$wpApiTaxonomies#get
	         * @access public
	         * @methodOf wp-api-angularjs.$wpApiTaxonomies
	         *
	         * @description
	         * Get a specific taxonomies by taxonomiesType (category|post_tag)
	         *
	         * @param {string} taxonomiesType  (category|post_tag)
	         * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
	         * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
	         * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
	         * @returns {Object} Promise
	         */
	    }, {
	        key: 'get',
	        value: function get(taxonomiesType, params, data, headers) {
	            _get(Object.getPrototypeOf(_default.prototype), 'requiredInput', this).call(this, '$wpApiTaxonomies:get', {
	                taxonomiesType: taxonomiesType
	            });
	            return _get(Object.getPrototypeOf(_default.prototype), 'get', this).call(this, '/taxonomies/' + taxonomiesType, params, data, headers);
	        }
	    }]);

	    return _default;
	})(_parentServiceJs2['default']);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 14 */
/*!******************************!*\
  !*** ./lib/terms.service.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ngdoc service
	 * @name wp-api-angularjs.$wpApiTerms
	 * @description
	 * Posts entity
	 * @requires  wp-api-angularjs.WpApi
	 * @requires  $http
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _parentServiceJs = __webpack_require__(/*! ./parent.service.js */ 2);
	
	var _parentServiceJs2 = _interopRequireDefault(_parentServiceJs);
	
	var _default = (function (_Parent) {
	    _inherits(_default, _Parent);
	
	    function _default() {
	        _classCallCheck(this, _default);
	
	        _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(_default, [{
	        key: 'getCategoryList',
	
	        /**
	         * @ngdoc function
	         * @name wp-api-angularjs.$wpApiTerms#getCategoryList
	         * @access public
	         * @methodOf wp-api-angularjs.$wpApiTerms
	         *
	         * @description
	         * Get category list
	         * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
	         * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
	         * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
	         * @example
	         * <pre>
	         * $wpApiTerms.getCategoryList({
	         *  page: 1,
	         *  per_page: 10,
	         *  search: '',
	         *  order: '',
	         *  orderby: '',
	         *  parent: '',
	         * });
	         * </pre>
	         * @returns {Object} Promise
	         */
	        value: function getCategoryList(params, data, headers) {
	            return _get(Object.getPrototypeOf(_default.prototype), 'getList', this).call(this, '/terms/category', params, data, headers);
	        }
	
	        /**
	         * @ngdoc function
	         * @name wp-api-angularjs.$wpApiTerms#getTagList
	         * @access public
	         * @methodOf wp-api-angularjs.$wpApiTerms
	         *
	         * @description
	         * Get category list
	         * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
	         * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
	         * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
	         * @example
	         * <pre>
	         * $wpApiTerms.getTagList({
	         *  page: 1,
	         *  per_page: 10,
	         *  search: '',
	         *  order: '',
	         *  orderby: ''
	         * });
	         * </pre>
	         * @returns {Object} Promise
	         */
	    }, {
	        key: 'getTagList',
	        value: function getTagList(params, data, headers) {
	            return _get(Object.getPrototypeOf(_default.prototype), 'getList', this).call(this, '/terms/tag', params, data, headers);
	        }
	
	        /**
	         * @ngdoc function
	         * @name wp-api-angularjs.$wpApiTerms#getCategory
	         * @access public
	         * @methodOf wp-api-angularjs.$wpApiTerms
	         *
	         * @description
	         * Get a specific category by its ID
	         *
	         * @param {int} termId  The term id
	         * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
	         * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
	         * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
	         * @returns {Object} Promise
	         */
	    }, {
	        key: 'getCategory',
	        value: function getCategory(termId, params, data, headers) {
	            _get(Object.getPrototypeOf(_default.prototype), 'requiredInput', this).call(this, '$wpApiTerms:get', {
	                termId: termId
	            });
	            return _get(Object.getPrototypeOf(_default.prototype), 'get', this).call(this, '/terms/category/' + termId, params, data, headers);
	        }
	
	        /**
	         * @ngdoc function
	         * @name wp-api-angularjs.$wpApiTerms#getTag
	         * @access public
	         * @methodOf wp-api-angularjs.$wpApiTerms
	         *
	         * @description
	         * Get a specific tag by its ID
	         *
	         * @param {int} termId  The term id
	         * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
	         * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
	         * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
	         * @returns {Object} Promise
	         */
	    }, {
	        key: 'getTag',
	        value: function getTag(termId, params, data, headers) {
	            _get(Object.getPrototypeOf(_default.prototype), 'requiredInput', this).call(this, '$wpApiTerms:get', {
	                termId: termId
	            });
	            return _get(Object.getPrototypeOf(_default.prototype), 'get', this).call(this, '/terms/tag/' + termId, params, data, headers);
	        }
	    }]);

	    return _default;
	})(_parentServiceJs2['default']);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 15 */
/*!******************************!*\
  !*** ./lib/users.service.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ngdoc service
	 * @name wp-api-angularjs.$wpApiUsers
	 * @description
	 * Users entity
	 * @requires  wp-api-angularjs.WpApi
	 * @requires  $http
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _parentServiceJs = __webpack_require__(/*! ./parent.service.js */ 2);
	
	var _parentServiceJs2 = _interopRequireDefault(_parentServiceJs);
	
	var _default = (function (_Parent) {
	    _inherits(_default, _Parent);
	
	    function _default() {
	        _classCallCheck(this, _default);
	
	        _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(_default, [{
	        key: 'getList',
	
	        /**
	         * @ngdoc function
	         * @name wp-api-angularjs.$wpApiUsers#getList
	         * @access public
	         * @methodOf wp-api-angularjs.$wpApiUsers
	         *
	         * @description
	         * Get users list
	         * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
	         * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
	         * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
	         * @example
	         * <pre>
	         * $wpApiUsers.getList({
	         *  page: 1,
	         *  per_page: 10,
	         *  search: '',
	         *  order: '',
	         *  orderby: '',
	         *  context: ''
	         * });
	         * </pre>
	         * @returns {Object} Promise
	         */
	        value: function getList(params, data, headers) {
	            return _get(Object.getPrototypeOf(_default.prototype), 'getList', this).call(this, '/users', params, data, headers);
	        }
	
	        /**
	         * @ngdoc function
	         * @name wp-api-angularjs.$wpApiUsers#get
	         * @access public
	         * @methodOf wp-api-angularjs.$wpApiUsers
	         *
	         * @description
	         * Get a specific user by its ID
	         *
	         * @param {int} userId  The users id
	         * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
	         * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
	         * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
	         * @returns {Object} Promise
	         */
	    }, {
	        key: 'get',
	        value: function get(userId, params, data, headers) {
	            _get(Object.getPrototypeOf(_default.prototype), 'requiredInput', this).call(this, '$wpApiUsers:get', {
	                userId: userId
	            });
	            return _get(Object.getPrototypeOf(_default.prototype), 'get', this).call(this, '/users/' + userId, params, data, headers);
	        }
	
	        /**
	         * @ngdoc function
	         * @name wp-api-angularjs.$wpApiUsers#me
	         * @access public
	         * @methodOf wp-api-angularjs.$wpApiUsers
	         *
	         * @description
	         * [REQUIRES AUTH] Get your user object
	         *
	         * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be appended as GET parameters.
	         * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
	         * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers
	         * @returns {Object} Promise
	         */
	    }, {
	        key: 'me',
	        value: function me(params, data, headers) {
	            return _get(Object.getPrototypeOf(_default.prototype), 'get', this).call(this, '/users/me', params, data, headers);
	        }
	    }]);

	    return _default;
	})(_parentServiceJs2['default']);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 16 */
/*!*********************************!*\
  !*** ./lib/comments.service.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ngdoc service
	 * @name wp-api-angularjs.$wpApiComments
	 * @description
	 * Comments entity
	 * @requires  wp-api-angularjs:WpApi
	 * @requires  $http
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _parentServiceJs = __webpack_require__(/*! ./parent.service.js */ 2);
	
	var _parentServiceJs2 = _interopRequireDefault(_parentServiceJs);
	
	var _default = (function (_Parent) {
	    _inherits(_default, _Parent);
	
	    function _default() {
	        _classCallCheck(this, _default);
	
	        _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(_default, [{
	        key: 'getList',
	
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
	         *  post: 5,
	         *  post_author: '',
	         *  post_slug: '',
	         *  post_parent: '',
	         *  post_status: '',
	         *  post_type: 'page',
	         *  status: 'approve',
	         *  type: 'comment',
	         *  user: 9
	         * });
	         * </pre>
	         * @returns {Object} Promise
	         */
	        value: function getList() {
	            var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	            var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	            var headers = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	            return _get(Object.getPrototypeOf(_default.prototype), 'getList', this).call(this, '/comments', params, data, headers);
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
	    }, {
	        key: 'get',
	        value: function get(commentId, params, data, headers) {
	            _get(Object.getPrototypeOf(_default.prototype), 'requiredInput', this).call(this, '$wpApiComments:get', {
	                commentId: commentId
	            });
	            return _get(Object.getPrototypeOf(_default.prototype), 'get', this).call(this, '/comments/' + commentId, params, data, headers);
	        }
	    }]);

	    return _default;
	})(_parentServiceJs2['default']);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=wp-api-angularjs.js.map