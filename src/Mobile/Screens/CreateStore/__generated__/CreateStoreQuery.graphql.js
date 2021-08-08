/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CreateStoreScreen_provinces$ref = any;
export type CreateStoreQueryVariables = {||};
export type CreateStoreQueryResponse = {|
  +me: ?{|
    +id: ?string
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
  }
  administrativeAreas {
    ...CreateStoreScreen_provinces
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
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "me",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateStoreQuery",
    "selections": [
      (v0/*: any*/),
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
      (v0/*: any*/),
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
    "cacheID": "eba462eeed8befe2ebf5af475b409879",
    "id": null,
    "metadata": {},
    "name": "CreateStoreQuery",
    "operationKind": "query",
    "text": "query CreateStoreQuery {\n  me {\n    id\n  }\n  administrativeAreas {\n    ...CreateStoreScreen_provinces\n  }\n}\n\nfragment CreateStoreScreen_provinces on AdministrativeArea {\n  administrativeAreaId\n  name\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b2dfb15f65a6a5d69a10568a630cf34a';

module.exports = node;
