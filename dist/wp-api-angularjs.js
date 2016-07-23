/*!
 * wp-api-angularjs
 *  ---
 * WordPress WP-API v2 client for Angular2
 * @version: v3.0.0
 * @author: shprink <contact@julienrenaux.fr>
 * @link: https://github.com/shprink/wp-api-angularjs
 * @license: MIT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("rxjs"), require("@angular/http"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "rxjs", "@angular/http"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@angular/core"), require("rxjs"), require("@angular/http")) : factory(root["@angular/core"], root["rxjs"], root["@angular/http"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
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
  !*** ./src/index.ts ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var core_1 = __webpack_require__(/*! @angular/core */ 1);
	__webpack_require__(/*! rxjs */ 2);
	var http_1 = __webpack_require__(/*! @angular/http */ 3);
	var utils_1 = __webpack_require__(/*! ./utils */ 4);
	var tokens_1 = __webpack_require__(/*! ./tokens */ 5);
	var Posts_1 = __webpack_require__(/*! ./Posts */ 6);
	var Pages_1 = __webpack_require__(/*! ./Pages */ 8);
	var Comments_1 = __webpack_require__(/*! ./Comments */ 9);
	var Types_1 = __webpack_require__(/*! ./Types */ 10);
	__export(__webpack_require__(/*! ./Posts */ 6));
	__export(__webpack_require__(/*! ./Pages */ 8));
	__export(__webpack_require__(/*! ./Comments */ 9));
	__export(__webpack_require__(/*! ./Types */ 10));
	exports.defaultWpApi = function (config) {
	    // remove a trailing slash
	    config.baseUrl = utils_1.stripTrailingSlash(config.baseUrl);
	    config.namespace = config.namespace || '/wp/v2';
	    return core_1.provide(tokens_1.WpApiConfig, {
	        useValue: config
	    });
	};
	exports.WPAPI_PROVIDERS = [
	    http_1.HTTP_PROVIDERS,
	    createProvider(Posts_1.WpApiPosts),
	    createProvider(Pages_1.WpApiPages),
	    createProvider(Comments_1.WpApiComments),
	    createProvider(Types_1.WpApiTypes)
	];
	function createProvider(service) {
	    return {
	        provide: service,
	        useFactory: function (config, http) { return new service(config, http); },
	        deps: [tokens_1.WpApiConfig, http_1.Http]
	    };
	}


/***/ },
/* 1 */
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/*!********************************!*\
  !*** external "@angular/http" ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ function(module, exports) {

	"use strict";
	function stripTrailingSlash(value) {
	    // Is the last char a /
	    if (value.substring(value.length - 1, value.length) === '/') {
	        return value.substring(0, value.length - 1);
	    }
	    else {
	        return value;
	    }
	}
	exports.stripTrailingSlash = stripTrailingSlash;


/***/ },
/* 5 */
/*!***********************!*\
  !*** ./src/tokens.ts ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(/*! @angular/core */ 1);
	exports.WpApiApp = new core_1.OpaqueToken('WpApiApp');
	exports.WpApiConfig = new core_1.OpaqueToken('WpApiConfig');


/***/ },
/* 6 */
/*!**********************!*\
  !*** ./src/Posts.ts ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 1);
	var parent_ts_1 = __webpack_require__(/*! ./parent.ts */ 7);
	var WpApiPosts = (function (_super) {
	    __extends(WpApiPosts, _super);
	    function WpApiPosts() {
	        _super.apply(this, arguments);
	    }
	    WpApiPosts.prototype.getList = function (options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/posts", options);
	    };
	    WpApiPosts.prototype.get = function (postId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/posts/" + postId, options);
	    };
	    WpApiPosts.prototype.create = function (body, options) {
	        if (body === void 0) { body = {}; }
	        if (options === void 0) { options = {}; }
	        return this.httpPost("/posts", body, options);
	    };
	    WpApiPosts.prototype.update = function (postId, body, options) {
	        if (body === void 0) { body = {}; }
	        if (options === void 0) { options = {}; }
	        return this.httpPost("/posts/" + postId, body, options);
	    };
	    WpApiPosts.prototype.delete = function (postId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpDelete("/posts/" + postId, options);
	    };
	    WpApiPosts.prototype.getMetaList = function (postId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/posts/" + postId + "/meta", options);
	    };
	    WpApiPosts.prototype.getMeta = function (postId, metaId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/posts/" + postId + "/meta/" + metaId, options);
	    };
	    WpApiPosts.prototype.getRevisionList = function (postId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/posts/" + postId + "/revisions", options);
	    };
	    WpApiPosts.prototype.getRevision = function (postId, revisionId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/posts/" + postId + "/revisions/" + revisionId, options);
	    };
	    WpApiPosts.prototype.getCategoryList = function (postId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/posts/" + postId + "/terms/category", options);
	    };
	    WpApiPosts.prototype.getCategory = function (postId, categoryId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/posts/" + postId + "/terms/category/" + categoryId, options);
	    };
	    WpApiPosts.prototype.getTagList = function (postId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/posts/" + postId + "/terms/tag", options);
	    };
	    WpApiPosts.prototype.getTag = function (postId, tagId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/posts/" + postId + "/terms/tag/" + tagId, options);
	    };
	    WpApiPosts = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], WpApiPosts);
	    return WpApiPosts;
	}(parent_ts_1.WpApiParent));
	exports.WpApiPosts = WpApiPosts;


/***/ },
/* 7 */
/*!***********************!*\
  !*** ./src/parent.ts ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 1);
	var http_1 = __webpack_require__(/*! @angular/http */ 3);
	var WpApiParent = (function () {
	    function WpApiParent(config, http) {
	        this.config = config;
	        this.http = http;
	    }
	    WpApiParent.prototype.getFullUrl = function (postfix) {
	        return "" + this.config.baseUrl + this.config.namespace + postfix;
	    };
	    WpApiParent.prototype.httpGet = function (url, options) {
	        if (options === void 0) { options = {}; }
	        return this.http.get(this.getFullUrl(url), options);
	    };
	    WpApiParent.prototype.httpHead = function (url, options) {
	        if (options === void 0) { options = {}; }
	        return this.http.head(this.getFullUrl(url), options);
	    };
	    WpApiParent.prototype.httpDelete = function (url, options) {
	        if (options === void 0) { options = {}; }
	        return this.http.delete(this.getFullUrl(url), options);
	    };
	    WpApiParent.prototype.httpPost = function (url, body, options) {
	        if (body === void 0) { body = {}; }
	        if (options === void 0) { options = {}; }
	        return this.http.post(this.getFullUrl(url), body, options);
	    };
	    WpApiParent.prototype.httpPut = function (url, body, options) {
	        if (body === void 0) { body = {}; }
	        if (options === void 0) { options = {}; }
	        return this.http.put(this.getFullUrl(url), body, options);
	    };
	    WpApiParent.prototype.httpPatch = function (url, body, options) {
	        if (body === void 0) { body = {}; }
	        if (options === void 0) { options = {}; }
	        return this.http.patch(this.getFullUrl(url), body, options);
	    };
	    WpApiParent = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [Object, http_1.Http])
	    ], WpApiParent);
	    return WpApiParent;
	}());
	exports.WpApiParent = WpApiParent;


/***/ },
/* 8 */
/*!**********************!*\
  !*** ./src/Pages.ts ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 1);
	var parent_ts_1 = __webpack_require__(/*! ./parent.ts */ 7);
	var WpApiPages = (function (_super) {
	    __extends(WpApiPages, _super);
	    function WpApiPages() {
	        _super.apply(this, arguments);
	    }
	    WpApiPages.prototype.getList = function (options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/pages", options);
	    };
	    WpApiPages.prototype.get = function (pageId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/pages/" + pageId, options);
	    };
	    WpApiPages.prototype.create = function (body, options) {
	        if (body === void 0) { body = {}; }
	        if (options === void 0) { options = {}; }
	        return this.httpPost("/pages", body, options);
	    };
	    WpApiPages.prototype.update = function (pageId, body, options) {
	        if (body === void 0) { body = {}; }
	        if (options === void 0) { options = {}; }
	        return this.httpPost("/pages/" + pageId, body, options);
	    };
	    WpApiPages.prototype.delete = function (pageId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpDelete("/pages/" + pageId, options);
	    };
	    WpApiPages.prototype.getMetaList = function (pageId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/pages/" + pageId + "/meta", options);
	    };
	    WpApiPages.prototype.getMeta = function (pageId, metaId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/pages/" + pageId + "/meta/" + metaId, options);
	    };
	    WpApiPages.prototype.getRevisionList = function (pageId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/pages/" + pageId + "/revisions", options);
	    };
	    WpApiPages.prototype.getRevision = function (pageId, revisionId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/pages/" + pageId + "/revisions/" + revisionId, options);
	    };
	    WpApiPages = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], WpApiPages);
	    return WpApiPages;
	}(parent_ts_1.WpApiParent));
	exports.WpApiPages = WpApiPages;


/***/ },
/* 9 */
/*!*************************!*\
  !*** ./src/Comments.ts ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 1);
	var parent_ts_1 = __webpack_require__(/*! ./parent.ts */ 7);
	var WpApiComments = (function (_super) {
	    __extends(WpApiComments, _super);
	    function WpApiComments() {
	        _super.apply(this, arguments);
	    }
	    WpApiComments.prototype.getList = function (options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/comments", options);
	    };
	    WpApiComments.prototype.get = function (commentId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/comments/" + commentId, options);
	    };
	    WpApiComments.prototype.create = function (body, options) {
	        if (body === void 0) { body = {}; }
	        if (options === void 0) { options = {}; }
	        return this.httpPost("/comments", body, options);
	    };
	    WpApiComments.prototype.update = function (commentId, body, options) {
	        if (body === void 0) { body = {}; }
	        if (options === void 0) { options = {}; }
	        return this.httpPost("/comments/" + commentId, body, options);
	    };
	    WpApiComments.prototype.delete = function (commentId, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpDelete("/comments/" + commentId, options);
	    };
	    WpApiComments = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], WpApiComments);
	    return WpApiComments;
	}(parent_ts_1.WpApiParent));
	exports.WpApiComments = WpApiComments;


/***/ },
/* 10 */
/*!**********************!*\
  !*** ./src/Types.ts ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 1);
	var parent_ts_1 = __webpack_require__(/*! ./parent.ts */ 7);
	var WpApiTypes = (function (_super) {
	    __extends(WpApiTypes, _super);
	    function WpApiTypes() {
	        _super.apply(this, arguments);
	    }
	    WpApiTypes.prototype.getList = function (options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/types", options);
	    };
	    WpApiTypes.prototype.get = function (postType, options) {
	        if (options === void 0) { options = {}; }
	        return this.httpGet("/types/" + postType, options);
	    };
	    WpApiTypes = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], WpApiTypes);
	    return WpApiTypes;
	}(parent_ts_1.WpApiParent));
	exports.WpApiTypes = WpApiTypes;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=wp-api-angularjs.js.map