/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserActionEnum = "login" | "register" | "%future added value";
export type SendOtpCodeMutationVariables = {|
  mobileNumber: string,
  action?: ?UserActionEnum,
|};
export type SendOtpCodeMutationResponse = {|
  +sendOtpCode: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |}
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
    "concreteType": "SendOtpPayload",
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
    "cacheID": "8d3daea9669e418b3cc3a84f8ca10d60",
    "id": null,
    "metadata": {},
    "name": "SendOtpCodeMutation",
    "operationKind": "mutation",
    "text": "mutation SendOtpCodeMutation(\n  $mobileNumber: String!\n  $action: UserActionEnum\n) {\n  sendOtpCode(mobileNumber: $mobileNumber, action: $action) {\n    actionInfo {\n      hasError\n      message\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c945ce61df7ac837357a11ae2498adac';

module.exports = node;
