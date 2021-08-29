exports.ids = [18];
exports.modules = {

/***/ "./src/Mobile/Screens/Category/CategoryScreen.js":
/*!*******************************************************!*\
  !*** ./src/Mobile/Screens/Category/CategoryScreen.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(React) {/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-relay */ \"react-relay\");\n/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_relay__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Constants */ \"./src/Mobile/Constants/index.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io5 */ \"react-icons/io5\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_useAppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useAppContext */ \"./src/Mobile/hooks/useAppContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! use-debounce */ \"use-debounce\");\n/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(use_debounce__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Search_SearchResultsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Search/SearchResultsList */ \"./src/Mobile/Screens/Search/SearchResultsList.js\");\n/* harmony import */ var _Components_BackButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Components/BackButton */ \"./src/Mobile/Components/BackButton.js\");\n/* harmony import */ var _Components_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Components/Link */ \"./src/Mobile/Components/Link.js\");\nvar _CategoryScreenQuery, _CategoryScreen_category;\n\n\n\n\n\n\n\n\n\n\n\n\nconst query = _CategoryScreenQuery !== void 0 ? _CategoryScreenQuery : (_CategoryScreenQuery = __webpack_require__(/*! ./__generated__/CategoryScreenQuery.graphql */ \"./src/Mobile/Screens/Category/__generated__/CategoryScreenQuery.graphql.js\"), _CategoryScreenQuery.hash && _CategoryScreenQuery.hash !== \"2678dbea1edcff93d8100d7d256a4621\" && console.error(\"The definition of 'CategoryScreenQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.\"), _CategoryScreenQuery);\n\nconst Component = props => {\n  const {\n    category\n  } = props;\n  const {\n    id\n  } = category;\n  const {\n    environment,\n    history,\n    queryParams\n  } = Object(_hooks_useAppContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  const [searchTerm, setSearchTerm] = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(queryParams.q || '');\n  const [searchTermDebounced] = Object(use_debounce__WEBPACK_IMPORTED_MODULE_6__[\"useDebounce\"])(searchTerm, 500);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(() => {\n    history.replace(`/category/${id}?q=${searchTermDebounced}`);\n  }, [searchTermDebounced, id, history]);\n  return /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      display: 'flex',\n      flexDirection: 'column',\n      height: '100%'\n    }\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      position: 'sticky',\n      top: 0,\n      width: '100%',\n      zIndex: 99,\n      borderBottom: `1px solid ${_Constants__WEBPACK_IMPORTED_MODULE_1__[\"DIVIDER_COLOR\"]}`\n    }\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      height: _Constants__WEBPACK_IMPORTED_MODULE_1__[\"HEADER_HEIGHT\"],\n      backgroundColor: 'white',\n      width: '100%',\n      display: 'flex',\n      alignItems: 'center',\n      borderBottom: `1px solid ${_Constants__WEBPACK_IMPORTED_MODULE_1__[\"HEADER_BORDER_BOTTOM_COLOR\"]}`\n    }\n  }, /*#__PURE__*/React.createElement(_Components_BackButton__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null), /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      height: 42,\n      backgroundColor: '#f1f1f1',\n      flexGrow: 1,\n      marginRight: 15,\n      display: 'flex',\n      borderRadius: 6\n    }\n  }, /*#__PURE__*/React.createElement(\"input\", {\n    placeholder: \"Cari...\",\n    style: {\n      height: '100%',\n      backgroundColor: 'transparent',\n      // paddingRight: 10,\n      paddingLeft: 10,\n      flexGrow: 1,\n      borderRadius: 8,\n      //  lineHeight: 24,\n      border: 'none',\n      outline: 'none',\n      fontSize: 16,\n      caretColor: '#FF385C'\n    },\n    value: searchTerm,\n    onChange: e => setSearchTerm(e.target.value)\n  }), searchTerm.length > 0 && /*#__PURE__*/React.createElement(\"div\", {\n    onClick: () => setSearchTerm(''),\n    style: {\n      height: '100%',\n      justifyContent: 'center',\n      alignItems: 'center',\n      paddingLeft: 10,\n      paddingRight: 10,\n      display: 'flex'\n    }\n  }, /*#__PURE__*/React.createElement(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__[\"IoCloseSharp\"], {\n    size: 24\n  })))), /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      height: 48,\n      display: 'flex',\n      alignItems: 'center',\n      paddingLeft: 15,\n      paddingRight: 15\n    }\n  }, category.level > 1 ? /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      display: 'flex',\n      flexDirection: 'row',\n      alignItems: 'center'\n    }\n  }, category.ancestors.map((item, i) => {\n    return /*#__PURE__*/React.createElement(\"div\", {\n      key: i,\n      style: {\n        display: 'flex',\n        flexDirection: 'row',\n        alignItems: 'center'\n      }\n    }, i > 0 && /*#__PURE__*/React.createElement(\"span\", {\n      style: {\n        margin: '0 10px'\n      }\n    }, '>'), /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"ButtonBase\"], {\n      key: item.id,\n      href: `/category/${item.id}`,\n      component: _Components_Link__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    }, /*#__PURE__*/React.createElement(\"span\", null, item.name)));\n  }), /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      display: 'flex',\n      flexDirection: 'row',\n      alignItems: 'center'\n    }\n  }, /*#__PURE__*/React.createElement(\"span\", {\n    style: {\n      margin: '0 10px'\n    }\n  }, '>'), /*#__PURE__*/React.createElement(\"span\", null, category.name))) : /*#__PURE__*/React.createElement(\"span\", {\n    style: {\n      fontSize: 18,\n      fontWeight: '700'\n    }\n  }, category.name))), /*#__PURE__*/React.createElement(\"div\", {\n    style: {\n      position: 'relative',\n      flexGrow: 1\n    }\n  }, /*#__PURE__*/React.createElement(react_relay__WEBPACK_IMPORTED_MODULE_0__[\"QueryRenderer\"], {\n    environment: environment,\n    variables: {\n      categoryId: category.id,\n      q: searchTermDebounced || '',\n      first: 24\n    },\n    query: query,\n    render: ({\n      error,\n      props\n    }) => {\n      if (error) {\n        console.log(error);\n        return null;\n      } else if (props) {\n        return /*#__PURE__*/React.createElement(_Search_SearchResultsList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          search: props,\n          showsListingType: false\n        });\n      }\n\n      return /*#__PURE__*/React.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"LinearProgress\"], null);\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_relay__WEBPACK_IMPORTED_MODULE_0__[\"createFragmentContainer\"])(Component, {\n  category: _CategoryScreen_category !== void 0 ? _CategoryScreen_category : (_CategoryScreen_category = __webpack_require__(/*! ./__generated__/CategoryScreen_category.graphql */ \"./src/Mobile/Screens/Category/__generated__/CategoryScreen_category.graphql.js\"), _CategoryScreen_category.hash && _CategoryScreen_category.hash !== \"a686e9a90635a1a64a828048db12ec0c\" && console.error(\"The definition of 'CategoryScreen_category' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.\"), _CategoryScreen_category)\n}));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"react\")))\n\n//# sourceURL=webpack:///./src/Mobile/Screens/Category/CategoryScreen.js?");

/***/ }),

/***/ "./src/Mobile/Screens/Category/__generated__/CategoryScreenQuery.graphql.js":
/*!**********************************************************************************!*\
  !*** ./src/Mobile/Screens/Category/__generated__/CategoryScreenQuery.graphql.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @flow\n */\n\n/* eslint-disable */\n\n/*::\nimport type { ConcreteRequest } from 'relay-runtime';\ntype SearchResultsList_search$ref = any;\nexport type CategoryScreenQueryVariables = {|\n  q: string,\n  first: number,\n  categoryId: string,\n|};\nexport type CategoryScreenQueryResponse = {|\n  +$fragmentRefs: SearchResultsList_search$ref\n|};\nexport type CategoryScreenQuery = {|\n  variables: CategoryScreenQueryVariables,\n  response: CategoryScreenQueryResponse,\n|};\n*/\n\n/*\nquery CategoryScreenQuery(\n  $q: String!\n  $first: Int!\n  $categoryId: String!\n) {\n  ...SearchResultsList_search_1oyKJr\n}\n\nfragment ProductItem_product on Product {\n  id\n  name\n  price\n  listingType\n  isPublished\n  isSuspended\n  mainImage {\n    id\n    url\n  }\n  rentalDuration {\n    display\n    id\n  }\n}\n\nfragment SearchResultsList_search_1oyKJr on Query {\n  search(first: $first, q: $q, categoryId: $categoryId) {\n    edges {\n      cursor\n      node {\n        id\n        ...ProductItem_product\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n*/\n\nconst node\n/*: ConcreteRequest*/\n= function () {\n  var v0 = {\n    \"defaultValue\": null,\n    \"kind\": \"LocalArgument\",\n    \"name\": \"categoryId\"\n  },\n      v1 = {\n    \"defaultValue\": null,\n    \"kind\": \"LocalArgument\",\n    \"name\": \"first\"\n  },\n      v2 = {\n    \"defaultValue\": null,\n    \"kind\": \"LocalArgument\",\n    \"name\": \"q\"\n  },\n      v3 = [{\n    \"kind\": \"Variable\",\n    \"name\": \"categoryId\",\n    \"variableName\": \"categoryId\"\n  }, {\n    \"kind\": \"Variable\",\n    \"name\": \"first\",\n    \"variableName\": \"first\"\n  }, {\n    \"kind\": \"Variable\",\n    \"name\": \"q\",\n    \"variableName\": \"q\"\n  }],\n      v4 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"id\",\n    \"storageKey\": null\n  };\n  return {\n    \"fragment\": {\n      \"argumentDefinitions\": [v0\n      /*: any*/\n      , v1\n      /*: any*/\n      , v2\n      /*: any*/\n      ],\n      \"kind\": \"Fragment\",\n      \"metadata\": null,\n      \"name\": \"CategoryScreenQuery\",\n      \"selections\": [{\n        \"args\": v3\n        /*: any*/\n        ,\n        \"kind\": \"FragmentSpread\",\n        \"name\": \"SearchResultsList_search\"\n      }],\n      \"type\": \"Query\",\n      \"abstractKey\": null\n    },\n    \"kind\": \"Request\",\n    \"operation\": {\n      \"argumentDefinitions\": [v2\n      /*: any*/\n      , v1\n      /*: any*/\n      , v0\n      /*: any*/\n      ],\n      \"kind\": \"Operation\",\n      \"name\": \"CategoryScreenQuery\",\n      \"selections\": [{\n        \"alias\": null,\n        \"args\": v3\n        /*: any*/\n        ,\n        \"concreteType\": \"ProductConnection\",\n        \"kind\": \"LinkedField\",\n        \"name\": \"search\",\n        \"plural\": false,\n        \"selections\": [{\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"ProductEdge\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"edges\",\n          \"plural\": true,\n          \"selections\": [{\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"cursor\",\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"concreteType\": \"Product\",\n            \"kind\": \"LinkedField\",\n            \"name\": \"node\",\n            \"plural\": false,\n            \"selections\": [v4\n            /*: any*/\n            , {\n              \"alias\": null,\n              \"args\": null,\n              \"kind\": \"ScalarField\",\n              \"name\": \"name\",\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"kind\": \"ScalarField\",\n              \"name\": \"price\",\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"kind\": \"ScalarField\",\n              \"name\": \"listingType\",\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"kind\": \"ScalarField\",\n              \"name\": \"isPublished\",\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"kind\": \"ScalarField\",\n              \"name\": \"isSuspended\",\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"concreteType\": \"Image\",\n              \"kind\": \"LinkedField\",\n              \"name\": \"mainImage\",\n              \"plural\": false,\n              \"selections\": [v4\n              /*: any*/\n              , {\n                \"alias\": null,\n                \"args\": null,\n                \"kind\": \"ScalarField\",\n                \"name\": \"url\",\n                \"storageKey\": null\n              }],\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"concreteType\": \"Unit\",\n              \"kind\": \"LinkedField\",\n              \"name\": \"rentalDuration\",\n              \"plural\": false,\n              \"selections\": [{\n                \"alias\": null,\n                \"args\": null,\n                \"kind\": \"ScalarField\",\n                \"name\": \"display\",\n                \"storageKey\": null\n              }, v4\n              /*: any*/\n              ],\n              \"storageKey\": null\n            }, {\n              \"alias\": null,\n              \"args\": null,\n              \"kind\": \"ScalarField\",\n              \"name\": \"__typename\",\n              \"storageKey\": null\n            }],\n            \"storageKey\": null\n          }],\n          \"storageKey\": null\n        }, {\n          \"alias\": null,\n          \"args\": null,\n          \"concreteType\": \"PageInfo\",\n          \"kind\": \"LinkedField\",\n          \"name\": \"pageInfo\",\n          \"plural\": false,\n          \"selections\": [{\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"hasNextPage\",\n            \"storageKey\": null\n          }, {\n            \"alias\": null,\n            \"args\": null,\n            \"kind\": \"ScalarField\",\n            \"name\": \"endCursor\",\n            \"storageKey\": null\n          }],\n          \"storageKey\": null\n        }],\n        \"storageKey\": null\n      }, {\n        \"alias\": null,\n        \"args\": v3\n        /*: any*/\n        ,\n        \"filters\": [],\n        \"handle\": \"connection\",\n        \"key\": \"SearchResultsList_search\",\n        \"kind\": \"LinkedHandle\",\n        \"name\": \"search\"\n      }]\n    },\n    \"params\": {\n      \"cacheID\": \"635030d83d7cd15f15c733d013147a8e\",\n      \"id\": null,\n      \"metadata\": {},\n      \"name\": \"CategoryScreenQuery\",\n      \"operationKind\": \"query\",\n      \"text\": \"query CategoryScreenQuery(\\n  $q: String!\\n  $first: Int!\\n  $categoryId: String!\\n) {\\n  ...SearchResultsList_search_1oyKJr\\n}\\n\\nfragment ProductItem_product on Product {\\n  id\\n  name\\n  price\\n  listingType\\n  isPublished\\n  isSuspended\\n  mainImage {\\n    id\\n    url\\n  }\\n  rentalDuration {\\n    display\\n    id\\n  }\\n}\\n\\nfragment SearchResultsList_search_1oyKJr on Query {\\n  search(first: $first, q: $q, categoryId: $categoryId) {\\n    edges {\\n      cursor\\n      node {\\n        id\\n        ...ProductItem_product\\n        __typename\\n      }\\n    }\\n    pageInfo {\\n      hasNextPage\\n      endCursor\\n    }\\n  }\\n}\\n\"\n    }\n  };\n}(); // prettier-ignore\n\n\nnode\n/*: any*/\n.hash = '2678dbea1edcff93d8100d7d256a4621';\nmodule.exports = node;\n\n//# sourceURL=webpack:///./src/Mobile/Screens/Category/__generated__/CategoryScreenQuery.graphql.js?");

/***/ }),

/***/ "./src/Mobile/Screens/Category/__generated__/CategoryScreen_category.graphql.js":
/*!**************************************************************************************!*\
  !*** ./src/Mobile/Screens/Category/__generated__/CategoryScreen_category.graphql.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @flow\n */\n\n/* eslint-disable */\n\n/*::\nimport type { ReaderFragment } from 'relay-runtime';\nimport type { FragmentReference } from \"relay-runtime\";\ndeclare export opaque type CategoryScreen_category$ref: FragmentReference;\ndeclare export opaque type CategoryScreen_category$fragmentType: CategoryScreen_category$ref;\nexport type CategoryScreen_category = {|\n  +id: ?string,\n  +name: ?string,\n  +level: ?number,\n  +ancestors: ?$ReadOnlyArray<?{|\n    +id: ?string,\n    +name: ?string,\n  |}>,\n  +$refType: CategoryScreen_category$ref,\n|};\nexport type CategoryScreen_category$data = CategoryScreen_category;\nexport type CategoryScreen_category$key = {\n  +$data?: CategoryScreen_category$data,\n  +$fragmentRefs: CategoryScreen_category$ref,\n  ...\n};\n*/\n\nconst node\n/*: ReaderFragment*/\n= function () {\n  var v0 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"id\",\n    \"storageKey\": null\n  },\n      v1 = {\n    \"alias\": null,\n    \"args\": null,\n    \"kind\": \"ScalarField\",\n    \"name\": \"name\",\n    \"storageKey\": null\n  };\n  return {\n    \"argumentDefinitions\": [],\n    \"kind\": \"Fragment\",\n    \"metadata\": null,\n    \"name\": \"CategoryScreen_category\",\n    \"selections\": [v0\n    /*: any*/\n    , v1\n    /*: any*/\n    , {\n      \"alias\": null,\n      \"args\": null,\n      \"kind\": \"ScalarField\",\n      \"name\": \"level\",\n      \"storageKey\": null\n    }, {\n      \"alias\": null,\n      \"args\": null,\n      \"concreteType\": \"Category\",\n      \"kind\": \"LinkedField\",\n      \"name\": \"ancestors\",\n      \"plural\": true,\n      \"selections\": [v0\n      /*: any*/\n      , v1\n      /*: any*/\n      ],\n      \"storageKey\": null\n    }],\n    \"type\": \"Category\",\n    \"abstractKey\": null\n  };\n}(); // prettier-ignore\n\n\nnode\n/*: any*/\n.hash = 'a686e9a90635a1a64a828048db12ec0c';\nmodule.exports = node;\n\n//# sourceURL=webpack:///./src/Mobile/Screens/Category/__generated__/CategoryScreen_category.graphql.js?");

/***/ })

};;