/**
 * wp-api-angularjs - WordPress WP-API client for AngularJs
 * @version v1.0.0-rc2
 * @author shprink <contact@julienrenaux.fr>
 * @link https://github.com/shprink/wp-api-angularjs
 * @license MIT
 */
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
/***/ function(module, exports, __webpack_require__) {

	module.exports = angular.module('wp-api-angularjs', [
	    __webpack_require__(1).name,
	    __webpack_require__(2).name
	]);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = angular.module('wp-api-angularjs.provider', [
	    'restangular'
	]).provider('WpApi', ["RestangularProvider", function WpApiProvider(RestangularProvider) {
	    var restangularProvider = RestangularProvider;

	    this.getRestangularProvider = function() {
	        return restangularProvider;
	    };

	    this.$get = function() {
	        return restangularProvider;
	    };
	}]);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = angular.module('wp-api-angularjs.services', [
	    __webpack_require__(3).name,
	    __webpack_require__(4).name,
	    __webpack_require__(5).name,
	    __webpack_require__(6).name
	]);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = angular
	    .module('wp-api-angularjs.services.posts', ['restangular'])
	    .factory('$wpApiPosts', ["Restangular", function(Restangular) {
	        var posts = Restangular.service('posts');

	        posts.$getList = getList;
	        posts.$get = get;
	        posts.$create = create;

	        return posts;

	        function getList(query) {
	            return posts.getList(query);
	        }

	        function get(id, query) {
	            return posts.one(id).get(query);
	        }

	        function create(object) {
	            return posts.post(object);
	        }
	    }]);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = angular
	    .module('wp-api-angularjs.services.media', ['restangular'])
	    .factory('$wpApiMedia', ["Restangular", function(Restangular) {
	        var media = Restangular.service('media');

	        media.$getList = getList;
	        media.$get = get;
	        media.$create = create;

	        return media;

	        function getList(query) {
	            return media.getList(query);
	        }

	        function get(id, query) {
	            return media.one(id).get(query);
	        }

	        function create(object) {
	            return media.post(object);
	        }
	    }]);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = angular
	    .module('wp-api-angularjs.services.users', ['restangular'])
	    .factory('$wpApiUsers', ["Restangular", function(Restangular) {
	        var users = Restangular.service('users');

	        users.$getList = getList;
	        users.$get = get;
	        users.$getMe = getMe;
	        users.$create = create;

	        return users;

	        function getList(query) {
	            return users.getList(query);
	        }

	        function get(id, query) {
	            return users.one(id).get(query);
	        }

	        function getMe() {
	            return get('me');
	        }

	        function create(object) {
	            return users.post(object);
	        }
	    }]);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = angular
	    .module('wp-api-angularjs.services.taxonomies', ['restangular'])
	    .factory('$wpApiTaxonomies', ["Restangular", function(Restangular) {
	        var taxonomies = Restangular.service('taxonomies');

	        taxonomies.$getList = getList;
	        taxonomies.$get = get;
	        taxonomies.$getTermList = getTerms;
	        taxonomies.$getTerm = getTerm;

	        return taxonomies;

	        function getList(query) {
	            return taxonomies.getList(query);
	        }

	        function get(taxonomy, query) {
	            return taxonomies.one(taxonomy).get(query);
	        }

	        function getTerms(taxonomy) {
	            return taxonomies.one(taxonomy).getList('terms');
	        }

	        function getTerm(taxonomy, id) {
	            return taxonomies.one(taxonomy).one('terms', id).get();
	        }
	    }]);

/***/ }
/******/ ])