/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/main/main.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/main/main.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function () {
    // $('header #search-btn').click(function () {
    //     $('.search-dropdown').addClass('show');
    // });
    // $('.search-dropdown #close-btn').click(function () {
    //     $('.search-dropdown').removeClass('show');
    // });
    // responsive sub-menu
    var width = $(window).width();

    if (width < 1200) {
      $('.nav-bar li').click(function () {
        $(this).children('.sub-menu').toggle();
      });
      $('.nav-toggle-btn').click(function () {
        $('.nav-bar').addClass('show');
        $('.fixed-overlay').fadeToggle();
      });
      $('.close-menu-btn').click(function () {
        $('.nav-bar').removeClass('show');
        $(".fixed-overlay").fadeOut();
      });
      $(document).on('click', function (event) {
        if (!$(event.target).closest('.nav-bar, .nav-toggle-btn').length) {
          $(".nav-bar").removeClass("show");
          $(".fixed-overlay").fadeOut();
        }
      });
    }

    $('#select-protein-1').on('change', function () {
      var image_name = $(this).find(':selected').data('img');

      if ($(this).val() == "32439766351921:1" || image_name == "product_pinkvelvet.png") {
        console.log("PINK VELVET");
        $("#first_product_price").html("$44.99");
      } else {
        $("#first_product_price").html("$39.99 <p class='old-price'>$44.99</p>");
      }

      var first_product_image = $("#first_product_image");
      first_product_image.attr("src", "./images/" + image_name);
      console.log("change image");
    });
    $('#collagen-flavor').on('change', function () {
      console.log("change image");
      var image_name = $(this).find(':selected').data('img');
      var first_product_image = $("#third_product_image");
      first_product_image.attr("src", "./images/" + image_name);
    });
    $('#flavor-1').on('change', function () {
      console.log("change image");
      var image_name = $(this).find(':selected').data('img');
      var first_product_image = $("#second_product_image");
      first_product_image.attr("src", "./images/" + image_name);
    });
    $("#buy-protein-1").click(function (e) {
      e.preventDefault();
      var cart_url = "https://myobvi.com/cart/";
      var protein_val = $("#select-protein-1").val();

      if ($("#select-protein-1").val() !== null) {
        // alert(cart_url + protein_val);
        window.location.href = cart_url + protein_val;
      }
    });
    $("#buy-protein-2").click(function (e) {
      e.preventDefault();
      var cart_url = "https://myobvi.com/cart/";
      var flavor1 = $("#flavor-1").val();
      var flavor2 = $("#flavor-2").val();
      window.location.href = cart_url + flavor1; // if (flavor1 !== null && flavor2 !== null) {
      //     window.location.href = cart_url + flavor1 + "," + flavor2;
      // } else {
      //     if (flavor1 !== null) {
      //         // alert("flavor1");
      //         window.location.href = cart_url + flavor1;
      //     }
      //     if (flavor2 !== null) {
      //         // alert("flavor2");
      //         window.location.href = cart_url + flavor2;
      //     }
      // }
    });
    $("#buy-protein-3").click(function (e) {
      e.preventDefault();
      var cart_url = "https://myobvi.com/cart/";
      var flavor1 = $("#collagen-flavor").val();
      var flavor2 = $("#beauty-flavor").val();
      var flavor3 = $("#immunity-defense").val();
      window.location.href = cart_url + flavor1; // if (flavor1 !== null && flavor2 !== null) {
      //     window.location.href = cart_url + flavor1 + "," + flavor2 + "," + flavor3;
      // } else {
      //     // alert("select some value!!!");
      // }
    }); //content_type: product_group
    // content_ids: [2162729025585]
    // value: 39.99
    // num_items: 1
    // currency: USD
  });
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_main_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/main/main */ "./src/blocks/modules/main/main.js");
/* harmony import */ var _modules_main_main__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_main_main__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_js_bootstrap_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.min */ "./node_modules/bootstrap/dist/js/bootstrap.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var popper_js_dist_popper_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popper.js/dist/popper.min */ "./node_modules/popper.js/dist/popper.min.js");
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");




/***/ })

/******/ });
//# sourceMappingURL=main.js.map