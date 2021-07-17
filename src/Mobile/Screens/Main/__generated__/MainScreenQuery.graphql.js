/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MainScreenQueryVariables = {||};
export type MainScreenQueryResponse = {|
  +categories: ?$ReadOnlyArray<?{|
    +id: ?string
  |}>
|};
export type MainScreenQuery = {|
  variables: MainScreenQueryVariables,
  response: MainScreenQueryResponse,
|};
*/


/*
query MainScreenQuery {
  categories {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Category",
    "kind": "LinkedField",
    "name": "categories",
    "plural": true,
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
    "name": "MainScreenQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MainScreenQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "f2dc14328a06dd755003d38c76ca199e",
    "id": null,
    "metadata": {},
    "name": "MainScreenQuery",
    "operationKind": "query",
    "text": "query MainScreenQuery {\n  categories {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8123d9070c6901381d9d8511b6f38521';

module.exports = node;
