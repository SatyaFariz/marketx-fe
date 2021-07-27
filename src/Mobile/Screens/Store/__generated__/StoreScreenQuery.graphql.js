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
    +id: ?string
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
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "StoreScreenQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "StoreScreenQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "d9b09fa6622bf3fc058d461f5c8e9ee9",
    "id": null,
    "metadata": {},
    "name": "StoreScreenQuery",
    "operationKind": "query",
    "text": "query StoreScreenQuery {\n  me {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '70e1f57a4bbcb4803e670fdcbad36b47';

module.exports = node;
