/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".index.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history */ \"history\");\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/App */ \"./src/App.js\");\n/* harmony import */ var _src_Mobile_createRelay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/Mobile/createRelay */ \"./src/Mobile/createRelay.js\");\n/* harmony import */ var _src_Mobile_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/Mobile/router */ \"./src/Mobile/router.js\");\nglobal.window = global;\n\nconst express = __webpack_require__(/*! express */ \"express\");\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst app = express();\n\nconst React = __webpack_require__(/*! react */ \"react\");\n\nconst ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\n\n\n\n\n\nconst port = parseInt(process.env.PORT || 5000, 10); // app.use(express.static('build'))\n\napp.disable('x-powered-by');\napp.get('/', async (req, res) => {\n  // const app = ReactDOMServer.renderToString(<App history={createHistory()} createRelay={createRelay}/>)\n  // const indexFile = path.resolve('./build/index.html')\n  // console.log(req.url)\n  // // console.log('App', app)\n  // fs.readFile(indexFile, 'utf8', (err, data) => {\n  //   if (err) {\n  //     console.error('Something went wrong:', err)\n  //     return res.status(500).send('Oops, better luck next time!')\n  //   }\n  //   return res.send(\n  //     data.replace('<div id=\"root\"></div>', `<div id=\"root\" class=\"root\">${app}</div>`)\n  //   )\n  // })\n  const indexFile = path.resolve('./build/index.html');\n  const page = await _src_Mobile_router__WEBPACK_IMPORTED_MODULE_4__[\"default\"].resolve({\n    pathname: req.url,\n    // fetchQuery: (query, variables) => {\n    //   return new Promise(async (resolve) => {\n    //     resolve({ data: {}})\n    //   })\n    // }\n    fetchQuery: (query, variables) => {\n      console.log(query, variables);\n      return new Promise(async resolve => {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(\"http://192.168.1.74:4000/graphql\", {\n          query: query.params.text,\n          variables\n        }, {\n          headers: {}\n        });\n        resolve(res.data.data);\n      });\n    }\n  });\n  console.log('Page', page); // const html = ReactDOMServer.renderToString(page.component)\n\n  const html = ReactDOMServer.renderToString( /*#__PURE__*/React.createElement(_src_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    history: Object(history__WEBPACK_IMPORTED_MODULE_1__[\"createMemoryHistory\"])(),\n    createRelay: _src_Mobile_createRelay__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    initialData: page.data,\n    initialComponent: page.component\n  })); // console.log('HTML', html)\n\n  fs.readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\" class=\"root\">${html}</div>`));\n  });\n}); // app.use('*', express.static(path.join(__dirname, 'build')))\n\napp.use(express.static('build'));\napp.listen(port, () => {\n  console.log(`Example app listening at http://localhost:${port}`);\n});\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-relay */ \"react-relay\");\n/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_relay__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! query-string */ \"query-string\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Mobile_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Mobile/router */ \"./src/Mobile/router.js\");\n/* harmony import */ var _Mobile_AppRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Mobile/AppRenderer */ \"./src/Mobile/AppRenderer.js\");\n/* harmony import */ var _Mobile_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Mobile/AppContext */ \"./src/Mobile/AppContext.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);\n\n\n // import { MuiThemeProvider } from '@material-ui/core/styles';\n// import CssBaseline from '@material-ui/core/CssBaseline'\n\n // import theme from './theme'\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.state = {\n      query: null,\n      variables: null,\n      render: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Mobile_AppRenderer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        ref: this.rendererRef,\n        initialComponent: this.props.initialComponent\n      }),\n      relay: this.props.createRelay(this.props.initialData),\n      queryParams: {},\n      pathname: '',\n      loading: true,\n      createRelay: null\n    }, this.childContext = {\n      history: this.props.history,\n      reset: () => {\n        this.setState({\n          relay: this.props.createRelay()\n        });\n        this.props.history.replace(this.props.history.location);\n        return new Promise(resolve => {\n          this.onRenderComplete = resolve;\n        });\n      }\n    }, this.rendererRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef(), this.resetEnvironment = options => {\n      (options === null || options === void 0 ? void 0 : options.redirect) && this.props.history.replace(options.redirect);\n      this.setState({\n        relay: this.props.createRelay()\n      });\n    }, this.renderLocation = location => {\n      const {\n        history\n      } = this.props;\n      const queryParams = query_string__WEBPACK_IMPORTED_MODULE_2___default.a.parse(location.search);\n      this.setState({\n        queryParams,\n        pathname: location.pathname\n      });\n      _Mobile_router__WEBPACK_IMPORTED_MODULE_3__[\"default\"].resolve({\n        query: queryParams,\n        pathname: location.pathname || '',\n        fetchQuery: this.fetchQuery\n      }).then(route => {\n        if (route.redirect) {\n          history.push(route.redirect);\n        } else {\n          this.renderRoute(route);\n        }\n      });\n    }, this.fetchQuery = (query, variables) => {\n      return new Promise((resolve, reject) => {\n        this.setState({\n          loading: true,\n          query,\n          variables,\n          render: ({\n            error,\n            props,\n            retry\n          }) => {\n            if (error) {\n              const err = new Error(error.message);\n              err.code = error.code;\n              reject(err);\n            } else if (props !== null) {\n              resolve(props);\n            }\n\n            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Mobile_AppRenderer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              ref: this.rendererRef\n            });\n          }\n        });\n      });\n    }, this.onRenderComplete = () => {\n      // end progress bar here\n      this.setState({\n        loading: false\n      });\n    }, this.renderRoute = route => {\n      this.rendererRef.current.renderRoute(route, this.onRenderComplete);\n    }, _temp;\n  }\n\n  getChildContext() {\n    return this.childContext;\n  }\n\n  componentDidMount() {\n    __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.t.bind(null, /*! ./mobile.css */ \"./src/mobile.css\", 7)); // import('./Mobile/createRelay').then(createRelay => {\n    //   this.setState({ createRelay, relay: createRelay() })\n    // })\n\n    const {\n      history\n    } = this.props;\n    this.unlisten = history.listen(this.renderLocation);\n    this.renderLocation(history.location); // disable context menu\n    // document.oncontextmenu = () => false\n  }\n\n  componentWillUnmount() {\n    this.unlisten();\n  }\n\n  render() {\n    const {\n      relay,\n      query,\n      variables,\n      render,\n      loading\n    } = this.state;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Mobile_AppContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Provider, {\n      value: {\n        queryParams: this.state.queryParams,\n        pathname: this.state.pathname,\n        history: this.props.history,\n        environment: relay,\n        resetEnvironment: this.resetEnvironment\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: {\n        position: 'relative'\n      }\n    }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: {\n        position: 'absolute',\n        left: 0,\n        right: 0,\n        zIndex: 99999999999999999999\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"LinearProgress\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_relay__WEBPACK_IMPORTED_MODULE_1__[\"QueryRenderer\"], {\n      fetchPolicy: \"store-and-network\",\n      environment: relay,\n      query: query,\n      variables: variables || {},\n      render: render\n    })));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Mobile/AppContext.js":
/*!**********************************!*\
  !*** ./src/Mobile/AppContext.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ctx = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (ctx);\n\n//# sourceURL=webpack:///./src/Mobile/AppContext.js?");

/***/ }),

/***/ "./src/Mobile/AppRenderer.js":
/*!***********************************!*\
  !*** ./src/Mobile/AppRenderer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Screens_ErrorScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Screens/ErrorScreen */ \"./src/Mobile/Screens/ErrorScreen.js\");\n/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logo.svg */ \"./src/logo.svg\");\n\n\n\n\nconst LoadingView = () => {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      position: 'fixed',\n      left: 0,\n      right: 0,\n      bottom: 0,\n      top: 0,\n      display: 'flex',\n      justifyContent: 'center',\n      alignItems: 'center'\n    }\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    alt: \"applogo\",\n    src: _logo_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }));\n}; // const defaultStates = {\n//   title: null,\n//   component: this.props.initialComponent || null,\n//   error: null\n// }\n\n\nclass AppRenderer extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  //state = defaultStates\n  constructor(props) {\n    super(props);\n\n    this.renderRoute = (route, cb) => {\n      this.setState({\n        /*...defaultStates,*/\n        ...route\n      }, cb);\n    };\n\n    this.state = {\n      title: null,\n      component: this.props.initialComponent || null,\n      error: null\n    };\n  }\n\n  componentDidUpdate() {\n    if (this.state.title) {\n      window.document.title = this.state.title;\n    }\n    /*   gtag('config', window.config.gaTrackingId, {\n         page_title: this.state.title,\n         page_location: window.location.href,\n         page_path: `${window.location.pathname}${window.location.search}`,\n       });*/\n\n  }\n\n  componentDidCatch(error) {\n    //   gtag('event', 'exception', { description: error.message, fatal: false });\n    this.setState({ ...defaultStates,\n      error\n    });\n  }\n\n  shouldComponentUpdate(nextProps, nextState) {\n    return this.state.component !== nextState.component || this.state.error !== nextState.error || this.state.title !== nextState.title;\n  }\n\n  render() {\n    return (\n      /*this.state.error*/\n      false ? /*#__PURE__*/undefined : this.state.component ? this.state.component : /*#__PURE__*/React.createElement(LoadingView, null)\n    );\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppRenderer);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/Mobile/AppRenderer.js?");

/***/ }),

/***/ "./src/Mobile/Components/FixedAddressBar.js":
/*!**************************************************!*\
  !*** ./src/Mobile/Components/FixedAddressBar.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {const Component = ({\n  children\n}) => {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      height: '100%',\n      width: '100%',\n      position: 'fixed',\n      left: 0,\n      right: 0,\n      overflow: 'hidden'\n    }\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      height: '100%',\n      overflow: 'hidden auto'\n    }\n  }, children));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/Mobile/Components/FixedAddressBar.js?");

/***/ }),

/***/ "./src/Mobile/Screens/AboutUs/__generated__/AboutUsScreenQuery.graphql.js":
/*!********************************************************************************!*\
  !*** ./src/Mobile/Screens/AboutUs/__generated__/AboutUsScreenQuery.graphql.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @flow\n */\n\n/* eslint-disable */\n\n/*::\nimport type { ConcreteRequest } from 'relay-runtime';\ntype AboutUsScreen_posts$ref = any;\nexport type AboutUsScreenQueryVariables = {||};\nexport type AboutUsScreenQueryResponse = {|\n  +posts: ?$ReadOnlyArray<?{|\n    +id: ?string,\n    +$fragmentRefs: AboutUsScreen_posts$ref,\n  |}>\n|};\nexport type AboutUsScreenQuery = {|\n  variables: AboutUsScreenQueryVariables,\n  response: AboutUsScreenQueryResponse,\n|};\n*/\n\n/*\nquery AboutUsScreenQuery {\n  posts(type: about_us, limit: 1) {\n    id\n    ...AboutUsScreen_posts\n  }\n}\n\nfragment AboutUsScreen_posts on Post {\n  id\n  title\n  content\n}\n*/\n\nconst node\n/*: ConcreteRequest*/\n= function () {\n  var v0 = [{\n    \"kind\": \"Literal\",\n    \"name\": \"limit\",\n    \"value\": 1\n  }, {\n    \"kind\": \"Literal\",\n    \"name\": \"type\",\n    \"value\": \"about_us\"\n  }],\n      v1 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"id\",\n    \"storageKey\": null\n  };\n  return {\n    \"fragment\": {\n      \"argumentDefinitions\": [],\n      \"kind\": \"Fragment\",\n      \"metadata\": null,\n      \"name\": \"AboutUsScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": v0\n        /*: any*/\n        ,\n        \"concreteType\": \"Post\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"posts\",\n        \"plural\": true,\n        \"selections\": [v1\n        /*: any*/\n        , {\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"AboutUsScreen_posts\"\n        }],\n        \"storageKey\": \"posts(limit:1,type:\\\"about_us\\\")\"\n      }],\n      \"type\": \"Query\",\n      \"abstractKey\": null\n    },\n    \"kind\": \"Request\",\n    \"operation\": {\n      \"argumentDefinitions\": [],\n      \"kind\": \"Operation\",\n      \"name\": \"AboutUsScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": v0\n        /*: any*/\n        ,\n        \"concreteType\": \"Post\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"posts\",\n        \"plural\": true,\n        \"selections\": [v1\n        /*: any*/\n        , {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"title\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"content\",\n          \"storageKey\": null\n        }],\n        \"storageKey\": \"posts(limit:1,type:\\\"about_us\\\")\"\n      }]\n    },\n    \"params\": {\n      \"cacheID\": \"512986321d2207dc91bc34820c630d6a\",\n      \"id\": null,\n      \"metadata\": {},\n      \"name\": \"AboutUsScreenQuery\",\n      \"operationKind\": \"query\",\n      \"text\": \"query AboutUsScreenQuery {\\n  posts(type: about_us, limit: 1) {\\n    id\\n    ...AboutUsScreen_posts\\n  }\\n}\\n\\nfragment AboutUsScreen_posts on Post {\\n  id\\n  title\\n  content\\n}\\n\"\n    }\n  };\n}(); // prettier-ignore\n\n\nnode\n/*: any*/\n.hash = 'e28be5897945f8ae4bbd171b3d894275';\nmodule.exports = node;\n\n//# sourceURL=webpack:///./src/Mobile/Screens/AboutUs/__generated__/AboutUsScreenQuery.graphql.js?");

/***/ }),

/***/ "./src/Mobile/Screens/AboutUs/index.js":
/*!*********************************************!*\
  !*** ./src/Mobile/Screens/AboutUs/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/FixedAddressBar */ \"./src/Mobile/Components/FixedAddressBar.js\");\nvar _AboutUsScreenQuery;\n\n\nconst chunk = {\n  path: '/about-us',\n  components: () => [__webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ./AboutUsScreen */ \"./src/Mobile/Screens/AboutUs/AboutUsScreen.js\"))],\n  query: _AboutUsScreenQuery !== void 0 ? _AboutUsScreenQuery : (_AboutUsScreenQuery = __webpack_require__(/*! ./__generated__/AboutUsScreenQuery.graphql */ \"./src/Mobile/Screens/AboutUs/__generated__/AboutUsScreenQuery.graphql.js\"), _AboutUsScreenQuery.hash && _AboutUsScreenQuery.hash !== \"e28be5897945f8ae4bbd171b3d894275\" && console.error(\"The definition of 'AboutUsScreenQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.\"), _AboutUsScreenQuery),\n  prepareVariables: ({\n    params\n  }) => params,\n  render: ([AboutUsScreen], data, context) => {\n    return {\n      title: 'Rental App',\n      component: /*#__PURE__*/React.createElement(_Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, /*#__PURE__*/React.createElement(AboutUsScreen, {\n        posts: data === null || data === void 0 ? void 0 : data.posts\n      }))\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (chunk);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/Mobile/Screens/AboutUs/index.js?");

/***/ }),

/***/ "./src/Mobile/Screens/Category/__generated__/CategorySearchScreenQuery.graphql.js":
/*!****************************************************************************************!*\
  !*** ./src/Mobile/Screens/Category/__generated__/CategorySearchScreenQuery.graphql.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @flow\n */\n\n/* eslint-disable */\n\n/*::\nimport type { ConcreteRequest } from 'relay-runtime';\ntype CategoryScreen_category$ref = any;\nexport type CategorySearchScreenQueryVariables = {|\n  id: string\n|};\nexport type CategorySearchScreenQueryResponse = {|\n  +category: ?{|\n    +id: ?string,\n    +$fragmentRefs: CategoryScreen_category$ref,\n  |}\n|};\nexport type CategorySearchScreenQuery = {|\n  variables: CategorySearchScreenQueryVariables,\n  response: CategorySearchScreenQueryResponse,\n|};\n*/\n\n/*\nquery CategorySearchScreenQuery(\n  $id: String!\n) {\n  category(id: $id) {\n    id\n    ...CategoryScreen_category\n  }\n}\n\nfragment CategoryScreen_category on Category {\n  id\n  name\n  level\n  ancestors {\n    id\n    name\n  }\n}\n*/\n\nconst node\n/*: ConcreteRequest*/\n= function () {\n  var v0 = [{\n    \"defaultValue\": null,\n    \"kind\": \"LocalArgument\",\n    \"name\": \"id\"\n  }],\n      v1 = [{\n    \"kind\": \"Variable\",\n    \"name\": \"id\",\n    \"variableName\": \"id\"\n  }],\n      v2 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"id\",\n    \"storageKey\": null\n  },\n      v3 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"name\",\n    \"storageKey\": null\n  };\n  return {\n    \"fragment\": {\n      \"argumentDefinitions\": v0\n      /*: any*/\n      ,\n      \"kind\": \"Fragment\",\n      \"metadata\": null,\n      \"name\": \"CategorySearchScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": v1\n        /*: any*/\n        ,\n        \"concreteType\": \"Category\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"category\",\n        \"plural\": false,\n        \"selections\": [v2\n        /*: any*/\n        , {\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"CategoryScreen_category\"\n        }],\n        \"storageKey\": null\n      }],\n      \"type\": \"Query\",\n      \"abstractKey\": null\n    },\n    \"kind\": \"Request\",\n    \"operation\": {\n      \"argumentDefinitions\": v0\n      /*: any*/\n      ,\n      \"kind\": \"Operation\",\n      \"name\": \"CategorySearchScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": v1\n        /*: any*/\n        ,\n        \"concreteType\": \"Category\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"category\",\n        \"plural\": false,\n        \"selections\": [v2\n        /*: any*/\n        , v3\n        /*: any*/\n        , {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"level\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"Category\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"ancestors\",\n          \"plural\": true,\n          \"selections\": [v2\n          /*: any*/\n          , v3\n          /*: any*/\n          ],\n          \"storageKey\": null\n        }],\n        \"storageKey\": null\n      }]\n    },\n    \"params\": {\n      \"cacheID\": \"8599c3d4798bf8db4b5f8e97b1c6659c\",\n      \"id\": null,\n      \"metadata\": {},\n      \"name\": \"CategorySearchScreenQuery\",\n      \"operationKind\": \"query\",\n      \"text\": \"query CategorySearchScreenQuery(\\n  $id: String!\\n) {\\n  category(id: $id) {\\n    id\\n    ...CategoryScreen_category\\n  }\\n}\\n\\nfragment CategoryScreen_category on Category {\\n  id\\n  name\\n  level\\n  ancestors {\\n    id\\n    name\\n  }\\n}\\n\"\n    }\n  };\n}(); // prettier-ignore\n\n\nnode\n/*: any*/\n.hash = '2731c383189db97e1e3c97f795328860';\nmodule.exports = node;\n\n//# sourceURL=webpack:///./src/Mobile/Screens/Category/__generated__/CategorySearchScreenQuery.graphql.js?");

/***/ }),

/***/ "./src/Mobile/Screens/Category/index.js":
/*!**********************************************!*\
  !*** ./src/Mobile/Screens/Category/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/FixedAddressBar */ \"./src/Mobile/Components/FixedAddressBar.js\");\nvar _CategorySearchScreenQuery;\n\n\nconst chunk = {\n  path: '/category/:id',\n  components: () => [Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, /*! ./CategoryScreen */ \"./src/Mobile/Screens/Category/CategoryScreen.js\"))],\n  query: _CategorySearchScreenQuery !== void 0 ? _CategorySearchScreenQuery : (_CategorySearchScreenQuery = __webpack_require__(/*! ./__generated__/CategorySearchScreenQuery.graphql */ \"./src/Mobile/Screens/Category/__generated__/CategorySearchScreenQuery.graphql.js\"), _CategorySearchScreenQuery.hash && _CategorySearchScreenQuery.hash !== \"2731c383189db97e1e3c97f795328860\" && console.error(\"The definition of 'CategorySearchScreenQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.\"), _CategorySearchScreenQuery),\n  prepareVariables: ({\n    params\n  }) => params,\n  render: ([CategoryScreen], data, context) => {\n    return {\n      title: 'Rental App',\n      component: /*#__PURE__*/React.createElement(_Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, /*#__PURE__*/React.createElement(CategoryScreen, {\n        category: data.category\n      }))\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (chunk);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/Mobile/Screens/Category/index.js?");

/***/ }),

/***/ "./src/Mobile/Screens/CreateProduct/__generated__/CreateProductScreenQuery.graphql.js":
/*!********************************************************************************************!*\
  !*** ./src/Mobile/Screens/CreateProduct/__generated__/CreateProductScreenQuery.graphql.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @flow\n */\n\n/* eslint-disable */\n\n/*::\nimport type { ConcreteRequest } from 'relay-runtime';\ntype CreateProductScreen_category$ref = any;\ntype CreateProductScreen_me$ref = any;\ntype CreateProductScreen_productConditions$ref = any;\ntype CreateProductScreen_rentalDurations$ref = any;\nexport type CreateProductScreenQueryVariables = {|\n  categoryId: string\n|};\nexport type CreateProductScreenQueryResponse = {|\n  +category: ?{|\n    +id: ?string,\n    +$fragmentRefs: CreateProductScreen_category$ref,\n  |},\n  +me: ?{|\n    +id: ?string,\n    +$fragmentRefs: CreateProductScreen_me$ref,\n  |},\n  +productConditions: ?$ReadOnlyArray<?{|\n    +$fragmentRefs: CreateProductScreen_productConditions$ref\n  |}>,\n  +rentalDurations: ?$ReadOnlyArray<?{|\n    +$fragmentRefs: CreateProductScreen_rentalDurations$ref\n  |}>,\n|};\nexport type CreateProductScreenQuery = {|\n  variables: CreateProductScreenQueryVariables,\n  response: CreateProductScreenQueryResponse,\n|};\n*/\n\n/*\nquery CreateProductScreenQuery(\n  $categoryId: String!\n) {\n  category(id: $categoryId) {\n    id\n    ...CreateProductScreen_category\n  }\n  me {\n    id\n    ...CreateProductScreen_me\n  }\n  productConditions {\n    ...CreateProductScreen_productConditions\n    id\n  }\n  rentalDurations {\n    ...CreateProductScreen_rentalDurations\n    id\n  }\n}\n\nfragment CreateProductScreen_category on Category {\n  id\n  name\n  path\n  requiresProductCondition\n  showsProductConditionField\n  listingType\n  ancestors {\n    id\n    name\n  }\n  specFields {\n    id\n    attribute {\n      id\n      name\n    }\n    isAutocomplete\n    isRequired\n    type\n    max\n    min\n    options\n    isEnum\n  }\n}\n\nfragment CreateProductScreen_me on User {\n  id\n  store {\n    id\n  }\n}\n\nfragment CreateProductScreen_productConditions on ProductCondition {\n  id\n  display\n}\n\nfragment CreateProductScreen_rentalDurations on Unit {\n  id\n  display\n  name\n  value\n}\n*/\n\nconst node\n/*: ConcreteRequest*/\n= function () {\n  var v0 = [{\n    \"defaultValue\": null,\n    \"kind\": \"LocalArgument\",\n    \"name\": \"categoryId\"\n  }],\n      v1 = [{\n    \"kind\": \"Variable\",\n    \"name\": \"id\",\n    \"variableName\": \"categoryId\"\n  }],\n      v2 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"id\",\n    \"storageKey\": null\n  },\n      v3 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"name\",\n    \"storageKey\": null\n  },\n      v4 = [v2\n  /*: any*/\n  , v3\n  /*: any*/\n  ],\n      v5 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"display\",\n    \"storageKey\": null\n  };\n  return {\n    \"fragment\": {\n      \"argumentDefinitions\": v0\n      /*: any*/\n      ,\n      \"kind\": \"Fragment\",\n      \"metadata\": null,\n      \"name\": \"CreateProductScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": v1\n        /*: any*/\n        ,\n        \"concreteType\": \"Category\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"category\",\n        \"plural\": false,\n        \"selections\": [v2\n        /*: any*/\n        , {\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"CreateProductScreen_category\"\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"User\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"me\",\n        \"plural\": false,\n        \"selections\": [v2\n        /*: any*/\n        , {\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"CreateProductScreen_me\"\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"ProductCondition\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"productConditions\",\n        \"plural\": true,\n        \"selections\": [{\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"CreateProductScreen_productConditions\"\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"Unit\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"rentalDurations\",\n        \"plural\": true,\n        \"selections\": [{\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"CreateProductScreen_rentalDurations\"\n        }],\n        \"storageKey\": null\n      }],\n      \"type\": \"Query\",\n      \"abstractKey\": null\n    },\n    \"kind\": \"Request\",\n    \"operation\": {\n      \"argumentDefinitions\": v0\n      /*: any*/\n      ,\n      \"kind\": \"Operation\",\n      \"name\": \"CreateProductScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": v1\n        /*: any*/\n        ,\n        \"concreteType\": \"Category\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"category\",\n        \"plural\": false,\n        \"selections\": [v2\n        /*: any*/\n        , v3\n        /*: any*/\n        , {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"path\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"requiresProductCondition\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"showsProductConditionField\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"listingType\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"Category\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"ancestors\",\n          \"plural\": true,\n          \"selections\": v4\n          /*: any*/\n          ,\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"SpecificationField\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"specFields\",\n          \"plural\": true,\n          \"selections\": [v2\n          /*: any*/\n          , {\n            \"alias\": null,\n            \"args\": null,\n            \"concreteType\": \"Attribute\",\n            \"kind\": \"LinkedField\",\n            \"name\": \"attribute\",\n            \"plural\": false,\n            \"selections\": v4\n            /*: any*/\n            ,\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"isAutocomplete\",\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"isRequired\",\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"type\",\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"max\",\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"min\",\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"options\",\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"isEnum\",\n            \"storageKey\": null\n          }],\n          \"storageKey\": null\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"User\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"me\",\n        \"plural\": false,\n        \"selections\": [v2\n        /*: any*/\n        , {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"Store\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"store\",\n          \"plural\": false,\n          \"selections\": [v2\n          /*: any*/\n          ],\n          \"storageKey\": null\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"ProductCondition\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"productConditions\",\n        \"plural\": true,\n        \"selections\": [v2\n        /*: any*/\n        , v5\n        /*: any*/\n        ],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"Unit\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"rentalDurations\",\n        \"plural\": true,\n        \"selections\": [v2\n        /*: any*/\n        , v5\n        /*: any*/\n        , v3\n        /*: any*/\n        , {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"value\",\n          \"storageKey\": null\n        }],\n        \"storageKey\": null\n      }]\n    },\n    \"params\": {\n      \"cacheID\": \"6cec8e49dab32c738d8c3c2ee3c384f0\",\n      \"id\": null,\n      \"metadata\": {},\n      \"name\": \"CreateProductScreenQuery\",\n      \"operationKind\": \"query\",\n      \"text\": \"query CreateProductScreenQuery(\\n  $categoryId: String!\\n) {\\n  category(id: $categoryId) {\\n    id\\n    ...CreateProductScreen_category\\n  }\\n  me {\\n    id\\n    ...CreateProductScreen_me\\n  }\\n  productConditions {\\n    ...CreateProductScreen_productConditions\\n    id\\n  }\\n  rentalDurations {\\n    ...CreateProductScreen_rentalDurations\\n    id\\n  }\\n}\\n\\nfragment CreateProductScreen_category on Category {\\n  id\\n  name\\n  path\\n  requiresProductCondition\\n  showsProductConditionField\\n  listingType\\n  ancestors {\\n    id\\n    name\\n  }\\n  specFields {\\n    id\\n    attribute {\\n      id\\n      name\\n    }\\n    isAutocomplete\\n    isRequired\\n    type\\n    max\\n    min\\n    options\\n    isEnum\\n  }\\n}\\n\\nfragment CreateProductScreen_me on User {\\n  id\\n  store {\\n    id\\n  }\\n}\\n\\nfragment CreateProductScreen_productConditions on ProductCondition {\\n  id\\n  display\\n}\\n\\nfragment CreateProductScreen_rentalDurations on Unit {\\n  id\\n  display\\n  name\\n  value\\n}\\n\"\n    }\n  };\n}(); // prettier-ignore\n\n\nnode\n/*: any*/\n.hash = '8df1e86c63d6c934a9239d3bc464d7a9';\nmodule.exports = node;\n\n//# sourceURL=webpack:///./src/Mobile/Screens/CreateProduct/__generated__/CreateProductScreenQuery.graphql.js?");

/***/ }),

/***/ "./src/Mobile/Screens/CreateProduct/index.js":
/*!***************************************************!*\
  !*** ./src/Mobile/Screens/CreateProduct/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/FixedAddressBar */ \"./src/Mobile/Components/FixedAddressBar.js\");\nvar _CreateProductScreenQuery;\n\n\nconst chunk = {\n  path: '/new/product/:categoryId',\n  components: () => [__webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ./CreateProductScreen */ \"./src/Mobile/Screens/CreateProduct/CreateProductScreen.js\"))],\n  query: _CreateProductScreenQuery !== void 0 ? _CreateProductScreenQuery : (_CreateProductScreenQuery = __webpack_require__(/*! ./__generated__/CreateProductScreenQuery.graphql */ \"./src/Mobile/Screens/CreateProduct/__generated__/CreateProductScreenQuery.graphql.js\"), _CreateProductScreenQuery.hash && _CreateProductScreenQuery.hash !== \"8df1e86c63d6c934a9239d3bc464d7a9\" && console.error(\"The definition of 'CreateProductScreenQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.\"), _CreateProductScreenQuery),\n  prepareVariables: ({\n    params\n  }) => params,\n  render: ([CreateProductScreen], data, context) => {\n    return {\n      title: 'Rental App',\n      component: /*#__PURE__*/React.createElement(_Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, /*#__PURE__*/React.createElement(CreateProductScreen, {\n        category: data.category,\n        me: data.me,\n        productConditions: data.productConditions,\n        rentalDurations: data.rentalDurations\n      }))\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (chunk);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/Mobile/Screens/CreateProduct/index.js?");

/***/ }),

/***/ "./src/Mobile/Screens/CreateStore/__generated__/CreateStoreQuery.graphql.js":
/*!**********************************************************************************!*\
  !*** ./src/Mobile/Screens/CreateStore/__generated__/CreateStoreQuery.graphql.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @flow\n */\n\n/* eslint-disable */\n\n/*::\nimport type { ConcreteRequest } from 'relay-runtime';\ntype CreateStoreScreen_me$ref = any;\ntype CreateStoreScreen_provinces$ref = any;\nexport type CreateStoreQueryVariables = {||};\nexport type CreateStoreQueryResponse = {|\n  +me: ?{|\n    +id: ?string,\n    +$fragmentRefs: CreateStoreScreen_me$ref,\n  |},\n  +administrativeAreas: ?$ReadOnlyArray<?{|\n    +$fragmentRefs: CreateStoreScreen_provinces$ref\n  |}>,\n|};\nexport type CreateStoreQuery = {|\n  variables: CreateStoreQueryVariables,\n  response: CreateStoreQueryResponse,\n|};\n*/\n\n/*\nquery CreateStoreQuery {\n  me {\n    id\n    ...CreateStoreScreen_me\n  }\n  administrativeAreas {\n    ...CreateStoreScreen_provinces\n  }\n}\n\nfragment CreateStoreScreen_me on User {\n  id\n  store {\n    id\n  }\n}\n\nfragment CreateStoreScreen_provinces on AdministrativeArea {\n  administrativeAreaId\n  name\n}\n*/\n\nconst node\n/*: ConcreteRequest*/\n= function () {\n  var v0 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"id\",\n    \"storageKey\": null\n  };\n  return {\n    \"fragment\": {\n      \"argumentDefinitions\": [],\n      \"kind\": \"Fragment\",\n      \"metadata\": null,\n      \"name\": \"CreateStoreQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"User\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"me\",\n        \"plural\": false,\n        \"selections\": [v0\n        /*: any*/\n        , {\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"CreateStoreScreen_me\"\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"AdministrativeArea\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"administrativeAreas\",\n        \"plural\": true,\n        \"selections\": [{\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"CreateStoreScreen_provinces\"\n        }],\n        \"storageKey\": null\n      }],\n      \"type\": \"Query\",\n      \"abstractKey\": null\n    },\n    \"kind\": \"Request\",\n    \"operation\": {\n      \"argumentDefinitions\": [],\n      \"kind\": \"Operation\",\n      \"name\": \"CreateStoreQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"User\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"me\",\n        \"plural\": false,\n        \"selections\": [v0\n        /*: any*/\n        , {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"Store\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"store\",\n          \"plural\": false,\n          \"selections\": [v0\n          /*: any*/\n          ],\n          \"storageKey\": null\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"AdministrativeArea\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"administrativeAreas\",\n        \"plural\": true,\n        \"selections\": [{\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"administrativeAreaId\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"name\",\n          \"storageKey\": null\n        }],\n        \"storageKey\": null\n      }]\n    },\n    \"params\": {\n      \"cacheID\": \"c3ea0320a5cbab36732e19df931ec114\",\n      \"id\": null,\n      \"metadata\": {},\n      \"name\": \"CreateStoreQuery\",\n      \"operationKind\": \"query\",\n      \"text\": \"query CreateStoreQuery {\\n  me {\\n    id\\n    ...CreateStoreScreen_me\\n  }\\n  administrativeAreas {\\n    ...CreateStoreScreen_provinces\\n  }\\n}\\n\\nfragment CreateStoreScreen_me on User {\\n  id\\n  store {\\n    id\\n  }\\n}\\n\\nfragment CreateStoreScreen_provinces on AdministrativeArea {\\n  administrativeAreaId\\n  name\\n}\\n\"\n    }\n  };\n}(); // prettier-ignore\n\n\nnode\n/*: any*/\n.hash = '8b0e49910fbb1d607bf9c532a2523f2b';\nmodule.exports = node;\n\n//# sourceURL=webpack:///./src/Mobile/Screens/CreateStore/__generated__/CreateStoreQuery.graphql.js?");

/***/ }),

/***/ "./src/Mobile/Screens/CreateStore/index.js":
/*!*************************************************!*\
  !*** ./src/Mobile/Screens/CreateStore/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/FixedAddressBar */ \"./src/Mobile/Components/FixedAddressBar.js\");\nvar _CreateStoreQuery;\n\n\nconst chunk = {\n  path: '/new/store',\n  components: () => [__webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ./CreateStoreScreen */ \"./src/Mobile/Screens/CreateStore/CreateStoreScreen.js\"))],\n  query: _CreateStoreQuery !== void 0 ? _CreateStoreQuery : (_CreateStoreQuery = __webpack_require__(/*! ./__generated__/CreateStoreQuery.graphql */ \"./src/Mobile/Screens/CreateStore/__generated__/CreateStoreQuery.graphql.js\"), _CreateStoreQuery.hash && _CreateStoreQuery.hash !== \"8b0e49910fbb1d607bf9c532a2523f2b\" && console.error(\"The definition of 'CreateStoreQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.\"), _CreateStoreQuery),\n  // prepareVariables: ({ params }) => params,\n  render: ([CreateStoreScreen], data, context) => {\n    return {\n      title: 'Rental App',\n      component: /*#__PURE__*/React.createElement(_Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, /*#__PURE__*/React.createElement(CreateStoreScreen, {\n        me: data.me,\n        provinces: data.administrativeAreas\n      }))\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (chunk);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/Mobile/Screens/CreateStore/index.js?");

/***/ }),

/***/ "./src/Mobile/Screens/EditProduct/__generated__/EditProductScreenQuery.graphql.js":
/*!****************************************************************************************!*\
  !*** ./src/Mobile/Screens/EditProduct/__generated__/EditProductScreenQuery.graphql.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @flow\n */\n\n/* eslint-disable */\n\n/*::\nimport type { ConcreteRequest } from 'relay-runtime';\ntype EditProductScreen_me$ref = any;\ntype EditProductScreen_product$ref = any;\ntype EditProductScreen_productConditions$ref = any;\ntype EditProductScreen_rentalDurations$ref = any;\nexport type EditProductScreenQueryVariables = {|\n  id: string\n|};\nexport type EditProductScreenQueryResponse = {|\n  +product: ?{|\n    +id: ?string,\n    +$fragmentRefs: EditProductScreen_product$ref,\n  |},\n  +productConditions: ?$ReadOnlyArray<?{|\n    +$fragmentRefs: EditProductScreen_productConditions$ref\n  |}>,\n  +rentalDurations: ?$ReadOnlyArray<?{|\n    +$fragmentRefs: EditProductScreen_rentalDurations$ref\n  |}>,\n  +me: ?{|\n    +$fragmentRefs: EditProductScreen_me$ref\n  |},\n|};\nexport type EditProductScreenQuery = {|\n  variables: EditProductScreenQueryVariables,\n  response: EditProductScreenQueryResponse,\n|};\n*/\n\n/*\nquery EditProductScreenQuery(\n  $id: String!\n) {\n  product(id: $id) {\n    id\n    ...EditProductScreen_product\n  }\n  productConditions {\n    ...EditProductScreen_productConditions\n    id\n  }\n  rentalDurations {\n    ...EditProductScreen_rentalDurations\n    id\n  }\n  me {\n    ...EditProductScreen_me\n    id\n  }\n}\n\nfragment EditProductScreen_me on User {\n  id\n}\n\nfragment EditProductScreen_product on Product {\n  id\n  name\n  price\n  desc\n  isPublished\n  isDeleted\n  images {\n    id\n    url\n  }\n  specs {\n    id\n    attribute {\n      id\n    }\n    value\n  }\n  condition {\n    id\n  }\n  rentalDuration {\n    id\n  }\n  merchant {\n    id\n  }\n  category {\n    id\n    name\n    requiresProductCondition\n    showsProductConditionField\n    listingType\n    specFields {\n      id\n      attribute {\n        id\n        name\n      }\n      isAutocomplete\n      isRequired\n      type\n      max\n      min\n      options\n      isEnum\n    }\n  }\n}\n\nfragment EditProductScreen_productConditions on ProductCondition {\n  id\n  display\n}\n\nfragment EditProductScreen_rentalDurations on Unit {\n  id\n  display\n  name\n  value\n}\n*/\n\nconst node\n/*: ConcreteRequest*/\n= function () {\n  var v0 = [{\n    \"defaultValue\": null,\n    \"kind\": \"LocalArgument\",\n    \"name\": \"id\"\n  }],\n      v1 = [{\n    \"kind\": \"Variable\",\n    \"name\": \"id\",\n    \"variableName\": \"id\"\n  }],\n      v2 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"id\",\n    \"storageKey\": null\n  },\n      v3 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"name\",\n    \"storageKey\": null\n  },\n      v4 = [v2\n  /*: any*/\n  ],\n      v5 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"value\",\n    \"storageKey\": null\n  },\n      v6 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"display\",\n    \"storageKey\": null\n  };\n  return {\n    \"fragment\": {\n      \"argumentDefinitions\": v0\n      /*: any*/\n      ,\n      \"kind\": \"Fragment\",\n      \"metadata\": null,\n      \"name\": \"EditProductScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": v1\n        /*: any*/\n        ,\n        \"concreteType\": \"Product\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"product\",\n        \"plural\": false,\n        \"selections\": [v2\n        /*: any*/\n        , {\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"EditProductScreen_product\"\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"ProductCondition\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"productConditions\",\n        \"plural\": true,\n        \"selections\": [{\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"EditProductScreen_productConditions\"\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"Unit\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"rentalDurations\",\n        \"plural\": true,\n        \"selections\": [{\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"EditProductScreen_rentalDurations\"\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"User\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"me\",\n        \"plural\": false,\n        \"selections\": [{\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"EditProductScreen_me\"\n        }],\n        \"storageKey\": null\n      }],\n      \"type\": \"Query\",\n      \"abstractKey\": null\n    },\n    \"kind\": \"Request\",\n    \"operation\": {\n      \"argumentDefinitions\": v0\n      /*: any*/\n      ,\n      \"kind\": \"Operation\",\n      \"name\": \"EditProductScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": v1\n        /*: any*/\n        ,\n        \"concreteType\": \"Product\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"product\",\n        \"plural\": false,\n        \"selections\": [v2\n        /*: any*/\n        , v3\n        /*: any*/\n        , {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"price\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"desc\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"isPublished\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"isDeleted\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"Image\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"images\",\n          \"plural\": true,\n          \"selections\": [v2\n          /*: any*/\n          , {\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"url\",\n            \"storageKey\": null\n          }],\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"Specification\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"specs\",\n          \"plural\": true,\n          \"selections\": [v2\n          /*: any*/\n          , {\n            \"alias\": null,\n            \"args\": null,\n            \"concreteType\": \"Attribute\",\n            \"kind\": \"LinkedField\",\n            \"name\": \"attribute\",\n            \"plural\": false,\n            \"selections\": v4\n            /*: any*/\n            ,\n            \"storageKey\": null\n          }, v5\n          /*: any*/\n          ],\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"ProductCondition\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"condition\",\n          \"plural\": false,\n          \"selections\": v4\n          /*: any*/\n          ,\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"Unit\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"rentalDuration\",\n          \"plural\": false,\n          \"selections\": v4\n          /*: any*/\n          ,\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"User\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"merchant\",\n          \"plural\": false,\n          \"selections\": v4\n          /*: any*/\n          ,\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"Category\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"category\",\n          \"plural\": true,\n          \"selections\": [v2\n          /*: any*/\n          , v3\n          /*: any*/\n          , {\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"requiresProductCondition\",\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"showsProductConditionField\",\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"listingType\",\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"concreteType\": \"SpecificationField\",\n            \"kind\": \"LinkedField\",\n            \"name\": \"specFields\",\n            \"plural\": true,\n            \"selections\": [v2\n            /*: any*/\n            , {\n              \"alias\": null,\n              \"args\": null,\n              \"concreteType\": \"Attribute\",\n              \"kind\": \"LinkedField\",\n              \"name\": \"attribute\",\n              \"plural\": false,\n              \"selections\": [v2\n              /*: any*/\n              , v3\n              /*: any*/\n              ],\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"kind\": \"ScalarField\",\n              \"name\": \"isAutocomplete\",\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"kind\": \"ScalarField\",\n              \"name\": \"isRequired\",\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"kind\": \"ScalarField\",\n              \"name\": \"type\",\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"kind\": \"ScalarField\",\n              \"name\": \"max\",\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"kind\": \"ScalarField\",\n              \"name\": \"min\",\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"kind\": \"ScalarField\",\n              \"name\": \"options\",\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"kind\": \"ScalarField\",\n              \"name\": \"isEnum\",\n              \"storageKey\": null\n            }],\n            \"storageKey\": null\n          }],\n          \"storageKey\": null\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"ProductCondition\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"productConditions\",\n        \"plural\": true,\n        \"selections\": [v2\n        /*: any*/\n        , v6\n        /*: any*/\n        ],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"Unit\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"rentalDurations\",\n        \"plural\": true,\n        \"selections\": [v2\n        /*: any*/\n        , v6\n        /*: any*/\n        , v3\n        /*: any*/\n        , v5\n        /*: any*/\n        ],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"User\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"me\",\n        \"plural\": false,\n        \"selections\": v4\n        /*: any*/\n        ,\n        \"storageKey\": null\n      }]\n    },\n    \"params\": {\n      \"cacheID\": \"8b369762b1308670600d7991ff64667b\",\n      \"id\": null,\n      \"metadata\": {},\n      \"name\": \"EditProductScreenQuery\",\n      \"operationKind\": \"query\",\n      \"text\": \"query EditProductScreenQuery(\\n  $id: String!\\n) {\\n  product(id: $id) {\\n    id\\n    ...EditProductScreen_product\\n  }\\n  productConditions {\\n    ...EditProductScreen_productConditions\\n    id\\n  }\\n  rentalDurations {\\n    ...EditProductScreen_rentalDurations\\n    id\\n  }\\n  me {\\n    ...EditProductScreen_me\\n    id\\n  }\\n}\\n\\nfragment EditProductScreen_me on User {\\n  id\\n}\\n\\nfragment EditProductScreen_product on Product {\\n  id\\n  name\\n  price\\n  desc\\n  isPublished\\n  isDeleted\\n  images {\\n    id\\n    url\\n  }\\n  specs {\\n    id\\n    attribute {\\n      id\\n    }\\n    value\\n  }\\n  condition {\\n    id\\n  }\\n  rentalDuration {\\n    id\\n  }\\n  merchant {\\n    id\\n  }\\n  category {\\n    id\\n    name\\n    requiresProductCondition\\n    showsProductConditionField\\n    listingType\\n    specFields {\\n      id\\n      attribute {\\n        id\\n        name\\n      }\\n      isAutocomplete\\n      isRequired\\n      type\\n      max\\n      min\\n      options\\n      isEnum\\n    }\\n  }\\n}\\n\\nfragment EditProductScreen_productConditions on ProductCondition {\\n  id\\n  display\\n}\\n\\nfragment EditProductScreen_rentalDurations on Unit {\\n  id\\n  display\\n  name\\n  value\\n}\\n\"\n    }\n  };\n}(); // prettier-ignore\n\n\nnode\n/*: any*/\n.hash = 'dad36fa12375c9b6663139f55756ebe3';\nmodule.exports = node;\n\n//# sourceURL=webpack:///./src/Mobile/Screens/EditProduct/__generated__/EditProductScreenQuery.graphql.js?");

/***/ }),

/***/ "./src/Mobile/Screens/EditProduct/index.js":
/*!*************************************************!*\
  !*** ./src/Mobile/Screens/EditProduct/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/FixedAddressBar */ \"./src/Mobile/Components/FixedAddressBar.js\");\nvar _EditProductScreenQuery;\n\n\nconst chunk = {\n  path: '/edit/product/:id',\n  components: () => [__webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ./EditProductScreen */ \"./src/Mobile/Screens/EditProduct/EditProductScreen.js\"))],\n  query: _EditProductScreenQuery !== void 0 ? _EditProductScreenQuery : (_EditProductScreenQuery = __webpack_require__(/*! ./__generated__/EditProductScreenQuery.graphql */ \"./src/Mobile/Screens/EditProduct/__generated__/EditProductScreenQuery.graphql.js\"), _EditProductScreenQuery.hash && _EditProductScreenQuery.hash !== \"dad36fa12375c9b6663139f55756ebe3\" && console.error(\"The definition of 'EditProductScreenQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.\"), _EditProductScreenQuery),\n  prepareVariables: ({\n    params\n  }) => params,\n  render: ([EditProductScreen], data, context) => {\n    return {\n      title: 'Rental App',\n      component: /*#__PURE__*/React.createElement(_Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, /*#__PURE__*/React.createElement(EditProductScreen, {\n        me: data.me,\n        product: data.product,\n        productConditions: data.productConditions,\n        rentalDurations: data.rentalDurations\n      }))\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (chunk);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/Mobile/Screens/EditProduct/index.js?");

/***/ }),

/***/ "./src/Mobile/Screens/EditProductPhotos/__generated__/EditProductPhotosScreenQuery.graphql.js":
/*!****************************************************************************************************!*\
  !*** ./src/Mobile/Screens/EditProductPhotos/__generated__/EditProductPhotosScreenQuery.graphql.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @flow\n */\n\n/* eslint-disable */\n\n/*::\nimport type { ConcreteRequest } from 'relay-runtime';\ntype EditProductPhotosScreen_me$ref = any;\ntype EditProductPhotosScreen_product$ref = any;\nexport type EditProductPhotosScreenQueryVariables = {|\n  productId: string\n|};\nexport type EditProductPhotosScreenQueryResponse = {|\n  +product: ?{|\n    +id: ?string,\n    +$fragmentRefs: EditProductPhotosScreen_product$ref,\n  |},\n  +me: ?{|\n    +id: ?string,\n    +$fragmentRefs: EditProductPhotosScreen_me$ref,\n  |},\n|};\nexport type EditProductPhotosScreenQuery = {|\n  variables: EditProductPhotosScreenQueryVariables,\n  response: EditProductPhotosScreenQueryResponse,\n|};\n*/\n\n/*\nquery EditProductPhotosScreenQuery(\n  $productId: String!\n) {\n  product(id: $productId) {\n    id\n    ...EditProductPhotosScreen_product\n  }\n  me {\n    id\n    ...EditProductPhotosScreen_me\n  }\n}\n\nfragment EditProductPhotosScreen_me on User {\n  id\n}\n\nfragment EditProductPhotosScreen_product on Product {\n  id\n  images {\n    id\n    url\n  }\n  merchant {\n    id\n  }\n}\n*/\n\nconst node\n/*: ConcreteRequest*/\n= function () {\n  var v0 = [{\n    \"defaultValue\": null,\n    \"kind\": \"LocalArgument\",\n    \"name\": \"productId\"\n  }],\n      v1 = [{\n    \"kind\": \"Variable\",\n    \"name\": \"id\",\n    \"variableName\": \"productId\"\n  }],\n      v2 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"id\",\n    \"storageKey\": null\n  },\n      v3 = [v2\n  /*: any*/\n  ];\n  return {\n    \"fragment\": {\n      \"argumentDefinitions\": v0\n      /*: any*/\n      ,\n      \"kind\": \"Fragment\",\n      \"metadata\": null,\n      \"name\": \"EditProductPhotosScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": v1\n        /*: any*/\n        ,\n        \"concreteType\": \"Product\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"product\",\n        \"plural\": false,\n        \"selections\": [v2\n        /*: any*/\n        , {\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"EditProductPhotosScreen_product\"\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"User\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"me\",\n        \"plural\": false,\n        \"selections\": [v2\n        /*: any*/\n        , {\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"EditProductPhotosScreen_me\"\n        }],\n        \"storageKey\": null\n      }],\n      \"type\": \"Query\",\n      \"abstractKey\": null\n    },\n    \"kind\": \"Request\",\n    \"operation\": {\n      \"argumentDefinitions\": v0\n      /*: any*/\n      ,\n      \"kind\": \"Operation\",\n      \"name\": \"EditProductPhotosScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": v1\n        /*: any*/\n        ,\n        \"concreteType\": \"Product\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"product\",\n        \"plural\": false,\n        \"selections\": [v2\n        /*: any*/\n        , {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"Image\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"images\",\n          \"plural\": true,\n          \"selections\": [v2\n          /*: any*/\n          , {\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"url\",\n            \"storageKey\": null\n          }],\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"User\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"merchant\",\n          \"plural\": false,\n          \"selections\": v3\n          /*: any*/\n          ,\n          \"storageKey\": null\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"User\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"me\",\n        \"plural\": false,\n        \"selections\": v3\n        /*: any*/\n        ,\n        \"storageKey\": null\n      }]\n    },\n    \"params\": {\n      \"cacheID\": \"3f7afcb3afaee04ba2b279d007da7cfe\",\n      \"id\": null,\n      \"metadata\": {},\n      \"name\": \"EditProductPhotosScreenQuery\",\n      \"operationKind\": \"query\",\n      \"text\": \"query EditProductPhotosScreenQuery(\\n  $productId: String!\\n) {\\n  product(id: $productId) {\\n    id\\n    ...EditProductPhotosScreen_product\\n  }\\n  me {\\n    id\\n    ...EditProductPhotosScreen_me\\n  }\\n}\\n\\nfragment EditProductPhotosScreen_me on User {\\n  id\\n}\\n\\nfragment EditProductPhotosScreen_product on Product {\\n  id\\n  images {\\n    id\\n    url\\n  }\\n  merchant {\\n    id\\n  }\\n}\\n\"\n    }\n  };\n}(); // prettier-ignore\n\n\nnode\n/*: any*/\n.hash = '189b67543ed5f6531d4e82d884eae522';\nmodule.exports = node;\n\n//# sourceURL=webpack:///./src/Mobile/Screens/EditProductPhotos/__generated__/EditProductPhotosScreenQuery.graphql.js?");

/***/ }),

/***/ "./src/Mobile/Screens/EditProductPhotos/index.js":
/*!*******************************************************!*\
  !*** ./src/Mobile/Screens/EditProductPhotos/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/FixedAddressBar */ \"./src/Mobile/Components/FixedAddressBar.js\");\nvar _EditProductPhotosScreenQuery;\n\n\nconst chunk = {\n  path: '/edit/photos/:productId',\n  components: () => [__webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./EditProductPhotosScreen */ \"./src/Mobile/Screens/EditProductPhotos/EditProductPhotosScreen.js\"))],\n  query: _EditProductPhotosScreenQuery !== void 0 ? _EditProductPhotosScreenQuery : (_EditProductPhotosScreenQuery = __webpack_require__(/*! ./__generated__/EditProductPhotosScreenQuery.graphql */ \"./src/Mobile/Screens/EditProductPhotos/__generated__/EditProductPhotosScreenQuery.graphql.js\"), _EditProductPhotosScreenQuery.hash && _EditProductPhotosScreenQuery.hash !== \"189b67543ed5f6531d4e82d884eae522\" && console.error(\"The definition of 'EditProductPhotosScreenQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.\"), _EditProductPhotosScreenQuery),\n  prepareVariables: ({\n    params\n  }) => params,\n  render: ([EditProductPhotosScreen], data, context) => {\n    return {\n      title: 'Rental App',\n      component: /*#__PURE__*/React.createElement(_Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, /*#__PURE__*/React.createElement(EditProductPhotosScreen, {\n        product: data.product,\n        me: data.me\n      }))\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (chunk);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/Mobile/Screens/EditProductPhotos/index.js?");

/***/ }),

/***/ "./src/Mobile/Screens/EditProfile/__generated__/EditProfileQuery.graphql.js":
/*!**********************************************************************************!*\
  !*** ./src/Mobile/Screens/EditProfile/__generated__/EditProfileQuery.graphql.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @flow\n */\n\n/* eslint-disable */\n\n/*::\nimport type { ConcreteRequest } from 'relay-runtime';\ntype EditProfileScreen_me$ref = any;\nexport type EditProfileQueryVariables = {||};\nexport type EditProfileQueryResponse = {|\n  +me: ?{|\n    +id: ?string,\n    +$fragmentRefs: EditProfileScreen_me$ref,\n  |}\n|};\nexport type EditProfileQuery = {|\n  variables: EditProfileQueryVariables,\n  response: EditProfileQueryResponse,\n|};\n*/\n\n/*\nquery EditProfileQuery {\n  me {\n    id\n    ...EditProfileScreen_me\n  }\n}\n\nfragment EditProfileScreen_me on User {\n  id\n  name\n  mobileNumber\n  profilePicture {\n    url\n    id\n  }\n}\n*/\n\nconst node\n/*: ConcreteRequest*/\n= function () {\n  var v0 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"id\",\n    \"storageKey\": null\n  };\n  return {\n    \"fragment\": {\n      \"argumentDefinitions\": [],\n      \"kind\": \"Fragment\",\n      \"metadata\": null,\n      \"name\": \"EditProfileQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"User\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"me\",\n        \"plural\": false,\n        \"selections\": [v0\n        /*: any*/\n        , {\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"EditProfileScreen_me\"\n        }],\n        \"storageKey\": null\n      }],\n      \"type\": \"Query\",\n      \"abstractKey\": null\n    },\n    \"kind\": \"Request\",\n    \"operation\": {\n      \"argumentDefinitions\": [],\n      \"kind\": \"Operation\",\n      \"name\": \"EditProfileQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"User\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"me\",\n        \"plural\": false,\n        \"selections\": [v0\n        /*: any*/\n        , {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"name\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"mobileNumber\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"Image\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"profilePicture\",\n          \"plural\": false,\n          \"selections\": [{\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"url\",\n            \"storageKey\": null\n          }, v0\n          /*: any*/\n          ],\n          \"storageKey\": null\n        }],\n        \"storageKey\": null\n      }]\n    },\n    \"params\": {\n      \"cacheID\": \"b98a5fcf42867195026f44b643b2ab5c\",\n      \"id\": null,\n      \"metadata\": {},\n      \"name\": \"EditProfileQuery\",\n      \"operationKind\": \"query\",\n      \"text\": \"query EditProfileQuery {\\n  me {\\n    id\\n    ...EditProfileScreen_me\\n  }\\n}\\n\\nfragment EditProfileScreen_me on User {\\n  id\\n  name\\n  mobileNumber\\n  profilePicture {\\n    url\\n    id\\n  }\\n}\\n\"\n    }\n  };\n}(); // prettier-ignore\n\n\nnode\n/*: any*/\n.hash = '59b66f7fe2cdb93c1d8819745b4b1bbd';\nmodule.exports = node;\n\n//# sourceURL=webpack:///./src/Mobile/Screens/EditProfile/__generated__/EditProfileQuery.graphql.js?");

/***/ }),

/***/ "./src/Mobile/Screens/EditProfile/index.js":
/*!*************************************************!*\
  !*** ./src/Mobile/Screens/EditProfile/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/FixedAddressBar */ \"./src/Mobile/Components/FixedAddressBar.js\");\nvar _EditProfileQuery;\n\n\nconst chunk = {\n  path: '/profile',\n  components: () => [Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! ./EditProfileScreen */ \"./src/Mobile/Screens/EditProfile/EditProfileScreen.js\"))],\n  query: _EditProfileQuery !== void 0 ? _EditProfileQuery : (_EditProfileQuery = __webpack_require__(/*! ./__generated__/EditProfileQuery.graphql */ \"./src/Mobile/Screens/EditProfile/__generated__/EditProfileQuery.graphql.js\"), _EditProfileQuery.hash && _EditProfileQuery.hash !== \"59b66f7fe2cdb93c1d8819745b4b1bbd\" && console.error(\"The definition of 'EditProfileQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.\"), _EditProfileQuery),\n  // prepareVariables: ({ params }) => params,\n  render: ([EditProfileScreen], data, context) => {\n    return {\n      title: 'Rental App',\n      component: /*#__PURE__*/React.createElement(_Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, /*#__PURE__*/React.createElement(EditProfileScreen, {\n        me: data.me\n      }))\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (chunk);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/Mobile/Screens/EditProfile/index.js?");

/***/ }),

/***/ "./src/Mobile/Screens/EditStore/__generated__/EditStoreSearchScreenQuery.graphql.js":
/*!******************************************************************************************!*\
  !*** ./src/Mobile/Screens/EditStore/__generated__/EditStoreSearchScreenQuery.graphql.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @flow\n */\n\n/* eslint-disable */\n\n/*::\nimport type { ConcreteRequest } from 'relay-runtime';\ntype EditStoreScreen_me$ref = any;\ntype EditStoreScreen_provinces$ref = any;\nexport type EditStoreSearchScreenQueryVariables = {||};\nexport type EditStoreSearchScreenQueryResponse = {|\n  +me: ?{|\n    +id: ?string,\n    +$fragmentRefs: EditStoreScreen_me$ref,\n  |},\n  +administrativeAreas: ?$ReadOnlyArray<?{|\n    +$fragmentRefs: EditStoreScreen_provinces$ref\n  |}>,\n|};\nexport type EditStoreSearchScreenQuery = {|\n  variables: EditStoreSearchScreenQueryVariables,\n  response: EditStoreSearchScreenQueryResponse,\n|};\n*/\n\n/*\nquery EditStoreSearchScreenQuery {\n  me {\n    id\n    ...EditStoreScreen_me\n  }\n  administrativeAreas {\n    ...EditStoreScreen_provinces\n  }\n}\n\nfragment EditStoreScreen_me on User {\n  id\n  store {\n    id\n    name\n    whatsappNumber\n    profilePicture {\n      id\n      url\n    }\n    banner {\n      id\n      url\n    }\n    address {\n      fullAddress\n      province {\n        administrativeAreaId\n        name\n      }\n      city {\n        administrativeAreaId\n        name\n      }\n      district {\n        administrativeAreaId\n        name\n      }\n    }\n  }\n}\n\nfragment EditStoreScreen_provinces on AdministrativeArea {\n  administrativeAreaId\n  name\n}\n*/\n\nconst node\n/*: ConcreteRequest*/\n= function () {\n  var v0 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"id\",\n    \"storageKey\": null\n  },\n      v1 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"name\",\n    \"storageKey\": null\n  },\n      v2 = [v0\n  /*: any*/\n  , {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"url\",\n    \"storageKey\": null\n  }],\n      v3 = [{\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"administrativeAreaId\",\n    \"storageKey\": null\n  }, v1\n  /*: any*/\n  ];\n  return {\n    \"fragment\": {\n      \"argumentDefinitions\": [],\n      \"kind\": \"Fragment\",\n      \"metadata\": null,\n      \"name\": \"EditStoreSearchScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"User\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"me\",\n        \"plural\": false,\n        \"selections\": [v0\n        /*: any*/\n        , {\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"EditStoreScreen_me\"\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"AdministrativeArea\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"administrativeAreas\",\n        \"plural\": true,\n        \"selections\": [{\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"EditStoreScreen_provinces\"\n        }],\n        \"storageKey\": null\n      }],\n      \"type\": \"Query\",\n      \"abstractKey\": null\n    },\n    \"kind\": \"Request\",\n    \"operation\": {\n      \"argumentDefinitions\": [],\n      \"kind\": \"Operation\",\n      \"name\": \"EditStoreSearchScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"User\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"me\",\n        \"plural\": false,\n        \"selections\": [v0\n        /*: any*/\n        , {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"Store\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"store\",\n          \"plural\": false,\n          \"selections\": [v0\n          /*: any*/\n          , v1\n          /*: any*/\n          , {\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"whatsappNumber\",\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"concreteType\": \"Image\",\n            \"kind\": \"LinkedField\",\n            \"name\": \"profilePicture\",\n            \"plural\": false,\n            \"selections\": v2\n            /*: any*/\n            ,\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"concreteType\": \"Image\",\n            \"kind\": \"LinkedField\",\n            \"name\": \"banner\",\n            \"plural\": false,\n            \"selections\": v2\n            /*: any*/\n            ,\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"concreteType\": \"Address\",\n            \"kind\": \"LinkedField\",\n            \"name\": \"address\",\n            \"plural\": false,\n            \"selections\": [{\n              \"alias\": null,\n              \"args\": null,\n              \"kind\": \"ScalarField\",\n              \"name\": \"fullAddress\",\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"concreteType\": \"AdministrativeArea\",\n              \"kind\": \"LinkedField\",\n              \"name\": \"province\",\n              \"plural\": false,\n              \"selections\": v3\n              /*: any*/\n              ,\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"concreteType\": \"AdministrativeArea\",\n              \"kind\": \"LinkedField\",\n              \"name\": \"city\",\n              \"plural\": false,\n              \"selections\": v3\n              /*: any*/\n              ,\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"concreteType\": \"AdministrativeArea\",\n              \"kind\": \"LinkedField\",\n              \"name\": \"district\",\n              \"plural\": false,\n              \"selections\": v3\n              /*: any*/\n              ,\n              \"storageKey\": null\n            }],\n            \"storageKey\": null\n          }],\n          \"storageKey\": null\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"AdministrativeArea\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"administrativeAreas\",\n        \"plural\": true,\n        \"selections\": v3\n        /*: any*/\n        ,\n        \"storageKey\": null\n      }]\n    },\n    \"params\": {\n      \"cacheID\": \"eb935c2910dd31174a34b02d5db51e00\",\n      \"id\": null,\n      \"metadata\": {},\n      \"name\": \"EditStoreSearchScreenQuery\",\n      \"operationKind\": \"query\",\n      \"text\": \"query EditStoreSearchScreenQuery {\\n  me {\\n    id\\n    ...EditStoreScreen_me\\n  }\\n  administrativeAreas {\\n    ...EditStoreScreen_provinces\\n  }\\n}\\n\\nfragment EditStoreScreen_me on User {\\n  id\\n  store {\\n    id\\n    name\\n    whatsappNumber\\n    profilePicture {\\n      id\\n      url\\n    }\\n    banner {\\n      id\\n      url\\n    }\\n    address {\\n      fullAddress\\n      province {\\n        administrativeAreaId\\n        name\\n      }\\n      city {\\n        administrativeAreaId\\n        name\\n      }\\n      district {\\n        administrativeAreaId\\n        name\\n      }\\n    }\\n  }\\n}\\n\\nfragment EditStoreScreen_provinces on AdministrativeArea {\\n  administrativeAreaId\\n  name\\n}\\n\"\n    }\n  };\n}(); // prettier-ignore\n\n\nnode\n/*: any*/\n.hash = '0d9332c74d79df1fd31a10e6ea8b67f9';\nmodule.exports = node;\n\n//# sourceURL=webpack:///./src/Mobile/Screens/EditStore/__generated__/EditStoreSearchScreenQuery.graphql.js?");

/***/ }),

/***/ "./src/Mobile/Screens/EditStore/index.js":
/*!***********************************************!*\
  !*** ./src/Mobile/Screens/EditStore/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/FixedAddressBar */ \"./src/Mobile/Components/FixedAddressBar.js\");\nvar _EditStoreSearchScreenQuery;\n\n\nconst chunk = {\n  path: '/edit/store',\n  components: () => [__webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ./EditStoreScreen */ \"./src/Mobile/Screens/EditStore/EditStoreScreen.js\"))],\n  query: _EditStoreSearchScreenQuery !== void 0 ? _EditStoreSearchScreenQuery : (_EditStoreSearchScreenQuery = __webpack_require__(/*! ./__generated__/EditStoreSearchScreenQuery.graphql */ \"./src/Mobile/Screens/EditStore/__generated__/EditStoreSearchScreenQuery.graphql.js\"), _EditStoreSearchScreenQuery.hash && _EditStoreSearchScreenQuery.hash !== \"0d9332c74d79df1fd31a10e6ea8b67f9\" && console.error(\"The definition of 'EditStoreSearchScreenQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.\"), _EditStoreSearchScreenQuery),\n  prepareVariables: ({\n    params\n  }) => params,\n  render: ([EditStoreScreen], data, context) => {\n    return {\n      title: 'Rental App',\n      component: /*#__PURE__*/React.createElement(_Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, /*#__PURE__*/React.createElement(EditStoreScreen, {\n        provinces: data.administrativeAreas,\n        me: data.me\n      }))\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (chunk);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/Mobile/Screens/EditStore/index.js?");

/***/ }),

/***/ "./src/Mobile/Screens/ErrorScreen.js":
/*!*******************************************!*\
  !*** ./src/Mobile/Screens/ErrorScreen.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {const Component = props => {\n  return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"p\", null, \"Error\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/Mobile/Screens/ErrorScreen.js?");

/***/ }),

/***/ "./src/Mobile/Screens/FAQ/__generated__/FAQScreenQuery.graphql.js":
/*!************************************************************************!*\
  !*** ./src/Mobile/Screens/FAQ/__generated__/FAQScreenQuery.graphql.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @flow\n */\n\n/* eslint-disable */\n\n/*::\nimport type { ConcreteRequest } from 'relay-runtime';\ntype FAQScreen_posts$ref = any;\nexport type FAQScreenQueryVariables = {||};\nexport type FAQScreenQueryResponse = {|\n  +posts: ?$ReadOnlyArray<?{|\n    +id: ?string,\n    +$fragmentRefs: FAQScreen_posts$ref,\n  |}>\n|};\nexport type FAQScreenQuery = {|\n  variables: FAQScreenQueryVariables,\n  response: FAQScreenQueryResponse,\n|};\n*/\n\n/*\nquery FAQScreenQuery {\n  posts(type: faq, limit: 100) {\n    id\n    ...FAQScreen_posts\n  }\n}\n\nfragment FAQScreen_posts on Post {\n  id\n  title\n  content\n}\n*/\n\nconst node\n/*: ConcreteRequest*/\n= function () {\n  var v0 = [{\n    \"kind\": \"Literal\",\n    \"name\": \"limit\",\n    \"value\": 100\n  }, {\n    \"kind\": \"Literal\",\n    \"name\": \"type\",\n    \"value\": \"faq\"\n  }],\n      v1 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"id\",\n    \"storageKey\": null\n  };\n  return {\n    \"fragment\": {\n      \"argumentDefinitions\": [],\n      \"kind\": \"Fragment\",\n      \"metadata\": null,\n      \"name\": \"FAQScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": v0\n        /*: any*/\n        ,\n        \"concreteType\": \"Post\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"posts\",\n        \"plural\": true,\n        \"selections\": [v1\n        /*: any*/\n        , {\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"FAQScreen_posts\"\n        }],\n        \"storageKey\": \"posts(limit:100,type:\\\"faq\\\")\"\n      }],\n      \"type\": \"Query\",\n      \"abstractKey\": null\n    },\n    \"kind\": \"Request\",\n    \"operation\": {\n      \"argumentDefinitions\": [],\n      \"kind\": \"Operation\",\n      \"name\": \"FAQScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": v0\n        /*: any*/\n        ,\n        \"concreteType\": \"Post\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"posts\",\n        \"plural\": true,\n        \"selections\": [v1\n        /*: any*/\n        , {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"title\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"content\",\n          \"storageKey\": null\n        }],\n        \"storageKey\": \"posts(limit:100,type:\\\"faq\\\")\"\n      }]\n    },\n    \"params\": {\n      \"cacheID\": \"76e2b1695bfc5fd6b54421d08196d842\",\n      \"id\": null,\n      \"metadata\": {},\n      \"name\": \"FAQScreenQuery\",\n      \"operationKind\": \"query\",\n      \"text\": \"query FAQScreenQuery {\\n  posts(type: faq, limit: 100) {\\n    id\\n    ...FAQScreen_posts\\n  }\\n}\\n\\nfragment FAQScreen_posts on Post {\\n  id\\n  title\\n  content\\n}\\n\"\n    }\n  };\n}(); // prettier-ignore\n\n\nnode\n/*: any*/\n.hash = '038127726e42c0de6790cea95097ebaf';\nmodule.exports = node;\n\n//# sourceURL=webpack:///./src/Mobile/Screens/FAQ/__generated__/FAQScreenQuery.graphql.js?");

/***/ }),

/***/ "./src/Mobile/Screens/FAQ/index.js":
/*!*****************************************!*\
  !*** ./src/Mobile/Screens/FAQ/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/FixedAddressBar */ \"./src/Mobile/Components/FixedAddressBar.js\");\nvar _FAQScreenQuery;\n\n\nconst chunk = {\n  path: '/faq',\n  components: () => [__webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ./FAQScreen */ \"./src/Mobile/Screens/FAQ/FAQScreen.js\"))],\n  query: _FAQScreenQuery !== void 0 ? _FAQScreenQuery : (_FAQScreenQuery = __webpack_require__(/*! ./__generated__/FAQScreenQuery.graphql */ \"./src/Mobile/Screens/FAQ/__generated__/FAQScreenQuery.graphql.js\"), _FAQScreenQuery.hash && _FAQScreenQuery.hash !== \"038127726e42c0de6790cea95097ebaf\" && console.error(\"The definition of 'FAQScreenQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.\"), _FAQScreenQuery),\n  prepareVariables: ({\n    params\n  }) => params,\n  render: ([FAQScreen], data, context) => {\n    return {\n      title: 'Rental App',\n      component: /*#__PURE__*/React.createElement(_Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, /*#__PURE__*/React.createElement(FAQScreen, {\n        posts: data === null || data === void 0 ? void 0 : data.posts\n      }))\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (chunk);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/Mobile/Screens/FAQ/index.js?");

/***/ }),

/***/ "./src/Mobile/Screens/Login/__generated__/LoginScreenQuery.graphql.js":
/*!****************************************************************************!*\
  !*** ./src/Mobile/Screens/Login/__generated__/LoginScreenQuery.graphql.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @flow\n */\n\n/* eslint-disable */\n\n/*::\nimport type { ConcreteRequest } from 'relay-runtime';\ntype LoginScreen_me$ref = any;\nexport type LoginScreenQueryVariables = {||};\nexport type LoginScreenQueryResponse = {|\n  +me: ?{|\n    +id: ?string,\n    +$fragmentRefs: LoginScreen_me$ref,\n  |}\n|};\nexport type LoginScreenQuery = {|\n  variables: LoginScreenQueryVariables,\n  response: LoginScreenQueryResponse,\n|};\n*/\n\n/*\nquery LoginScreenQuery {\n  me {\n    id\n    ...LoginScreen_me\n  }\n}\n\nfragment LoginScreen_me on User {\n  id\n}\n*/\n\nconst node\n/*: ConcreteRequest*/\n= function () {\n  var v0 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"id\",\n    \"storageKey\": null\n  };\n  return {\n    \"fragment\": {\n      \"argumentDefinitions\": [],\n      \"kind\": \"Fragment\",\n      \"metadata\": null,\n      \"name\": \"LoginScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"User\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"me\",\n        \"plural\": false,\n        \"selections\": [v0\n        /*: any*/\n        , {\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"LoginScreen_me\"\n        }],\n        \"storageKey\": null\n      }],\n      \"type\": \"Query\",\n      \"abstractKey\": null\n    },\n    \"kind\": \"Request\",\n    \"operation\": {\n      \"argumentDefinitions\": [],\n      \"kind\": \"Operation\",\n      \"name\": \"LoginScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"User\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"me\",\n        \"plural\": false,\n        \"selections\": [v0\n        /*: any*/\n        ],\n        \"storageKey\": null\n      }]\n    },\n    \"params\": {\n      \"cacheID\": \"8ee1e31aae77c1dac27577cc23be3fba\",\n      \"id\": null,\n      \"metadata\": {},\n      \"name\": \"LoginScreenQuery\",\n      \"operationKind\": \"query\",\n      \"text\": \"query LoginScreenQuery {\\n  me {\\n    id\\n    ...LoginScreen_me\\n  }\\n}\\n\\nfragment LoginScreen_me on User {\\n  id\\n}\\n\"\n    }\n  };\n}(); // prettier-ignore\n\n\nnode\n/*: any*/\n.hash = '048e7a671b055353c0fed0cf253f9a6f';\nmodule.exports = node;\n\n//# sourceURL=webpack:///./src/Mobile/Screens/Login/__generated__/LoginScreenQuery.graphql.js?");

/***/ }),

/***/ "./src/Mobile/Screens/Login/index.js":
/*!*******************************************!*\
  !*** ./src/Mobile/Screens/Login/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/FixedAddressBar */ \"./src/Mobile/Components/FixedAddressBar.js\");\nvar _LoginScreenQuery;\n\n\nconst chunk = {\n  path: '/login',\n  components: () => [Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, /*! ./LoginScreen */ \"./src/Mobile/Screens/Login/LoginScreen.js\"))],\n  query: _LoginScreenQuery !== void 0 ? _LoginScreenQuery : (_LoginScreenQuery = __webpack_require__(/*! ./__generated__/LoginScreenQuery.graphql */ \"./src/Mobile/Screens/Login/__generated__/LoginScreenQuery.graphql.js\"), _LoginScreenQuery.hash && _LoginScreenQuery.hash !== \"048e7a671b055353c0fed0cf253f9a6f\" && console.error(\"The definition of 'LoginScreenQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.\"), _LoginScreenQuery),\n  prepareVariables: ({\n    params\n  }) => params,\n  render: ([LoginScreen], data, context) => {\n    return {\n      title: 'Rental App',\n      component: /*#__PURE__*/React.createElement(_Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, /*#__PURE__*/React.createElement(LoginScreen, {\n        me: data === null || data === void 0 ? void 0 : data.me\n      }))\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (chunk);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/Mobile/Screens/Login/index.js?");

/***/ }),

/***/ "./src/Mobile/Screens/Main/__generated__/MainScreenQuery.graphql.js":
/*!**************************************************************************!*\
  !*** ./src/Mobile/Screens/Main/__generated__/MainScreenQuery.graphql.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @flow\n */\n\n/* eslint-disable */\n\n/*::\nimport type { ConcreteRequest } from 'relay-runtime';\ntype MainScreen_data$ref = any;\nexport type MainScreenQueryVariables = {||};\nexport type MainScreenQueryResponse = {|\n  +$fragmentRefs: MainScreen_data$ref\n|};\nexport type MainScreenQuery = {|\n  variables: MainScreenQueryVariables,\n  response: MainScreenQueryResponse,\n|};\n*/\n\n/*\nquery MainScreenQuery {\n  ...MainScreen_data\n}\n\nfragment Categories_categories on Category {\n  id\n  name\n  level\n  listingType\n  icon {\n    url\n    id\n  }\n  children {\n    id\n    name\n    level\n    icon {\n      url\n      id\n    }\n  }\n}\n\nfragment ExploreTab_categories on Category {\n  id\n  ...Categories_categories\n}\n\nfragment ExploreTab_featuredProducts on Product {\n  id\n  ...FeaturedProductsList_featuredProducts\n}\n\nfragment ExploreTab_me on User {\n  id\n  name\n  isAdmin\n  profilePicture {\n    id\n    url\n  }\n  store {\n    id\n  }\n}\n\nfragment FeaturedProductsList_featuredProducts on Product {\n  id\n  ...ProductItem_product\n}\n\nfragment MainScreen_data on Query {\n  me {\n    id\n    ...ExploreTab_me\n  }\n  categories {\n    id\n    ...ExploreTab_categories\n  }\n  featuredProducts {\n    id\n    ...ExploreTab_featuredProducts\n  }\n}\n\nfragment ProductItem_product on Product {\n  id\n  name\n  price\n  listingType\n  isPublished\n  isSuspended\n  mainImage {\n    id\n    url\n  }\n  rentalDuration {\n    display\n    id\n  }\n}\n*/\n\nconst node\n/*: ConcreteRequest*/\n= function () {\n  var v0 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"id\",\n    \"storageKey\": null\n  },\n      v1 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"name\",\n    \"storageKey\": null\n  },\n      v2 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"url\",\n    \"storageKey\": null\n  },\n      v3 = [v0\n  /*: any*/\n  , v2\n  /*: any*/\n  ],\n      v4 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"level\",\n    \"storageKey\": null\n  },\n      v5 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"listingType\",\n    \"storageKey\": null\n  },\n      v6 = {\n    \"alias\": null,\n    \"args\": null,\n    \"concreteType\": \"Image\",\n    \"kind\": \"LinkedField\",\n    \"name\": \"icon\",\n    \"plural\": false,\n    \"selections\": [v2\n    /*: any*/\n    , v0\n    /*: any*/\n    ],\n    \"storageKey\": null\n  };\n  return {\n    \"fragment\": {\n      \"argumentDefinitions\": [],\n      \"kind\": \"Fragment\",\n      \"metadata\": null,\n      \"name\": \"MainScreenQuery\",\n      \"selections\": [{\n        \"args\": null,\n        \"kind\": \"FragmentSpread\",\n        \"name\": \"MainScreen_data\"\n      }],\n      \"type\": \"Query\",\n      \"abstractKey\": null\n    },\n    \"kind\": \"Request\",\n    \"operation\": {\n      \"argumentDefinitions\": [],\n      \"kind\": \"Operation\",\n      \"name\": \"MainScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"User\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"me\",\n        \"plural\": false,\n        \"selections\": [v0\n        /*: any*/\n        , v1\n        /*: any*/\n        , {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"isAdmin\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"Image\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"profilePicture\",\n          \"plural\": false,\n          \"selections\": v3\n          /*: any*/\n          ,\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"Store\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"store\",\n          \"plural\": false,\n          \"selections\": [v0\n          /*: any*/\n          ],\n          \"storageKey\": null\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"Category\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"categories\",\n        \"plural\": true,\n        \"selections\": [v0\n        /*: any*/\n        , v1\n        /*: any*/\n        , v4\n        /*: any*/\n        , v5\n        /*: any*/\n        , v6\n        /*: any*/\n        , {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"Category\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"children\",\n          \"plural\": true,\n          \"selections\": [v0\n          /*: any*/\n          , v1\n          /*: any*/\n          , v4\n          /*: any*/\n          , v6\n          /*: any*/\n          ],\n          \"storageKey\": null\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"Product\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"featuredProducts\",\n        \"plural\": true,\n        \"selections\": [v0\n        /*: any*/\n        , v1\n        /*: any*/\n        , {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"price\",\n          \"storageKey\": null\n        }, v5\n        /*: any*/\n        , {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"isPublished\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"isSuspended\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"Image\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"mainImage\",\n          \"plural\": false,\n          \"selections\": v3\n          /*: any*/\n          ,\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"Unit\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"rentalDuration\",\n          \"plural\": false,\n          \"selections\": [{\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"display\",\n            \"storageKey\": null\n          }, v0\n          /*: any*/\n          ],\n          \"storageKey\": null\n        }],\n        \"storageKey\": null\n      }]\n    },\n    \"params\": {\n      \"cacheID\": \"53abdb072a6e5a877b661d68b27e810b\",\n      \"id\": null,\n      \"metadata\": {},\n      \"name\": \"MainScreenQuery\",\n      \"operationKind\": \"query\",\n      \"text\": \"query MainScreenQuery {\\n  ...MainScreen_data\\n}\\n\\nfragment Categories_categories on Category {\\n  id\\n  name\\n  level\\n  listingType\\n  icon {\\n    url\\n    id\\n  }\\n  children {\\n    id\\n    name\\n    level\\n    icon {\\n      url\\n      id\\n    }\\n  }\\n}\\n\\nfragment ExploreTab_categories on Category {\\n  id\\n  ...Categories_categories\\n}\\n\\nfragment ExploreTab_featuredProducts on Product {\\n  id\\n  ...FeaturedProductsList_featuredProducts\\n}\\n\\nfragment ExploreTab_me on User {\\n  id\\n  name\\n  isAdmin\\n  profilePicture {\\n    id\\n    url\\n  }\\n  store {\\n    id\\n  }\\n}\\n\\nfragment FeaturedProductsList_featuredProducts on Product {\\n  id\\n  ...ProductItem_product\\n}\\n\\nfragment MainScreen_data on Query {\\n  me {\\n    id\\n    ...ExploreTab_me\\n  }\\n  categories {\\n    id\\n    ...ExploreTab_categories\\n  }\\n  featuredProducts {\\n    id\\n    ...ExploreTab_featuredProducts\\n  }\\n}\\n\\nfragment ProductItem_product on Product {\\n  id\\n  name\\n  price\\n  listingType\\n  isPublished\\n  isSuspended\\n  mainImage {\\n    id\\n    url\\n  }\\n  rentalDuration {\\n    display\\n    id\\n  }\\n}\\n\"\n    }\n  };\n}(); // prettier-ignore\n\n\nnode\n/*: any*/\n.hash = '7b9bb10b3f3320386e2118b029d1129c';\nmodule.exports = node;\n\n//# sourceURL=webpack:///./src/Mobile/Screens/Main/__generated__/MainScreenQuery.graphql.js?");

/***/ }),

/***/ "./src/Mobile/Screens/Main/index.js":
/*!******************************************!*\
  !*** ./src/Mobile/Screens/Main/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/FixedAddressBar */ \"./src/Mobile/Components/FixedAddressBar.js\");\nvar _MainScreenQuery;\n\n\nconst chunk = {\n  path: '',\n  components: () => [__webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./MainScreen */ \"./src/Mobile/Screens/Main/MainScreen.js\"))],\n  query: _MainScreenQuery !== void 0 ? _MainScreenQuery : (_MainScreenQuery = __webpack_require__(/*! ./__generated__/MainScreenQuery.graphql */ \"./src/Mobile/Screens/Main/__generated__/MainScreenQuery.graphql.js\"), _MainScreenQuery.hash && _MainScreenQuery.hash !== \"7b9bb10b3f3320386e2118b029d1129c\" && console.error(\"The definition of 'MainScreenQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.\"), _MainScreenQuery),\n  // prepareVariables: ({ params }) => params,\n  render: ([MainScreen], data, context) => {\n    return {\n      title: 'Rental App',\n      component: /*#__PURE__*/React.createElement(_Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, data && /*#__PURE__*/React.createElement(MainScreen, {\n        data: data\n      }))\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (chunk);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/Mobile/Screens/Main/index.js?");

/***/ }),

/***/ "./src/Mobile/Screens/PrivacyPolicy/__generated__/PrivacyPolicyScreenQuery.graphql.js":
/*!********************************************************************************************!*\
  !*** ./src/Mobile/Screens/PrivacyPolicy/__generated__/PrivacyPolicyScreenQuery.graphql.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @flow\n */\n\n/* eslint-disable */\n\n/*::\nimport type { ConcreteRequest } from 'relay-runtime';\ntype PrivacyPolicyScreen_posts$ref = any;\nexport type PrivacyPolicyScreenQueryVariables = {||};\nexport type PrivacyPolicyScreenQueryResponse = {|\n  +posts: ?$ReadOnlyArray<?{|\n    +id: ?string,\n    +$fragmentRefs: PrivacyPolicyScreen_posts$ref,\n  |}>\n|};\nexport type PrivacyPolicyScreenQuery = {|\n  variables: PrivacyPolicyScreenQueryVariables,\n  response: PrivacyPolicyScreenQueryResponse,\n|};\n*/\n\n/*\nquery PrivacyPolicyScreenQuery {\n  posts(type: privacy_policy, limit: 1) {\n    id\n    ...PrivacyPolicyScreen_posts\n  }\n}\n\nfragment PrivacyPolicyScreen_posts on Post {\n  id\n  title\n  content\n  updatedAt\n}\n*/\n\nconst node\n/*: ConcreteRequest*/\n= function () {\n  var v0 = [{\n    \"kind\": \"Literal\",\n    \"name\": \"limit\",\n    \"value\": 1\n  }, {\n    \"kind\": \"Literal\",\n    \"name\": \"type\",\n    \"value\": \"privacy_policy\"\n  }],\n      v1 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"id\",\n    \"storageKey\": null\n  };\n  return {\n    \"fragment\": {\n      \"argumentDefinitions\": [],\n      \"kind\": \"Fragment\",\n      \"metadata\": null,\n      \"name\": \"PrivacyPolicyScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": v0\n        /*: any*/\n        ,\n        \"concreteType\": \"Post\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"posts\",\n        \"plural\": true,\n        \"selections\": [v1\n        /*: any*/\n        , {\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"PrivacyPolicyScreen_posts\"\n        }],\n        \"storageKey\": \"posts(limit:1,type:\\\"privacy_policy\\\")\"\n      }],\n      \"type\": \"Query\",\n      \"abstractKey\": null\n    },\n    \"kind\": \"Request\",\n    \"operation\": {\n      \"argumentDefinitions\": [],\n      \"kind\": \"Operation\",\n      \"name\": \"PrivacyPolicyScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": v0\n        /*: any*/\n        ,\n        \"concreteType\": \"Post\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"posts\",\n        \"plural\": true,\n        \"selections\": [v1\n        /*: any*/\n        , {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"title\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"content\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"updatedAt\",\n          \"storageKey\": null\n        }],\n        \"storageKey\": \"posts(limit:1,type:\\\"privacy_policy\\\")\"\n      }]\n    },\n    \"params\": {\n      \"cacheID\": \"32d6d688a662640ffc9c9ec99f699031\",\n      \"id\": null,\n      \"metadata\": {},\n      \"name\": \"PrivacyPolicyScreenQuery\",\n      \"operationKind\": \"query\",\n      \"text\": \"query PrivacyPolicyScreenQuery {\\n  posts(type: privacy_policy, limit: 1) {\\n    id\\n    ...PrivacyPolicyScreen_posts\\n  }\\n}\\n\\nfragment PrivacyPolicyScreen_posts on Post {\\n  id\\n  title\\n  content\\n  updatedAt\\n}\\n\"\n    }\n  };\n}(); // prettier-ignore\n\n\nnode\n/*: any*/\n.hash = '4d597c2ddf7dba9ddf2ad01b0a4a9489';\nmodule.exports = node;\n\n//# sourceURL=webpack:///./src/Mobile/Screens/PrivacyPolicy/__generated__/PrivacyPolicyScreenQuery.graphql.js?");

/***/ }),

/***/ "./src/Mobile/Screens/PrivacyPolicy/index.js":
/*!***************************************************!*\
  !*** ./src/Mobile/Screens/PrivacyPolicy/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/FixedAddressBar */ \"./src/Mobile/Components/FixedAddressBar.js\");\nvar _PrivacyPolicyScreenQuery;\n\n\nconst chunk = {\n  path: '/privacy-policy',\n  components: () => [__webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! ./PrivacyPolicyScreen */ \"./src/Mobile/Screens/PrivacyPolicy/PrivacyPolicyScreen.js\"))],\n  query: _PrivacyPolicyScreenQuery !== void 0 ? _PrivacyPolicyScreenQuery : (_PrivacyPolicyScreenQuery = __webpack_require__(/*! ./__generated__/PrivacyPolicyScreenQuery.graphql */ \"./src/Mobile/Screens/PrivacyPolicy/__generated__/PrivacyPolicyScreenQuery.graphql.js\"), _PrivacyPolicyScreenQuery.hash && _PrivacyPolicyScreenQuery.hash !== \"4d597c2ddf7dba9ddf2ad01b0a4a9489\" && console.error(\"The definition of 'PrivacyPolicyScreenQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.\"), _PrivacyPolicyScreenQuery),\n  prepareVariables: ({\n    params\n  }) => params,\n  render: ([PrivacyPolicyScreen], data, context) => {\n    return {\n      title: 'Rental App',\n      component: /*#__PURE__*/React.createElement(_Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, /*#__PURE__*/React.createElement(PrivacyPolicyScreen, {\n        posts: data === null || data === void 0 ? void 0 : data.posts\n      }))\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (chunk);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/Mobile/Screens/PrivacyPolicy/index.js?");

/***/ }),

/***/ "./src/Mobile/Screens/Product/__generated__/ProductScreenQuery.graphql.js":
/*!********************************************************************************!*\
  !*** ./src/Mobile/Screens/Product/__generated__/ProductScreenQuery.graphql.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @flow\n */\n\n/* eslint-disable */\n\n/*::\nimport type { ConcreteRequest } from 'relay-runtime';\ntype ProductScreen_me$ref = any;\ntype ProductScreen_product$ref = any;\ntype ProductScreen_suspensionReasons$ref = any;\nexport type ProductScreenQueryVariables = {|\n  id: string\n|};\nexport type ProductScreenQueryResponse = {|\n  +product: ?{|\n    +id: ?string,\n    +$fragmentRefs: ProductScreen_product$ref,\n  |},\n  +me: ?{|\n    +id: ?string,\n    +$fragmentRefs: ProductScreen_me$ref,\n  |},\n  +suspensionReasons: ?$ReadOnlyArray<?{|\n    +$fragmentRefs: ProductScreen_suspensionReasons$ref\n  |}>,\n|};\nexport type ProductScreenQuery = {|\n  variables: ProductScreenQueryVariables,\n  response: ProductScreenQueryResponse,\n|};\n*/\n\n/*\nquery ProductScreenQuery(\n  $id: String!\n) {\n  product(id: $id) {\n    id\n    ...ProductScreen_product\n  }\n  me {\n    id\n    ...ProductScreen_me\n  }\n  suspensionReasons {\n    ...ProductScreen_suspensionReasons\n    id\n  }\n}\n\nfragment ProductScreen_me on User {\n  id\n  isAdmin\n}\n\nfragment ProductScreen_product on Product {\n  id\n  name\n  desc\n  price\n  isDeleted\n  isPublished\n  isFeatured\n  isSuspended\n  condition {\n    display\n    id\n  }\n  images {\n    id\n    url\n  }\n  category {\n    id\n    name\n  }\n  rentalDuration {\n    display\n    id\n  }\n  specs {\n    id\n    attribute {\n      id\n      name\n      icon {\n        id\n        url\n      }\n    }\n    value\n  }\n  store {\n    id\n    name\n    whatsappLink\n    merchantId\n    isVerified\n    profilePicture {\n      id\n      url\n    }\n    address {\n      city {\n        name\n      }\n      district {\n        name\n      }\n    }\n  }\n}\n\nfragment ProductScreen_suspensionReasons on SuspensionReason {\n  id\n  title\n}\n*/\n\nconst node\n/*: ConcreteRequest*/\n= function () {\n  var v0 = [{\n    \"defaultValue\": null,\n    \"kind\": \"LocalArgument\",\n    \"name\": \"id\"\n  }],\n      v1 = [{\n    \"kind\": \"Variable\",\n    \"name\": \"id\",\n    \"variableName\": \"id\"\n  }],\n      v2 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"id\",\n    \"storageKey\": null\n  },\n      v3 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"name\",\n    \"storageKey\": null\n  },\n      v4 = [{\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"display\",\n    \"storageKey\": null\n  }, v2\n  /*: any*/\n  ],\n      v5 = [v2\n  /*: any*/\n  , {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"url\",\n    \"storageKey\": null\n  }],\n      v6 = [v3\n  /*: any*/\n  ];\n  return {\n    \"fragment\": {\n      \"argumentDefinitions\": v0\n      /*: any*/\n      ,\n      \"kind\": \"Fragment\",\n      \"metadata\": null,\n      \"name\": \"ProductScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": v1\n        /*: any*/\n        ,\n        \"concreteType\": \"Product\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"product\",\n        \"plural\": false,\n        \"selections\": [v2\n        /*: any*/\n        , {\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"ProductScreen_product\"\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"User\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"me\",\n        \"plural\": false,\n        \"selections\": [v2\n        /*: any*/\n        , {\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"ProductScreen_me\"\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"SuspensionReason\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"suspensionReasons\",\n        \"plural\": true,\n        \"selections\": [{\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"ProductScreen_suspensionReasons\"\n        }],\n        \"storageKey\": null\n      }],\n      \"type\": \"Query\",\n      \"abstractKey\": null\n    },\n    \"kind\": \"Request\",\n    \"operation\": {\n      \"argumentDefinitions\": v0\n      /*: any*/\n      ,\n      \"kind\": \"Operation\",\n      \"name\": \"ProductScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": v1\n        /*: any*/\n        ,\n        \"concreteType\": \"Product\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"product\",\n        \"plural\": false,\n        \"selections\": [v2\n        /*: any*/\n        , v3\n        /*: any*/\n        , {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"desc\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"price\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"isDeleted\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"isPublished\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"isFeatured\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"isSuspended\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"ProductCondition\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"condition\",\n          \"plural\": false,\n          \"selections\": v4\n          /*: any*/\n          ,\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"Image\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"images\",\n          \"plural\": true,\n          \"selections\": v5\n          /*: any*/\n          ,\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"Category\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"category\",\n          \"plural\": true,\n          \"selections\": [v2\n          /*: any*/\n          , v3\n          /*: any*/\n          ],\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"Unit\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"rentalDuration\",\n          \"plural\": false,\n          \"selections\": v4\n          /*: any*/\n          ,\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"Specification\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"specs\",\n          \"plural\": true,\n          \"selections\": [v2\n          /*: any*/\n          , {\n            \"alias\": null,\n            \"args\": null,\n            \"concreteType\": \"Attribute\",\n            \"kind\": \"LinkedField\",\n            \"name\": \"attribute\",\n            \"plural\": false,\n            \"selections\": [v2\n            /*: any*/\n            , v3\n            /*: any*/\n            , {\n              \"alias\": null,\n              \"args\": null,\n              \"concreteType\": \"Image\",\n              \"kind\": \"LinkedField\",\n              \"name\": \"icon\",\n              \"plural\": false,\n              \"selections\": v5\n              /*: any*/\n              ,\n              \"storageKey\": null\n            }],\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"value\",\n            \"storageKey\": null\n          }],\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"Store\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"store\",\n          \"plural\": false,\n          \"selections\": [v2\n          /*: any*/\n          , v3\n          /*: any*/\n          , {\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"whatsappLink\",\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"merchantId\",\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"isVerified\",\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"concreteType\": \"Image\",\n            \"kind\": \"LinkedField\",\n            \"name\": \"profilePicture\",\n            \"plural\": false,\n            \"selections\": v5\n            /*: any*/\n            ,\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"concreteType\": \"Address\",\n            \"kind\": \"LinkedField\",\n            \"name\": \"address\",\n            \"plural\": false,\n            \"selections\": [{\n              \"alias\": null,\n              \"args\": null,\n              \"concreteType\": \"AdministrativeArea\",\n              \"kind\": \"LinkedField\",\n              \"name\": \"city\",\n              \"plural\": false,\n              \"selections\": v6\n              /*: any*/\n              ,\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"concreteType\": \"AdministrativeArea\",\n              \"kind\": \"LinkedField\",\n              \"name\": \"district\",\n              \"plural\": false,\n              \"selections\": v6\n              /*: any*/\n              ,\n              \"storageKey\": null\n            }],\n            \"storageKey\": null\n          }],\n          \"storageKey\": null\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"User\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"me\",\n        \"plural\": false,\n        \"selections\": [v2\n        /*: any*/\n        , {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"isAdmin\",\n          \"storageKey\": null\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"SuspensionReason\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"suspensionReasons\",\n        \"plural\": true,\n        \"selections\": [v2\n        /*: any*/\n        , {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"title\",\n          \"storageKey\": null\n        }],\n        \"storageKey\": null\n      }]\n    },\n    \"params\": {\n      \"cacheID\": \"0de7a8259167d8fe7444a96b035088ff\",\n      \"id\": null,\n      \"metadata\": {},\n      \"name\": \"ProductScreenQuery\",\n      \"operationKind\": \"query\",\n      \"text\": \"query ProductScreenQuery(\\n  $id: String!\\n) {\\n  product(id: $id) {\\n    id\\n    ...ProductScreen_product\\n  }\\n  me {\\n    id\\n    ...ProductScreen_me\\n  }\\n  suspensionReasons {\\n    ...ProductScreen_suspensionReasons\\n    id\\n  }\\n}\\n\\nfragment ProductScreen_me on User {\\n  id\\n  isAdmin\\n}\\n\\nfragment ProductScreen_product on Product {\\n  id\\n  name\\n  desc\\n  price\\n  isDeleted\\n  isPublished\\n  isFeatured\\n  isSuspended\\n  condition {\\n    display\\n    id\\n  }\\n  images {\\n    id\\n    url\\n  }\\n  category {\\n    id\\n    name\\n  }\\n  rentalDuration {\\n    display\\n    id\\n  }\\n  specs {\\n    id\\n    attribute {\\n      id\\n      name\\n      icon {\\n        id\\n        url\\n      }\\n    }\\n    value\\n  }\\n  store {\\n    id\\n    name\\n    whatsappLink\\n    merchantId\\n    isVerified\\n    profilePicture {\\n      id\\n      url\\n    }\\n    address {\\n      city {\\n        name\\n      }\\n      district {\\n        name\\n      }\\n    }\\n  }\\n}\\n\\nfragment ProductScreen_suspensionReasons on SuspensionReason {\\n  id\\n  title\\n}\\n\"\n    }\n  };\n}(); // prettier-ignore\n\n\nnode\n/*: any*/\n.hash = 'fa54199091f9c264fbdaa90137daf145';\nmodule.exports = node;\n\n//# sourceURL=webpack:///./src/Mobile/Screens/Product/__generated__/ProductScreenQuery.graphql.js?");

/***/ }),

/***/ "./src/Mobile/Screens/Product/index.js":
/*!*********************************************!*\
  !*** ./src/Mobile/Screens/Product/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/FixedAddressBar */ \"./src/Mobile/Components/FixedAddressBar.js\");\nvar _ProductScreenQuery;\n\n\nconst chunk = {\n  path: '/product/:id',\n  components: () => [__webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./ProductScreen */ \"./src/Mobile/Screens/Product/ProductScreen.js\"))],\n  query: _ProductScreenQuery !== void 0 ? _ProductScreenQuery : (_ProductScreenQuery = __webpack_require__(/*! ./__generated__/ProductScreenQuery.graphql */ \"./src/Mobile/Screens/Product/__generated__/ProductScreenQuery.graphql.js\"), _ProductScreenQuery.hash && _ProductScreenQuery.hash !== \"fa54199091f9c264fbdaa90137daf145\" && console.error(\"The definition of 'ProductScreenQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.\"), _ProductScreenQuery),\n  prepareVariables: ({\n    params\n  }) => params,\n  render: ([ProductScreen], data, context) => {\n    return {\n      title: 'Rental App',\n      component: /*#__PURE__*/React.createElement(_Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, /*#__PURE__*/React.createElement(ProductScreen, {\n        product: data.product,\n        me: data.me,\n        suspensionReasons: data.suspensionReasons\n      }))\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (chunk);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/Mobile/Screens/Product/index.js?");

/***/ }),

/***/ "./src/Mobile/Screens/Register/__generated__/RegisterQuery.graphql.js":
/*!****************************************************************************!*\
  !*** ./src/Mobile/Screens/Register/__generated__/RegisterQuery.graphql.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @flow\n */\n\n/* eslint-disable */\n\n/*::\nimport type { ConcreteRequest } from 'relay-runtime';\ntype RegisterScreen_me$ref = any;\nexport type RegisterQueryVariables = {||};\nexport type RegisterQueryResponse = {|\n  +me: ?{|\n    +id: ?string,\n    +$fragmentRefs: RegisterScreen_me$ref,\n  |}\n|};\nexport type RegisterQuery = {|\n  variables: RegisterQueryVariables,\n  response: RegisterQueryResponse,\n|};\n*/\n\n/*\nquery RegisterQuery {\n  me {\n    id\n    ...RegisterScreen_me\n  }\n}\n\nfragment RegisterScreen_me on User {\n  id\n}\n*/\n\nconst node\n/*: ConcreteRequest*/\n= function () {\n  var v0 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"id\",\n    \"storageKey\": null\n  };\n  return {\n    \"fragment\": {\n      \"argumentDefinitions\": [],\n      \"kind\": \"Fragment\",\n      \"metadata\": null,\n      \"name\": \"RegisterQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"User\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"me\",\n        \"plural\": false,\n        \"selections\": [v0\n        /*: any*/\n        , {\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"RegisterScreen_me\"\n        }],\n        \"storageKey\": null\n      }],\n      \"type\": \"Query\",\n      \"abstractKey\": null\n    },\n    \"kind\": \"Request\",\n    \"operation\": {\n      \"argumentDefinitions\": [],\n      \"kind\": \"Operation\",\n      \"name\": \"RegisterQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"User\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"me\",\n        \"plural\": false,\n        \"selections\": [v0\n        /*: any*/\n        ],\n        \"storageKey\": null\n      }]\n    },\n    \"params\": {\n      \"cacheID\": \"55b69e762dec3e88eb24fc7a7c472f9f\",\n      \"id\": null,\n      \"metadata\": {},\n      \"name\": \"RegisterQuery\",\n      \"operationKind\": \"query\",\n      \"text\": \"query RegisterQuery {\\n  me {\\n    id\\n    ...RegisterScreen_me\\n  }\\n}\\n\\nfragment RegisterScreen_me on User {\\n  id\\n}\\n\"\n    }\n  };\n}(); // prettier-ignore\n\n\nnode\n/*: any*/\n.hash = '7bff1360153a135b43cf1523f2a751f3';\nmodule.exports = node;\n\n//# sourceURL=webpack:///./src/Mobile/Screens/Register/__generated__/RegisterQuery.graphql.js?");

/***/ }),

/***/ "./src/Mobile/Screens/Register/index.js":
/*!**********************************************!*\
  !*** ./src/Mobile/Screens/Register/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/FixedAddressBar */ \"./src/Mobile/Components/FixedAddressBar.js\");\nvar _RegisterQuery;\n\n\nconst chunk = {\n  path: '/register',\n  components: () => [Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! ./RegisterScreen */ \"./src/Mobile/Screens/Register/RegisterScreen.js\"))],\n  query: _RegisterQuery !== void 0 ? _RegisterQuery : (_RegisterQuery = __webpack_require__(/*! ./__generated__/RegisterQuery.graphql */ \"./src/Mobile/Screens/Register/__generated__/RegisterQuery.graphql.js\"), _RegisterQuery.hash && _RegisterQuery.hash !== \"7bff1360153a135b43cf1523f2a751f3\" && console.error(\"The definition of 'RegisterQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.\"), _RegisterQuery),\n  // prepareVariables: ({ params }) => params,\n  render: ([RegisterScreen], data, context) => {\n    return {\n      title: 'Rental App',\n      component: /*#__PURE__*/React.createElement(_Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, /*#__PURE__*/React.createElement(RegisterScreen, {\n        me: data === null || data === void 0 ? void 0 : data.me\n      }))\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (chunk);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/Mobile/Screens/Register/index.js?");

/***/ }),

/***/ "./src/Mobile/Screens/Search/index.js":
/*!********************************************!*\
  !*** ./src/Mobile/Screens/Search/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/FixedAddressBar */ \"./src/Mobile/Components/FixedAddressBar.js\");\n// import graphql from 'babel-plugin-relay/macro'\n\nconst chunk = {\n  path: '/search',\n  components: () => [Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, /*! ./SearchScreen */ \"./src/Mobile/Screens/Search/SearchScreen.js\"))],\n  // query: graphql`\n  //   query MainScreenAdminQuery($id: String!) {\n  //     me {\n  //       id,\n  //       ...RequiresSearchContainer_user\n  //     },\n  //     recipe(id: $id) {\n  //       ...MainScreen_recipe\n  //     },\n  //     categories {\n  //       ...MainScreen_categories\n  //     }\n  //   }\n  // `,\n  // prepareVariables: ({ params }) => params,\n  render: ([SearchScreen], data, context) => {\n    return {\n      title: 'Rental App',\n      component: /*#__PURE__*/React.createElement(_Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, /*#__PURE__*/React.createElement(SearchScreen, null))\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (chunk);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/Mobile/Screens/Search/index.js?");

/***/ }),

/***/ "./src/Mobile/Screens/Store/__generated__/StoreScreenQuery.graphql.js":
/*!****************************************************************************!*\
  !*** ./src/Mobile/Screens/Store/__generated__/StoreScreenQuery.graphql.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @flow\n */\n\n/* eslint-disable */\n\n/*::\nimport type { ConcreteRequest } from 'relay-runtime';\ntype StoreScreen_categories$ref = any;\ntype StoreScreen_me$ref = any;\ntype StoreScreen_products$ref = any;\ntype StoreScreen_store$ref = any;\nexport type StoreScreenQueryVariables = {|\n  id: string\n|};\nexport type StoreScreenQueryResponse = {|\n  +me: ?{|\n    +id: ?string,\n    +$fragmentRefs: StoreScreen_me$ref,\n  |},\n  +store: ?{|\n    +id: ?string,\n    +$fragmentRefs: StoreScreen_store$ref,\n  |},\n  +categories: ?$ReadOnlyArray<?{|\n    +$fragmentRefs: StoreScreen_categories$ref\n  |}>,\n  +$fragmentRefs: StoreScreen_products$ref,\n|};\nexport type StoreScreenQuery = {|\n  variables: StoreScreenQueryVariables,\n  response: StoreScreenQueryResponse,\n|};\n*/\n\n/*\nquery StoreScreenQuery(\n  $id: String!\n) {\n  me {\n    id\n    ...StoreScreen_me\n  }\n  store(id: $id) {\n    id\n    ...StoreScreen_store\n  }\n  categories(hasChild: false) {\n    ...StoreScreen_categories\n    id\n  }\n  ...StoreScreen_products_9b7sY\n}\n\nfragment EditAddressView_store on Store {\n  id\n  address {\n    fullAddress\n    lat\n    lng\n  }\n}\n\nfragment ProductItem_product on Product {\n  id\n  name\n  price\n  listingType\n  isPublished\n  isSuspended\n  mainImage {\n    id\n    url\n  }\n  rentalDuration {\n    display\n    id\n  }\n}\n\nfragment SelectCategoryView_categories on Category {\n  id\n  name\n  path\n  ancestors {\n    id\n    name\n  }\n}\n\nfragment StoreScreen_categories on Category {\n  id\n  ...SelectCategoryView_categories\n}\n\nfragment StoreScreen_me on User {\n  id\n}\n\nfragment StoreScreen_products_9b7sY on Query {\n  search(first: 10, q: \"\", storeId: $id) {\n    edges {\n      cursor\n      node {\n        id\n        ...ProductItem_product\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment StoreScreen_store on Store {\n  id\n  name\n  whatsappNumber\n  isVerified\n  merchantId\n  profilePicture {\n    id\n    url\n  }\n  banner {\n    id\n    url\n  }\n  address {\n    fullAddress\n    city {\n      name\n    }\n    district {\n      name\n    }\n  }\n  ...EditAddressView_store\n}\n*/\n\nconst node\n/*: ConcreteRequest*/\n= function () {\n  var v0 = [{\n    \"defaultValue\": null,\n    \"kind\": \"LocalArgument\",\n    \"name\": \"id\"\n  }],\n      v1 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"id\",\n    \"storageKey\": null\n  },\n      v2 = [{\n    \"kind\": \"Variable\",\n    \"name\": \"id\",\n    \"variableName\": \"id\"\n  }],\n      v3 = [{\n    \"kind\": \"Literal\",\n    \"name\": \"hasChild\",\n    \"value\": false\n  }],\n      v4 = {\n    \"kind\": \"Variable\",\n    \"name\": \"storeId\",\n    \"variableName\": \"id\"\n  },\n      v5 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"name\",\n    \"storageKey\": null\n  },\n      v6 = [v1\n  /*: any*/\n  , {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"url\",\n    \"storageKey\": null\n  }],\n      v7 = [v5\n  /*: any*/\n  ],\n      v8 = [{\n    \"kind\": \"Literal\",\n    \"name\": \"first\",\n    \"value\": 10\n  }, {\n    \"kind\": \"Literal\",\n    \"name\": \"q\",\n    \"value\": \"\"\n  }, v4\n  /*: any*/\n  ];\n  return {\n    \"fragment\": {\n      \"argumentDefinitions\": v0\n      /*: any*/\n      ,\n      \"kind\": \"Fragment\",\n      \"metadata\": null,\n      \"name\": \"StoreScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"User\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"me\",\n        \"plural\": false,\n        \"selections\": [v1\n        /*: any*/\n        , {\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"StoreScreen_me\"\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": v2\n        /*: any*/\n        ,\n        \"concreteType\": \"Store\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"store\",\n        \"plural\": false,\n        \"selections\": [v1\n        /*: any*/\n        , {\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"StoreScreen_store\"\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": v3\n        /*: any*/\n        ,\n        \"concreteType\": \"Category\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"categories\",\n        \"plural\": true,\n        \"selections\": [{\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"StoreScreen_categories\"\n        }],\n        \"storageKey\": \"categories(hasChild:false)\"\n      }, {\n        \"args\": [v4\n        /*: any*/\n        ],\n        \"kind\": \"FragmentSpread\",\n        \"name\": \"StoreScreen_products\"\n      }],\n      \"type\": \"Query\",\n      \"abstractKey\": null\n    },\n    \"kind\": \"Request\",\n    \"operation\": {\n      \"argumentDefinitions\": v0\n      /*: any*/\n      ,\n      \"kind\": \"Operation\",\n      \"name\": \"StoreScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": null,\n        \"concreteType\": \"User\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"me\",\n        \"plural\": false,\n        \"selections\": [v1\n        /*: any*/\n        ],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": v2\n        /*: any*/\n        ,\n        \"concreteType\": \"Store\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"store\",\n        \"plural\": false,\n        \"selections\": [v1\n        /*: any*/\n        , v5\n        /*: any*/\n        , {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"whatsappNumber\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"isVerified\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"merchantId\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"Image\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"profilePicture\",\n          \"plural\": false,\n          \"selections\": v6\n          /*: any*/\n          ,\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"Image\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"banner\",\n          \"plural\": false,\n          \"selections\": v6\n          /*: any*/\n          ,\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"Address\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"address\",\n          \"plural\": false,\n          \"selections\": [{\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"fullAddress\",\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"concreteType\": \"AdministrativeArea\",\n            \"kind\": \"LinkedField\",\n            \"name\": \"city\",\n            \"plural\": false,\n            \"selections\": v7\n            /*: any*/\n            ,\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"concreteType\": \"AdministrativeArea\",\n            \"kind\": \"LinkedField\",\n            \"name\": \"district\",\n            \"plural\": false,\n            \"selections\": v7\n            /*: any*/\n            ,\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"lat\",\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"lng\",\n            \"storageKey\": null\n          }],\n          \"storageKey\": null\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": v3\n        /*: any*/\n        ,\n        \"concreteType\": \"Category\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"categories\",\n        \"plural\": true,\n        \"selections\": [v1\n        /*: any*/\n        , v5\n        /*: any*/\n        , {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"path\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"Category\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"ancestors\",\n          \"plural\": true,\n          \"selections\": [v1\n          /*: any*/\n          , v5\n          /*: any*/\n          ],\n          \"storageKey\": null\n        }],\n        \"storageKey\": \"categories(hasChild:false)\"\n      }, {\n        \"alias\": null,\n        \"args\": v8\n        /*: any*/\n        ,\n        \"concreteType\": \"ProductConnection\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"search\",\n        \"plural\": false,\n        \"selections\": [{\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"ProductEdge\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"edges\",\n          \"plural\": true,\n          \"selections\": [{\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"cursor\",\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"concreteType\": \"Product\",\n            \"kind\": \"LinkedField\",\n            \"name\": \"node\",\n            \"plural\": false,\n            \"selections\": [v1\n            /*: any*/\n            , v5\n            /*: any*/\n            , {\n              \"alias\": null,\n              \"args\": null,\n              \"kind\": \"ScalarField\",\n              \"name\": \"price\",\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"kind\": \"ScalarField\",\n              \"name\": \"listingType\",\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"kind\": \"ScalarField\",\n              \"name\": \"isPublished\",\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"kind\": \"ScalarField\",\n              \"name\": \"isSuspended\",\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"concreteType\": \"Image\",\n              \"kind\": \"LinkedField\",\n              \"name\": \"mainImage\",\n              \"plural\": false,\n              \"selections\": v6\n              /*: any*/\n              ,\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"concreteType\": \"Unit\",\n              \"kind\": \"LinkedField\",\n              \"name\": \"rentalDuration\",\n              \"plural\": false,\n              \"selections\": [{\n                \"alias\": null,\n                \"args\": null,\n                \"kind\": \"ScalarField\",\n                \"name\": \"display\",\n                \"storageKey\": null\n              }, v1\n              /*: any*/\n              ],\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"kind\": \"ScalarField\",\n              \"name\": \"__typename\",\n              \"storageKey\": null\n            }],\n            \"storageKey\": null\n          }],\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"PageInfo\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"pageInfo\",\n          \"plural\": false,\n          \"selections\": [{\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"hasNextPage\",\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"endCursor\",\n            \"storageKey\": null\n          }],\n          \"storageKey\": null\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": v8\n        /*: any*/\n        ,\n        \"filters\": [],\n        \"handle\": \"connection\",\n        \"key\": \"StoreScreen_search\",\n        \"kind\": \"LinkedHandle\",\n        \"name\": \"search\"\n      }]\n    },\n    \"params\": {\n      \"cacheID\": \"7f9cc5c9f765b49511fb9a87376d1ce1\",\n      \"id\": null,\n      \"metadata\": {},\n      \"name\": \"StoreScreenQuery\",\n      \"operationKind\": \"query\",\n      \"text\": \"query StoreScreenQuery(\\n  $id: String!\\n) {\\n  me {\\n    id\\n    ...StoreScreen_me\\n  }\\n  store(id: $id) {\\n    id\\n    ...StoreScreen_store\\n  }\\n  categories(hasChild: false) {\\n    ...StoreScreen_categories\\n    id\\n  }\\n  ...StoreScreen_products_9b7sY\\n}\\n\\nfragment EditAddressView_store on Store {\\n  id\\n  address {\\n    fullAddress\\n    lat\\n    lng\\n  }\\n}\\n\\nfragment ProductItem_product on Product {\\n  id\\n  name\\n  price\\n  listingType\\n  isPublished\\n  isSuspended\\n  mainImage {\\n    id\\n    url\\n  }\\n  rentalDuration {\\n    display\\n    id\\n  }\\n}\\n\\nfragment SelectCategoryView_categories on Category {\\n  id\\n  name\\n  path\\n  ancestors {\\n    id\\n    name\\n  }\\n}\\n\\nfragment StoreScreen_categories on Category {\\n  id\\n  ...SelectCategoryView_categories\\n}\\n\\nfragment StoreScreen_me on User {\\n  id\\n}\\n\\nfragment StoreScreen_products_9b7sY on Query {\\n  search(first: 10, q: \\\"\\\", storeId: $id) {\\n    edges {\\n      cursor\\n      node {\\n        id\\n        ...ProductItem_product\\n        __typename\\n      }\\n    }\\n    pageInfo {\\n      hasNextPage\\n      endCursor\\n    }\\n  }\\n}\\n\\nfragment StoreScreen_store on Store {\\n  id\\n  name\\n  whatsappNumber\\n  isVerified\\n  merchantId\\n  profilePicture {\\n    id\\n    url\\n  }\\n  banner {\\n    id\\n    url\\n  }\\n  address {\\n    fullAddress\\n    city {\\n      name\\n    }\\n    district {\\n      name\\n    }\\n  }\\n  ...EditAddressView_store\\n}\\n\"\n    }\n  };\n}(); // prettier-ignore\n\n\nnode\n/*: any*/\n.hash = '2992bda6d9e70b10df578c33df68e616';\nmodule.exports = node;\n\n//# sourceURL=webpack:///./src/Mobile/Screens/Store/__generated__/StoreScreenQuery.graphql.js?");

/***/ }),

/***/ "./src/Mobile/Screens/Store/index.js":
/*!*******************************************!*\
  !*** ./src/Mobile/Screens/Store/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/FixedAddressBar */ \"./src/Mobile/Components/FixedAddressBar.js\");\nvar _StoreScreenQuery;\n\n\nconst chunk = {\n  path: '/store/:id',\n  components: () => [__webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./StoreScreen */ \"./src/Mobile/Screens/Store/StoreScreen.js\"))],\n  query: _StoreScreenQuery !== void 0 ? _StoreScreenQuery : (_StoreScreenQuery = __webpack_require__(/*! ./__generated__/StoreScreenQuery.graphql */ \"./src/Mobile/Screens/Store/__generated__/StoreScreenQuery.graphql.js\"), _StoreScreenQuery.hash && _StoreScreenQuery.hash !== \"2992bda6d9e70b10df578c33df68e616\" && console.error(\"The definition of 'StoreScreenQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.\"), _StoreScreenQuery),\n  prepareVariables: ({\n    params\n  }) => params,\n  render: ([StoreScreen], data, context) => {\n    return {\n      title: 'Rental App',\n      component: /*#__PURE__*/React.createElement(_Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, data && /*#__PURE__*/React.createElement(StoreScreen, {\n        me: data.me,\n        categories: data.categories,\n        store: data.store,\n        products: data\n      }))\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (chunk);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/Mobile/Screens/Store/index.js?");

/***/ }),

/***/ "./src/Mobile/Screens/TermsOfService/__generated__/TermsOfServiceScreenQuery.graphql.js":
/*!**********************************************************************************************!*\
  !*** ./src/Mobile/Screens/TermsOfService/__generated__/TermsOfServiceScreenQuery.graphql.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @flow\n */\n\n/* eslint-disable */\n\n/*::\nimport type { ConcreteRequest } from 'relay-runtime';\ntype TermsOfServiceScreen_posts$ref = any;\nexport type TermsOfServiceScreenQueryVariables = {||};\nexport type TermsOfServiceScreenQueryResponse = {|\n  +posts: ?$ReadOnlyArray<?{|\n    +id: ?string,\n    +$fragmentRefs: TermsOfServiceScreen_posts$ref,\n  |}>\n|};\nexport type TermsOfServiceScreenQuery = {|\n  variables: TermsOfServiceScreenQueryVariables,\n  response: TermsOfServiceScreenQueryResponse,\n|};\n*/\n\n/*\nquery TermsOfServiceScreenQuery {\n  posts(type: terms_of_service, limit: 1) {\n    id\n    ...TermsOfServiceScreen_posts\n  }\n}\n\nfragment TermsOfServiceScreen_posts on Post {\n  id\n  title\n  content\n  updatedAt\n}\n*/\n\nconst node\n/*: ConcreteRequest*/\n= function () {\n  var v0 = [{\n    \"kind\": \"Literal\",\n    \"name\": \"limit\",\n    \"value\": 1\n  }, {\n    \"kind\": \"Literal\",\n    \"name\": \"type\",\n    \"value\": \"terms_of_service\"\n  }],\n      v1 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"id\",\n    \"storageKey\": null\n  };\n  return {\n    \"fragment\": {\n      \"argumentDefinitions\": [],\n      \"kind\": \"Fragment\",\n      \"metadata\": null,\n      \"name\": \"TermsOfServiceScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": v0\n        /*: any*/\n        ,\n        \"concreteType\": \"Post\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"posts\",\n        \"plural\": true,\n        \"selections\": [v1\n        /*: any*/\n        , {\n          \"args\": null,\n          \"kind\": \"FragmentSpread\",\n          \"name\": \"TermsOfServiceScreen_posts\"\n        }],\n        \"storageKey\": \"posts(limit:1,type:\\\"terms_of_service\\\")\"\n      }],\n      \"type\": \"Query\",\n      \"abstractKey\": null\n    },\n    \"kind\": \"Request\",\n    \"operation\": {\n      \"argumentDefinitions\": [],\n      \"kind\": \"Operation\",\n      \"name\": \"TermsOfServiceScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": v0\n        /*: any*/\n        ,\n        \"concreteType\": \"Post\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"posts\",\n        \"plural\": true,\n        \"selections\": [v1\n        /*: any*/\n        , {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"title\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"content\",\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"kind\": \"ScalarField\",\n          \"name\": \"updatedAt\",\n          \"storageKey\": null\n        }],\n        \"storageKey\": \"posts(limit:1,type:\\\"terms_of_service\\\")\"\n      }]\n    },\n    \"params\": {\n      \"cacheID\": \"fee43148b167e4e3ffc70dc3f62474af\",\n      \"id\": null,\n      \"metadata\": {},\n      \"name\": \"TermsOfServiceScreenQuery\",\n      \"operationKind\": \"query\",\n      \"text\": \"query TermsOfServiceScreenQuery {\\n  posts(type: terms_of_service, limit: 1) {\\n    id\\n    ...TermsOfServiceScreen_posts\\n  }\\n}\\n\\nfragment TermsOfServiceScreen_posts on Post {\\n  id\\n  title\\n  content\\n  updatedAt\\n}\\n\"\n    }\n  };\n}(); // prettier-ignore\n\n\nnode\n/*: any*/\n.hash = 'eb4b5184768a31197a4908dd64acf48f';\nmodule.exports = node;\n\n//# sourceURL=webpack:///./src/Mobile/Screens/TermsOfService/__generated__/TermsOfServiceScreenQuery.graphql.js?");

/***/ }),

/***/ "./src/Mobile/Screens/TermsOfService/index.js":
/*!****************************************************!*\
  !*** ./src/Mobile/Screens/TermsOfService/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/FixedAddressBar */ \"./src/Mobile/Components/FixedAddressBar.js\");\nvar _TermsOfServiceScreenQuery;\n\n\nconst chunk = {\n  path: '/terms-of-service',\n  components: () => [__webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ./TermsOfServiceScreen */ \"./src/Mobile/Screens/TermsOfService/TermsOfServiceScreen.js\"))],\n  query: _TermsOfServiceScreenQuery !== void 0 ? _TermsOfServiceScreenQuery : (_TermsOfServiceScreenQuery = __webpack_require__(/*! ./__generated__/TermsOfServiceScreenQuery.graphql */ \"./src/Mobile/Screens/TermsOfService/__generated__/TermsOfServiceScreenQuery.graphql.js\"), _TermsOfServiceScreenQuery.hash && _TermsOfServiceScreenQuery.hash !== \"eb4b5184768a31197a4908dd64acf48f\" && console.error(\"The definition of 'TermsOfServiceScreenQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.\"), _TermsOfServiceScreenQuery),\n  prepareVariables: ({\n    params\n  }) => params,\n  render: ([TermsOfServiceScreen], data, context) => {\n    return {\n      title: 'Rental App',\n      component: /*#__PURE__*/React.createElement(_Components_FixedAddressBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null, /*#__PURE__*/React.createElement(TermsOfServiceScreen, {\n        posts: data === null || data === void 0 ? void 0 : data.posts\n      }))\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (chunk);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/Mobile/Screens/TermsOfService/index.js?");

/***/ }),

/***/ "./src/Mobile/Screens/index.js":
/*!*************************************!*\
  !*** ./src/Mobile/Screens/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main */ \"./src/Mobile/Screens/Main/index.js\");\n/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login */ \"./src/Mobile/Screens/Login/index.js\");\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Search */ \"./src/Mobile/Screens/Search/index.js\");\n/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Category */ \"./src/Mobile/Screens/Category/index.js\");\n/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Register */ \"./src/Mobile/Screens/Register/index.js\");\n/* harmony import */ var _EditProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditProfile */ \"./src/Mobile/Screens/EditProfile/index.js\");\n/* harmony import */ var _CreateStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CreateStore */ \"./src/Mobile/Screens/CreateStore/index.js\");\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Store */ \"./src/Mobile/Screens/Store/index.js\");\n/* harmony import */ var _CreateProduct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CreateProduct */ \"./src/Mobile/Screens/CreateProduct/index.js\");\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Product */ \"./src/Mobile/Screens/Product/index.js\");\n/* harmony import */ var _EditProduct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EditProduct */ \"./src/Mobile/Screens/EditProduct/index.js\");\n/* harmony import */ var _EditProductPhotos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./EditProductPhotos */ \"./src/Mobile/Screens/EditProductPhotos/index.js\");\n/* harmony import */ var _EditStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./EditStore */ \"./src/Mobile/Screens/EditStore/index.js\");\n/* harmony import */ var _FAQ__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FAQ */ \"./src/Mobile/Screens/FAQ/index.js\");\n/* harmony import */ var _PrivacyPolicy__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./PrivacyPolicy */ \"./src/Mobile/Screens/PrivacyPolicy/index.js\");\n/* harmony import */ var _TermsOfService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TermsOfService */ \"./src/Mobile/Screens/TermsOfService/index.js\");\n/* harmony import */ var _AboutUs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./AboutUs */ \"./src/Mobile/Screens/AboutUs/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst screens = [_Main__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _Login__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _Product__WEBPACK_IMPORTED_MODULE_9__[\"default\"], _Search__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _Category__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _Register__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _EditProfile__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _CreateStore__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _Store__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _CreateProduct__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _EditProduct__WEBPACK_IMPORTED_MODULE_10__[\"default\"], _EditProductPhotos__WEBPACK_IMPORTED_MODULE_11__[\"default\"], _EditStore__WEBPACK_IMPORTED_MODULE_12__[\"default\"], _FAQ__WEBPACK_IMPORTED_MODULE_13__[\"default\"], _PrivacyPolicy__WEBPACK_IMPORTED_MODULE_14__[\"default\"], _TermsOfService__WEBPACK_IMPORTED_MODULE_15__[\"default\"], _AboutUs__WEBPACK_IMPORTED_MODULE_16__[\"default\"]];\n/* harmony default export */ __webpack_exports__[\"default\"] = (screens);\n\n//# sourceURL=webpack:///./src/Mobile/Screens/index.js?");

/***/ }),

/***/ "./src/Mobile/createRelay.js":
/*!***********************************!*\
  !*** ./src/Mobile/createRelay.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createRelay; });\n/* harmony import */ var relay_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! relay-runtime */ \"relay-runtime\");\n/* harmony import */ var relay_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(relay_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var subscriptions_transport_ws__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! subscriptions-transport-ws */ \"subscriptions-transport-ws\");\n/* harmony import */ var subscriptions_transport_ws__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(subscriptions_transport_ws__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst {\n  REACT_APP_API_KEY,\n  REACT_APP_API_URL,\n  REACT_APP_SUBSCRIPTION_URL\n} = process.env;\nlet useInitialData = true;\nfunction createRelay(initialData) {\n  function fetchQuery(operation, variables, cacheConfig, uploadables) {\n    if (initialData && useInitialData) {\n      useInitialData = false;\n      return initialData;\n    }\n\n    const method = 'POST';\n    const credentials = 'include';\n    const API_KEY = REACT_APP_API_KEY;\n    let request;\n\n    if (uploadables) {\n      if (!window.FormData) throw new Error('Uploading files without `FormData` not supported.');\n      const formData = new FormData();\n      formData.append('query', operation.text);\n      formData.append('variables', JSON.stringify(variables));\n\n      for (const uploadable in uploadables) {\n        if (Object.prototype.hasOwnProperty.call(uploadables, uploadable)) formData.append(uploadable, uploadables[uploadable]);\n      }\n\n      request = {\n        method: method,\n        credentials: credentials,\n        body: formData,\n        headers: {\n          'Authorization': API_KEY\n        }\n      };\n    } else {\n      request = {\n        method: method,\n        credentials: credentials,\n        headers: {\n          'content-type': 'application/json',\n          'Authorization': API_KEY\n        },\n        body: JSON.stringify({\n          query: operation.text,\n          variables\n        })\n      };\n    }\n\n    return fetch(REACT_APP_API_URL, request).then(response => {\n      return response.json();\n    });\n  }\n\n  function setupSubscription(config, variables, cacheConfig, observer) {\n    const subscriptionsEndpoint = REACT_APP_SUBSCRIPTION_URL;\n    let query = config.text;\n    let {\n      onNext,\n      onError,\n      onCompleted\n    } = observer;\n    let subscriptionClient = new subscriptions_transport_ws__WEBPACK_IMPORTED_MODULE_1__[\"SubscriptionClient\"](subscriptionsEndpoint, {\n      reconnect: true\n    });\n    subscriptionClient.request({\n      query,\n      variables\n    }).subscribe(onNext, onError, onCompleted);\n  }\n\n  const source = new relay_runtime__WEBPACK_IMPORTED_MODULE_0__[\"RecordSource\"](window.records);\n  const store = new relay_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Store\"](source);\n  const network = relay_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Network\"].create(fetchQuery, setupSubscription); // see note below\n\n  const handlerProvider = null;\n  const environment = new relay_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Environment\"]({\n    handlerProvider,\n    // Can omit.\n    network,\n    store\n  });\n  return environment;\n}\n\n//# sourceURL=webpack:///./src/Mobile/createRelay.js?");

/***/ }),

/***/ "./src/Mobile/router.js":
/*!******************************!*\
  !*** ./src/Mobile/router.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var universal_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal-router */ \"universal-router\");\n/* harmony import */ var universal_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(universal_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Screens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Screens */ \"./src/Mobile/Screens/index.js\");\n // import ErrorScreen from './Screens/ErrorScreen';\n\n\nconst routes = [// {\n//   path: '',\n//   children: () => import(/* webpackChunkName: 'admin' */ './Screens'),\n// },\n..._Screens__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n\nfunction resolveRoute(ctx) {\n  const {\n    route,\n    params,\n    fetchQuery,\n    next\n  } = ctx; // Allow to load routes on demand\n\n  if (typeof route.children === 'function') {\n    return route.children().then(x => {\n      route.children = x.default;\n      return next();\n    });\n  }\n\n  if (!route.render) {\n    return next();\n  } // Start fetching data from GraphQL API\n  //  const variables = route.variables ? route.variables(params, ctx) : params;\n\n\n  const variables = route.prepareVariables ? route.prepareVariables({\n    params,\n    query: ctx.query\n  }) : {};\n  const dataPromise = route.query ? fetchQuery(route.query, variables) : null; // Start downloading missing JavaScript chunks\n\n  const componentsPromise = route.components ? route.components().map(x => x.then(x => x.default)) : [];\n  return Promise.all([...componentsPromise, dataPromise]).then(components => {\n    const data = components.pop();\n    const result = route.render(components, data, { ...ctx,\n      variables\n    });\n    return result ? { ...result,\n      data\n    } : next();\n  });\n} // function errorHandler(error) {\n//   if ([401, 403].includes(error.code)) {\n//     return { redirect: `/login?error=${error.message}` };\n//   }\n//   return {\n//     title: error.code === '404' ? 'Page not found' : 'System Error',\n//     status: error.code || 404,\n//     component: <ErrorScreen error={error} />,\n//   };\n// }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new universal_router__WEBPACK_IMPORTED_MODULE_0___default.a(routes, {\n  resolveRoute // errorHandler,\n\n}));\n\n//# sourceURL=webpack:///./src/Mobile/router.js?");

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"32eda6c9f53bb0bb63207230a3220d57.svg\");\n\n//# sourceURL=webpack:///./src/logo.svg?");

/***/ }),

/***/ "@brainhubeu/react-carousel":
/*!*********************************************!*\
  !*** external "@brainhubeu/react-carousel" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@brainhubeu/react-carousel\");\n\n//# sourceURL=webpack:///external_%22@brainhubeu/react-carousel%22?");

/***/ }),

/***/ "@brainhubeu/react-carousel/lib/style.css":
/*!***********************************************************!*\
  !*** external "@brainhubeu/react-carousel/lib/style.css" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@brainhubeu/react-carousel/lib/style.css\");\n\n//# sourceURL=webpack:///external_%22@brainhubeu/react-carousel/lib/style.css%22?");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core%22?");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons%22?");

/***/ }),

/***/ "@material-ui/lab":
/*!***********************************!*\
  !*** external "@material-ui/lab" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/lab\");\n\n//# sourceURL=webpack:///external_%22@material-ui/lab%22?");

/***/ }),

/***/ "@material-ui/lab/Autocomplete":
/*!************************************************!*\
  !*** external "@material-ui/lab/Autocomplete" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/lab/Autocomplete\");\n\n//# sourceURL=webpack:///external_%22@material-ui/lab/Autocomplete%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"history\");\n\n//# sourceURL=webpack:///external_%22history%22?");

/***/ }),

/***/ "imtool":
/*!*************************!*\
  !*** external "imtool" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"imtool\");\n\n//# sourceURL=webpack:///external_%22imtool%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"query-string\");\n\n//# sourceURL=webpack:///external_%22query-string%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-bottom-scroll-listener":
/*!***********************************************!*\
  !*** external "react-bottom-scroll-listener" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bottom-scroll-listener\");\n\n//# sourceURL=webpack:///external_%22react-bottom-scroll-listener%22?");

/***/ }),

/***/ "react-countdown":
/*!**********************************!*\
  !*** external "react-countdown" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-countdown\");\n\n//# sourceURL=webpack:///external_%22react-countdown%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-dropzone":
/*!*********************************!*\
  !*** external "react-dropzone" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dropzone\");\n\n//# sourceURL=webpack:///external_%22react-dropzone%22?");

/***/ }),

/***/ "react-google-maps":
/*!************************************!*\
  !*** external "react-google-maps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-google-maps\");\n\n//# sourceURL=webpack:///external_%22react-google-maps%22?");

/***/ }),

/***/ "react-icons/bi":
/*!*********************************!*\
  !*** external "react-icons/bi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/bi\");\n\n//# sourceURL=webpack:///external_%22react-icons/bi%22?");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/io\");\n\n//# sourceURL=webpack:///external_%22react-icons/io%22?");

/***/ }),

/***/ "react-icons/io5":
/*!**********************************!*\
  !*** external "react-icons/io5" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/io5\");\n\n//# sourceURL=webpack:///external_%22react-icons/io5%22?");

/***/ }),

/***/ "react-modal-sheet":
/*!************************************!*\
  !*** external "react-modal-sheet" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-modal-sheet\");\n\n//# sourceURL=webpack:///external_%22react-modal-sheet%22?");

/***/ }),

/***/ "react-number-format":
/*!**************************************!*\
  !*** external "react-number-format" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-number-format\");\n\n//# sourceURL=webpack:///external_%22react-number-format%22?");

/***/ }),

/***/ "react-relay":
/*!******************************!*\
  !*** external "react-relay" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-relay\");\n\n//# sourceURL=webpack:///external_%22react-relay%22?");

/***/ }),

/***/ "relay-runtime":
/*!********************************!*\
  !*** external "relay-runtime" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"relay-runtime\");\n\n//# sourceURL=webpack:///external_%22relay-runtime%22?");

/***/ }),

/***/ "subscriptions-transport-ws":
/*!*********************************************!*\
  !*** external "subscriptions-transport-ws" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"subscriptions-transport-ws\");\n\n//# sourceURL=webpack:///external_%22subscriptions-transport-ws%22?");

/***/ }),

/***/ "universal-router":
/*!***********************************!*\
  !*** external "universal-router" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"universal-router\");\n\n//# sourceURL=webpack:///external_%22universal-router%22?");

/***/ }),

/***/ "use-debounce":
/*!*******************************!*\
  !*** external "use-debounce" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"use-debounce\");\n\n//# sourceURL=webpack:///external_%22use-debounce%22?");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");\n\n//# sourceURL=webpack:///external_%22validator%22?");

/***/ })

/******/ });