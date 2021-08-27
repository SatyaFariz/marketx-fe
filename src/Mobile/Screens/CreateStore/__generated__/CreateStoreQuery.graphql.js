/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CreateStoreScreen_me$ref = any;
type CreateStoreScreen_provinces$ref = any;
export type CreateStoreQueryVariables = {||};
export type CreateStoreQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +$fragmentRefs: CreateStoreScreen_me$ref,
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
    ...CreateStoreScreen_me
  }
  administrativeAreas {
    ...CreateStoreScreen_provinces
  }
}

fragment CreateStoreScreen_me on User {
  id
  store {
    id
  }
}

fragment CreateStoreScreen_provinces on AdministrativeArea {
  administrativeAreaId
  name
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "CreateStoreScreen_me"
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
    "cacheID": "c3ea0320a5cbab36732e19df931ec114",
    "id": null,
    "metadata": {},
    "name": "CreateStoreQuery",
    "operationKind": "query",
    "text": "query CreateStoreQuery {\n  me {\n    id\n    ...CreateStoreScreen_me\n  }\n  administrativeAreas {\n    ...CreateStoreScreen_provinces\n  }\n}\n\nfragment CreateStoreScreen_me on User {\n  id\n  store {\n    id\n  }\n}\n\nfragment CreateStoreScreen_provinces on AdministrativeArea {\n  administrativeAreaId\n  name\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8b0e49910fbb1d607bf9c532a2523f2b';

module.exports = node;
