/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateProfileInput = {|
  name: string,
  mobileNumber: string,
  email?: ?any,
|};
export type UpdateProfileMutationVariables = {|
  otpCode?: ?string,
  input: UpdateProfileInput,
|};
export type UpdateProfileMutationResponse = {|
  +updateProfile: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |},
    +user: ?{|
      +id: ?string,
      +name: ?string,
      +mobileNumber: ?string,
      +profilePicture: ?{|
        +id: ?string,
        +url: ?string,
      |},
    |},
  |}
|};
export type UpdateProfileMutation = {|
  variables: UpdateProfileMutationVariables,
  response: UpdateProfileMutationResponse,
|};
*/


/*
mutation UpdateProfileMutation(
  $otpCode: String
  $input: UpdateProfileInput!
) {
  updateProfile(otpCode: $otpCode, input: $input) {
    actionInfo {
      hasError
      message
    }
    user {
      id
      name
      mobileNumber
      profilePicture {
        id
        url
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "otpCode"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      },
      {
        "kind": "Variable",
        "name": "otpCode",
        "variableName": "otpCode"
      }
    ],
    "concreteType": "ActionOnUserPayload",
    "kind": "LinkedField",
    "name": "updateProfile",
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
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "mobileNumber",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "profilePicture",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "url",
                "storageKey": null
              }
            ],
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
    "name": "UpdateProfileMutation",
    "selections": (v3/*: any*/),
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
    "name": "UpdateProfileMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "5ad6ca892fe6bd623dadef8d7b079a87",
    "id": null,
    "metadata": {},
    "name": "UpdateProfileMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateProfileMutation(\n  $otpCode: String\n  $input: UpdateProfileInput!\n) {\n  updateProfile(otpCode: $otpCode, input: $input) {\n    actionInfo {\n      hasError\n      message\n    }\n    user {\n      id\n      name\n      mobileNumber\n      profilePicture {\n        id\n        url\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '38af87ceb180f427bcd74645811e681c';

module.exports = node;
