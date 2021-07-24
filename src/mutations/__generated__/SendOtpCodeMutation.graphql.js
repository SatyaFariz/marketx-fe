/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SendOtpCodeMutationVariables = {|
  mobileNumber: string
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
) {
  sendOtpCode(mobileNumber: $mobileNumber) {
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
    "name": "mobileNumber"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
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
    "cacheID": "5fba4758216e54de5f740756eb848cc9",
    "id": null,
    "metadata": {},
    "name": "SendOtpCodeMutation",
    "operationKind": "mutation",
    "text": "mutation SendOtpCodeMutation(\n  $mobileNumber: String!\n) {\n  sendOtpCode(mobileNumber: $mobileNumber) {\n    actionInfo {\n      hasError\n      message\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '58c84a4ed655ab10382bdd896bcc68a8';

module.exports = node;
