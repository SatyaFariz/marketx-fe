/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AttributesListScreenQueryVariables = {||};
export type AttributesListScreenQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +isAdmin: ?boolean,
  |}
|};
export type AttributesListScreenQuery = {|
  variables: AttributesListScreenQueryVariables,
  response: AttributesListScreenQueryResponse,
|};
*/


/*
query AttributesListScreenQuery {
  me {
    id
    isAdmin
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isAdmin",
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
    "name": "AttributesListScreenQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AttributesListScreenQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a3ac6c262aadcd855a72bd924321b3fd",
    "id": null,
    "metadata": {},
    "name": "AttributesListScreenQuery",
    "operationKind": "query",
    "text": "query AttributesListScreenQuery {\n  me {\n    id\n    isAdmin\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'af9fbe87c705dea0e992a64e2026f097';

module.exports = node;
