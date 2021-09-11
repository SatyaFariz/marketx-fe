/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RegisterWithEmailMutationVariables = {|
  email: any,
  password: string,
  verificationCode: string,
  name: string,
|};
export type RegisterWithEmailMutationResponse = {|
  +registerWithEmail: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |}
  |}
|};
export type RegisterWithEmailMutation = {|
  variables: RegisterWithEmailMutationVariables,
  response: RegisterWithEmailMutationResponse,
|};
*/


/*
mutation RegisterWithEmailMutation(
  $email: Email!
  $password: String!
  $verificationCode: String!
  $name: String!
) {
  registerWithEmail(email: $email, password: $password, name: $name, verificationCode: $verificationCode) {
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
  "name": "email"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "verificationCode"
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      },
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      },
      {
        "kind": "Variable",
        "name": "verificationCode",
        "variableName": "verificationCode"
      }
    ],
    "concreteType": "ActionOnUserPayload",
    "kind": "LinkedField",
    "name": "registerWithEmail",
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
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RegisterWithEmailMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "RegisterWithEmailMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "14fb9397b3b9076e9b84e584c3a9cc63",
    "id": null,
    "metadata": {},
    "name": "RegisterWithEmailMutation",
    "operationKind": "mutation",
    "text": "mutation RegisterWithEmailMutation(\n  $email: Email!\n  $password: String!\n  $verificationCode: String!\n  $name: String!\n) {\n  registerWithEmail(email: $email, password: $password, name: $name, verificationCode: $verificationCode) {\n    actionInfo {\n      hasError\n      message\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1b827e1d7e4a08742b31e02820ac3b22';

module.exports = node;
