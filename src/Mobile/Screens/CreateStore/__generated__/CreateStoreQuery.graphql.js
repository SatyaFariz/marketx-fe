/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CreateStoreScreen_provinces$ref = any;
type CreateStoreScreen_store$ref = any;
export type CreateStoreQueryVariables = {||};
export type CreateStoreQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +store: ?{|
      +id: ?string,
      +$fragmentRefs: CreateStoreScreen_store$ref,
    |},
  |},
  +administrativeAreas: ?$ReadOnlyArray<?{|
    +$fragmentRefs: CreateStoreScreen_provinces$ref
  |}>,
|};
export type CreateStoreQuery = {|
  variables: CreateStoreQueryVariables,
  response: CreateStoreQueryResponse,
|};
*/


/*
query CreateStoreQuery {
  me {
    id
    store {
      id
      ...CreateStoreScreen_store
    }
  }
  administrativeAreas {
    ...CreateStoreScreen_provinces
  }
}

fragment CreateStoreScreen_provinces on AdministrativeArea {
  administrativeAreaId
  name
}

fragment CreateStoreScreen_store on Store {
  id
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateStoreQuery",
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
                "name": "CreateStoreScreen_store"
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
        "concreteType": "AdministrativeArea",
        "kind": "LinkedField",
        "name": "administrativeAreas",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CreateStoreScreen_provinces"
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
    "name": "CreateStoreQuery",
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
              (v0/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "AdministrativeArea",
        "kind": "LinkedField",
        "name": "administrativeAreas",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "administrativeAreaId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d57f5bddcd7a1cee40b9788d079972d4",
    "id": null,
    "metadata": {},
    "name": "CreateStoreQuery",
    "operationKind": "query",
    "text": "query CreateStoreQuery {\n  me {\n    id\n    store {\n      id\n      ...CreateStoreScreen_store\n    }\n  }\n  administrativeAreas {\n    ...CreateStoreScreen_provinces\n  }\n}\n\nfragment CreateStoreScreen_provinces on AdministrativeArea {\n  administrativeAreaId\n  name\n}\n\nfragment CreateStoreScreen_store on Store {\n  id\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9364fd77363f1c303952b95dd16e2c73';

module.exports = node;
