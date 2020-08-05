/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/ui-kit/colors-and-type/colors-and-type.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/material-design-icons/iconfont/material-icons.css":
/*!************************************************************************!*\
  !*** ./node_modules/material-design-icons/iconfont/material-icons.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../mini-css-extract-plugin/dist/loader.js!../../css-loader/dist/cjs.js!./material-icons.css */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/material-design-icons/iconfont/material-icons.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./node_modules/material-design-icons/iconfont/material-icons.css?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/material-design-icons/iconfont/material-icons.css":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/material-design-icons/iconfont/material-icons.css ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./node_modules/material-design-icons/iconfont/material-icons.css?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/ui-kit/colors-and-type/colors-and-type.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/ui-kit/colors-and-type/colors-and-type.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/pages/ui-kit/colors-and-type/colors-and-type.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src sync recursive \\.(png|svg|jpg)$":
/*!***********************************!*\
  !*** ./src sync \.(png|svg|jpg)$ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./assets/fonts/Montserrat/montserrat-bold.svg\": \"./src/assets/fonts/Montserrat/montserrat-bold.svg\",\n\t\"./assets/fonts/Montserrat/montserrat-regular.svg\": \"./src/assets/fonts/Montserrat/montserrat-regular.svg\",\n\t\"./assets/fonts/OpenSans/open-sans-bold.svg\": \"./src/assets/fonts/OpenSans/open-sans-bold.svg\",\n\t\"./assets/fonts/OpenSans/open-sans-regular.svg\": \"./src/assets/fonts/OpenSans/open-sans-regular.svg\",\n\t\"./assets/fonts/Quicksand/quicksand-bold.svg\": \"./src/assets/fonts/Quicksand/quicksand-bold.svg\",\n\t\"./assets/fonts/Quicksand/quicksand-regular.svg\": \"./src/assets/fonts/Quicksand/quicksand-regular.svg\",\n\t\"./components/checkbox-list/img/check-mark.svg\": \"./src/components/checkbox-list/img/check-mark.svg\",\n\t\"./components/colored-logo/img/TOXIN.svg\": \"./src/components/colored-logo/img/TOXIN.svg\",\n\t\"./components/colored-logo/img/colored-logo.svg\": \"./src/components/colored-logo/img/colored-logo.svg\",\n\t\"./components/logo/img/logo.svg\": \"./src/components/logo/img/logo.svg\",\n\t\"./components/room-info/img/test11.png\": \"./src/components/room-info/img/test11.png\",\n\t\"./components/room-info/img/test110.png\": \"./src/components/room-info/img/test110.png\",\n\t\"./components/room-info/img/test120.png\": \"./src/components/room-info/img/test120.png\",\n\t\"./components/room-info/img/test130.png\": \"./src/components/room-info/img/test130.png\",\n\t\"./components/room-info/img/test22.png\": \"./src/components/room-info/img/test22.png\",\n\t\"./components/room-info/img/test33.png\": \"./src/components/room-info/img/test33.png\",\n\t\"./components/room-info/img/test44.png\": \"./src/components/room-info/img/test44.png\",\n\t\"./components/room-info/img/test55.png\": \"./src/components/room-info/img/test55.png\",\n\t\"./components/room-info/img/test66.png\": \"./src/components/room-info/img/test66.png\",\n\t\"./components/room-info/img/test77.png\": \"./src/components/room-info/img/test77.png\",\n\t\"./components/room-info/img/test88.png\": \"./src/components/room-info/img/test88.png\",\n\t\"./components/room-info/img/test99.png\": \"./src/components/room-info/img/test99.png\",\n\t\"./components/room-reviews/img/image1.png\": \"./src/components/room-reviews/img/image1.png\",\n\t\"./components/room-reviews/img/image2.png\": \"./src/components/room-reviews/img/image2.png\",\n\t\"./components/social-media/img/facebook-icon.svg\": \"./src/components/social-media/img/facebook-icon.svg\",\n\t\"./components/social-media/img/instagram-icon.svg\": \"./src/components/social-media/img/instagram-icon.svg\",\n\t\"./components/social-media/img/twitter-icon.svg\": \"./src/components/social-media/img/twitter-icon.svg\",\n\t\"./favicons/android-chrome-192x192.png\": \"./src/favicons/android-chrome-192x192.png\",\n\t\"./favicons/android-chrome-512x512.png\": \"./src/favicons/android-chrome-512x512.png\",\n\t\"./favicons/apple-touch-icon.png\": \"./src/favicons/apple-touch-icon.png\",\n\t\"./favicons/favicon-16x16.png\": \"./src/favicons/favicon-16x16.png\",\n\t\"./favicons/favicon-32x32.png\": \"./src/favicons/favicon-32x32.png\",\n\t\"./favicons/mstile-144x144.png\": \"./src/favicons/mstile-144x144.png\",\n\t\"./favicons/mstile-150x150.png\": \"./src/favicons/mstile-150x150.png\",\n\t\"./favicons/mstile-310x150.png\": \"./src/favicons/mstile-310x150.png\",\n\t\"./favicons/mstile-310x310.png\": \"./src/favicons/mstile-310x310.png\",\n\t\"./favicons/mstile-70x70.png\": \"./src/favicons/mstile-70x70.png\",\n\t\"./favicons/safari-pinned-tab.svg\": \"./src/favicons/safari-pinned-tab.svg\",\n\t\"./pages/web-pages/landing-page/img/background.jpg\": \"./src/pages/web-pages/landing-page/img/background.jpg\",\n\t\"./pages/web-pages/registration/img/background.jpg\": \"./src/pages/web-pages/registration/img/background.jpg\",\n\t\"./pages/web-pages/room-details/img/background1.jpg\": \"./src/pages/web-pages/room-details/img/background1.jpg\",\n\t\"./pages/web-pages/room-details/img/background2.jpg\": \"./src/pages/web-pages/room-details/img/background2.jpg\",\n\t\"./pages/web-pages/room-details/img/background3.jpg\": \"./src/pages/web-pages/room-details/img/background3.jpg\",\n\t\"./pages/web-pages/sign-in/img/background.jpg\": \"./src/pages/web-pages/sign-in/img/background.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src sync recursive \\\\.(png|svg|jpg)$\";\n\n//# sourceURL=webpack:///./src_sync_\\.(png%7Csvg%7Cjpg)$?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat/montserrat-bold.svg":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/Montserrat/montserrat-bold.svg ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/Montserrat/montserrat-bold.svg\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Montserrat/montserrat-bold.svg?");

/***/ }),

/***/ "./src/assets/fonts/Montserrat/montserrat-regular.svg":
/*!************************************************************!*\
  !*** ./src/assets/fonts/Montserrat/montserrat-regular.svg ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/Montserrat/montserrat-regular.svg\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Montserrat/montserrat-regular.svg?");

/***/ }),

/***/ "./src/assets/fonts/OpenSans/open-sans-bold.svg":
/*!******************************************************!*\
  !*** ./src/assets/fonts/OpenSans/open-sans-bold.svg ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/OpenSans/open-sans-bold.svg\");\n\n//# sourceURL=webpack:///./src/assets/fonts/OpenSans/open-sans-bold.svg?");

/***/ }),

/***/ "./src/assets/fonts/OpenSans/open-sans-regular.svg":
/*!*********************************************************!*\
  !*** ./src/assets/fonts/OpenSans/open-sans-regular.svg ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/OpenSans/open-sans-regular.svg\");\n\n//# sourceURL=webpack:///./src/assets/fonts/OpenSans/open-sans-regular.svg?");

/***/ }),

/***/ "./src/assets/fonts/Quicksand/quicksand-bold.svg":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/Quicksand/quicksand-bold.svg ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/Quicksand/quicksand-bold.svg\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Quicksand/quicksand-bold.svg?");

/***/ }),

/***/ "./src/assets/fonts/Quicksand/quicksand-regular.svg":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/Quicksand/quicksand-regular.svg ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/fonts/Quicksand/quicksand-regular.svg\");\n\n//# sourceURL=webpack:///./src/assets/fonts/Quicksand/quicksand-regular.svg?");

/***/ }),

/***/ "./src/components/checkbox-list/img/check-mark.svg":
/*!*********************************************************!*\
  !*** ./src/components/checkbox-list/img/check-mark.svg ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/components/checkbox-list/img/check-mark.svg\");\n\n//# sourceURL=webpack:///./src/components/checkbox-list/img/check-mark.svg?");

/***/ }),

/***/ "./src/components/colored-logo/img/TOXIN.svg":
/*!***************************************************!*\
  !*** ./src/components/colored-logo/img/TOXIN.svg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/components/colored-logo/img/TOXIN.svg\");\n\n//# sourceURL=webpack:///./src/components/colored-logo/img/TOXIN.svg?");

/***/ }),

/***/ "./src/components/colored-logo/img/colored-logo.svg":
/*!**********************************************************!*\
  !*** ./src/components/colored-logo/img/colored-logo.svg ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/components/colored-logo/img/colored-logo.svg\");\n\n//# sourceURL=webpack:///./src/components/colored-logo/img/colored-logo.svg?");

/***/ }),

/***/ "./src/components/logo/img/logo.svg":
/*!******************************************!*\
  !*** ./src/components/logo/img/logo.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/components/logo/img/logo.svg\");\n\n//# sourceURL=webpack:///./src/components/logo/img/logo.svg?");

/***/ }),

/***/ "./src/components/room-info/img/test11.png":
/*!*************************************************!*\
  !*** ./src/components/room-info/img/test11.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/components/room-info/img/test11.png\");\n\n//# sourceURL=webpack:///./src/components/room-info/img/test11.png?");

/***/ }),

/***/ "./src/components/room-info/img/test110.png":
/*!**************************************************!*\
  !*** ./src/components/room-info/img/test110.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/components/room-info/img/test110.png\");\n\n//# sourceURL=webpack:///./src/components/room-info/img/test110.png?");

/***/ }),

/***/ "./src/components/room-info/img/test120.png":
/*!**************************************************!*\
  !*** ./src/components/room-info/img/test120.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/components/room-info/img/test120.png\");\n\n//# sourceURL=webpack:///./src/components/room-info/img/test120.png?");

/***/ }),

/***/ "./src/components/room-info/img/test130.png":
/*!**************************************************!*\
  !*** ./src/components/room-info/img/test130.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/components/room-info/img/test130.png\");\n\n//# sourceURL=webpack:///./src/components/room-info/img/test130.png?");

/***/ }),

/***/ "./src/components/room-info/img/test22.png":
/*!*************************************************!*\
  !*** ./src/components/room-info/img/test22.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/components/room-info/img/test22.png\");\n\n//# sourceURL=webpack:///./src/components/room-info/img/test22.png?");

/***/ }),

/***/ "./src/components/room-info/img/test33.png":
/*!*************************************************!*\
  !*** ./src/components/room-info/img/test33.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/components/room-info/img/test33.png\");\n\n//# sourceURL=webpack:///./src/components/room-info/img/test33.png?");

/***/ }),

/***/ "./src/components/room-info/img/test44.png":
/*!*************************************************!*\
  !*** ./src/components/room-info/img/test44.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/components/room-info/img/test44.png\");\n\n//# sourceURL=webpack:///./src/components/room-info/img/test44.png?");

/***/ }),

/***/ "./src/components/room-info/img/test55.png":
/*!*************************************************!*\
  !*** ./src/components/room-info/img/test55.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/components/room-info/img/test55.png\");\n\n//# sourceURL=webpack:///./src/components/room-info/img/test55.png?");

/***/ }),

/***/ "./src/components/room-info/img/test66.png":
/*!*************************************************!*\
  !*** ./src/components/room-info/img/test66.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/components/room-info/img/test66.png\");\n\n//# sourceURL=webpack:///./src/components/room-info/img/test66.png?");

/***/ }),

/***/ "./src/components/room-info/img/test77.png":
/*!*************************************************!*\
  !*** ./src/components/room-info/img/test77.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/components/room-info/img/test77.png\");\n\n//# sourceURL=webpack:///./src/components/room-info/img/test77.png?");

/***/ }),

/***/ "./src/components/room-info/img/test88.png":
/*!*************************************************!*\
  !*** ./src/components/room-info/img/test88.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/components/room-info/img/test88.png\");\n\n//# sourceURL=webpack:///./src/components/room-info/img/test88.png?");

/***/ }),

/***/ "./src/components/room-info/img/test99.png":
/*!*************************************************!*\
  !*** ./src/components/room-info/img/test99.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/components/room-info/img/test99.png\");\n\n//# sourceURL=webpack:///./src/components/room-info/img/test99.png?");

/***/ }),

/***/ "./src/components/room-reviews/img/image1.png":
/*!****************************************************!*\
  !*** ./src/components/room-reviews/img/image1.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/components/room-reviews/img/image1.png\");\n\n//# sourceURL=webpack:///./src/components/room-reviews/img/image1.png?");

/***/ }),

/***/ "./src/components/room-reviews/img/image2.png":
/*!****************************************************!*\
  !*** ./src/components/room-reviews/img/image2.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/components/room-reviews/img/image2.png\");\n\n//# sourceURL=webpack:///./src/components/room-reviews/img/image2.png?");

/***/ }),

/***/ "./src/components/social-media/img/facebook-icon.svg":
/*!***********************************************************!*\
  !*** ./src/components/social-media/img/facebook-icon.svg ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/components/social-media/img/facebook-icon.svg\");\n\n//# sourceURL=webpack:///./src/components/social-media/img/facebook-icon.svg?");

/***/ }),

/***/ "./src/components/social-media/img/instagram-icon.svg":
/*!************************************************************!*\
  !*** ./src/components/social-media/img/instagram-icon.svg ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/components/social-media/img/instagram-icon.svg\");\n\n//# sourceURL=webpack:///./src/components/social-media/img/instagram-icon.svg?");

/***/ }),

/***/ "./src/components/social-media/img/twitter-icon.svg":
/*!**********************************************************!*\
  !*** ./src/components/social-media/img/twitter-icon.svg ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/components/social-media/img/twitter-icon.svg\");\n\n//# sourceURL=webpack:///./src/components/social-media/img/twitter-icon.svg?");

/***/ }),

/***/ "./src/favicons/android-chrome-192x192.png":
/*!*************************************************!*\
  !*** ./src/favicons/android-chrome-192x192.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/favicons/android-chrome-192x192.png\");\n\n//# sourceURL=webpack:///./src/favicons/android-chrome-192x192.png?");

/***/ }),

/***/ "./src/favicons/android-chrome-512x512.png":
/*!*************************************************!*\
  !*** ./src/favicons/android-chrome-512x512.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/favicons/android-chrome-512x512.png\");\n\n//# sourceURL=webpack:///./src/favicons/android-chrome-512x512.png?");

/***/ }),

/***/ "./src/favicons/apple-touch-icon.png":
/*!*******************************************!*\
  !*** ./src/favicons/apple-touch-icon.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/favicons/apple-touch-icon.png\");\n\n//# sourceURL=webpack:///./src/favicons/apple-touch-icon.png?");

/***/ }),

/***/ "./src/favicons/favicon-16x16.png":
/*!****************************************!*\
  !*** ./src/favicons/favicon-16x16.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/favicons/favicon-16x16.png\");\n\n//# sourceURL=webpack:///./src/favicons/favicon-16x16.png?");

/***/ }),

/***/ "./src/favicons/favicon-32x32.png":
/*!****************************************!*\
  !*** ./src/favicons/favicon-32x32.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/favicons/favicon-32x32.png\");\n\n//# sourceURL=webpack:///./src/favicons/favicon-32x32.png?");

/***/ }),

/***/ "./src/favicons/mstile-144x144.png":
/*!*****************************************!*\
  !*** ./src/favicons/mstile-144x144.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/favicons/mstile-144x144.png\");\n\n//# sourceURL=webpack:///./src/favicons/mstile-144x144.png?");

/***/ }),

/***/ "./src/favicons/mstile-150x150.png":
/*!*****************************************!*\
  !*** ./src/favicons/mstile-150x150.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/favicons/mstile-150x150.png\");\n\n//# sourceURL=webpack:///./src/favicons/mstile-150x150.png?");

/***/ }),

/***/ "./src/favicons/mstile-310x150.png":
/*!*****************************************!*\
  !*** ./src/favicons/mstile-310x150.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/favicons/mstile-310x150.png\");\n\n//# sourceURL=webpack:///./src/favicons/mstile-310x150.png?");

/***/ }),

/***/ "./src/favicons/mstile-310x310.png":
/*!*****************************************!*\
  !*** ./src/favicons/mstile-310x310.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/favicons/mstile-310x310.png\");\n\n//# sourceURL=webpack:///./src/favicons/mstile-310x310.png?");

/***/ }),

/***/ "./src/favicons/mstile-70x70.png":
/*!***************************************!*\
  !*** ./src/favicons/mstile-70x70.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/favicons/mstile-70x70.png\");\n\n//# sourceURL=webpack:///./src/favicons/mstile-70x70.png?");

/***/ }),

/***/ "./src/favicons/safari-pinned-tab.svg":
/*!********************************************!*\
  !*** ./src/favicons/safari-pinned-tab.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/favicons/safari-pinned-tab.svg\");\n\n//# sourceURL=webpack:///./src/favicons/safari-pinned-tab.svg?");

/***/ }),

/***/ "./src/pages/ui-kit/colors-and-type/colors-and-type.js":
/*!*************************************************************!*\
  !*** ./src/pages/ui-kit/colors-and-type/colors-and-type.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var material_design_icons_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! material-design-icons/iconfont/material-icons.css */ \"./node_modules/material-design-icons/iconfont/material-icons.css\");\n/* harmony import */ var material_design_icons_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(material_design_icons_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _colors_and_type_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colors-and-type.scss */ \"./src/pages/ui-kit/colors-and-type/colors-and-type.scss\");\n/* harmony import */ var _colors_and_type_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_colors_and_type_scss__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n\r\n__webpack_require__(\"./src sync recursive \\\\.(png|svg|jpg)$\");\r\n\n\n//# sourceURL=webpack:///./src/pages/ui-kit/colors-and-type/colors-and-type.js?");

/***/ }),

/***/ "./src/pages/ui-kit/colors-and-type/colors-and-type.scss":
/*!***************************************************************!*\
  !*** ./src/pages/ui-kit/colors-and-type/colors-and-type.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./colors-and-type.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/ui-kit/colors-and-type/colors-and-type.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/pages/ui-kit/colors-and-type/colors-and-type.scss?");

/***/ }),

/***/ "./src/pages/web-pages/landing-page/img/background.jpg":
/*!*************************************************************!*\
  !*** ./src/pages/web-pages/landing-page/img/background.jpg ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/pages/web-pages/landing-page/img/background.jpg\");\n\n//# sourceURL=webpack:///./src/pages/web-pages/landing-page/img/background.jpg?");

/***/ }),

/***/ "./src/pages/web-pages/registration/img/background.jpg":
/*!*************************************************************!*\
  !*** ./src/pages/web-pages/registration/img/background.jpg ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/pages/web-pages/registration/img/background.jpg\");\n\n//# sourceURL=webpack:///./src/pages/web-pages/registration/img/background.jpg?");

/***/ }),

/***/ "./src/pages/web-pages/room-details/img/background1.jpg":
/*!**************************************************************!*\
  !*** ./src/pages/web-pages/room-details/img/background1.jpg ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/pages/web-pages/room-details/img/background1.jpg\");\n\n//# sourceURL=webpack:///./src/pages/web-pages/room-details/img/background1.jpg?");

/***/ }),

/***/ "./src/pages/web-pages/room-details/img/background2.jpg":
/*!**************************************************************!*\
  !*** ./src/pages/web-pages/room-details/img/background2.jpg ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/pages/web-pages/room-details/img/background2.jpg\");\n\n//# sourceURL=webpack:///./src/pages/web-pages/room-details/img/background2.jpg?");

/***/ }),

/***/ "./src/pages/web-pages/room-details/img/background3.jpg":
/*!**************************************************************!*\
  !*** ./src/pages/web-pages/room-details/img/background3.jpg ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/pages/web-pages/room-details/img/background3.jpg\");\n\n//# sourceURL=webpack:///./src/pages/web-pages/room-details/img/background3.jpg?");

/***/ }),

/***/ "./src/pages/web-pages/sign-in/img/background.jpg":
/*!********************************************************!*\
  !*** ./src/pages/web-pages/sign-in/img/background.jpg ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/pages/web-pages/sign-in/img/background.jpg\");\n\n//# sourceURL=webpack:///./src/pages/web-pages/sign-in/img/background.jpg?");

/***/ })

/******/ });