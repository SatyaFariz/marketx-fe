/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateStoreMutationVariables = {|
  id: string,
  name: string,
  whatsappNumber: string,
|};
export type UpdateStoreMutationResponse = {|
  +updateStore: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |},
    +store: ?{|
      +id: ?string
    |},
  |}
|};
export type UpdateStoreMutation = {|
  variables: UpdateStoreMutationVariables,
  response: UpdateStoreMutationResponse,
|};
*/


/*
mutation UpdateStoreMutation(
  $id: String!
  $name: String!
  $whatsappNumber: String!
) {
  updateStore(id: $id, name: $name, whatsappNumber: $whatsappNumber) {
    actionInfo {
      hasError
      message
    }
    store {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "whatsappNumber"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "whatsappNumber",
        "variableName": "whatsappNumber"
      }
    ],
    "concreteType": "ActionOnStorePayload",
    "kind": "LinkedField",
    "name": "updateStore",
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
        "concreteType": "Store",
        "kind": "LinkedField",
        "name": "store",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
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
    "name": "UpdateStoreMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateStoreMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "cc953e0b8d7529e69b3967c3f7194439",
    "id": null,
    "metadata": {},
    "name": "UpdateStoreMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateStoreMutation(\n  $id: String!\n  $name: String!\n  $whatsappNumber: String!\n) {\n  updateStore(id: $id, name: $name, whatsappNumber: $whatsappNumber) {\n    actionInfo {\n      hasError\n      message\n    }\n    store {\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e019c29b1670b4df0f236eebeded51a5';

module.exports = node;
