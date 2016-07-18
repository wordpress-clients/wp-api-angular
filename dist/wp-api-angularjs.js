/*!
 * wp-api-angularjs
 *  ---
 * WordPress WP-API v2 client for AngularJs
 * @version: v2.0.0-rc3
 * @author: shprink <contact@julienrenaux.fr>
 * @link: https://github.com/shprink/wp-api-angularjs
 * @license: MIT
 * 
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
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ function(module, exports) {

	import Provider from './provider.js';
	import Posts from './posts.service.js';
	import Pages from './pages.service.js';
	import Media from './media.service.js';
	import Types from './types.service.js';
	import Statuses from './statuses.service.js';
	import Taxonomies from './taxonomies.service.js';
	import Terms from './terms.service.js';
	import Users from './users.service.js';
	import Comments from './comments.service.js';
	import Custom from './custom.service.js';
	
	let mod = angular.module('wp-api-angularjs', []);
	
	mod.provider('WpApi', Provider);
	mod.service('$wpApiPosts', Posts);
	mod.service('$wpApiPages', Pages);
	mod.service('$wpApiMedia', Media);
	mod.service('$wpApiTypes', Types);
	mod.service('$wpApiStatuses', Statuses);
	mod.service('$wpApiTaxonomies', Taxonomies);
	mod.service('$wpApiTerms', Terms);
	mod.service('$wpApiUsers', Users);
	mod.service('$wpApiComments', Comments);
	mod.service('$wpApiCustom', Custom);
	
	export default mod = mod.name;

/***/ }
/******/ ]);
//# sourceMappingURL=wp-api-angularjs.js.map