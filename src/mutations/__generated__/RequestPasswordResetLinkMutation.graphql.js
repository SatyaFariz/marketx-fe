/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RequestPasswordResetLinkMutationVariables = {|
  email: any
|};
export type RequestPasswordResetLinkMutationResponse = {|
  +requestPasswordResetLink: ?{|
    +hasError: ?boolean,
    +message: ?string,
  |}
|};
export type RequestPasswordResetLinkMutation = {|
  variables: RequestPasswordResetLinkMutationVariables,
  response: RequestPasswordResetLinkMutationResponse,
|};
*/


/*
mutation RequestPasswordResetLinkMutation(
  $email: Email!
) {
  requestPasswordResetLink(email: $email) {
    hasError
    message
  }
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
    "concreteType": "ActionInfo",
    "kind": "LinkedField",
    "name": "requestPasswordResetLink",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hasError",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "message",
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
    "name": "RequestPasswordResetLinkMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RequestPasswordResetLinkMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f01ef3b736d44cc4a9a5fffa918a528a",
    "id": null,
    "metadata": {},
    "name": "RequestPasswordResetLinkMutation",
    "operationKind": "mutation",
    "text": "mutation RequestPasswordResetLinkMutation(\n  $email: Email!\n) {\n  requestPasswordResetLink(email: $email) {\n    hasError\n    message\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e749f0ecf8bdf98b5e28b7449b3c8758';

module.exports = node;
