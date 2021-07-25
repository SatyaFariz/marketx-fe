/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EditProfileQueryVariables = {||};
export type EditProfileQueryResponse = {|
  +me: ?{|
    +id: ?string
  |}
|};
export type EditProfileQuery = {|
  variables: EditProfileQueryVariables,
  response: EditProfileQueryResponse,
|};
*/


/*
query EditProfileQuery {
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
    "name": "EditProfileQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "EditProfileQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "09d9514ac889327d2745c1f0d9c7e4e1",
    "id": null,
    "metadata": {},
    "name": "EditProfileQuery",
    "operationKind": "query",
    "text": "query EditProfileQuery {\n  me {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dfee6478b18d121d5185bdbd37788c56';

module.exports = node;
