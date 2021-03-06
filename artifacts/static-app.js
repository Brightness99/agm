(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(7);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(31)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(6);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(30);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(32);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(13);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(33);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(7);

var _helpers = __webpack_require__(34);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(29)(module)))

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(19);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(20);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(21);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(22);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(10);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Volumes/Data/Developer/temp/agm/src/assets/images/logo.png
var logo = __webpack_require__(8);
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// EXTERNAL MODULE: /Volumes/Data/Developer/temp/agm/src/assets/images/phone.png
var phone = __webpack_require__(23);
var phone_default = /*#__PURE__*/__webpack_require__.n(phone);

// EXTERNAL MODULE: /Volumes/Data/Developer/temp/agm/src/components/Button/index.css
var Button = __webpack_require__(14);

// CONCATENATED MODULE: /Volumes/Data/Developer/temp/agm/src/components/Button/Consultation.js




function Consultation(props) {
  var phoneNumber = props.phoneNumber;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "consultation__action"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "button__phone"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    className: "button__phone-icon",
    src: phone_default.a,
    alt: "phone"
  }), /*#__PURE__*/external_react_default.a.createElement("p", {
    className: "button__phone-title"
  }, phoneNumber)), /*#__PURE__*/external_react_default.a.createElement("a", {
    className: "button button__default",
    href: "tel:".concat(phoneNumber)
  }, "Free Consultation"));
}

/* harmony default export */ var Button_Consultation = (Consultation);
// EXTERNAL MODULE: /Volumes/Data/Developer/temp/agm/src/components/Header/index.css
var Header = __webpack_require__(44);

// CONCATENATED MODULE: /Volumes/Data/Developer/temp/agm/src/components/Header/index.js





function Header_Header() {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "header"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "header__container"
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    className: "header__logo",
    src: logo_default.a,
    alt: "logo"
  }), /*#__PURE__*/external_react_default.a.createElement(Button_Consultation, {
    phoneNumber: "(416) 477-5429"
  })));
}

/* harmony default export */ var components_Header = (Header_Header);
// EXTERNAL MODULE: /Volumes/Data/Developer/temp/agm/src/components/HeroTitle/index.css
var HeroTitle = __webpack_require__(46);

// CONCATENATED MODULE: /Volumes/Data/Developer/temp/agm/src/components/HeroTitle/index.js



function HeroTitle_HeroTitle() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "hero-title hero-title--web"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, "What kind of"), /*#__PURE__*/external_react_default.a.createElement("p", null, "Renovations"), /*#__PURE__*/external_react_default.a.createElement("p", null, "are you planning?")), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "hero-title hero-title--mobile"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, "What kind of Renovations are you planning")));
}

/* harmony default export */ var components_HeroTitle = (HeroTitle_HeroTitle);
// CONCATENATED MODULE: /Volumes/Data/Developer/temp/agm/src/components/Button/ClickButton.js



function ClickButton(props) {
  var link = props.link;
  return /*#__PURE__*/external_react_default.a.createElement("a", {
    className: "button button__click",
    href: link,
    target: "_blank"
  }, /*#__PURE__*/external_react_default.a.createElement("span", null, "Click"), /*#__PURE__*/external_react_default.a.createElement("span", null, " Here"));
}

/* harmony default export */ var Button_ClickButton = (ClickButton);
// CONCATENATED MODULE: /Volumes/Data/Developer/temp/agm/src/components/Button/index.js


/* harmony default export */ var components_Button = ({
  Consultation: Button_Consultation,
  ClickButton: Button_ClickButton
});
// EXTERNAL MODULE: /Volumes/Data/Developer/temp/agm/src/components/HeroItem/index.css
var HeroItem = __webpack_require__(48);

// CONCATENATED MODULE: /Volumes/Data/Developer/temp/agm/src/components/HeroItem/index.js





function HeroItem_HeroItem(_ref) {
  var titleTop = _ref.titleTop,
      titleBottom = _ref.titleBottom,
      link = _ref.link;
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "hero-item"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "hero-item__desc"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, titleTop), /*#__PURE__*/external_react_default.a.createElement("p", null, titleBottom)), /*#__PURE__*/external_react_default.a.createElement(components_Button.ClickButton, {
    link: link
  }));
}

/* harmony default export */ var components_HeroItem = (HeroItem_HeroItem);
// EXTERNAL MODULE: /Volumes/Data/Developer/temp/agm/src/app.css
var app = __webpack_require__(49);

// CONCATENATED MODULE: /Volumes/Data/Developer/temp/agm/src/App.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var App_App = /*#__PURE__*/function (_Component) {
  inherits_default()(App, _Component);

  var _super = _createSuper(App);

  function App() {
    classCallCheck_default()(this, App);

    return _super.apply(this, arguments);
  }

  createClass_default()(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "app"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "col item-container base-container"
      }, /*#__PURE__*/external_react_default.a.createElement(components_HeroItem, {
        titleTop: "Basement",
        titleBottom: "Renovations",
        link: "https://agmrenovations.com/"
      })), /*#__PURE__*/external_react_default.a.createElement("div", {
        className: "col item-container bath-container"
      }, /*#__PURE__*/external_react_default.a.createElement(components_HeroItem, {
        titleTop: "Bathroom",
        titleBottom: "Renovations",
        link: "https://bathroomrenovations.com/"
      })), /*#__PURE__*/external_react_default.a.createElement(components_HeroTitle, null)), /*#__PURE__*/external_react_default.a.createElement(components_Header, null));
    }
  }]);

  return App;
}(external_react_["Component"]);

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App_App);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(6);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(1);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logo.9cb3121c.png";

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("/Volumes/Data/Developer/temp/agm/node_modules/react-static/lib/browser");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Imports
var urlEscape = __webpack_require__(3);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(43));

// Module
exports.push([module.i, ".button {\n  border: none;\n}\n\n.button:hover {\n  opacity: 0.8;\n}\n\n.button:active {\n  /* background-color: var(--active-green); */\n}\n\n.button:focus {\n  outline: none;\n  /* background-color: var(--active-green); */\n}\n\n.button__click {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 160px;\n  height: 55px;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  border-radius: 12px;\n  text-decoration: none;\n  box-shadow: -6px 5px 5px 2px rgba(0,0,0,0.5);\n}\n\n.button__click span {\n  font-size: 20px;\n  line-height: 0;\n  color: white;\n  font-family: 'Montserrat-Bold';\n  padding-bottom: 10px;\n}\n\n.button__click span:last-child {\n  font-family: 'Montserrat-Light';\n}\n\n\n.consultation__action {\n  margin-top: -25px;\n}\n\n.button__default {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: var(--button-bg-color);\n  padding: 8px 16px;\n  border-radius: 4px;\n  color: white;\n  font-size: 12px;\n  line-height: 135%;\n  font-family: 'Montserrat-Medium';\n  text-decoration: none;\n  box-shadow: 4px 4px 6px 2px rgba(0,0,0,0.3);\n  \n}\n\n.button__phone {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n}\n\n.button__phone-icon {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n}\n\n.button__phone-title {\n  font-family: 'Montserrat-Medium';\n  font-size: 14px;\n  color: var(--link-text-color);\n}\n\n@media (min-width: 576px) {\n\n  .button__default {\n    padding: 11px 20px;\n    font-size: 14px;\n    line-height: 135%;\n  }\n\n  .button__click {\n    width: 200px;\n    height: 69px;\n  }\n\n  .button__click span {\n    font-size: 24px;\n  }\n\n  .consultation__action {\n    display: flex;\n  }\n\n  .button__phone {\n    margin-right: 14px;\n  }\n\n  .button__phone-title {\n    font-size: 20px;\n    margin: 0;\n  }\n}\n \n@media (min-width: 768px) {  \n \n}\n \n@media (min-width: 992px) { \n  .button__default {\n    padding: 18px 20px;\n    font-size: 20px;\n  }\n\n  .button__phone-title {\n    font-size: 29px;\n  }\n\n  .button__phone {\n    margin-right: 18px;\n  }\n\n  .button__phone-icon {\n    width: 33px;\n    height: 33px;\n    margin-right: 14px;\n  }\n}\n \n@media (min-width: 1200px) {  \n    \n}", ""]);



/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("/Volumes/Data/Developer/temp/agm/artifacts/__react_static_root__/node_modules/react-static/lib/browser/components/Default404");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwQzg3NThBRDI0MDExRUFBODM1REJCMDY3MTUwODA2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYwQzg3NThCRDI0MDExRUFBODM1REJCMDY3MTUwODA2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjBDODc1ODhEMjQwMTFFQUE4MzVEQkIwNjcxNTA4MDYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjBDODc1ODlEMjQwMTFFQUE4MzVEQkIwNjcxNTA4MDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7vF+BhAAADZElEQVR42rSYWUhUURjHrzpIKQktVpQlpYQR1IPTHpEZNWWIRqa2L1RYEGoPFaFly0N70LRJ4WRiT2VSVFChghFWUhRt9FDYbpvQRuTS/4P/hcvpzr2j3vvBD4eZc8785zvfdg3Tql5pio0FG8AY8BAcBvc0l6wjI14LV96bDqrAYtAHLALVIFVz0YwiUkAlGAx20iObwSBwDsxwW8QoUAYGgF2gGLwHe0Ah6AfO0FOuiOjJL44HR8AOZc0hCtE9kuKGiGkgAzSCreCvyToJzgLQn0JSnRYxl6/94LvFWhGykUICwOukiCngM7gVwvqDYAuIA2tAmFMihoEX4EOIeyRlW5lF4U6JiAB/eLCdxTBwPaABtDklogUM5BdYWS9QCrLANXDcyZiQkpwIkizW9QanQTaoA6vAJydF1NG9viBrIsF+euAmhbxzOkXFtV/YL2JN1owHS8EdrvnoRrF6Dq4y7RZYBK8UsV9ule029gX5m8diZLS74AKYDPY5VRvMGlgtuMhGtkxZI78+HzxhgSp0S0Qrm5iU7U1gpLLuDQV8BXsZI67MEw9YlvvS7VHKWinrq1nYjoElNmf3oFcltQ9wUrMVoTep2yCNV6CaxMY6BmopvWNmUfxB0uhW8govBZtHVBEt/HJx+3aQabInQCGy9yQoYi0xesDPIH8K0nnWEI4BPjsRGutBAT/zs06oJlNYDqcv6SXlYCiIBkfBCqb+fHqghGfKhFYB5hkP8wRxpxyawDGvgvXjvrJGBuK37CHZzCyppDPBY5DLjDJetT6pnTVcr2UrLuGGRG7yBvFaGuMjgQLkvYXgUZDBqIgxU8ZWgMLz/3OH0aJ5JctBEx8B6k3WSQGbyEYnxa3Z4kwJ6m0U803iLkLLybcSIaX6CsX4GKjNTGfVXnM4+mn3vANqKHwWGG4nQqwdXAc/wGwGVQwH49/dqFH1nG+TQx3POtjOc3ktkveXGQNdtUxW5mednRHPgznsMxM4BpwAozt5jmTbKf644q4Mqnr6rQUv+beG9WGSzd5I1osAX+fhgbjaLjvsTKrgepbmWMbPDV5VA+tGOz/zsvFNZXzJvnJ5Ku+uCN1G0MXpfJDWM6uJc0qcoSHKFe7WU91JEbrJvxOSOQCNYwHzUEwjZ9RaY1aJiH8CDACopsv7egqzeQAAAABJRU5ErkJggg=="

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25);
__webpack_require__(27);
module.exports = __webpack_require__(35);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(26)["default"];

var _require = __webpack_require__(11),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Imports
// Plugins
var plugins = [{
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(11),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(28),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);




Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/node_modules/react-static/lib/browser/components/Default404",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 15, 7))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/node_modules/react-static/lib/browser/components/Default404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(15);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/node_modules/react-static/lib/browser/components/Default404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/node_modules/react-static/lib/browser/components/Default404'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/node_modules/react-static/lib/browser/components/Default404': t_0
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/node_modules/react-static/lib/browser/components/Default404";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(7);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 1,
	"./": 1,
	"./index": 1,
	"./index.js": 1
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 31;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(6);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(13);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(36);

var _interopRequireDefault = __webpack_require__(37);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(38));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(39));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(40);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(41)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("/Volumes/Data/Developer/temp/agm/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(42)(module)))

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMsAAABGCAYAAABi1WA1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNDMEI3RDM2RDIzRjExRUE5Q0ZBODIzM0YwNzU4NkVCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNDMEI3RDM3RDIzRjExRUE5Q0ZBODIzM0YwNzU4NkVCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0MwQjdEMzREMjNGMTFFQTlDRkE4MjMzRjA3NTg2RUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0MwQjdEMzVEMjNGMTFFQTlDRkE4MjMzRjA3NTg2RUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6QoHobAAAD/UlEQVR42uzdT2wUVRzA8TdvZrb/tt3+kQpprUkhgTQQuWtMOBjjXaOeQE8etEa4ePSIMZKU3jEkEDx48KZ4QRK5cKqIxYNV/rQqS1vabbfb3Z0//t7Ebth2Zup53/eTvGzpTnr45X2z83bb4KgcR9+7eEIe3pF1StaUrJICOktF1q+ybsj6+rdLH/2SdaGTEYkJ44Ks15klLHNd1lmJZn73EzollGl5mCMUWMrs+7lj789OO46THYuEcl4eZmT5zAwWM/t/5r8e2m7DkmCOnpn5UDnODHMC2kzLLdnsTiyFybc+m/KLw7d5RQH2aMo6ac4wnnzR5fWWvsgLJayuqWBjRUWNmlJxzPjQGeRMogs9yusfUW7fYN4t2Zey3nDGX/vg1b7xqZupl8WR2v77dxVuPmWw6GhucUh1HzoiAemsS07oruGxt7OeJRTYwuxzs99zvKu13/1K1q0XocC2YMy+z3BKa8+fTHsmqCwzPVgnZ99PablHK6Y9kxzmAcvk7PtS5mkmjkImB+vk7XvNeID/h1gAYgGIBSAWgFgAYgGIBQCxAMQCEAtALACxAMQCEAsAYgGIBSAWgFgAYgGIBQCxAMQCEAtALACxAMQCEAsAYgGIBSAWgFgAYgGIBSCWdI7rMR1YJ2/f6zhspj/R1cfkYN+rR8a+N53oqJ7+v7P6pQNMDtbJ2vemEx1uracX1l1U/uBBpgd7QpH9bvZ9GtOJDjZWzItM6gWF0QnlDx0yd3JMEp18Ukn2udnv6WJlOvHiZl0FFfli4LnUH1I4MKG80qgK5eKoUVNxHDFbdEYijla60KPc/hF57M68zvRhOkmO/o3lR8otDilHu+m3ZPKD9MgY04V14ihM+kg6SL4RNFT9nwUmA+xiujB9tGJJDjCbT1X98Z9MB9gJRXowXexo+wQmWC8nFXUdPMyHkrD31isMkleUsLrW9v09RZgLavd/Vv7wmPIHR+UUxG/EwJoDimqulVVzdSkJZjcvq6zGkwequbIoB/9h5fYOJId8x/UZKDrsVaSposa2Crcqcsu1mhzos3hxHG05ju7NeicgqDxJFmC5dS1nlEXmAOxrXge1jbvMAdjXDV0tL9xiDsC+runq44WHYb06xyyATN8/+unK3eR94crDO5fN+wLMBNjD/MHXOfNFEku1/MdibXXpMnMB9jgnryrzrViMlXs3v2tsLH/LbICWzyWU2Z1/tH08X75z/er26tJX3JKBWy/18eKtq58++03zV11v7r6yb3RyfODFl067hd6TzA2W+UHWJxJKcusVx3F+LK1onj8yIeG87PX0H3e8wguOo3uYJTpLvClB3JMqfozD4Npft78x7wy3Cnk2ln8FGADO61c3xQT0ZAAAAABJRU5ErkJggg=="

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Imports
var urlEscape = __webpack_require__(3);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(45));

// Module
exports.push([module.i, ".header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 110px;\n  background-color: transparent;\n  padding: 0 12px;\n\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n}\n\n.header__container {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.header__logo {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 120px;\n  height: 50px;\n  -webkit-filter: drop-shadow(0px 0px 30px #b79e72);\n          filter: drop-shadow(0px 0px 30px #b79e72); /* #ddd6ca */\n}\n\n@media (min-width: 576px) {\n  .header {\n    padding: 0 20px;\n  }\n}\n \n@media (min-width: 768px) {  \n  .header {\n    height: 110px;\n    padding: 0 20px 0 40px;\n  }\n  .header__logo {\n    -o-object-fit: contain;\n       object-fit: contain;\n    width: 174px;\n    height: 68px;\n  }\n}\n \n@media (min-width: 992px) {\n  .header {\n    height: 160px;\n    background-image: none;\n    padding: 0 85px;\n  }\n\n  .header__logo {\n    width: 260px;\n    height: 100px;\n  }\n}\n \n@media (min-width: 1200px) {\n  \n}", ""]);



/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/mobile-header-mask.cb3eab6a.png";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Imports
var urlEscape = __webpack_require__(3);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(47));

// Module
exports.push([module.i, ".hero-title {\n  position: absolute;\n  top: 140px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.hero-title--web {\n  display: none; \n}\n\n.hero-title--web p {\n  font-size: 60px;\n  line-height: 60px;\n  color: white;\n  font-family: 'Montserrat-Light';\n  margin: 0;\n  margin-left: 10%;\n  text-transform: uppercase;\n  text-shadow: 0px 5px 20px rgba(0,0,0,1);\n}\n\n.hero-title--mobile {\n  top: 80px;\n  height: 300px;\n  display: block;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n}\n\n.hero-title--mobile p {\n  font-size: 28px;\n  line-height: 32px;\n  color: var(--hero-text-color);\n  font-family: 'Montserrat-SemiBold';\n\n  text-transform: uppercase;\n  text-shadow: 0px 5px 20px rgba(0,0,0,1);\n  max-width: 610px;\n  margin: 0 auto;\n}\n\n.hero-title--mobile p:first-child {\n  margin-top: 75px;\n}\n\n.hero-title p:nth-child(2) {\n  font-family: 'Montserrat-Medium';\n  text-shadow: 0px 2px 40px rgba(0,0,0,1);\n}\n\n@media (min-width: 576px) {\n  .hero-title--mobile {\n    top: 110px;\n  }\n  .hero-title--mobile p {\n    font-size: 38px;\n    line-height: 38px;\n  }\n}\n \n@media (min-width: 768px) {  \n \n}\n \n@media (min-width: 992px) { \n  .hero-title--web {\n    display: block; \n  }\n\n  .hero-title--mobile {\n    display: none;\n  }\n}\n \n@media (min-width: 1200px) {  \n    \n}", ""]);



/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/mobile-content-mask.da1fe3fa.png";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ".hero-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin-top: 340px;\n}\n\n.hero-item__desc {\n  margin-bottom: 15px;\n}\n\n.hero-item__desc p {\n  font-size: 30px;\n  line-height: 30px;\n  color: white;\n  font-family: 'Montserrat-SemiBold';\n  margin: 0;\n  text-transform: uppercase;\n  text-shadow: 0px 2px 30px rgba(0,0,0,1);\n}\n\n.hero-item__desc p:last-child {\n  font-family: 'Montserrat-Light';\n  text-shadow: 0px 5px 11px rgba(0,0,0,1);\n}\n\n@media (min-width: 576px) {\n  .hero-item {\n    margin-top: 400px;\n  }\n\n  .hero-item__desc p {\n    font-size: 38px;\n    line-height: 38px;\n  }\n}\n \n@media (min-width: 768px) {  \n \n}\n \n@media (min-width: 992px) { \n  .hero-item__desc p {\n    font-size: 48px;\n    line-height: 52px;\n  }\n\n  .hero-item {\n    margin-top: 360px;\n  }\n  \n}\n \n@media (min-width: 1200px) {  \n    \n}", ""]);



/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Imports
var urlEscape = __webpack_require__(3);
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(50));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(51));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(52));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(53));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(54));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(55));
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(56));

// Module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n:root {\n  --button-bg-color: #00afe0;\n  --link-text-color: #1c3c5b;\n  --hero-text-color: #132e52;\n}\n\n@font-face {\n  font-family: 'Montserrat-Bold';\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n}\n\n@font-face {\n  font-family: 'Montserrat-Light';\n  src: url(" + ___CSS_LOADER_URL___1___ + ");\n}\n\n@font-face {\n  font-family: 'Montserrat-Medium';\n  src: url(" + ___CSS_LOADER_URL___2___ + ");\n}\n\n@font-face {\n  font-family: 'Montserrat-Regular';\n  src: url(" + ___CSS_LOADER_URL___3___ + ");\n}\n\n@font-face {\n  font-family: 'Montserrat-SemiBold';\n  src: url(" + ___CSS_LOADER_URL___4___ + ");\n}\n\n/* Styles */\n\n.row {\n  display: block;\n}\n\n.col {\n  flex: 1 1;\n}\n\n.item-container {\n  height: 100vh;\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  max-height: 500px;\n}\n\n.base-container {\n  background-image: url(" + ___CSS_LOADER_URL___5___ + ");\n  background-position: top center;\n  border-bottom: solid 4px white;\n}\n\n.bath-container {\n  background-image: url(" + ___CSS_LOADER_URL___6___ + ");\n  background-position: top center;\n}\n\n.bath-container .hero-item {\n  margin-top: 80px;\n}\n\n.bath-container.item-container {\n  max-height: 390px;\n}\n\n\n@media (min-width: 576px) {  \n  .item-container {\n    max-height: 600px;\n  }\n\n  .bath-container.item-container {\n    max-height: 490px;\n  }\n}\n \n@media (min-width: 768px) {  \n\n}\n \n@media (min-width: 992px) {\n  .row {\n    display: flex;\n  }\n  .item-container {\n    max-height: unset;\n  }\n\n  .base-container {\n    background-position: center;\n    border-bottom-width: 0;\n  }\n  \n  .bath-container {\n    background-position: center;\n  }\n\n  .bath-container.item-container {\n    max-height: unset;\n  }\n\n  .bath-container .hero-item {\n    margin-top: 360px;\n  }\n}\n \n@media (min-width: 1200px) {  \n    \n}", ""]);



/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Montserrat-Bold.ade91f47.ttf";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Montserrat-Light.409c7f79.ttf";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Montserrat-Medium.c8b6e083.ttf";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Montserrat-Regular.ee653992.ttf";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Montserrat-SemiBold.c641dbee.ttf";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/bg1.c6248570.png";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/bg2.9ffa774b.png";

/***/ })
/******/ ]);
});