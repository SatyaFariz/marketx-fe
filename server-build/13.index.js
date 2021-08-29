exports.ids = [13];
exports.modules = {

/***/ "./src/Mobile/Components/Link.js":
/*!***************************************!*\
  !*** ./src/Mobile/Components/Link.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppContext */ \"./src/Mobile/AppContext.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nfunction isLeftClickEvent(event) {\n  return event.button === 0;\n}\n\nfunction isModifiedEvent(event) {\n  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);\n}\n\nclass Link extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.handleClick = event => {\n      if (this.props.onClick) {\n        this.props.onClick(event);\n      }\n\n      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {\n        return;\n      }\n\n      if (event.defaultPrevented === true) {\n        return;\n      }\n\n      event.preventDefault();\n      const href = event.currentTarget.getAttribute('href');\n      if (this.props.replace) this.context.history.replace(href);else this.context.history.push(href);\n    }, _temp;\n  }\n\n  render() {\n    // eslint-disable-next-line jsx-a11y/anchor-has-content\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", _extends({}, this.props, {\n      onClick: this.handleClick\n    }));\n  }\n\n}\n\nLink.propTypes = {\n  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\nLink.contextType = _AppContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Link);\n\n//# sourceURL=webpack:///./src/Mobile/Components/Link.js?");

/***/ }),

/***/ "./src/Mobile/Screens/Login/LoginScreen.js":
/*!*************************************************!*\
  !*** ./src/Mobile/Screens/Login/LoginScreen.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Constants */ \"./src/Mobile/Constants/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useAppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useAppContext */ \"./src/Mobile/hooks/useAppContext.js\");\n/* harmony import */ var _mutations_SendOtpCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../mutations/SendOtpCode */ \"./src/mutations/SendOtpCode.js\");\n/* harmony import */ var _Components_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/Link */ \"./src/Mobile/Components/Link.js\");\n/* harmony import */ var _Constants_Color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Constants/Color */ \"./src/Mobile/Constants/Color.js\");\n/* harmony import */ var _Constants_Color__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Constants_Color__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Components_OTPView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Components/OTPView */ \"./src/Mobile/Components/OTPView.js\");\n/* harmony import */ var _mutations_Login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../mutations/Login */ \"./src/mutations/Login.js\");\n/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-relay */ \"react-relay\");\n/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_relay__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Components/Button */ \"./src/Mobile/Components/Button.js\");\n/* harmony import */ var _app_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../app.json */ \"./src/app.json\");\nvar _app_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../app.json */ \"./src/app.json\", 1);\nvar _LoginScreen_me;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst Component = props => {\n  const {\n    me\n  } = props;\n\n  const _isMounted = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(true);\n\n  const {\n    history,\n    environment,\n    resetEnvironment,\n    queryParams\n  } = Object(_hooks_useAppContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  const [mobileNumber, setPhoneNumber] = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('');\n  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false);\n  const [sendingCode, setSendingCode] = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false);\n  const [expiry, setExpiry] = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null);\n  const [showOTPView, setShowOTPView] = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false);\n\n  const handleChange = e => {\n    const allowedChars = '1234567890';\n    const {\n      value\n    } = e.target;\n    if (value.length && !value.startsWith('0')) return;\n    if (value.length && !allowedChars.includes(value[value.length - 1])) return;\n    setPhoneNumber(value);\n  };\n\n  const sendOtpCode = () => {\n    if (mobileNumber.length > 0 && !sendingCode) {\n      setSendingCode(true);\n      Object(_mutations_SendOtpCode__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(environment, {\n        mobileNumber,\n        action: 'login'\n      }, (payload, error) => {\n        if (error) {\n          console.log(error);\n        } else if (payload) {\n          const {\n            hasError,\n            message\n          } = payload.actionInfo;\n\n          if (hasError) {\n            alert(message);\n          } else {\n            const {\n              expiry\n            } = payload;\n            setExpiry(expiry);\n            setShowOTPView(true);\n          }\n        }\n\n        _isMounted.current && setSendingCode(false);\n      });\n    }\n  };\n\n  const login = code => {\n    if (!loading) {\n      setLoading(true);\n      Object(_mutations_Login__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(environment, {\n        loginId: mobileNumber,\n        password: code\n      }, (payload, error) => {\n        if (error) {\n          console.log(error);\n        } else if (payload) {\n          const {\n            hasError,\n            message\n          } = payload.actionInfo;\n          alert(message);\n\n          if (!hasError) {\n            var _queryParams$redirect;\n\n            // do sth\n            history.replace((_queryParams$redirect = queryParams === null || queryParams === void 0 ? void 0 : queryParams.redirect) !== null && _queryParams$redirect !== void 0 ? _queryParams$redirect : '/');\n            resetEnvironment();\n          }\n        }\n\n        _isMounted.current && setLoading(false);\n      });\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    return () => _isMounted.current = false;\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    if (me) {\n      history.replace('/');\n    }\n  }, [me, history]);\n  if (me) return null;\n  return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      paddingTop: 20,\n      paddingBottom: 20,\n      paddingLeft: 30,\n      paddingRight: 30\n    }\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    alt: \"twitter\",\n    src: _Constants__WEBPACK_IMPORTED_MODULE_0__[\"LOGO_URL\"],\n    style: {\n      height: 38,\n      width: 38\n    }\n  }), /*#__PURE__*/React.createElement(\"h1\", {\n    style: {\n      marginTop: 30,\n      marginBottom: 10\n    }\n  }, \"Log in to \", _app_json__WEBPACK_IMPORTED_MODULE_11__.name), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    variant: \"outlined\",\n    label: \"Mobile Number\",\n    fullWidth: true,\n    disabled: loading || sendingCode,\n    style: {\n      marginTop: 10,\n      marginBottom: 10\n    },\n    onChange: handleChange,\n    value: mobileNumber,\n    placeholder: \"Ex: 082322343005\",\n    inputProps: {\n      pattern: \"[0-9]*\",\n      type: \"text\",\n      inputMode: \"numeric\"\n    }\n  }), /*#__PURE__*/React.createElement(_Components_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    label: \"Masuk\",\n    thick: true,\n    style: {\n      marginTop: 10,\n      marginBottom: 10\n    },\n    fullWidth: true,\n    onClick: sendOtpCode,\n    loading: sendingCode || loading,\n    disabled: mobileNumber.length < 12\n  }), /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'center',\n      alignItems: 'center',\n      marginTop: 20\n    }\n  }, /*#__PURE__*/React.createElement(_Components_Link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    href: queryParams !== null && queryParams !== void 0 && queryParams.redirect ? `/register?redirect=${queryParams.redirect}` : '/register',\n    style: {\n      color: _Constants_Color__WEBPACK_IMPORTED_MODULE_6___default.a.link\n    }\n  }, /*#__PURE__*/React.createElement(\"span\", null, \"Create a new account\")))), showOTPView && /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      position: 'absolute',\n      backgroundColor: 'white',\n      left: 0,\n      top: 0,\n      width: '100%',\n      height: '100%',\n      zIndex: 999\n    }\n  }, /*#__PURE__*/React.createElement(_Components_OTPView__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    onSubmit: login,\n    expiry: expiry,\n    loading: false,\n    mobileNumber: mobileNumber,\n    resend: sendOtpCode,\n    sending: sendingCode,\n    onClose: () => setShowOTPView(false)\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_relay__WEBPACK_IMPORTED_MODULE_9__[\"createFragmentContainer\"])(Component, {\n  me: _LoginScreen_me !== void 0 ? _LoginScreen_me : (_LoginScreen_me = __webpack_require__(/*! ./__generated__/LoginScreen_me.graphql */ \"./src/Mobile/Screens/Login/__generated__/LoginScreen_me.graphql.js\"), _LoginScreen_me.hash && _LoginScreen_me.hash !== \"1304dea782979a639ffc201dcf2cf333\" && console.error(\"The definition of 'LoginScreen_me' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.\"), _LoginScreen_me)\n}));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/Mobile/Screens/Login/LoginScreen.js?");

/***/ }),

/***/ "./src/Mobile/Screens/Login/__generated__/LoginScreen_me.graphql.js":
/*!**************************************************************************!*\
  !*** ./src/Mobile/Screens/Login/__generated__/LoginScreen_me.graphql.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @flow\n */\n\n/* eslint-disable */\n\n/*::\nimport type { ReaderFragment } from 'relay-runtime';\nimport type { FragmentReference } from \"relay-runtime\";\ndeclare export opaque type LoginScreen_me$ref: FragmentReference;\ndeclare export opaque type LoginScreen_me$fragmentType: LoginScreen_me$ref;\nexport type LoginScreen_me = {|\n  +id: ?string,\n  +$refType: LoginScreen_me$ref,\n|};\nexport type LoginScreen_me$data = LoginScreen_me;\nexport type LoginScreen_me$key = {\n  +$data?: LoginScreen_me$data,\n  +$fragmentRefs: LoginScreen_me$ref,\n  ...\n};\n*/\n\nconst node\n/*: ReaderFragment*/\n= {\n  \"argumentDefinitions\": [],\n  \"kind\": \"Fragment\",\n  \"metadata\": null,\n  \"name\": \"LoginScreen_me\",\n  \"selections\": [{\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"id\",\n    \"storageKey\": null\n  }],\n  \"type\": \"User\",\n  \"abstractKey\": null\n}; // prettier-ignore\n\nnode\n/*: any*/\n.hash = '1304dea782979a639ffc201dcf2cf333';\nmodule.exports = node;\n\n//# sourceURL=webpack:///./src/Mobile/Screens/Login/__generated__/LoginScreen_me.graphql.js?");

/***/ }),

/***/ "./src/app.json":
/*!**********************!*\
  !*** ./src/app.json ***!
  \**********************/
/*! exports provided: name, year_founded, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"Amazon\\\",\\\"year_founded\\\":2021}\");\n\n//# sourceURL=webpack:///./src/app.json?");

/***/ }),

/***/ "./src/mutations/Login.js":
/*!********************************!*\
  !*** ./src/mutations/Login.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-relay */ \"react-relay\");\n/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_relay__WEBPACK_IMPORTED_MODULE_0__);\nvar _LoginMutation;\n\n\nconst mutation = _LoginMutation !== void 0 ? _LoginMutation : (_LoginMutation = __webpack_require__(/*! ./__generated__/LoginMutation.graphql */ \"./src/mutations/__generated__/LoginMutation.graphql.js\"), _LoginMutation.hash && _LoginMutation.hash !== \"5a081043fac2e9015f54dd4433d23ec1\" && console.error(\"The definition of 'LoginMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.\"), _LoginMutation);\n\nconst Login = (environment, variables, callback) => {\n  Object(react_relay__WEBPACK_IMPORTED_MODULE_0__[\"commitMutation\"])(environment, {\n    mutation,\n    variables,\n    onCompleted: (res, err) => {\n      if (typeof callback === 'function') {\n        if (err) callback(null, err);else {\n          const payload = res.login;\n          callback(payload, null);\n        }\n      }\n    },\n    onError: err => console.log(err)\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n//# sourceURL=webpack:///./src/mutations/Login.js?");

/***/ }),

/***/ "./src/mutations/__generated__/LoginMutation.graphql.js":
/*!**************************************************************!*\
  !*** ./src/mutations/__generated__/LoginMutation.graphql.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @flow\n */\n\n/* eslint-disable */\n\n/*::\nimport type { ConcreteRequest } from 'relay-runtime';\nexport type LoginMutationVariables = {|\n  loginId: string,\n  password: string,\n|};\nexport type LoginMutationResponse = {|\n  +login: ?{|\n    +actionInfo: ?{|\n      +hasError: ?boolean,\n      +message: ?string,\n    |}\n  |}\n|};\nexport type LoginMutation = {|\n  variables: LoginMutationVariables,\n  response: LoginMutationResponse,\n|};\n*/\n\n/*\nmutation LoginMutation(\n  $loginId: String!\n  $password: String!\n) {\n  login(loginId: $loginId, password: $password) {\n    actionInfo {\n      hasError\n      message\n    }\n  }\n}\n*/\n\nconst node\n/*: ConcreteRequest*/\n= function () {\n  var v0 = [{\n    \"defaultValue\": null,\n    \"kind\": \"LocalArgument\",\n    \"name\": \"loginId\"\n  }, {\n    \"defaultValue\": null,\n    \"kind\": \"LocalArgument\",\n    \"name\": \"password\"\n  }],\n      v1 = [{\n    \"alias\": null,\n    \"args\": [{\n      \"kind\": \"Variable\",\n      \"name\": \"loginId\",\n      \"variableName\": \"loginId\"\n    }, {\n      \"kind\": \"Variable\",\n      \"name\": \"password\",\n      \"variableName\": \"password\"\n    }],\n    \"concreteType\": \"ActionOnUserPayload\",\n    \"kind\": \"LinkedField\",\n    \"name\": \"login\",\n    \"plural\": false,\n    \"selections\": [{\n      \"alias\": null,\n      \"args\": null,\n      \"concreteType\": \"ActionInfo\",\n      \"kind\": \"LinkedField\",\n      \"name\": \"actionInfo\",\n      \"plural\": false,\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": null,\n        \"kind\": \"ScalarField\",\n        \"name\": \"hasError\",\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": null,\n        \"kind\": \"ScalarField\",\n        \"name\": \"message\",\n        \"storageKey\": null\n      }],\n      \"storageKey\": null\n    }],\n    \"storageKey\": null\n  }];\n  return {\n    \"fragment\": {\n      \"argumentDefinitions\": v0\n      /*: any*/\n      ,\n      \"kind\": \"Fragment\",\n      \"metadata\": null,\n      \"name\": \"LoginMutation\",\n      \"selections\": v1\n      /*: any*/\n      ,\n      \"type\": \"Mutation\",\n      \"abstractKey\": null\n    },\n    \"kind\": \"Request\",\n    \"operation\": {\n      \"argumentDefinitions\": v0\n      /*: any*/\n      ,\n      \"kind\": \"Operation\",\n      \"name\": \"LoginMutation\",\n      \"selections\": v1\n      /*: any*/\n\n    },\n    \"params\": {\n      \"cacheID\": \"204639d0b6940d423cc0e49663498981\",\n      \"id\": null,\n      \"metadata\": {},\n      \"name\": \"LoginMutation\",\n      \"operationKind\": \"mutation\",\n      \"text\": \"mutation LoginMutation(\\n  $loginId: String!\\n  $password: String!\\n) {\\n  login(loginId: $loginId, password: $password) {\\n    actionInfo {\\n      hasError\\n      message\\n    }\\n  }\\n}\\n\"\n    }\n  };\n}(); // prettier-ignore\n\n\nnode\n/*: any*/\n.hash = '5a081043fac2e9015f54dd4433d23ec1';\nmodule.exports = node;\n\n//# sourceURL=webpack:///./src/mutations/__generated__/LoginMutation.graphql.js?");

/***/ })

};;