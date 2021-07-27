/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type StoreScreenQueryVariables = {||};
export type StoreScreenQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +store: ?{|
      +id: ?string
    |},
  |}
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
    }
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "StoreScreenQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "StoreScreenQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ace2dcd1bf9ffdaf2cd3d04af4b298c7",
    "id": null,
    "metadata": {},
    "name": "StoreScreenQuery",
    "operationKind": "query",
    "text": "query StoreScreenQuery {\n  me {\n    id\n    store {\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'aa2f6baa8d1b25b3dd9d3d09864ba022';

module.exports = node;
