/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddressInput = {|
  fullAddress: string,
  lat?: ?number,
  lng?: ?number,
  provinceId: number,
  cityId: number,
  districtId: number,
|};
export type CreateStoreMutationVariables = {|
  name: string,
  whatsappNumber: string,
  address: AddressInput,
|};
export type CreateStoreMutationResponse = {|
  +createStore: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |},
    +store: ?{|
      +id: ?string
    |},
  |}
|};
export type CreateStoreMutation = {|
  variables: CreateStoreMutationVariables,
  response: CreateStoreMutationResponse,
|};
*/


/*
mutation CreateStoreMutation(
  $name: String!
  $whatsappNumber: String!
  $address: AddressInput!
) {
  createStore(name: $name, whatsappNumber: $whatsappNumber, address: $address) {
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
  "name": "name"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "whatsappNumber"
},
v3 = [
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
    "name": "createStore",
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
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateStoreMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateStoreMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "228b14da34aaf775b053ff2ea558054b",
    "id": null,
    "metadata": {},
    "name": "CreateStoreMutation",
    "operationKind": "mutation",
    "text": "mutation CreateStoreMutation(\n  $name: String!\n  $whatsappNumber: String!\n  $address: AddressInput!\n) {\n  createStore(name: $name, whatsappNumber: $whatsappNumber, address: $address) {\n    actionInfo {\n      hasError\n      message\n    }\n    store {\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1bafb9f442a9b63a68b74b451aceffc9';

module.exports = node;
