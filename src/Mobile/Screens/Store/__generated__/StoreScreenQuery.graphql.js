/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FixedAddressBar_me$ref = any;
type StoreScreen_categories$ref = any;
type StoreScreen_me$ref = any;
type StoreScreen_products$ref = any;
type StoreScreen_store$ref = any;
export type StoreScreenQueryVariables = {|
  id: string
|};
export type StoreScreenQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +$fragmentRefs: StoreScreen_me$ref & FixedAddressBar_me$ref,
  |},
  +store: ?{|
    +id: ?string,
    +$fragmentRefs: StoreScreen_store$ref,
  |},
  +categories: ?$ReadOnlyArray<?{|
    +$fragmentRefs: StoreScreen_categories$ref
  |}>,
  +$fragmentRefs: StoreScreen_products$ref,
|};
export type StoreScreenQuery = {|
  variables: StoreScreenQueryVariables,
  response: StoreScreenQueryResponse,
|};
*/


/*
query StoreScreenQuery(
  $id: String!
) {
  me {
    id
    ...StoreScreen_me
    ...FixedAddressBar_me
  }
  store(id: $id) {
    id
    ...StoreScreen_store
  }
  categories(hasChild: false) {
    ...StoreScreen_categories
    id
  }
  ...StoreScreen_products_9b7sY
}

fragment EditAddressView_store on Store {
  id
  address {
    fullAddress
    lat
    lng
  }
}

fragment FixedAddressBar_me on User {
  id
  isAdmin
}

fragment ProductItem_me on User {
  id
}

fragment ProductItem_product on Product {
  id
  merchantId
  name
  price
  listingType
  isPublished
  isSuspended
  views
  leads
  mainImage {
    id
    url
  }
  rentalDuration {
    display
    id
  }
}

fragment SelectCategoryView_categories on Category {
  id
  name
  path
  ancestors {
    id
    name
  }
}

fragment StoreScreen_categories on Category {
  id
  ...SelectCategoryView_categories
}

fragment StoreScreen_me on User {
  id
  ...ProductItem_me
}

fragment StoreScreen_products_9b7sY on Query {
  search(first: 10, q: "", storeId: $id) {
    edges {
      cursor
      node {
        id
        ...ProductItem_product
        __typename
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment StoreScreen_store on Store {
  id
  name
  whatsappNumber
  isVerified
  merchantId
  profilePicture {
    id
    url
  }
  banner {
    id
    url
  }
  address {
    fullAddress
    city {
      name
    }
    district {
      name
    }
  }
  ...EditAddressView_store
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v3 = [
  {
    "kind": "Literal",
    "name": "hasChild",
    "value": false
  }
],
v4 = {
  "kind": "Variable",
  "name": "storeId",
  "variableName": "id"
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "merchantId",
  "storageKey": null
},
v7 = [
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
],
v8 = [
  (v5/*: any*/)
],
v9 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  },
  {
    "kind": "Literal",
    "name": "q",
    "value": ""
  },
  (v4/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "StoreScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "StoreScreen_me"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FixedAddressBar_me"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Store",
        "kind": "LinkedField",
        "name": "store",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "StoreScreen_store"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Category",
        "kind": "LinkedField",
        "name": "categories",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "StoreScreen_categories"
          }
        ],
        "storageKey": "categories(hasChild:false)"
      },
      {
        "args": [
          (v4/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "StoreScreen_products"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "StoreScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isAdmin",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Store",
        "kind": "LinkedField",
        "name": "store",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "whatsappNumber",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isVerified",
            "storageKey": null
          },
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "profilePicture",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "banner",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Address",
            "kind": "LinkedField",
            "name": "address",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "fullAddress",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "AdministrativeArea",
                "kind": "LinkedField",
                "name": "city",
                "plural": false,
                "selections": (v8/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "AdministrativeArea",
                "kind": "LinkedField",
                "name": "district",
                "plural": false,
                "selections": (v8/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lat",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lng",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Category",
        "kind": "LinkedField",
        "name": "categories",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "path",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Category",
            "kind": "LinkedField",
            "name": "ancestors",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "categories(hasChild:false)"
      },
      {
        "alias": null,
        "args": (v9/*: any*/),
        "concreteType": "ProductConnection",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ProductEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Product",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v6/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "price",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "listingType",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isPublished",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isSuspended",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "views",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "leads",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Image",
                    "kind": "LinkedField",
                    "name": "mainImage",
                    "plural": false,
                    "selections": (v7/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Unit",
                    "kind": "LinkedField",
                    "name": "rentalDuration",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "display",
                        "storageKey": null
                      },
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v9/*: any*/),
        "filters": [],
        "handle": "connection",
        "key": "StoreScreen_search",
        "kind": "LinkedHandle",
        "name": "search"
      }
    ]
  },
  "params": {
    "cacheID": "d0a00b84d5c75cfb9b8e4302ec387e86",
    "id": null,
    "metadata": {},
    "name": "StoreScreenQuery",
    "operationKind": "query",
    "text": "query StoreScreenQuery(\n  $id: String!\n) {\n  me {\n    id\n    ...StoreScreen_me\n    ...FixedAddressBar_me\n  }\n  store(id: $id) {\n    id\n    ...StoreScreen_store\n  }\n  categories(hasChild: false) {\n    ...StoreScreen_categories\n    id\n  }\n  ...StoreScreen_products_9b7sY\n}\n\nfragment EditAddressView_store on Store {\n  id\n  address {\n    fullAddress\n    lat\n    lng\n  }\n}\n\nfragment FixedAddressBar_me on User {\n  id\n  isAdmin\n}\n\nfragment ProductItem_me on User {\n  id\n}\n\nfragment ProductItem_product on Product {\n  id\n  merchantId\n  name\n  price\n  listingType\n  isPublished\n  isSuspended\n  views\n  leads\n  mainImage {\n    id\n    url\n  }\n  rentalDuration {\n    display\n    id\n  }\n}\n\nfragment SelectCategoryView_categories on Category {\n  id\n  name\n  path\n  ancestors {\n    id\n    name\n  }\n}\n\nfragment StoreScreen_categories on Category {\n  id\n  ...SelectCategoryView_categories\n}\n\nfragment StoreScreen_me on User {\n  id\n  ...ProductItem_me\n}\n\nfragment StoreScreen_products_9b7sY on Query {\n  search(first: 10, q: \"\", storeId: $id) {\n    edges {\n      cursor\n      node {\n        id\n        ...ProductItem_product\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment StoreScreen_store on Store {\n  id\n  name\n  whatsappNumber\n  isVerified\n  merchantId\n  profilePicture {\n    id\n    url\n  }\n  banner {\n    id\n    url\n  }\n  address {\n    fullAddress\n    city {\n      name\n    }\n    district {\n      name\n    }\n  }\n  ...EditAddressView_store\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '44ad1db7949d3b57136daa62dd0c4875';

module.exports = node;
