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
	
	var _postsServiceJs = __webpack_require__(/*! ./posts.service.js */ 2);
	
	var _postsServiceJs2 = _interopRequireDefault(_postsServiceJs);
	
	var _pagesServiceJs = __webpack_require__(/*! ./pages.service.js */ 4);
	
	var _pagesServiceJs2 = _interopRequireDefault(_pagesServiceJs);
	
	var mod = angular.module('wp-api-angularjs', []);
	
	mod.provider('WpApi', _providerJs2['default']);
	mod.service('$wpApiPosts', _postsServiceJs2['default']);
	mod.service('$wpApiPages', _pagesServiceJs2['default']);
	
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
	 * @name wp-api-angularjs.WpApi
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
	
	var _parentServiceJs = __webpack_require__(/*! ./parent.service.js */ 3);
	
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
	         * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be serialized with the paramSerializer and appended as GET parameters.
	         * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
	         * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers to send to the server. If the return value of a function is null, the header will not be sent. Functions accept a config object as an argument.
	         * @example
	         * $wpApiPosts.getList({
	         *  page: 1,
	         *  per_page: 10,
	         *  "filter[orderby]": "date"
	         *  "filter[orderby]": "asc"
	         * });
	         * @returns {Object} Promise
	         */
	        value: function getList(params, data, headers) {
	            return _get(Object.getPrototypeOf(_default.prototype), 'getList', this).call(this, '/posts', params, data, headers);
	        }
	    }, {
	        key: 'get',
	        value: function get(postId, params, data, headers) {
	            return _get(Object.getPrototypeOf(_default.prototype), 'get', this).call(this, '/posts/' + postId, params, data, headers);
	        }
	    }, {
	        key: 'getMetaList',
	        value: function getMetaList(postId, params, data, headers) {
	            return _get(Object.getPrototypeOf(_default.prototype), 'getList', this).call(this, '/posts/' + postId + '/meta', params, data, headers);
	        }
	    }, {
	        key: 'getMeta',
	        value: function getMeta(postId, metaId, params, data, headers) {
	            return _get(Object.getPrototypeOf(_default.prototype), 'get', this).call(this, '/posts/' + postId + '/meta/' + metaId, params, data, headers);
	        }
	    }, {
	        key: 'getRevisionList',
	        value: function getRevisionList(postId, params, data, headers) {
	            return _get(Object.getPrototypeOf(_default.prototype), 'getList', this).call(this, '/posts/' + postId + '/revisions', params, data, headers);
	        }
	    }, {
	        key: 'getRevision',
	        value: function getRevision(postId, revisionId, params, data, headers) {
	            return _get(Object.getPrototypeOf(_default.prototype), 'get', this).call(this, '/posts/' + postId + '/revisions/' + revisionId, params, data, headers);
	        }
	    }, {
	        key: 'getCategoryList',
	        value: function getCategoryList(postId, params, data, headers) {
	            return _get(Object.getPrototypeOf(_default.prototype), 'getList', this).call(this, '/posts/' + postId + '/terms/category', params, data, headers);
	        }
	    }, {
	        key: 'getCategory',
	        value: function getCategory(postId, categoryId, params, data, headers) {
	            return _get(Object.getPrototypeOf(_default.prototype), 'get', this).call(this, '/posts/' + postId + '/terms/category/' + categoryId, params, data, headers);
	        }
	    }, {
	        key: 'getTagList',
	        value: function getTagList(postId, params, data, headers) {
	            return _get(Object.getPrototypeOf(_default.prototype), 'getList', this).call(this, '/posts/' + postId + '/terms/tag', params, data, headers);
	        }
	    }, {
	        key: 'getTag',
	        value: function getTag(postId, tagId, params, data, headers) {
	            return _get(Object.getPrototypeOf(_default.prototype), 'get', this).call(this, '/posts/' + postId + '/terms/tag/' + tagId, params, data, headers);
	        }
	    }]);

	    return _default;
	})(_parentServiceJs2['default']);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 3 */
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
	        this.$http = $http;
	    }
	    _default.$inject = ["WpApi", "$http"];
	
	    _createClass(_default, [{
	        key: 'getList',
	        value: function getList(suffix) {
	            var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	            var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	            var headers = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	            return this.$http.get(this.baseUrl + suffix, {
	                params: params,
	                data: data,
	                headers: headers
	            });
	        }
	    }, {
	        key: 'get',
	        value: function get(suffix) {
	            var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	            var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	            var headers = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	            return this.$http.get(this.baseUrl + suffix, {
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

/***/ },
/* 4 */
/*!******************************!*\
  !*** ./lib/pages.service.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ngdoc service
	 * @name wp-api-angularjs.$wpApiPages
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
	
	var _get = function get(_x4, _x5, _x6) { var _again = true; _function: while (_again) { var object = _x4, property = _x5, receiver = _x6; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x4 = parent; _x5 = property; _x6 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _parentServiceJs = __webpack_require__(/*! ./parent.service.js */ 3);
	
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
	     * Get post list
	     * @param {object} params  Optional: {Object.<string|Object>} – Map of strings or objects which will be serialized with the paramSerializer and appended as GET parameters.
	     * @param {object} data  Optional: {string|Object} – Data to be sent as the request message data.
	     * @param {object} headers  Optional: {Object} – Map of strings or functions which return strings representing HTTP headers to send to the server. If the return value of a function is null, the header will not be sent. Functions accept a config object as an argument.
	     * @example
	     * $wpApiPages.getList({
	     *  page: 1,
	     *  per_page: 10,
	     *  "filter[orderby]": "date"
	     *  "filter[orderby]": "asc"
	     * });
	     * @returns {Object} Promise
	     */
	    value: function getList() {
	      var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	      var data = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	      var headers = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	      return _get(Object.getPrototypeOf(_default.prototype), 'getList', this).call(this, '/pages', params, data, headers);
	    }
	  }]);

	  return _default;
	})(_parentServiceJs2['default']);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=wp-api-angularjs.js.map