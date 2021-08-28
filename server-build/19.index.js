exports.ids = [19];
exports.modules = {

/***/ "./src/Mobile/Screens/Search/SearchScreen.js":
/*!***************************************************!*\
  !*** ./src/Mobile/Screens/Search/SearchScreen.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Constants */ \"./src/Mobile/Constants/index.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io5 */ \"react-icons/io5\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-relay */ \"react-relay\");\n/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_relay__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_useAppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useAppContext */ \"./src/Mobile/hooks/useAppContext.js\");\n/* harmony import */ var _SearchResultsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchResultsList */ \"./src/Mobile/Screens/Search/SearchResultsList.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! use-debounce */ \"use-debounce\");\n/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(use_debounce__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Components_BackButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Components/BackButton */ \"./src/Mobile/Components/BackButton.js\");\nvar _SearchScreenQuery;\n\n\n\n\n\n\n\n\n\n\nconst query = _SearchScreenQuery !== void 0 ? _SearchScreenQuery : (_SearchScreenQuery = __webpack_require__(/*! ./__generated__/SearchScreenQuery.graphql */ \"./src/Mobile/Screens/Search/__generated__/SearchScreenQuery.graphql.js\"), _SearchScreenQuery.hash && _SearchScreenQuery.hash !== \"77f8f8118e65db3bae490e5de9b3adaa\" && console.error(\"The definition of 'SearchScreenQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.\"), _SearchScreenQuery);\n\nconst Component = props => {\n  const {\n    environment,\n    history,\n    queryParams\n  } = Object(_hooks_useAppContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  const [searchTerm, setSearchTerm] = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(queryParams.q || '');\n  const [searchTermDebounced] = Object(use_debounce__WEBPACK_IMPORTED_MODULE_7__[\"useDebounce\"])(searchTerm, 500);\n  Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useEffect\"])(() => {\n    history.replace(`/search?q=${searchTermDebounced}`);\n  }, [searchTermDebounced, history]);\n  return /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      display: 'flex',\n      flexDirection: 'column',\n      height: '100%'\n    }\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      height: _Constants__WEBPACK_IMPORTED_MODULE_0__[\"HEADER_HEIGHT\"],\n      backgroundColor: 'white',\n      width: '100%',\n      display: 'flex',\n      zIndex: 99,\n      alignItems: 'center',\n      position: 'sticky',\n      top: 0,\n      borderBottom: `1px solid ${_Constants__WEBPACK_IMPORTED_MODULE_0__[\"HEADER_BORDER_BOTTOM_COLOR\"]}`\n    }\n  }, /*#__PURE__*/React.createElement(_Components_BackButton__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null), /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      height: 42,\n      backgroundColor: '#f1f1f1',\n      flexGrow: 1,\n      marginRight: 15,\n      display: 'flex',\n      borderRadius: 6\n    }\n  }, /*#__PURE__*/React.createElement(\"input\", {\n    placeholder: \"Cari barang atau jasa apa?\",\n    style: {\n      height: '100%',\n      backgroundColor: 'transparent',\n      // paddingRight: 10,\n      paddingLeft: 10,\n      flexGrow: 1,\n      borderRadius: 8,\n      //  lineHeight: 24,\n      border: 'none',\n      outline: 'none',\n      fontSize: 16,\n      caretColor: '#FF385C'\n    },\n    value: searchTerm,\n    onChange: e => setSearchTerm(e.target.value)\n  }), searchTerm.length > 0 && /*#__PURE__*/React.createElement(\"div\", {\n    onClick: () => setSearchTerm(''),\n    style: {\n      height: '100%',\n      justifyContent: 'center',\n      alignItems: 'center',\n      paddingLeft: 10,\n      paddingRight: 10,\n      display: 'flex'\n    }\n  }, /*#__PURE__*/React.createElement(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__[\"IoCloseSharp\"], {\n    size: 24\n  })))), /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      position: 'relative',\n      flexGrow: 1\n    }\n  }, /*#__PURE__*/React.createElement(react_relay__WEBPACK_IMPORTED_MODULE_3__[\"QueryRenderer\"], {\n    environment: environment,\n    variables: {\n      q: searchTermDebounced || '',\n      first: 24\n    },\n    query: query,\n    render: ({\n      error,\n      props\n    }) => {\n      if (error) {\n        console.log(error);\n        return null;\n      } else if (props) {\n        return /*#__PURE__*/React.createElement(_SearchResultsList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          search: props\n        });\n      }\n\n      return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"LinearProgress\"], null);\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/Mobile/Screens/Search/SearchScreen.js?");

/***/ }),

/***/ "./src/Mobile/Screens/Search/__generated__/SearchScreenQuery.graphql.js":
/*!******************************************************************************!*\
  !*** ./src/Mobile/Screens/Search/__generated__/SearchScreenQuery.graphql.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @flow\n */\n\n/* eslint-disable */\n\n/*::\nimport type { ConcreteRequest } from 'relay-runtime';\ntype SearchResultsList_search$ref = any;\nexport type SearchScreenQueryVariables = {|\n  q: string,\n  first: number,\n|};\nexport type SearchScreenQueryResponse = {|\n  +$fragmentRefs: SearchResultsList_search$ref\n|};\nexport type SearchScreenQuery = {|\n  variables: SearchScreenQueryVariables,\n  response: SearchScreenQueryResponse,\n|};\n*/\n\n/*\nquery SearchScreenQuery(\n  $q: String!\n  $first: Int!\n) {\n  ...SearchResultsList_search_taE68\n}\n\nfragment ProductItem_product on Product {\n  id\n  name\n  price\n  listingType\n  isPublished\n  isSuspended\n  mainImage {\n    id\n    url\n  }\n  rentalDuration {\n    display\n    id\n  }\n}\n\nfragment SearchResultsList_search_taE68 on Query {\n  search(first: $first, q: $q) {\n    edges {\n      cursor\n      node {\n        id\n        ...ProductItem_product\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n*/\n\nconst node\n/*: ConcreteRequest*/\n= function () {\n  var v0 = {\n    \"defaultValue\": null,\n    \"kind\": \"LocalArgument\",\n    \"name\": \"first\"\n  },\n      v1 = {\n    \"defaultValue\": null,\n    \"kind\": \"LocalArgument\",\n    \"name\": \"q\"\n  },\n      v2 = [{\n    \"kind\": \"Variable\",\n    \"name\": \"first\",\n    \"variableName\": \"first\"\n  }, {\n    \"kind\": \"Variable\",\n    \"name\": \"q\",\n    \"variableName\": \"q\"\n  }],\n      v3 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"id\",\n    \"storageKey\": null\n  };\n  return {\n    \"fragment\": {\n      \"argumentDefinitions\": [v0\n      /*: any*/\n      , v1\n      /*: any*/\n      ],\n      \"kind\": \"Fragment\",\n      \"metadata\": null,\n      \"name\": \"SearchScreenQuery\",\n      \"selections\": [{\n        \"args\": v2\n        /*: any*/\n        ,\n        \"kind\": \"FragmentSpread\",\n        \"name\": \"SearchResultsList_search\"\n      }],\n      \"type\": \"Query\",\n      \"abstractKey\": null\n    },\n    \"kind\": \"Request\",\n    \"operation\": {\n      \"argumentDefinitions\": [v1\n      /*: any*/\n      , v0\n      /*: any*/\n      ],\n      \"kind\": \"Operation\",\n      \"name\": \"SearchScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": v2\n        /*: any*/\n        ,\n        \"concreteType\": \"ProductConnection\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"search\",\n        \"plural\": false,\n        \"selections\": [{\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"ProductEdge\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"edges\",\n          \"plural\": true,\n          \"selections\": [{\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"cursor\",\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"concreteType\": \"Product\",\n            \"kind\": \"LinkedField\",\n            \"name\": \"node\",\n            \"plural\": false,\n            \"selections\": [v3\n            /*: any*/\n            , {\n              \"alias\": null,\n              \"args\": null,\n              \"kind\": \"ScalarField\",\n              \"name\": \"name\",\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"kind\": \"ScalarField\",\n              \"name\": \"price\",\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"kind\": \"ScalarField\",\n              \"name\": \"listingType\",\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"kind\": \"ScalarField\",\n              \"name\": \"isPublished\",\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"kind\": \"ScalarField\",\n              \"name\": \"isSuspended\",\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"concreteType\": \"Image\",\n              \"kind\": \"LinkedField\",\n              \"name\": \"mainImage\",\n              \"plural\": false,\n              \"selections\": [v3\n              /*: any*/\n              , {\n                \"alias\": null,\n                \"args\": null,\n                \"kind\": \"ScalarField\",\n                \"name\": \"url\",\n                \"storageKey\": null\n              }],\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"concreteType\": \"Unit\",\n              \"kind\": \"LinkedField\",\n              \"name\": \"rentalDuration\",\n              \"plural\": false,\n              \"selections\": [{\n                \"alias\": null,\n                \"args\": null,\n                \"kind\": \"ScalarField\",\n                \"name\": \"display\",\n                \"storageKey\": null\n              }, v3\n              /*: any*/\n              ],\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"kind\": \"ScalarField\",\n              \"name\": \"__typename\",\n              \"storageKey\": null\n            }],\n            \"storageKey\": null\n          }],\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"PageInfo\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"pageInfo\",\n          \"plural\": false,\n          \"selections\": [{\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"hasNextPage\",\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"endCursor\",\n            \"storageKey\": null\n          }],\n          \"storageKey\": null\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": v2\n        /*: any*/\n        ,\n        \"filters\": [],\n        \"handle\": \"connection\",\n        \"key\": \"SearchResultsList_search\",\n        \"kind\": \"LinkedHandle\",\n        \"name\": \"search\"\n      }]\n    },\n    \"params\": {\n      \"cacheID\": \"8816b9cd53167a449d7ec251fd64443f\",\n      \"id\": null,\n      \"metadata\": {},\n      \"name\": \"SearchScreenQuery\",\n      \"operationKind\": \"query\",\n      \"text\": \"query SearchScreenQuery(\\n  $q: String!\\n  $first: Int!\\n) {\\n  ...SearchResultsList_search_taE68\\n}\\n\\nfragment ProductItem_product on Product {\\n  id\\n  name\\n  price\\n  listingType\\n  isPublished\\n  isSuspended\\n  mainImage {\\n    id\\n    url\\n  }\\n  rentalDuration {\\n    display\\n    id\\n  }\\n}\\n\\nfragment SearchResultsList_search_taE68 on Query {\\n  search(first: $first, q: $q) {\\n    edges {\\n      cursor\\n      node {\\n        id\\n        ...ProductItem_product\\n        __typename\\n      }\\n    }\\n    pageInfo {\\n      hasNextPage\\n      endCursor\\n    }\\n  }\\n}\\n\"\n    }\n  };\n}(); // prettier-ignore\n\n\nnode\n/*: any*/\n.hash = '77f8f8118e65db3bae490e5de9b3adaa';\nmodule.exports = node;\n\n//# sourceURL=webpack:///./src/Mobile/Screens/Search/__generated__/SearchScreenQuery.graphql.js?");

/***/ })

};;