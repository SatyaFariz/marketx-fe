/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SendOtpCodeMutationVariables = {|
  phoneNumber: string
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
  $phoneNumber: String!
) {
  sendOtpCode(phoneNumber: $phoneNumber) {
    actionInfo {
      hasError
      message
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "phoneNumber"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "phoneNumber",
        "variableName": "phoneNumber"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SendOtpCodeMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SendOtpCodeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "25e5756d3ccc8cbb21f44c45fbbfce48",
    "id": null,
    "metadata": {},
    "name": "SendOtpCodeMutation",
    "operationKind": "mutation",
    "text": "mutation SendOtpCodeMutation(\n  $phoneNumber: String!\n) {\n  sendOtpCode(phoneNumber: $phoneNumber) {\n    actionInfo {\n      hasError\n      message\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e5a400519f22e48daf9cd6978c07985a';

module.exports = node;
