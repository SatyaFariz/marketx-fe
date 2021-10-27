/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserActionEnum = "edit_profile" | "login" | "register" | "verify_whatsapp_number" | "%future added value";
export type SendOtpCodeMutationVariables = {|
  mobileNumber: string,
  action?: ?UserActionEnum,
|};
export type SendOtpCodeMutationResponse = {|
  +sendOtpCode: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |},
    +expiry: ?string,
  |}
|};
export type SendOtpCodeMutation = {|
  variables: SendOtpCodeMutationVariables,
  response: SendOtpCodeMutationResponse,
|};
*/


/*
mutation SendOtpCodeMutation(
  $mobileNumber: String!
  $action: UserActionEnum
) {
  sendOtpCode(mobileNumber: $mobileNumber, action: $action) {
    actionInfo {
      hasError
      message
    }
    expiry
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
  "name": "mobileNumber"
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
        "name": "mobileNumber",
        "variableName": "mobileNumber"
      }
    ],
    "concreteType": "SendVerificationCodePayload",
    "kind": "LinkedField",
    "name": "sendOtpCode",
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
    "name": "SendOtpCodeMutation",
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
    "name": "SendOtpCodeMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "a5d53f209656b5f3ebcffec698278b7b",
    "id": null,
    "metadata": {},
    "name": "SendOtpCodeMutation",
    "operationKind": "mutation",
    "text": "mutation SendOtpCodeMutation(\n  $mobileNumber: String!\n  $action: UserActionEnum\n) {\n  sendOtpCode(mobileNumber: $mobileNumber, action: $action) {\n    actionInfo {\n      hasError\n      message\n    }\n    expiry\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cce87c17a5f828cd08631e770e09c070';

module.exports = node;
