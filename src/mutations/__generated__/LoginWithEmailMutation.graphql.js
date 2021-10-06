/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LoginWithEmailMutationVariables = {|
  email: string,
  password: string,
|};
export type LoginWithEmailMutationResponse = {|
  +loginWithEmail: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |},
    +user: ?{|
      +id: ?string,
      +store: ?{|
        +id: ?string
      |},
    |},
  |}
|};
export type LoginWithEmailMutation = {|
  variables: LoginWithEmailMutationVariables,
  response: LoginWithEmailMutationResponse,
|};
*/


/*
mutation LoginWithEmailMutation(
  $email: String!
  $password: String!
) {
  loginWithEmail(email: $email, password: $password) {
    actionInfo {
      hasError
      message
    }
    user {
      id
      store {
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
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
        "name": "password",
        "variableName": "password"
      }
    ],
    "concreteType": "ActionOnUserPayload",
    "kind": "LinkedField",
    "name": "loginWithEmail",
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
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Store",
            "kind": "LinkedField",
            "name": "store",
            "plural": false,
            "selections": [
              (v1/*: any*/)
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LoginWithEmailMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginWithEmailMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "4efc2da028d056762487f4456adba417",
    "id": null,
    "metadata": {},
    "name": "LoginWithEmailMutation",
    "operationKind": "mutation",
    "text": "mutation LoginWithEmailMutation(\n  $email: String!\n  $password: String!\n) {\n  loginWithEmail(email: $email, password: $password) {\n    actionInfo {\n      hasError\n      message\n    }\n    user {\n      id\n      store {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e7a0e2ae8092f91af9b9c6dc4d6049b3';

module.exports = node;
