/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LogoutMutationVariables = {||};
export type LogoutMutationResponse = {|
  +logout: ?{|
    +hasError: ?boolean,
    +message: ?string,
  |}
|};
export type LogoutMutation = {|
  variables: LogoutMutationVariables,
  response: LogoutMutationResponse,
|};
*/


/*
mutation LogoutMutation {
  logout {
    hasError
    message
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ActionInfo",
    "kind": "LinkedField",
    "name": "logout",
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LogoutMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LogoutMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "c06ec3b7c3af7341256e4c6f6cfed99c",
    "id": null,
    "metadata": {},
    "name": "LogoutMutation",
    "operationKind": "mutation",
    "text": "mutation LogoutMutation {\n  logout {\n    hasError\n    message\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'aa700538b2c3dd0254b398d719dd064d';

module.exports = node;
