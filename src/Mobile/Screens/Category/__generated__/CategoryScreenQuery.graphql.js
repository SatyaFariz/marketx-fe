/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SearchResultsList_search$ref = any;
type SearchResultsList_userSession$ref = any;
export type CategoryScreenQueryVariables = {|
  q: string,
  first: number,
  categoryId: string,
|};
export type CategoryScreenQueryResponse = {|
  +userSession: ?{|
    +$fragmentRefs: SearchResultsList_userSession$ref
  |},
  +$fragmentRefs: SearchResultsList_search$ref,
|};
export type CategoryScreenQuery = {|
  variables: CategoryScreenQueryVariables,
  response: CategoryScreenQueryResponse,
|};
*/


/*
query CategoryScreenQuery(
  $q: String!
  $first: Int!
  $categoryId: String!
) {
  ...SearchResultsList_search_1oyKJr
  userSession {
    ...SearchResultsList_userSession
  }
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
  location {
    city {
      administrativeAreaId
      name
    }
    district {
      administrativeAreaId
      name
    }
  }
}

fragment SearchResultsList_search_1oyKJr on Query {
  search(first: $first, q: $q, categoryId: $categoryId) {
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

fragment SearchResultsList_userSession on UserSession {
  userId
  storeId
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "categoryId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "q"
},
v3 = [
  {
    "kind": "Variable",
    "name": "categoryId",
    "variableName": "categoryId"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "q",
    "variableName": "q"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "administrativeAreaId",
    "storageKey": null
  },
  (v5/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CategoryScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserSession",
        "kind": "LinkedField",
        "name": "userSession",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SearchResultsList_userSession"
          }
        ],
        "storageKey": null
      },
      {
        "args": (v3/*: any*/),
        "kind": "FragmentSpread",
        "name": "SearchResultsList_search"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CategoryScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
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
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "merchantId",
                    "storageKey": null
                  },
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
                    "selections": [
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "url",
                        "storageKey": null
                      }
                    ],
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
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Location",
                    "kind": "LinkedField",
                    "name": "location",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AdministrativeArea",
                        "kind": "LinkedField",
                        "name": "city",
                        "plural": false,
                        "selections": (v6/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "AdministrativeArea",
                        "kind": "LinkedField",
                        "name": "district",
                        "plural": false,
                        "selections": (v6/*: any*/),
                        "storageKey": null
                      }
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
        "args": (v3/*: any*/),
        "filters": [],
        "handle": "connection",
        "key": "SearchResultsList_search",
        "kind": "LinkedHandle",
        "name": "search"
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "UserSession",
        "kind": "LinkedField",
        "name": "userSession",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "userId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "storeId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4bed50398fe6358009f84674ffa5e5ec",
    "id": null,
    "metadata": {},
    "name": "CategoryScreenQuery",
    "operationKind": "query",
    "text": "query CategoryScreenQuery(\n  $q: String!\n  $first: Int!\n  $categoryId: String!\n) {\n  ...SearchResultsList_search_1oyKJr\n  userSession {\n    ...SearchResultsList_userSession\n  }\n}\n\nfragment ProductItem_product on Product {\n  id\n  merchantId\n  name\n  price\n  listingType\n  isPublished\n  isSuspended\n  views\n  leads\n  mainImage {\n    id\n    url\n  }\n  rentalDuration {\n    display\n    id\n  }\n  location {\n    city {\n      administrativeAreaId\n      name\n    }\n    district {\n      administrativeAreaId\n      name\n    }\n  }\n}\n\nfragment SearchResultsList_search_1oyKJr on Query {\n  search(first: $first, q: $q, categoryId: $categoryId) {\n    edges {\n      cursor\n      node {\n        id\n        ...ProductItem_product\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment SearchResultsList_userSession on UserSession {\n  userId\n  storeId\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4e5a407d019aab86f304b4c5eb25ee26';

module.exports = node;
