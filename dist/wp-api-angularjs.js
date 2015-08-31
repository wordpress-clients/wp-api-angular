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
	
	var _providerJs = __webpack_require__(/*! ./provider.js */ 1);
	
	var _providerJs2 = _interopRequireDefault(_providerJs);
	
	var _postsPostsModuleJs = __webpack_require__(/*! ./posts/posts.module.js */ 2);
	
	var _postsPostsModuleJs2 = _interopRequireDefault(_postsPostsModuleJs);
	
	var mod = angular.module('wp-api-angularjs', [_postsPostsModuleJs2['default']]);
	
	mod.provider('WpApi', _providerJs2['default']);
	
	exports['default'] = mod = mod.name;
	module.exports = exports['default'];

/***/ },
/* 1 */
/*!*************************!*\
  !*** ./lib/provider.js ***!
  \*************************/
/***/ function(module, exports) {

	/**
	 * @ngdoc service
	 * @name wp-api-angularjs
	 * @description
	 * wp-api-angularjs provider
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	exports['default'] = function () {
	    'ngInject';
	    var baseUrl = undefined;
	    var namespace = '/wp/v2';
	
	    return {
	        $get: $get,
	        setBaseUrl: setBaseUrl
	    };
	
	    function setBaseUrl(newBaseUrl) {
	        newBaseUrl = stripTrailingSlash(newBaseUrl);
	        baseUrl = newBaseUrl + namespace;
	    }
	
	    function $get() {
	        return {
	            getBaseUrl: getBaseUrl
	        };
	
	        function getBaseUrl() {
	            return baseUrl;
	        }
	    }
	
	    function stripTrailingSlash(str) {
	        return str.replace(/\/$/, "");
	    }
	};
	
	;
	module.exports = exports['default'];

/***/ },
/* 2 */
/*!***********************************!*\
  !*** ./lib/posts/posts.module.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _postsServiceJs = __webpack_require__(/*! ./posts.service.js */ 3);
	
	var _postsServiceJs2 = _interopRequireDefault(_postsServiceJs);
	
	var mod = angular.module('wp-api-angularjs.post', []);
	
	mod.service('$wpApiPosts', _postsServiceJs2['default']);
	
	exports['default'] = mod = mod.name;
	module.exports = exports['default'];

/***/ },
/* 3 */
/*!************************************!*\
  !*** ./lib/posts/posts.service.js ***!
  \************************************/
/***/ function(module, exports) {

	/**
	 * @ngdoc service
	 * @name wp-api-angularjs.post
	 * @description
	 * Posts entity
	 * @requires  wp-api-angularjs:WpApi
	 * @requires  $http
	 */
	
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
	        this.$http = $http;
	    }
	    _default.$inject = ["WpApi", "$http"];
	
	    /**
	     * @ngdoc function
	     * @name getPosts
	     * @access public
	     * @methodOf wp-api-angularjs.post:getPosts
	     *
	     * @description
	     * Get post list
	     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be serialized with the paramSerializer and appended as GET parameters.
	     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
	     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers to send to the server. If the return value of a function is null, the header will not be sent. Functions accept a config object as an argument.
	     * @example
	     * $wpApiPosts.getPosts({
	     *  page: 1,
	     *  per_page: 10,
	     *  "filter[orderby]": "date"
	     *  "filter[orderby]": "asc"
	     * });
	     * @returns {Object} Promise
	     */
	
	    _createClass(_default, [{
	        key: 'getPosts',
	        value: function getPosts() {
	            var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	            var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	            var headers = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	            return this.$http.get(this.baseUrl + '/posts', {
	                params: params,
	                data: data,
	                headers: headers
	            });
	        }
	    }]);

	    return _default;
	})();

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=wp-api-angularjs.js.map