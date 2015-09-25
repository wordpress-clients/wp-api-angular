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
	
	var _postsServiceJs = __webpack_require__(/*! ./posts.service.js */ 4);
	
	var _postsServiceJs2 = _interopRequireDefault(_postsServiceJs);
	
	var _pagesServiceJs = __webpack_require__(/*! ./pages.service.js */ 5);
	
	var _pagesServiceJs2 = _interopRequireDefault(_pagesServiceJs);
	
	var _mediaServiceJs = __webpack_require__(/*! ./media.service.js */ 6);
	
	var _mediaServiceJs2 = _interopRequireDefault(_mediaServiceJs);
	
	var _typesServiceJs = __webpack_require__(/*! ./types.service.js */ 7);
	
	var _typesServiceJs2 = _interopRequireDefault(_typesServiceJs);
	
	var _statusesServiceJs = __webpack_require__(/*! ./statuses.service.js */ 1);
	
	var _statusesServiceJs2 = _interopRequireDefault(_statusesServiceJs);
	
	var _taxonomiesServiceJs = __webpack_require__(/*! ./taxonomies.service.js */ 8);
	
	var _taxonomiesServiceJs2 = _interopRequireDefault(_taxonomiesServiceJs);
	
	var _termsServiceJs = __webpack_require__(/*! ./terms.service.js */ 9);
	
	var _termsServiceJs2 = _interopRequireDefault(_termsServiceJs);
	
	var _usersServiceJs = __webpack_require__(/*! ./users.service.js */ 10);
	
	var _usersServiceJs2 = _interopRequireDefault(_usersServiceJs);
	
	var _commentsServiceJs = __webpack_require__(/*! ./comments.service.js */ 11);
	
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
	         * $wpApiStatuses.getList({});
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
/***/ function(module, exports) {

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
	            getBaseUrl: getBaseUrl
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
	
	;
	module.exports = exports['default'];

/***/ },
/* 4 */
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
/* 5 */
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
/* 6 */
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
	         * $wpApiMedia.getList({
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
/* 7 */
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
	         * $wpApiTypes.getList({
	         *  post_type: "attachment"
	         * });
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
/* 8 */
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
	         * $wpApiTaxonomies.getList({
	         *  post_type: "attachment"
	         * });
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
/* 9 */
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
	         * $wpApiTerms.getCategoryList({
	         *  page: 1,
	         *  per_page: 10,
	         *  search: '',
	         *  order: '',
	         *  orderby: '',
	         *  parent: '',
	         * });
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
	         * $wpApiTerms.getTagList({
	         *  page: 1,
	         *  per_page: 10,
	         *  search: '',
	         *  order: '',
	         *  orderby: ''
	         * });
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
/* 10 */
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
	         * $wpApiUsers.getList({
	         *  page: 1,
	         *  per_page: 10,
	         *  search: '',
	         *  order: '',
	         *  orderby: '',
	         *  context: ''
	         * });
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
/* 11 */
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