/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddressInput = {|
  fullAddress: string,
  lat: number,
  lng: number,
|};
export type UpdateStoreAddressMutationVariables = {|
  id: string,
  address: AddressInput,
|};
export type UpdateStoreAddressMutationResponse = {|
  +updateStoreAddress: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |},
    +store: ?{|
      +id: ?string
    |},
  |}
|};
export type UpdateStoreAddressMutation = {|
  variables: UpdateStoreAddressMutationVariables,
  response: UpdateStoreAddressMutationResponse,
|};
*/


/*
mutation UpdateStoreAddressMutation(
  $id: String!
  $address: AddressInput!
) {
  updateStoreAddress(id: $id, address: $address) {
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
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "address"
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
        "name": "address",
        "variableName": "address"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "ActionOnStorePayload",
    "kind": "LinkedField",
    "name": "updateStoreAddress",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateStoreAddressMutation",
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
    "name": "UpdateStoreAddressMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "84b91c11726184eafceaad3c9b7711ac",
    "id": null,
    "metadata": {},
    "name": "UpdateStoreAddressMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateStoreAddressMutation(\n  $id: String!\n  $address: AddressInput!\n) {\n  updateStoreAddress(id: $id, address: $address) {\n    actionInfo {\n      hasError\n      message\n    }\n    store {\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b5ca92bec689e1d25051d4b12d59c95f';

module.exports = node;
