/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ResetPasswordMutationVariables = {|
  id: string,
  token: string,
  newPassword: string,
|};
export type ResetPasswordMutationResponse = {|
  +resetPassword: ?{|
    +hasError: ?boolean,
    +message: ?string,
  |}
|};
export type ResetPasswordMutation = {|
  variables: ResetPasswordMutationVariables,
  response: ResetPasswordMutationResponse,
|};
*/


/*
mutation ResetPasswordMutation(
  $id: String!
  $token: String!
  $newPassword: String!
) {
  resetPassword(id: $id, token: $token, newPassword: $newPassword) {
    hasError
    message
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "newPassword"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "token"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "newPassword",
        "variableName": "newPassword"
      },
      {
        "kind": "Variable",
        "name": "token",
        "variableName": "token"
      }
    ],
    "concreteType": "ActionInfo",
    "kind": "LinkedField",
    "name": "resetPassword",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ResetPasswordMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "ResetPasswordMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "193b21e01d05d9ca397e3d9701c88e9f",
    "id": null,
    "metadata": {},
    "name": "ResetPasswordMutation",
    "operationKind": "mutation",
    "text": "mutation ResetPasswordMutation(\n  $id: String!\n  $token: String!\n  $newPassword: String!\n) {\n  resetPassword(id: $id, token: $token, newPassword: $newPassword) {\n    hasError\n    message\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '838a1cc1386223ad27355ee48f16d4df';

module.exports = node;
