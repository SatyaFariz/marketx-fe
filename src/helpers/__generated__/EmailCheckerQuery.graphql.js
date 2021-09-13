/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EmailCheckerQueryVariables = {|
  email: any
|};
export type EmailCheckerQueryResponse = {|
  +emailExists: ?boolean
|};
export type EmailCheckerQuery = {|
  variables: EmailCheckerQueryVariables,
  response: EmailCheckerQueryResponse,
|};
*/


/*
query EmailCheckerQuery(
  $email: Email!
) {
  emailExists(email: $email)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      }
    ],
    "kind": "ScalarField",
    "name": "emailExists",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EmailCheckerQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EmailCheckerQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f36f9e1c2bcaf560edb5fc132f6e0d00",
    "id": null,
    "metadata": {},
    "name": "EmailCheckerQuery",
    "operationKind": "query",
    "text": "query EmailCheckerQuery(\n  $email: Email!\n) {\n  emailExists(email: $email)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c9218940f53bedae05547016a53d9660';

module.exports = node;
