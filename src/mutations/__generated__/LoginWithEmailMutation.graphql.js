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
    |}
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
v1 = [
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
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginWithEmailMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "fe1e9b80656e0c509e9de540f0851cd9",
    "id": null,
    "metadata": {},
    "name": "LoginWithEmailMutation",
    "operationKind": "mutation",
    "text": "mutation LoginWithEmailMutation(\n  $email: String!\n  $password: String!\n) {\n  loginWithEmail(email: $email, password: $password) {\n    actionInfo {\n      hasError\n      message\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ba33de16d8ec5be56ce0d9ba0c8b7abd';

module.exports = node;
