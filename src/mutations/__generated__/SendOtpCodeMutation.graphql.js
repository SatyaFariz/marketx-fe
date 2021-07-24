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
    +hasError: ?boolean,
    +message: ?string,
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
    "concreteType": "ActionInfo",
    "kind": "LinkedField",
    "name": "sendOtpCode",
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
    "cacheID": "352bce45c62693763de118c0afbe77ec",
    "id": null,
    "metadata": {},
    "name": "SendOtpCodeMutation",
    "operationKind": "mutation",
    "text": "mutation SendOtpCodeMutation(\n  $phoneNumber: String!\n) {\n  sendOtpCode(phoneNumber: $phoneNumber) {\n    hasError\n    message\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5c9aa87a584e8c4b9183ffffe30a43ff';

module.exports = node;
