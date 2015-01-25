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

	__webpack_require__(3);
	__webpack_require__(9);

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
	    __webpack_require__(5).name,
	    __webpack_require__(6).name,
	    __webpack_require__(7).name,
	    __webpack_require__(8).name
	]);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["_"] = __webpack_require__(4);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.7.0
	//     http://underscorejs.org
	//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.

	(function() {

	  // Baseline setup
	  // --------------

	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;

	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;

	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    concat           = ArrayProto.concat,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;

	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind;

	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };

	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }

	  // Current version.
	  _.VERSION = '1.7.0';

	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var createCallback = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };

	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  _.iteratee = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return createCallback(value, context, argCount);
	    if (_.isObject(value)) return _.matches(value);
	    return _.property(value);
	  };

	  // Collection Functions
	  // --------------------

	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    if (obj == null) return obj;
	    iteratee = createCallback(iteratee, context);
	    var i, length = obj.length;
	    if (length === +length) {
	      for (i = 0; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };

	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    if (obj == null) return [];
	    iteratee = _.iteratee(iteratee, context);
	    var keys = obj.length !== +obj.length && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length),
	        currentKey;
	    for (var index = 0; index < length; index++) {
	      currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };

	  var reduceError = 'Reduce of empty array with no initial value';

	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = function(obj, iteratee, memo, context) {
	    if (obj == null) obj = [];
	    iteratee = createCallback(iteratee, context, 4);
	    var keys = obj.length !== +obj.length && _.keys(obj),
	        length = (keys || obj).length,
	        index = 0, currentKey;
	    if (arguments.length < 3) {
	      if (!length) throw new TypeError(reduceError);
	      memo = obj[keys ? keys[index++] : index++];
	    }
	    for (; index < length; index++) {
	      currentKey = keys ? keys[index] : index;
	      memo = iteratee(memo, obj[currentKey], currentKey, obj);
	    }
	    return memo;
	  };

	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = function(obj, iteratee, memo, context) {
	    if (obj == null) obj = [];
	    iteratee = createCallback(iteratee, context, 4);
	    var keys = obj.length !== + obj.length && _.keys(obj),
	        index = (keys || obj).length,
	        currentKey;
	    if (arguments.length < 3) {
	      if (!index) throw new TypeError(reduceError);
	      memo = obj[keys ? keys[--index] : --index];
	    }
	    while (index--) {
	      currentKey = keys ? keys[index] : index;
	      memo = iteratee(memo, obj[currentKey], currentKey, obj);
	    }
	    return memo;
	  };

	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var result;
	    predicate = _.iteratee(predicate, context);
	    _.some(obj, function(value, index, list) {
	      if (predicate(value, index, list)) {
	        result = value;
	        return true;
	      }
	    });
	    return result;
	  };

	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    if (obj == null) return results;
	    predicate = _.iteratee(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };

	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(_.iteratee(predicate)), context);
	  };

	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    if (obj == null) return true;
	    predicate = _.iteratee(predicate, context);
	    var keys = obj.length !== +obj.length && _.keys(obj),
	        length = (keys || obj).length,
	        index, currentKey;
	    for (index = 0; index < length; index++) {
	      currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };

	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    if (obj == null) return false;
	    predicate = _.iteratee(predicate, context);
	    var keys = obj.length !== +obj.length && _.keys(obj),
	        length = (keys || obj).length,
	        index, currentKey;
	    for (index = 0; index < length; index++) {
	      currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };

	  // Determine if the array or object contains a given value (using `===`).
	  // Aliased as `include`.
	  _.contains = _.include = function(obj, target) {
	    if (obj == null) return false;
	    if (obj.length !== +obj.length) obj = _.values(obj);
	    return _.indexOf(obj, target) >= 0;
	  };

	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      return (isFunc ? method : value[method]).apply(value, args);
	    });
	  };

	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };

	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matches(attrs));
	  };

	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matches(attrs));
	  };

	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = obj.length === +obj.length ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = _.iteratee(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = obj.length === +obj.length ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = _.iteratee(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };

	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = obj && obj.length === +obj.length ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };

	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (obj.length !== +obj.length) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };

	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = _.iteratee(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };

	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = _.iteratee(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };

	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });

	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });

	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });

	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = _.iteratee(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = array.length;
	    while (low < high) {
	      var mid = low + high >>> 1;
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };

	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (obj.length === +obj.length) return _.map(obj, _.identity);
	    return _.values(obj);
	  };

	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return obj.length === +obj.length ? obj.length : _.keys(obj).length;
	  };

	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = _.iteratee(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };

	  // Array Functions
	  // ---------------

	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    if (n < 0) return [];
	    return slice.call(array, 0, n);
	  };

	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N. The **guard** check allows it to work with
	  // `_.map`.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };

	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array. The **guard** check allows it to work with `_.map`.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return slice.call(array, Math.max(array.length - n, 0));
	  };

	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array. The **guard**
	  // check allows it to work with `_.map`.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };

	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };

	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, output) {
	    if (shallow && _.every(input, _.isArray)) {
	      return concat.apply(output, input);
	    }
	    for (var i = 0, length = input.length; i < length; i++) {
	      var value = input[i];
	      if (!_.isArray(value) && !_.isArguments(value)) {
	        if (!strict) output.push(value);
	      } else if (shallow) {
	        push.apply(output, value);
	      } else {
	        flatten(value, shallow, strict, output);
	      }
	    }
	    return output;
	  };

	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false, []);
	  };

	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };

	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (array == null) return [];
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = _.iteratee(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = array.length; i < length; i++) {
	      var value = array[i];
	      if (isSorted) {
	        if (!i || seen !== value) result.push(value);
	        seen = value;
	      } else if (iteratee) {
	        var computed = iteratee(value, i, array);
	        if (_.indexOf(seen, computed) < 0) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (_.indexOf(result, value) < 0) {
	        result.push(value);
	      }
	    }
	    return result;
	  };

	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true, []));
	  };

	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    if (array == null) return [];
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = array.length; i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };

	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(slice.call(arguments, 1), true, true, []);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };

	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function(array) {
	    if (array == null) return [];
	    var length = _.max(arguments, 'length').length;
	    var results = Array(length);
	    for (var i = 0; i < length; i++) {
	      results[i] = _.pluck(arguments, i);
	    }
	    return results;
	  };

	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    if (list == null) return {};
	    var result = {};
	    for (var i = 0, length = list.length; i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };

	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = function(array, item, isSorted) {
	    if (array == null) return -1;
	    var i = 0, length = array.length;
	    if (isSorted) {
	      if (typeof isSorted == 'number') {
	        i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
	      } else {
	        i = _.sortedIndex(array, item);
	        return array[i] === item ? i : -1;
	      }
	    }
	    for (; i < length; i++) if (array[i] === item) return i;
	    return -1;
	  };

	  _.lastIndexOf = function(array, item, from) {
	    if (array == null) return -1;
	    var idx = array.length;
	    if (typeof from == 'number') {
	      idx = from < 0 ? idx + from + 1 : Math.min(idx, from + 1);
	    }
	    while (--idx >= 0) if (array[idx] === item) return idx;
	    return -1;
	  };

	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (arguments.length <= 1) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;

	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);

	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }

	    return range;
	  };

	  // Function (ahem) Functions
	  // ------------------

	  // Reusable constructor function for prototype setting.
	  var Ctor = function(){};

	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    var args, bound;
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    args = slice.call(arguments, 2);
	    bound = function() {
	      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
	      Ctor.prototype = func.prototype;
	      var self = new Ctor;
	      Ctor.prototype = null;
	      var result = func.apply(self, args.concat(slice.call(arguments)));
	      if (_.isObject(result)) return result;
	      return self;
	    };
	    return bound;
	  };

	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    return function() {
	      var position = 0;
	      var args = boundArgs.slice();
	      for (var i = 0, length = args.length; i < length; i++) {
	        if (args[i] === _) args[i] = arguments[position++];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return func.apply(this, args);
	    };
	  };

	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };

	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = hasher ? hasher.apply(this, arguments) : key;
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };

	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };

	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = function(func) {
	    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
	  };

	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        clearTimeout(timeout);
	        timeout = null;
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };

	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;

	    var later = function() {
	      var last = _.now() - timestamp;

	      if (last < wait && last > 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };

	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }

	      return result;
	    };
	  };

	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };

	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };

	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };

	  // Returns a function that will only be executed after being called N times.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };

	  // Returns a function that will only be executed before being called N times.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      } else {
	        func = null;
	      }
	      return memo;
	    };
	  };

	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);

	  // Object Functions
	  // ----------------

	  // Retrieve the names of an object's properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    return keys;
	  };

	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };

	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };

	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };

	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };

	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    var source, prop;
	    for (var i = 1, length = arguments.length; i < length; i++) {
	      source = arguments[i];
	      for (prop in source) {
	        if (hasOwnProperty.call(source, prop)) {
	            obj[prop] = source[prop];
	        }
	      }
	    }
	    return obj;
	  };

	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(obj, iteratee, context) {
	    var result = {}, key;
	    if (obj == null) return result;
	    if (_.isFunction(iteratee)) {
	      iteratee = createCallback(iteratee, context);
	      for (key in obj) {
	        var value = obj[key];
	        if (iteratee(value, key, obj)) result[key] = value;
	      }
	    } else {
	      var keys = concat.apply([], slice.call(arguments, 1));
	      obj = new Object(obj);
	      for (var i = 0, length = keys.length; i < length; i++) {
	        key = keys[i];
	        if (key in obj) result[key] = obj[key];
	      }
	    }
	    return result;
	  };

	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(concat.apply([], slice.call(arguments, 1)), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };

	  // Fill in a given object with default properties.
	  _.defaults = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    for (var i = 1, length = arguments.length; i < length; i++) {
	      var source = arguments[i];
	      for (var prop in source) {
	        if (obj[prop] === void 0) obj[prop] = source[prop];
	      }
	    }
	    return obj;
	  };

	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };

	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };

	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }
	    if (typeof a != 'object' || typeof b != 'object') return false;
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }
	    // Objects with different constructors are not equivalent, but `Object`s
	    // from different frames are.
	    var aCtor = a.constructor, bCtor = b.constructor;
	    if (
	      aCtor !== bCtor &&
	      // Handle Object.create(x) cases
	      'constructor' in a && 'constructor' in b &&
	      !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	        _.isFunction(bCtor) && bCtor instanceof bCtor)
	    ) {
	      return false;
	    }
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	    var size, result;
	    // Recursively compare objects and arrays.
	    if (className === '[object Array]') {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      size = a.length;
	      result = size === b.length;
	      if (result) {
	        // Deep compare the contents, ignoring non-numeric properties.
	        while (size--) {
	          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
	        }
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      size = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      result = _.keys(b).length === size;
	      if (result) {
	        while (size--) {
	          // Deep compare each member
	          key = keys[size];
	          if (!(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack))) break;
	        }
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return result;
	  };

	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b, [], []);
	  };

	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (_.isArray(obj) || _.isString(obj) || _.isArguments(obj)) return obj.length === 0;
	    for (var key in obj) if (_.has(obj, key)) return false;
	    return true;
	  };

	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };

	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };

	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };

	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });

	  // Define a fallback version of the method in browsers (ahem, IE), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }

	  // Optimize `isFunction` if appropriate. Work around an IE 11 bug.
	  if (true) {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }

	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };

	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };

	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };

	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };

	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };

	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };

	  // Utility Functions
	  // -----------------

	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };

	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };

	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };

	  _.noop = function(){};

	  _.property = function(key) {
	    return function(obj) {
	      return obj[key];
	    };
	  };

	  // Returns a predicate for checking whether an object has a given set of `key:value` pairs.
	  _.matches = function(attrs) {
	    var pairs = _.pairs(attrs), length = pairs.length;
	    return function(obj) {
	      if (obj == null) return !length;
	      obj = new Object(obj);
	      for (var i = 0; i < length; i++) {
	        var pair = pairs[i], key = pair[0];
	        if (pair[1] !== obj[key] || !(key in obj)) return false;
	      }
	      return true;
	    };
	  };

	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = createCallback(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };

	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };

	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };

	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);

	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);

	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property) {
	    if (object == null) return void 0;
	    var value = object[property];
	    return _.isFunction(value) ? object[property]() : value;
	  };

	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };

	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };

	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;

	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };

	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);

	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');

	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;

	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }

	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";

	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';

	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }

	    var template = function(data) {
	      return render.call(this, data, _);
	    };

	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';

	    return template;
	  };

	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };

	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.

	  // Helper function to continue chaining intermediate results.
	  var result = function(obj) {
	    return this._chain ? _(obj).chain() : obj;
	  };

	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result.call(this, func.apply(_, args));
	      };
	    });
	  };

	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);

	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result.call(this, obj);
	    };
	  });

	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result.call(this, method.apply(this._wrapped, arguments));
	    };
	  });

	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };

	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Restful Resources service for AngularJS apps
	 * @version v1.4.0 - 2014-04-25 * @link https://github.com/mgonto/restangular
	 * @author Martin Gontovnikas <martin@gon.to>
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */!function(){var a=angular.module("restangular",[]);a.provider("Restangular",function(){var a={};a.init=function(a,b){function c(a,b,c,d){var e={};return _.each(_.keys(d),function(f){var g=d[f];g.params=_.extend({},g.params,a.defaultRequestParams[g.method.toLowerCase()]),_.isEmpty(g.params)&&delete g.params,e[f]=a.isSafe(g.method)?function(){return b(_.extend(g,{url:c}))}:function(a){return b(_.extend(g,{url:c,data:a}))}}),e}a.configuration=b;var d=["get","head","options","trace","getlist"];b.isSafe=function(a){return _.contains(d,a.toLowerCase())};var e=/^https?:\/\//i;b.isAbsoluteUrl=function(a){return _.isUndefined(b.absoluteUrl)||_.isNull(b.absoluteUrl)?a&&e.test(a):b.absoluteUrl},b.absoluteUrl=_.isUndefined(b.absoluteUrl)?!0:b.absoluteUrl,a.setSelfLinkAbsoluteUrl=function(a){b.absoluteUrl=a},b.baseUrl=_.isUndefined(b.baseUrl)?"":b.baseUrl,a.setBaseUrl=function(a){return b.baseUrl=/\/$/.test(a)?a.substring(0,a.length-1):a,this},b.extraFields=b.extraFields||[],a.setExtraFields=function(a){return b.extraFields=a,this},b.defaultHttpFields=b.defaultHttpFields||{},a.setDefaultHttpFields=function(a){return b.defaultHttpFields=a,this},b.withHttpValues=function(a,c){return _.defaults(c,a,b.defaultHttpFields)},b.encodeIds=_.isUndefined(b.encodeIds)?!0:b.encodeIds,a.setEncodeIds=function(a){b.encodeIds=a},b.defaultRequestParams=b.defaultRequestParams||{get:{},post:{},put:{},remove:{},common:{}},a.setDefaultRequestParams=function(a,c){var d=[],e=c||a;return _.isUndefined(c)?d.push("common"):_.isArray(a)?d=a:d.push(a),_.each(d,function(a){b.defaultRequestParams[a]=e}),this},a.requestParams=b.defaultRequestParams,b.defaultHeaders=b.defaultHeaders||{},a.setDefaultHeaders=function(c){return b.defaultHeaders=c,a.defaultHeaders=b.defaultHeaders,this},a.defaultHeaders=b.defaultHeaders,b.methodOverriders=b.methodOverriders||[],a.setMethodOverriders=function(a){var c=_.extend([],a);return b.isOverridenMethod("delete",c)&&c.push("remove"),b.methodOverriders=c,this},b.jsonp=_.isUndefined(b.jsonp)?!1:b.jsonp,a.setJsonp=function(a){b.jsonp=a},b.isOverridenMethod=function(a,c){var d=c||b.methodOverriders;return!_.isUndefined(_.find(d,function(b){return b.toLowerCase()===a.toLowerCase()}))},b.urlCreator=b.urlCreator||"path",a.setUrlCreator=function(a){if(!_.has(b.urlCreatorFactory,a))throw new Error("URL Path selected isn't valid");return b.urlCreator=a,this},b.restangularFields=b.restangularFields||{id:"id",route:"route",parentResource:"parentResource",restangularCollection:"restangularCollection",cannonicalId:"__cannonicalId",etag:"restangularEtag",selfLink:"href",get:"get",getList:"getList",put:"put",post:"post",remove:"remove",head:"head",trace:"trace",options:"options",patch:"patch",getRestangularUrl:"getRestangularUrl",getRequestedUrl:"getRequestedUrl",putElement:"putElement",addRestangularMethod:"addRestangularMethod",getParentList:"getParentList",clone:"clone",ids:"ids",httpConfig:"_$httpConfig",reqParams:"reqParams",one:"one",all:"all",several:"several",oneUrl:"oneUrl",allUrl:"allUrl",customPUT:"customPUT",customPOST:"customPOST",customDELETE:"customDELETE",customGET:"customGET",customGETLIST:"customGETLIST",customOperation:"customOperation",doPUT:"doPUT",doPOST:"doPOST",doDELETE:"doDELETE",doGET:"doGET",doGETLIST:"doGETLIST",fromServer:"fromServer",withConfig:"withConfig",withHttpConfig:"withHttpConfig",singleOne:"singleOne",plain:"plain",save:"save"},a.setRestangularFields=function(a){return b.restangularFields=_.extend(b.restangularFields,a),this},b.isRestangularized=function(a){return!!a[b.restangularFields.one]||!!a[b.restangularFields.all]},b.setFieldToElem=function(a,b,c){var d=a.split("."),e=b;return _.each(_.initial(d),function(a){e[a]={},e=e[a]}),e[_.last(d)]=c,this},b.getFieldFromElem=function(a,b){var c=a.split("."),d=b;return _.each(c,function(a){d&&(d=d[a])}),angular.copy(d)},b.setIdToElem=function(a,c){return b.setFieldToElem(b.restangularFields.id,a,c),this},b.getIdFromElem=function(a){return b.getFieldFromElem(b.restangularFields.id,a)},b.isValidId=function(a){return""!==a&&!_.isUndefined(a)&&!_.isNull(a)},b.setUrlToElem=function(a,c){return b.setFieldToElem(b.restangularFields.selfLink,a,c),this},b.getUrlFromElem=function(a){return b.getFieldFromElem(b.restangularFields.selfLink,a)},b.useCannonicalId=_.isUndefined(b.useCannonicalId)?!1:b.useCannonicalId,a.setUseCannonicalId=function(a){return b.useCannonicalId=a,this},b.getCannonicalIdFromElem=function(a){var c=a[b.restangularFields.cannonicalId],d=b.isValidId(c)?c:b.getIdFromElem(a);return d},b.responseInterceptors=b.responseInterceptors||[],b.defaultResponseInterceptor=function(a){return a},b.responseExtractor=function(a,c,d,e,f,g){var h=angular.copy(b.responseInterceptors);h.push(b.defaultResponseInterceptor);var i=a;return _.each(h,function(a){i=a(i,c,d,e,f,g)}),i},a.addResponseInterceptor=function(a){return b.responseInterceptors.push(a),this},a.setResponseInterceptor=a.addResponseInterceptor,a.setResponseExtractor=a.addResponseInterceptor,b.requestInterceptors=b.requestInterceptors||[],b.defaultInterceptor=function(a,b,c,d,e,f,g){return{element:a,headers:e,params:f,httpConfig:g}},b.fullRequestInterceptor=function(a,c,d,e,f,g,h){var i=angular.copy(b.requestInterceptors),j=b.defaultInterceptor(a,c,d,e,f,g,h);return _.reduce(i,function(a,b){return _.extend(a,b(a.element,c,d,e,a.headers,a.params,a.httpConfig))},j)},a.addRequestInterceptor=function(a){return b.requestInterceptors.push(function(b,c,d,e,f,g,h){return{headers:f,params:g,element:a(b,c,d,e),httpConfig:h}}),this},a.setRequestInterceptor=a.addRequestInterceptor,a.addFullRequestInterceptor=function(a){return b.requestInterceptors.push(a),this},a.setFullRequestInterceptor=a.addFullRequestInterceptor,b.errorInterceptor=b.errorInterceptor||function(){},a.setErrorInterceptor=function(a){return b.errorInterceptor=a,this},b.onBeforeElemRestangularized=b.onBeforeElemRestangularized||function(a){return a},a.setOnBeforeElemRestangularized=function(a){return b.onBeforeElemRestangularized=a,this},b.onElemRestangularized=b.onElemRestangularized||function(a){return a},a.setOnElemRestangularized=function(a){return b.onElemRestangularized=a,this},b.shouldSaveParent=b.shouldSaveParent||function(){return!0},a.setParentless=function(a){return _.isArray(a)?b.shouldSaveParent=function(b){return!_.contains(a,b)}:_.isBoolean(a)&&(b.shouldSaveParent=function(){return!a}),this},b.suffix=_.isUndefined(b.suffix)?null:b.suffix,a.setRequestSuffix=function(a){return b.suffix=a,this},b.transformers=b.transformers||{},a.addElementTransformer=function(c,d,e){var f=null,g=null;2===arguments.length?g=d:(g=e,f=d);var h=b.transformers[c];return h||(h=b.transformers[c]=[]),h.push(function(a,b){return _.isNull(f)||a==f?g(b):b}),a},a.extendCollection=function(b,c){return a.addElementTransformer(b,!0,c)},a.extendModel=function(b,c){return a.addElementTransformer(b,!1,c)},b.transformElem=function(a,c,d,e,f){if(!f&&!b.transformLocalElements&&!a[b.restangularFields.fromServer])return a;var g=b.transformers[d],h=a;return g&&_.each(g,function(a){h=a(c,h)}),b.onElemRestangularized(h,c,d,e)},b.transformLocalElements=_.isUndefined(b.transformLocalElements)?!1:b.transformLocalElements,a.setTransformOnlyServerElements=function(a){b.transformLocalElements=!a},b.fullResponse=_.isUndefined(b.fullResponse)?!1:b.fullResponse,a.setFullResponse=function(a){return b.fullResponse=a,this},b.urlCreatorFactory={};var f=function(){};f.prototype.setConfig=function(a){return this.config=a,this},f.prototype.parentsArray=function(a){for(var b=[];a;)b.push(a),a=a[this.config.restangularFields.parentResource];return b.reverse()},f.prototype.resource=function(a,d,e,f,g,h,i,j){var k=_.defaults(g||{},this.config.defaultRequestParams.common),l=_.defaults(f||{},this.config.defaultHeaders);i&&(b.isSafe(j)?l["If-None-Match"]=i:l["If-Match"]=i);var m=this.base(a);if(h){var n="";/\/$/.test(m)||(n+="/"),n+=h,m+=n}return this.config.suffix&&-1===m.indexOf(this.config.suffix,m.length-this.config.suffix.length)&&!this.config.getUrlFromElem(a)&&(m+=this.config.suffix),a[this.config.restangularFields.httpConfig]=void 0,c(this.config,d,m,{getList:this.config.withHttpValues(e,{method:"GET",params:k,headers:l}),get:this.config.withHttpValues(e,{method:"GET",params:k,headers:l}),jsonp:this.config.withHttpValues(e,{method:"jsonp",params:k,headers:l}),put:this.config.withHttpValues(e,{method:"PUT",params:k,headers:l}),post:this.config.withHttpValues(e,{method:"POST",params:k,headers:l}),remove:this.config.withHttpValues(e,{method:"DELETE",params:k,headers:l}),head:this.config.withHttpValues(e,{method:"HEAD",params:k,headers:l}),trace:this.config.withHttpValues(e,{method:"TRACE",params:k,headers:l}),options:this.config.withHttpValues(e,{method:"OPTIONS",params:k,headers:l}),patch:this.config.withHttpValues(e,{method:"PATCH",params:k,headers:l})})};var g=function(){};g.prototype=new f,g.prototype.base=function(a){var c=this;return _.reduce(this.parentsArray(a),function(a,d){var e,f=c.config.getUrlFromElem(d);if(f){if(c.config.isAbsoluteUrl(f))return f;e=f}else if(e=d[c.config.restangularFields.route],d[c.config.restangularFields.restangularCollection]){var g=d[c.config.restangularFields.ids];g&&(e+="/"+g.join(","))}else{var h;h=c.config.useCannonicalId?c.config.getCannonicalIdFromElem(d):c.config.getIdFromElem(d),b.isValidId(h)&&!d.singleOne&&(e+="/"+(c.config.encodeIds?encodeURIComponent(h):h))}return a.replace(/\/$/,"")+"/"+e},this.config.baseUrl)},g.prototype.fetchUrl=function(a,b){var c=this.base(a);return b&&(c+="/"+b),c},g.prototype.fetchRequestedUrl=function(a,c){function d(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b.sort()}function e(a,b,c){for(var e=d(a),f=0;f<e.length;f++)b.call(c,a[e[f]],e[f]);return e}function f(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,b?"%20":"+")}var g=this.fetchUrl(a,c),h=a[b.restangularFields.reqParams];if(!h)return g;var i=[];return e(h,function(a,b){null!=a&&void 0!=a&&(angular.isArray(a)||(a=[a]),angular.forEach(a,function(a){angular.isObject(a)&&(a=angular.toJson(a)),i.push(f(b)+"="+f(a))}))}),g+(this.config.suffix||"")+(-1===g.indexOf("?")?"?":"&")+i.join("&")},b.urlCreatorFactory.path=g};var b={};a.init(this,b),this.$get=["$http","$q",function(c,d){function e(b){function f(a,c,d,e,f){if(c[b.restangularFields.route]=d,c[b.restangularFields.getRestangularUrl]=_.bind(P.fetchUrl,P,c),c[b.restangularFields.getRequestedUrl]=_.bind(P.fetchRequestedUrl,P,c),c[b.restangularFields.addRestangularMethod]=_.bind(L,c),c[b.restangularFields.clone]=_.bind(r,c,c),c[b.restangularFields.reqParams]=_.isEmpty(e)?null:e,c[b.restangularFields.withHttpConfig]=_.bind(z,c),c[b.restangularFields.plain]=_.bind(p,c,c),c[b.restangularFields.one]=_.bind(g,c,c),c[b.restangularFields.all]=_.bind(h,c,c),c[b.restangularFields.several]=_.bind(i,c,c),c[b.restangularFields.oneUrl]=_.bind(j,c,c),c[b.restangularFields.allUrl]=_.bind(k,c,c),c[b.restangularFields.fromServer]=!!f,a&&b.shouldSaveParent(d)){var l=b.getIdFromElem(a),m=b.getUrlFromElem(a),n=_.union(_.values(_.pick(b.restangularFields,["route","singleOne","parentResource"])),b.extraFields),o=_.pick(a,n);b.isValidId(l)&&b.setIdToElem(o,l),b.isValidId(m)&&b.setUrlToElem(o,m),c[b.restangularFields.parentResource]=o}else c[b.restangularFields.parentResource]=null;return c}function g(a,c,d,e){if(_.isNumber(c)||_.isNumber(a)){var f="You're creating a Restangular entity with the number ";throw f+="instead of the route or the parent. You can't call .one(12)",new Error(f)}var g={};return b.setIdToElem(g,d),b.setFieldToElem(b.restangularFields.singleOne,g,e),s(a,g,c,!1)}function h(a,b){return t(a,[],b,!1)}function i(a,c){var d=[];return d[b.restangularFields.ids]=Array.prototype.splice.call(arguments,2),t(a,d,c,!1)}function j(a,c,d){if(!c)throw new Error("Route is mandatory when creating new Restangular objects.");var e={};return b.setUrlToElem(e,d,c),s(a,e,c,!1)}function k(a,c,d){if(!c)throw new Error("Route is mandatory when creating new Restangular objects.");var e={};return b.setUrlToElem(e,d,c),t(a,e,c,!1)}function l(a,c,d){return a.call=_.bind(m,a),a.get=_.bind(n,a),a[b.restangularFields.restangularCollection]=c,c&&(a.push=_.bind(m,a,"push")),a.$object=d,a}function m(a){var c=d.defer(),e=arguments,f={};return this.then(function(b){var d=Array.prototype.slice.call(e,1),g=b[a];g.apply(b,d),f=b,c.resolve(b)}),l(c.promise,this[b.restangularFields.restangularCollection],f)}function n(a){var c=d.defer(),e={};return this.then(function(b){e=b[a],c.resolve(e)}),l(c.promise,this[b.restangularFields.restangularCollection],e)}function o(a,c,d,e){return _.extend(e,d),b.fullResponse?a.resolve(_.extend(c,{data:d})):(a.resolve(d),void 0)}function p(a){if(_.isArray(a)){var c=[];return _.each(a,function(a){c.push(p(a))}),c}return _.omit(a,_.values(_.omit(b.restangularFields,"id")))}function q(a){a[b.restangularFields.customOperation]=_.bind(K,a),_.each(["put","post","get","delete"],function(b){_.each(["do","custom"],function(c){var d,e="delete"===b?"remove":b,f=c+b.toUpperCase();d="put"!==e&&"post"!==e?K:function(a,b,c,d,e){return _.bind(K,this)(a,c,d,e,b)},a[f]=_.bind(d,a,e)})}),a[b.restangularFields.customGETLIST]=_.bind(y,a),a[b.restangularFields.doGETLIST]=a[b.restangularFields.customGETLIST]}function r(a,c){var d=angular.copy(a,c);return s(d[b.restangularFields.parentResource],d,d[b.restangularFields.route],!0)}function s(a,c,d,e,g,h){var i=b.onBeforeElemRestangularized(c,!1,d),j=f(a,i,d,h,e);return b.useCannonicalId&&(j[b.restangularFields.cannonicalId]=b.getIdFromElem(j)),g&&(j[b.restangularFields.getParentList]=function(){return g}),j[b.restangularFields.restangularCollection]=!1,j[b.restangularFields.get]=_.bind(C,j),j[b.restangularFields.getList]=_.bind(y,j),j[b.restangularFields.put]=_.bind(E,j),j[b.restangularFields.post]=_.bind(F,j),j[b.restangularFields.remove]=_.bind(D,j),j[b.restangularFields.head]=_.bind(G,j),j[b.restangularFields.trace]=_.bind(H,j),j[b.restangularFields.options]=_.bind(I,j),j[b.restangularFields.patch]=_.bind(J,j),j[b.restangularFields.save]=_.bind(A,j),q(j),b.transformElem(j,!1,d,O,!0)}function t(a,c,d,e,g){var h=b.onBeforeElemRestangularized(c,!0,d),i=f(a,h,d,g,e);return i[b.restangularFields.restangularCollection]=!0,i[b.restangularFields.post]=_.bind(F,i,null),i[b.restangularFields.remove]=_.bind(D,i),i[b.restangularFields.head]=_.bind(G,i),i[b.restangularFields.trace]=_.bind(H,i),i[b.restangularFields.putElement]=_.bind(w,i),i[b.restangularFields.options]=_.bind(I,i),i[b.restangularFields.patch]=_.bind(J,i),i[b.restangularFields.get]=_.bind(v,i),i[b.restangularFields.getList]=_.bind(y,i,null),q(i),b.transformElem(i,!0,d,O,!0)}function u(a,b,c){var d=t(a,b,c,!1);return _.each(d,function(b){s(a,b,c,!1)}),d}function v(a,b,c){return this.customGET(a.toString(),b,c)}function w(a,c,e){var f=this,g=this[a],h=d.defer(),i=[];return i=b.transformElem(i,!0,g[b.restangularFields.route],O),g.put(c,e).then(function(b){var c=r(f);c[a]=b,i=c,h.resolve(c)},function(a){h.reject(a)}),l(h.promise,!0,i)}function x(a,c,d,e,f,g){var h=b.responseExtractor(a,c,d,e,f,g),i=f.headers("ETag");return h&&i&&(h[b.restangularFields.etag]=i),h}function y(a,e,f){var g=this,h=d.defer(),i="getList",j=P.fetchUrl(this,a),k=a||g[b.restangularFields.route],m=b.fullRequestInterceptor(null,i,k,j,f||{},e||{},this[b.restangularFields.httpConfig]||{}),n=[];n=b.transformElem(n,!0,k,O);var p="getList";return b.jsonp&&(p="jsonp"),P.resource(this,c,m.httpConfig,m.headers,m.params,a,this[b.restangularFields.etag],i)[p]().then(function(c){var d=c.data,e=c.config.params,f=x(d,i,k,j,c,h);if((_.isUndefined(f)||""===f)&&(f=[]),!_.isArray(f))throw new Error("Response for getList SHOULD be an array and not an object or something else");var l=_.map(f,function(c){return g[b.restangularFields.restangularCollection]?s(g[b.restangularFields.parentResource],c,g[b.restangularFields.route],!0,f):s(g,c,a,!0,f)});l=_.extend(f,l),g[b.restangularFields.restangularCollection]?o(h,c,t(g[b.restangularFields.parentResource],l,g[b.restangularFields.route],!0,e),n):o(h,c,t(g,l,a,!0,e),n)},function(a){304===a.status&&g[b.restangularFields.restangularCollection]?o(h,a,g,n):b.errorInterceptor(a,h)!==!1&&h.reject(a)}),l(h.promise,!0,n)}function z(a){return this[b.restangularFields.httpConfig]=a,this}function A(a,c){return this[b.restangularFields.fromServer]?this[b.restangularFields.put](a,c):_.bind(B,this)("post",void 0,a,void 0,c)}function B(a,e,f,g,h){var i=this,j=d.defer(),k=f||{},m=e||this[b.restangularFields.route],n=P.fetchUrl(this,e),q=g||this,r=q[b.restangularFields.etag]||("post"!=a?this[b.restangularFields.etag]:null);_.isObject(q)&&b.isRestangularized(q)&&(q=p(q));var t=b.fullRequestInterceptor(q,a,m,n,h||{},k||{},this[b.restangularFields.httpConfig]||{}),u={};u=b.transformElem(u,!1,m,O);var v=function(c){var d=c.data,f=c.config.params,g=x(d,a,m,n,c,j);g?"post"!==a||i[b.restangularFields.restangularCollection]?(data=s(i[b.restangularFields.parentResource],g,i[b.restangularFields.route],!0,null,f),data[b.restangularFields.singleOne]=i[b.restangularFields.singleOne],o(j,c,data,u)):o(j,c,s(i,g,e,!0,null,f),u):o(j,c,void 0,u)},w=function(c){304===c.status&&b.isSafe(a)?o(j,c,i,u):b.errorInterceptor(c,j)!==!1&&j.reject(c)},y=a,z=_.extend({},t.headers),A=b.isOverridenMethod(a);return A?(y="post",z=_.extend(z,{"X-HTTP-Method-Override":"remove"===a?"DELETE":a})):b.jsonp&&"get"===y&&(y="jsonp"),b.isSafe(a)?A?P.resource(this,c,t.httpConfig,z,t.params,e,r,y)[y]({}).then(v,w):P.resource(this,c,t.httpConfig,z,t.params,e,r,y)[y]().then(v,w):P.resource(this,c,t.httpConfig,z,t.params,e,r,y)[y](t.element).then(v,w),l(j.promise,!1,u)}function C(a,b){return _.bind(B,this)("get",void 0,a,void 0,b)}function D(a,b){return _.bind(B,this)("remove",void 0,a,void 0,b)}function E(a,b){return _.bind(B,this)("put",void 0,a,void 0,b)}function F(a,b,c,d){return _.bind(B,this)("post",a,c,b,d)}function G(a,b){return _.bind(B,this)("head",void 0,a,void 0,b)}function H(a,b){return _.bind(B,this)("trace",void 0,a,void 0,b)}function I(a,b){return _.bind(B,this)("options",void 0,a,void 0,b)}function J(a,b,c){return _.bind(B,this)("patch",void 0,b,a,c)}function K(a,b,c,d,e){return _.bind(B,this)(a,b,c,e,d)}function L(a,c,d,e,f,g){var h;h="getList"===c?_.bind(y,this,d):_.bind(K,this,c,d);var i=function(a,b,c){var d=_.defaults({params:a,headers:b,elem:c},{params:e,headers:f,elem:g});return h(d.params,d.headers,d.elem)};this[a]=b.isSafe(c)?i:function(a,b,c){return i(b,c,a)}}function M(c){var d=angular.copy(_.omit(b,"configuration"));return a.init(d,d),c(d),e(d)}function N(a,b){var c={},d=(b||O).all(a);return c.one=_.bind(g,b||O,b,a),c.post=_.bind(d.post,d),c.getList=_.bind(d.getList,d),c}var O={},P=new b.urlCreatorFactory[b.urlCreator];return P.setConfig(b),a.init(O,b),O.copy=_.bind(r,O),O.service=_.bind(N,O),O.withConfig=_.bind(M,O),O.one=_.bind(g,O,null),O.all=_.bind(h,O,null),O.several=_.bind(i,O,null),O.oneUrl=_.bind(j,O,null),O.allUrl=_.bind(k,O,null),O.stripRestangular=_.bind(p,O),O.restangularizeElement=_.bind(s,O),O.restangularizeCollection=_.bind(u,O),O}return e(b)}]})}();

/***/ }
/******/ ])