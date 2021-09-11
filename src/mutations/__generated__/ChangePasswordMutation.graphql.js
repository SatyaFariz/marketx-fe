/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ChangePasswordMutationVariables = {|
  currentPassword: string,
  newPassword: string,
|};
export type ChangePasswordMutationResponse = {|
  +changePassword: ?{|
    +hasError: ?boolean,
    +message: ?string,
  |}
|};
export type ChangePasswordMutation = {|
  variables: ChangePasswordMutationVariables,
  response: ChangePasswordMutationResponse,
|};
*/


/*
mutation ChangePasswordMutation(
  $currentPassword: String!
  $newPassword: String!
) {
  changePassword(currentPassword: $currentPassword, newPassword: $newPassword) {
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
    "name": "currentPassword"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "newPassword"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "currentPassword",
        "variableName": "currentPassword"
      },
      {
        "kind": "Variable",
        "name": "newPassword",
        "variableName": "newPassword"
      }
    ],
    "concreteType": "ActionInfo",
    "kind": "LinkedField",
    "name": "changePassword",
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
    "name": "ChangePasswordMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ChangePasswordMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a485c0ab3d054e29adfb8657859443ec",
    "id": null,
    "metadata": {},
    "name": "ChangePasswordMutation",
    "operationKind": "mutation",
    "text": "mutation ChangePasswordMutation(\n  $currentPassword: String!\n  $newPassword: String!\n) {\n  changePassword(currentPassword: $currentPassword, newPassword: $newPassword) {\n    hasError\n    message\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '536116b05edd4ec1f89f770800bc7bbc';

module.exports = node;
