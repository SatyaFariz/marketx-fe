/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CategoryScreenQueryVariables = {|
  id: string
|};
export type CategoryScreenQueryResponse = {|
  +category: ?{|
    +id: ?string
  |}
|};
export type CategoryScreenQuery = {|
  variables: CategoryScreenQueryVariables,
  response: CategoryScreenQueryResponse,
|};
*/


/*
query CategoryScreenQuery(
  $id: String!
) {
  category(id: $id) {
    id
  }
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
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Category",
    "kind": "LinkedField",
    "name": "category",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CategoryScreenQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CategoryScreenQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5cd1dd9ed733e756450b3a69730414ba",
    "id": null,
    "metadata": {},
    "name": "CategoryScreenQuery",
    "operationKind": "query",
    "text": "query CategoryScreenQuery(\n  $id: String!\n) {\n  category(id: $id) {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8c55a3a1e2ec2017c9d0ce5eb9172f00';

module.exports = node;
