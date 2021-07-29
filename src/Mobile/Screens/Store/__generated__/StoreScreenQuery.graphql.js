/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type StoreScreen_categories$ref = any;
type StoreScreen_store$ref = any;
export type StoreScreenQueryVariables = {||};
export type StoreScreenQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +store: ?{|
      +id: ?string,
      +$fragmentRefs: StoreScreen_store$ref,
    |},
  |},
  +categories: ?$ReadOnlyArray<?{|
    +$fragmentRefs: StoreScreen_categories$ref
  |}>,
|};
export type StoreScreenQuery = {|
  variables: StoreScreenQueryVariables,
  response: StoreScreenQueryResponse,
|};
*/


/*
query StoreScreenQuery {
  me {
    id
    store {
      id
      ...StoreScreen_store
    }
  }
  categories {
    ...StoreScreen_categories
    id
  }
}

fragment EditAddressView_store on Store {
  id
  address {
    fullAddress
    lat
    lng
  }
}

fragment SelectTypeAndCategoryView_categories on Category {
  id
  name
}

fragment StoreScreen_categories on Category {
  id
  ...SelectTypeAndCategoryView_categories
}

fragment StoreScreen_store on Store {
  id
  name
  ...EditAddressView_store
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
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
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Store",
            "kind": "LinkedField",
            "name": "store",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "StoreScreen_store"
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
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
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
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Store",
            "kind": "LinkedField",
            "name": "store",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
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
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Category",
        "kind": "LinkedField",
        "name": "categories",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "fee635d0cd1da1dfb0fa112f69918d6f",
    "id": null,
    "metadata": {},
    "name": "StoreScreenQuery",
    "operationKind": "query",
    "text": "query StoreScreenQuery {\n  me {\n    id\n    store {\n      id\n      ...StoreScreen_store\n    }\n  }\n  categories {\n    ...StoreScreen_categories\n    id\n  }\n}\n\nfragment EditAddressView_store on Store {\n  id\n  address {\n    fullAddress\n    lat\n    lng\n  }\n}\n\nfragment SelectTypeAndCategoryView_categories on Category {\n  id\n  name\n}\n\nfragment StoreScreen_categories on Category {\n  id\n  ...SelectTypeAndCategoryView_categories\n}\n\nfragment StoreScreen_store on Store {\n  id\n  name\n  ...EditAddressView_store\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '93941a3f9d6ac357be6d8a0647ae738e';

module.exports = node;
