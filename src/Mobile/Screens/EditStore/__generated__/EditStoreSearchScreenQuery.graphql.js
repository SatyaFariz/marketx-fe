/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EditStoreScreen_store$ref = any;
export type EditStoreSearchScreenQueryVariables = {||};
export type EditStoreSearchScreenQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +store: ?{|
      +id: ?string,
      +$fragmentRefs: EditStoreScreen_store$ref,
    |},
  |}
|};
export type EditStoreSearchScreenQuery = {|
  variables: EditStoreSearchScreenQueryVariables,
  response: EditStoreSearchScreenQueryResponse,
|};
*/


/*
query EditStoreSearchScreenQuery {
  me {
    id
    store {
      id
      ...EditStoreScreen_store
    }
  }
}

fragment EditStoreScreen_store on Store {
  id
  name
  whatsappNumber
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
v1 = [
  (v0/*: any*/),
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "EditStoreSearchScreenQuery",
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
                "name": "EditStoreScreen_store"
              }
            ],
            "storageKey": null
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
    "name": "EditStoreSearchScreenQuery",
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
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
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
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "profilePicture",
                "plural": false,
                "selections": (v1/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "banner",
                "plural": false,
                "selections": (v1/*: any*/),
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
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "718bf92ceaf9f62ffd63b6193a129238",
    "id": null,
    "metadata": {},
    "name": "EditStoreSearchScreenQuery",
    "operationKind": "query",
    "text": "query EditStoreSearchScreenQuery {\n  me {\n    id\n    store {\n      id\n      ...EditStoreScreen_store\n    }\n  }\n}\n\nfragment EditStoreScreen_store on Store {\n  id\n  name\n  whatsappNumber\n  profilePicture {\n    id\n    url\n  }\n  banner {\n    id\n    url\n  }\n  address {\n    fullAddress\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0d935152c397adbb02fbe9240911ac15';

module.exports = node;
