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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar pug_has_own_property = Object.prototype.hasOwnProperty;\n\n/**\n * Merge two attribute objects giving precedence\n * to values in object `b`. Classes are special-cased\n * allowing for arrays and merging/joining appropriately\n * resulting in a string.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Object} a\n * @api private\n */\n\nexports.merge = pug_merge;\nfunction pug_merge(a, b) {\n  if (arguments.length === 1) {\n    var attrs = a[0];\n    for (var i = 1; i < a.length; i++) {\n      attrs = pug_merge(attrs, a[i]);\n    }\n    return attrs;\n  }\n\n  for (var key in b) {\n    if (key === 'class') {\n      var valA = a[key] || [];\n      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);\n    } else if (key === 'style') {\n      var valA = pug_style(a[key]);\n      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;\n      var valB = pug_style(b[key]);\n      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;\n      a[key] = valA + valB;\n    } else {\n      a[key] = b[key];\n    }\n  }\n\n  return a;\n};\n\n/**\n * Process array, object, or string as a string of classes delimited by a space.\n *\n * If `val` is an array, all members of it and its subarrays are counted as\n * classes. If `escaping` is an array, then whether or not the item in `val` is\n * escaped depends on the corresponding item in `escaping`. If `escaping` is\n * not an array, no escaping is done.\n *\n * If `val` is an object, all the keys whose value is truthy are counted as\n * classes. No escaping is done.\n *\n * If `val` is a string, it is counted as a class. No escaping is done.\n *\n * @param {(Array.<string>|Object.<string, boolean>|string)} val\n * @param {?Array.<string>} escaping\n * @return {String}\n */\nexports.classes = pug_classes;\nfunction pug_classes_array(val, escaping) {\n  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);\n  for (var i = 0; i < val.length; i++) {\n    className = pug_classes(val[i]);\n    if (!className) continue;\n    escapeEnabled && escaping[i] && (className = pug_escape(className));\n    classString = classString + padding + className;\n    padding = ' ';\n  }\n  return classString;\n}\nfunction pug_classes_object(val) {\n  var classString = '', padding = '';\n  for (var key in val) {\n    if (key && val[key] && pug_has_own_property.call(val, key)) {\n      classString = classString + padding + key;\n      padding = ' ';\n    }\n  }\n  return classString;\n}\nfunction pug_classes(val, escaping) {\n  if (Array.isArray(val)) {\n    return pug_classes_array(val, escaping);\n  } else if (val && typeof val === 'object') {\n    return pug_classes_object(val);\n  } else {\n    return val || '';\n  }\n}\n\n/**\n * Convert object or string to a string of CSS styles delimited by a semicolon.\n *\n * @param {(Object.<string, string>|string)} val\n * @return {String}\n */\n\nexports.style = pug_style;\nfunction pug_style(val) {\n  if (!val) return '';\n  if (typeof val === 'object') {\n    var out = '';\n    for (var style in val) {\n      /* istanbul ignore else */\n      if (pug_has_own_property.call(val, style)) {\n        out = out + style + ':' + val[style] + ';';\n      }\n    }\n    return out;\n  } else {\n    return val + '';\n  }\n};\n\n/**\n * Render the given attribute.\n *\n * @param {String} key\n * @param {String} val\n * @param {Boolean} escaped\n * @param {Boolean} terse\n * @return {String}\n */\nexports.attr = pug_attr;\nfunction pug_attr(key, val, escaped, terse) {\n  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {\n    return '';\n  }\n  if (val === true) {\n    return ' ' + (terse ? key : key + '=\"' + key + '\"');\n  }\n  var type = typeof val;\n  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {\n    val = val.toJSON();\n  }\n  if (typeof val !== 'string') {\n    val = JSON.stringify(val);\n    if (!escaped && val.indexOf('\"') !== -1) {\n      return ' ' + key + '=\\'' + val.replace(/'/g, '&#39;') + '\\'';\n    }\n  }\n  if (escaped) val = pug_escape(val);\n  return ' ' + key + '=\"' + val + '\"';\n};\n\n/**\n * Render the given attributes object.\n *\n * @param {Object} obj\n * @param {Object} terse whether to use HTML5 terse boolean attributes\n * @return {String}\n */\nexports.attrs = pug_attrs;\nfunction pug_attrs(obj, terse){\n  var attrs = '';\n\n  for (var key in obj) {\n    if (pug_has_own_property.call(obj, key)) {\n      var val = obj[key];\n\n      if ('class' === key) {\n        val = pug_classes(val);\n        attrs = pug_attr(key, val, false, terse) + attrs;\n        continue;\n      }\n      if ('style' === key) {\n        val = pug_style(val);\n      }\n      attrs += pug_attr(key, val, false, terse);\n    }\n  }\n\n  return attrs;\n};\n\n/**\n * Escape the given string of `html`.\n *\n * @param {String} html\n * @return {String}\n * @api private\n */\n\nvar pug_match_html = /[\"&<>]/;\nexports.escape = pug_escape;\nfunction pug_escape(_html){\n  var html = '' + _html;\n  var regexResult = pug_match_html.exec(html);\n  if (!regexResult) return _html;\n\n  var result = '';\n  var i, lastIndex, escape;\n  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n    switch (html.charCodeAt(i)) {\n      case 34: escape = '&quot;'; break;\n      case 38: escape = '&amp;'; break;\n      case 60: escape = '&lt;'; break;\n      case 62: escape = '&gt;'; break;\n      default: continue;\n    }\n    if (lastIndex !== i) result += html.substring(lastIndex, i);\n    lastIndex = i + 1;\n    result += escape;\n  }\n  if (lastIndex !== i) return result + html.substring(lastIndex, i);\n  else return result;\n};\n\n/**\n * Re-throw the given `err` in context to the\n * the pug in `filename` at the given `lineno`.\n *\n * @param {Error} err\n * @param {String} filename\n * @param {String} lineno\n * @param {String} str original source\n * @api private\n */\n\nexports.rethrow = pug_rethrow;\nfunction pug_rethrow(err, filename, lineno, str){\n  if (!(err instanceof Error)) throw err;\n  if ((typeof window != 'undefined' || !filename) && !str) {\n    err.message += ' on line ' + lineno;\n    throw err;\n  }\n  try {\n    str = str || __webpack_require__(/*! fs */ 0).readFileSync(filename, 'utf8')\n  } catch (ex) {\n    pug_rethrow(err, null, lineno)\n  }\n  var context = 3\n    , lines = str.split('\\n')\n    , start = Math.max(lineno - context, 0)\n    , end = Math.min(lines.length, lineno + context);\n\n  // Error context\n  var context = lines.slice(start, end).map(function(line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? '  > ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'Pug') + ':' + lineno\n    + '\\n' + context + '\\n\\n' + err.message;\n  throw err;\n};\n\n\n//# sourceURL=webpack:///./node_modules/pug-runtime/index.js?");

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

/***/ "./src/FormElements.Pagination/paginationForJSRender.pug":
/*!***************************************************************!*\
  !*** ./src/FormElements.Pagination/paginationForJSRender.pug ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (curPage, pagesCount) {pug_mixins[\"getPagination\"] = pug_interp = function(pagesNumber, curPage, options, classes){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nlet containerClasses = [];\nif (classes) {\nclasses.containerClasses ? containerClasses = containerClasses.concat(classes.containerClasses) : [];\n}\nif (options.title) {\npug_html = pug_html + \"\\u003Cp class=\\\"pagination__title\\\"\\u003E\" + (pug.escape(null == (pug_interp = options.title) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\";\n}\npug_html = pug_html + \"\\u003Cdiv class=\\\"pagination__pageList\\\"\\u003E\";\nif (curPage !== 1) {\npug_html = pug_html + \"\\u003Ca class=\\\"pagination__leftArrow\\\" href=\\\"#\\\"\\u003E\\u003Cp class=\\\"pagination__leftArrowText\\\"\\u003Earrow_forward\\u003C\\u002Fp\\u003E\\u003C\\u002Fa\\u003E\\u003Ca class=\\\"pagination__pageLink\\\" href=\\\"#\\\"\\u003E\\u003Cp class=\\\"pagination__pageLinkText\\\"\\u003E\" + (pug.escape(null == (pug_interp = 1) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003C\\u002Fa\\u003E\";\n}\nif (curPage - 3 > 1) {\npug_html = pug_html + \"\\u003Ca class=\\\"pagination__pageLink\\\"\\u003E\\u003Cp class=\\\"pagination__pageLinkText\\\"\\u003E\" + (pug.escape(null == (pug_interp = \"...\") ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003C\\u002Fa\\u003E\";\n}\nif (curPage - 2 > 1) {\npug_html = pug_html + \"\\u003Ca class=\\\"pagination__pageLink\\\" href=\\\"#\\\"\\u003E\\u003Cp class=\\\"pagination__pageLinkText\\\"\\u003E\" + (pug.escape(null == (pug_interp = curPage - 2) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003C\\u002Fa\\u003E\";\n}\nif (curPage - 1 > 1) {\npug_html = pug_html + \"\\u003Ca class=\\\"pagination__pageLink\\\" href=\\\"#\\\"\\u003E\\u003Cp class=\\\"pagination__pageLinkText\\\"\\u003E\" + (pug.escape(null == (pug_interp = curPage - 1) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003C\\u002Fa\\u003E\";\n}\npug_html = pug_html + \"\\u003Ca class=\\\"pagination__pageLink pagination__pageLink_target\\\" href=\\\"#\\\"\\u003E\\u003Cp class=\\\"pagination__pageLinkText\\\"\\u003E\" + (pug.escape(null == (pug_interp = curPage) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003C\\u002Fa\\u003E\";\nif (curPage + 1 < pagesNumber) {\npug_html = pug_html + \"\\u003Ca class=\\\"pagination__pageLink\\\" href=\\\"#\\\"\\u003E\\u003Cp class=\\\"pagination__pageLinkText\\\"\\u003E\" + (pug.escape(null == (pug_interp = curPage + 1) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003C\\u002Fa\\u003E\";\n}\nif (curPage + 2 < pagesNumber) {\npug_html = pug_html + \"\\u003Ca class=\\\"pagination__pageLink\\\" href=\\\"#\\\"\\u003E\\u003Cp class=\\\"pagination__pageLinkText\\\"\\u003E\" + (pug.escape(null == (pug_interp = curPage + 2) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003C\\u002Fa\\u003E\";\n}\nif (curPage + 3 < pagesNumber) {\npug_html = pug_html + \"\\u003Ca class=\\\"pagination__pageLink\\\"\\u003E\\u003Cp class=\\\"pagination__pageLinkText\\\"\\u003E\" + (pug.escape(null == (pug_interp = \"...\") ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003C\\u002Fa\\u003E\";\n}\nif (curPage !== pagesNumber) {\npug_html = pug_html + \"\\u003Ca class=\\\"pagination__pageLink\\\" href=\\\"#\\\"\\u003E\\u003Cp class=\\\"pagination__pageLinkText\\\"\\u003E\" + (pug.escape(null == (pug_interp = pagesNumber) ? \"\" : pug_interp)) + \"\\u003C\\u002Fp\\u003E\\u003C\\u002Fa\\u003E\\u003Ca class=\\\"pagination__rightArrow\\\" href=\\\"#\\\"\\u003E\\u003Cp class=\\\"pagination__rightArrowText\\\"\\u003Earrow_forward\\u003C\\u002Fp\\u003E\\u003C\\u002Fa\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"getPagination\"](pagesCount, curPage, {\n    title: \"pagination\",\n});}.call(this,\"curPage\" in locals_for_with?locals_for_with.curPage:typeof curPage!==\"undefined\"?curPage:undefined,\"pagesCount\" in locals_for_with?locals_for_with.pagesCount:typeof pagesCount!==\"undefined\"?pagesCount:undefined));;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/FormElements.Pagination/paginationForJSRender.pug?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\n/* import jQueryTest from 'jquery';\r\n\r\nconst $ = jQueryTest;\r\nglobal.jQuery = $;\r\nglobal.$ = $;\r\n\r\nimport \"./jquery-rate-picker.js\"; \r\nimport \"./test.js\"; */\r\n\r\n//dropdown\r\n{\r\n    function onDropdown(event) {\r\n        let targetDropdown = event.currentTarget.parentElement;\r\n        let dropwdownList = targetDropdown.querySelector(\".formInput__dropedList\");\r\n\r\n        if (dropwdownList.style.display === \"none\") {\r\n            targetDropdown.style.borderBottomLeftRadius = \"0px\";\r\n            targetDropdown.style.borderBottomRightRadius = \"0px\";\r\n            dropwdownList.style.display = \"flex\";\r\n        }\r\n        else {\r\n            targetDropdown.style.borderBottomLeftRadius = \"4px\";\r\n            targetDropdown.style.borderBottomRightRadius = \"4px\";\r\n            dropwdownList.style.display = \"none\";\r\n        }\r\n    }\r\n\r\n    function onDropdownItemPlus(event) {\r\n        let curValue = Number.parseInt(event.currentTarget.parentElement.querySelector(\"p\").textContent);\r\n        curValue++;\r\n        if (curValue !== 0) event.currentTarget.parentElement.querySelector(\".formInput__dropedListItemHandlerMinus\").style.opacity = 1;\r\n        event.currentTarget.parentElement.querySelector(\"p\").textContent = curValue.toString();\r\n\r\n        changeDropdownInputValue(event);\r\n    }\r\n    function onDropdownItemMinus(event) {\r\n        let curValue = Number.parseInt(event.currentTarget.parentElement.querySelector(\"p\").textContent);\r\n        curValue--;\r\n        if (curValue < 0) curValue = 0;\r\n        if (curValue === 0) event.currentTarget.style.opacity = 0.38;\r\n        event.currentTarget.parentElement.querySelector(\"p\").textContent = curValue.toString();\r\n\r\n        changeDropdownInputValue(event);\r\n    }\r\n\r\n    function changeDropdownInputValue(event) {\r\n        let curDropdownElement = event.currentTarget.parentElement.parentElement.parentElement.parentElement;\r\n        let dropdownList = curDropdownElement.querySelectorAll(\".formInput__dropedListItem\");\r\n        let sum = Array.from(dropdownList).reduce((sum, e) => {\r\n            return sum + Number.parseInt(e.querySelector(\".formInput__dropedListItemHandler > p\").textContent)\r\n        }, 0);\r\n\r\n        //склонение слова гость по числу\r\n        let test = curDropdownElement.className.match(/formInput__dropdown_fullNumber/i);\r\n        let test2 = curDropdownElement.className.match(/formInput__dropdown_listOfNumbers/i);\r\n        if (curDropdownElement.className.match(/formInput__dropdown_fullNumber/i)) {\r\n            if (sum.toString()[sum.toString().length - 1] === \"1\" && sum !== 11)\r\n                curDropdownElement.parentElement.querySelector(\".formInput__mainInput\").value = sum + \" гость\";\r\n            else if ((sum.toString()[sum.toString().length - 1] > 1 && sum.toString()[sum.toString().length - 1] <= 4) &&\r\n                (sum < 12 || sum > 14))\r\n                curDropdownElement.parentElement.querySelector(\".formInput__mainInput\").value = sum + \" гостя\";\r\n            else\r\n                curDropdownElement.parentElement.querySelector(\".formInput__mainInput\").value = sum + \" гостей\";\r\n        }\r\n        else if (curDropdownElement.className.match(/formInput__dropdown_listOfNumbers/i)) {\r\n            let allItemNames = Array.from(curDropdownElement.querySelectorAll(\".formInput__dropedListItem\"));\r\n            let result = allItemNames.reduce((fullString, e, index) => {\r\n                let itemName = e.querySelector(\"p\").textContent.toLowerCase();\r\n                let itemValue = e.querySelector(\".formInput__dropedListItemHandler > p\").textContent;\r\n                if (index !== allItemNames.length - 1)\r\n                    return fullString + itemValue + \" \" + itemName + \", \";\r\n                else\r\n                    return fullString + itemValue + \" \" + itemName;\r\n            }, \"\")\r\n            curDropdownElement.parentElement.querySelector(\".formInput__mainInput\").value = result;\r\n        }\r\n    }\r\n\r\n    let dropdownsElems = document.querySelectorAll(\".formInput_dropdown\");\r\n    dropdownsElems.forEach(e => {\r\n        e.querySelector(\".formInput__dropdownInput\").onclick = onDropdown;\r\n        e.querySelectorAll(\".formInput__dropedListItemHandlerPlus\").forEach(e => {\r\n            e.onclick = onDropdownItemPlus;\r\n        });\r\n        e.querySelectorAll(\".formInput__dropedListItemHandlerMinus\").forEach(e => {\r\n            e.onclick = onDropdownItemMinus;\r\n        });\r\n    });\r\n}\r\n\r\n//rate button\r\n{\r\n    let rateButtons = document.querySelectorAll(\".ratingRadio\");\r\n}\r\n\r\n//pagination\r\n/* import pugTemp from 'pug'; */\r\nlet test = __webpack_require__(/*! ./FormElements.Pagination/paginationForJSRender.pug */ \"./src/FormElements.Pagination/paginationForJSRender.pug\");\r\n{\r\n    //const paginationForJSRender = test.compiledFunction(\"../FormElements.Pagination/paginationForJSRender.pug\");\r\n    let curPage = 1;\r\n\r\n    function setClickEventsToLinks() {\r\n        let paginations = document.querySelectorAll(\".pagination\");\r\n        paginations.forEach(e => {\r\n            let links = e.querySelectorAll(\".pagination__pageLink\");\r\n            links.forEach(ee => {\r\n                ee.onclick = selectPage;\r\n            })\r\n        });\r\n    }\r\n    setClickEventsToLinks();\r\n\r\n    function selectPage(event) {\r\n        event.preventDefault();\r\n        curPage = Number.parseInt(event.currentTarget.textContent);\r\n        event.currentTarget.parentElement.parentElement.innerHTML = /* paginationForJSRender */test({\r\n            pagesCount: 20,\r\n            curPage: curPage,\r\n        });\r\n\r\n        //переустановка ивентов на обновленный объект пагинации, т.к. элемент был полностью пересоздан\r\n        setClickEventsToLinks();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/index.scss?");

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ })

/******/ });