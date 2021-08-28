exports.ids = [12];
exports.modules = {

/***/ "./src/Mobile/Components/BackButton.js":
/*!*********************************************!*\
  !*** ./src/Mobile/Components/BackButton.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io5 */ \"react-icons/io5\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useAppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useAppContext */ \"./src/Mobile/hooks/useAppContext.js\");\n\n\n\n\nconst Component = ({\n  onClick,\n  color\n}) => {\n  const {\n    history\n  } = Object(_hooks_useAppContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n  const goBack = () => {\n    if (history.length <= 2) {\n      history.replace('/');\n    } else if (onClick) {\n      onClick();\n    } else {\n      history.goBack();\n    }\n  };\n\n  return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__[\"IconButton\"], {\n    onClick: goBack,\n    style: {\n      zIndex: 1\n    }\n  }, /*#__PURE__*/React.createElement(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__[\"IoChevronBackSharp\"], {\n    size: 32,\n    color: color || \"black\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/Mobile/Components/BackButton.js?");

/***/ }),

/***/ "./src/Mobile/Components/Link.js":
/*!***************************************!*\
  !*** ./src/Mobile/Components/Link.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppContext */ \"./src/Mobile/AppContext.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nfunction isLeftClickEvent(event) {\n  return event.button === 0;\n}\n\nfunction isModifiedEvent(event) {\n  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);\n}\n\nclass Link extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.handleClick = event => {\n      if (this.props.onClick) {\n        this.props.onClick(event);\n      }\n\n      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {\n        return;\n      }\n\n      if (event.defaultPrevented === true) {\n        return;\n      }\n\n      event.preventDefault();\n      const href = event.currentTarget.getAttribute('href');\n      if (this.props.replace) this.context.history.replace(href);else this.context.history.push(href);\n    }, _temp;\n  }\n\n  render() {\n    // eslint-disable-next-line jsx-a11y/anchor-has-content\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", _extends({}, this.props, {\n      onClick: this.handleClick\n    }));\n  }\n\n}\n\nLink.propTypes = {\n  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\nLink.contextType = _AppContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Link);\n\n//# sourceURL=webpack:///./src/Mobile/Components/Link.js?");

/***/ }),

/***/ "./src/Mobile/Constants/index.js":
/*!***************************************!*\
  !*** ./src/Mobile/Constants/index.js ***!
  \***************************************/
/*! exports provided: HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, DIVIDER_COLOR, LOGO_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HEADER_HEIGHT\", function() { return HEADER_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HEADER_BORDER_BOTTOM_COLOR\", function() { return HEADER_BORDER_BOTTOM_COLOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DIVIDER_COLOR\", function() { return DIVIDER_COLOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGO_URL\", function() { return LOGO_URL; });\nconst HEADER_HEIGHT = 56;\nconst HEADER_BORDER_BOTTOM_COLOR = 'rgb(207, 217, 222)';\nconst DIVIDER_COLOR = 'rgb(239, 243, 244)';\nconst LOGO_URL = 'https://res.cloudinary.com/tuanrumah/image/upload/v1627058439/rental_app/twitter-logo.jpg';\n\n//# sourceURL=webpack:///./src/Mobile/Constants/index.js?");

/***/ }),

/***/ "./src/Mobile/Screens/FAQ/FAQScreen.js":
/*!*********************************************!*\
  !*** ./src/Mobile/Screens/FAQ/FAQScreen.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-relay */ \"react-relay\");\n/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_relay__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Constants */ \"./src/Mobile/Constants/index.js\");\n/* harmony import */ var _Components_BackButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/BackButton */ \"./src/Mobile/Components/BackButton.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/Link */ \"./src/Mobile/Components/Link.js\");\n/* harmony import */ var _hooks_useAppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useAppContext */ \"./src/Mobile/hooks/useAppContext.js\");\nvar _FAQScreen_posts;\n\n\n\n\n\n\n\n\nconst Component = props => {\n  const {\n    posts\n  } = props;\n  const {\n    queryParams\n  } = Object(_hooks_useAppContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  const i = queryParams.question ? parseInt(queryParams.question) : null;\n  return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      height: _Constants__WEBPACK_IMPORTED_MODULE_1__[\"HEADER_HEIGHT\"],\n      backgroundColor: 'white',\n      width: '100%',\n      display: 'flex',\n      alignItems: 'center',\n      position: 'sticky',\n      top: 0,\n      zIndex: 9999,\n      borderBottom: `1px solid ${_Constants__WEBPACK_IMPORTED_MODULE_1__[\"HEADER_BORDER_BOTTOM_COLOR\"]}`\n    }\n  }, /*#__PURE__*/React.createElement(_Components_BackButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      position: 'absolute',\n      height: '100%',\n      width: '100%',\n      display: 'flex',\n      justifyContent: 'center',\n      alignItems: 'center',\n      zIndex: 0\n    }\n  }, /*#__PURE__*/React.createElement(\"h1\", {\n    style: {\n      margin: 0,\n      fontSize: 20,\n      fontWeight: 500,\n      textAlign: 'center'\n    }\n  }, \"FAQ\"))), typeof i === 'number' ? /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      padding: '20px 15px'\n    }\n  }, /*#__PURE__*/React.createElement(\"h4\", {\n    style: {\n      margin: 0,\n      marginBottom: 20\n    }\n  }, posts[i].title), /*#__PURE__*/React.createElement(\"div\", {\n    dangerouslySetInnerHTML: {\n      __html: posts[i].content\n    }\n  })) : /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"List\"], null, posts.map((post, i) => {\n    return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"ListItem\"], {\n      component: _Components_Link__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n      button: true,\n      href: `/faq?question=${i}`,\n      key: post.id\n    }, /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"ListItemText\"], {\n      primary: post.title\n    }));\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_relay__WEBPACK_IMPORTED_MODULE_0__[\"createFragmentContainer\"])(Component, {\n  posts: _FAQScreen_posts !== void 0 ? _FAQScreen_posts : (_FAQScreen_posts = __webpack_require__(/*! ./__generated__/FAQScreen_posts.graphql */ \"./src/Mobile/Screens/FAQ/__generated__/FAQScreen_posts.graphql.js\"), _FAQScreen_posts.hash && _FAQScreen_posts.hash !== \"46ced8cb6154f2894966cb2bfedd32ac\" && console.error(\"The definition of 'FAQScreen_posts' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.\"), _FAQScreen_posts)\n}));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/Mobile/Screens/FAQ/FAQScreen.js?");

/***/ }),

/***/ "./src/Mobile/Screens/FAQ/__generated__/FAQScreen_posts.graphql.js":
/*!*************************************************************************!*\
  !*** ./src/Mobile/Screens/FAQ/__generated__/FAQScreen_posts.graphql.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @flow\n */\n\n/* eslint-disable */\n\n/*::\nimport type { ReaderFragment } from 'relay-runtime';\nimport type { FragmentReference } from \"relay-runtime\";\ndeclare export opaque type FAQScreen_posts$ref: FragmentReference;\ndeclare export opaque type FAQScreen_posts$fragmentType: FAQScreen_posts$ref;\nexport type FAQScreen_posts = $ReadOnlyArray<{|\n  +id: ?string,\n  +title: ?string,\n  +content: ?string,\n  +$refType: FAQScreen_posts$ref,\n|}>;\nexport type FAQScreen_posts$data = FAQScreen_posts;\nexport type FAQScreen_posts$key = $ReadOnlyArray<{\n  +$data?: FAQScreen_posts$data,\n  +$fragmentRefs: FAQScreen_posts$ref,\n  ...\n}>;\n*/\n\nconst node\n/*: ReaderFragment*/\n= {\n  \"argumentDefinitions\": [],\n  \"kind\": \"Fragment\",\n  \"metadata\": {\n    \"plural\": true\n  },\n  \"name\": \"FAQScreen_posts\",\n  \"selections\": [{\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"id\",\n    \"storageKey\": null\n  }, {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"title\",\n    \"storageKey\": null\n  }, {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"content\",\n    \"storageKey\": null\n  }],\n  \"type\": \"Post\",\n  \"abstractKey\": null\n}; // prettier-ignore\n\nnode\n/*: any*/\n.hash = '46ced8cb6154f2894966cb2bfedd32ac';\nmodule.exports = node;\n\n//# sourceURL=webpack:///./src/Mobile/Screens/FAQ/__generated__/FAQScreen_posts.graphql.js?");

/***/ }),

/***/ "./src/Mobile/hooks/useAppContext.js":
/*!*******************************************!*\
  !*** ./src/Mobile/hooks/useAppContext.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AppContext */ \"./src/Mobile/AppContext.js\");\n\n\n\nconst useAppContext = () => Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_AppContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useAppContext);\n\n//# sourceURL=webpack:///./src/Mobile/hooks/useAppContext.js?");

/***/ })

};;