/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserActionEnum = "edit_profile" | "login" | "register" | "%future added value";
export type SendVerificationCodeMutationVariables = {|
  id: string,
  action?: ?UserActionEnum,
|};
export type SendVerificationCodeMutationResponse = {|
  +sendVerificationCode: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |},
    +expiry: ?string,
    +cooldownExpiry: ?string,
  |}
|};
export type SendVerificationCodeMutation = {|
  variables: SendVerificationCodeMutationVariables,
  response: SendVerificationCodeMutationResponse,
|};
*/


/*
mutation SendVerificationCodeMutation(
  $id: String!
  $action: UserActionEnum
) {
  sendVerificationCode(id: $id, action: $action) {
    actionInfo {
      hasError
      message
    }
    expiry
    cooldownExpiry
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "action"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "action",
        "variableName": "action"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "SendVerificationCodePayload",
    "kind": "LinkedField",
    "name": "sendVerificationCode",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ActionInfo",
        "kind": "LinkedField",
        "name": "actionInfo",
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "expiry",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cooldownExpiry",
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
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SendVerificationCodeMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "SendVerificationCodeMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "49e7db5771c0d1cd05872a27f69686c2",
    "id": null,
    "metadata": {},
    "name": "SendVerificationCodeMutation",
    "operationKind": "mutation",
    "text": "mutation SendVerificationCodeMutation(\n  $id: String!\n  $action: UserActionEnum\n) {\n  sendVerificationCode(id: $id, action: $action) {\n    actionInfo {\n      hasError\n      message\n    }\n    expiry\n    cooldownExpiry\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'afda759e038fb074c51b556c82568c0d';

module.exports = node;
