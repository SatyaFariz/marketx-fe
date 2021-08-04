/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type StoreScreen_categories$ref = any;
type StoreScreen_me$ref = any;
type StoreScreen_store$ref = any;
export type StoreScreenQueryVariables = {|
  id: string
|};
export type StoreScreenQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +$fragmentRefs: StoreScreen_me$ref,
  |},
  +store: ?{|
    +id: ?string,
    +$fragmentRefs: StoreScreen_store$ref,
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
query StoreScreenQuery(
  $id: String!
) {
  me {
    id
    ...StoreScreen_me
  }
  store(id: $id) {
    id
    ...StoreScreen_store
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

fragment StoreScreen_me on User {
  id
}

fragment StoreScreen_store on Store {
  id
  name
  whatsappNumber
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = [
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
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
          (v1/*: any*/)
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
          (v3/*: any*/),
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
            "name": "merchantId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "profilePicture",
            "plural": false,
            "selections": (v4/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "banner",
            "plural": false,
            "selections": (v4/*: any*/),
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
        "args": null,
        "concreteType": "Category",
        "kind": "LinkedField",
        "name": "categories",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "23d5482d402186417a7000e7c574ca7d",
    "id": null,
    "metadata": {},
    "name": "StoreScreenQuery",
    "operationKind": "query",
    "text": "query StoreScreenQuery(\n  $id: String!\n) {\n  me {\n    id\n    ...StoreScreen_me\n  }\n  store(id: $id) {\n    id\n    ...StoreScreen_store\n  }\n  categories {\n    ...StoreScreen_categories\n    id\n  }\n}\n\nfragment EditAddressView_store on Store {\n  id\n  address {\n    fullAddress\n    lat\n    lng\n  }\n}\n\nfragment SelectTypeAndCategoryView_categories on Category {\n  id\n  name\n}\n\nfragment StoreScreen_categories on Category {\n  id\n  ...SelectTypeAndCategoryView_categories\n}\n\nfragment StoreScreen_me on User {\n  id\n}\n\nfragment StoreScreen_store on Store {\n  id\n  name\n  whatsappNumber\n  merchantId\n  profilePicture {\n    id\n    url\n  }\n  banner {\n    id\n    url\n  }\n  address {\n    fullAddress\n  }\n  ...EditAddressView_store\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '41e96f59b3f39d778f1bc6f4f727b1b2';

module.exports = node;
