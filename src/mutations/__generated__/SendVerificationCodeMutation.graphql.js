/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserActionEnum = "edit_profile" | "login" | "register" | "verify_whatsapp_number" | "%future added value";
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
    +emailOrNumber: ?$ReadOnlyArray<?string>,
    +isNumberNotRegisteredOnWhatsapp: ?boolean,
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
    emailOrNumber
    isNumberNotRegisteredOnWhatsapp
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
        "name": "emailOrNumber",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isNumberNotRegisteredOnWhatsapp",
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
    "cacheID": "12a8e7e62f9b3f09405a3f18d7e97abc",
    "id": null,
    "metadata": {},
    "name": "SendVerificationCodeMutation",
    "operationKind": "mutation",
    "text": "mutation SendVerificationCodeMutation(\n  $id: String!\n  $action: UserActionEnum\n) {\n  sendVerificationCode(id: $id, action: $action) {\n    actionInfo {\n      hasError\n      message\n    }\n    emailOrNumber\n    isNumberNotRegisteredOnWhatsapp\n    expiry\n    cooldownExpiry\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '69c7f79e419acd21b985bab9bff08e78';

module.exports = node;
