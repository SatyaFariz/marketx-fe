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
  whatsappVerificationCode: string,
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
  $whatsappVerificationCode: String!
  $address: AddressInput!
) {
  createStore(name: $name, whatsappNumber: $whatsappNumber, whatsappVerificationCode: $whatsappVerificationCode, address: $address) {
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
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "whatsappVerificationCode"
},
v4 = [
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
      },
      {
        "kind": "Variable",
        "name": "whatsappVerificationCode",
        "variableName": "whatsappVerificationCode"
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
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateStoreMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateStoreMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "b016b5b40056716e566fe4cc61561aa0",
    "id": null,
    "metadata": {},
    "name": "CreateStoreMutation",
    "operationKind": "mutation",
    "text": "mutation CreateStoreMutation(\n  $name: String!\n  $whatsappNumber: String!\n  $whatsappVerificationCode: String!\n  $address: AddressInput!\n) {\n  createStore(name: $name, whatsappNumber: $whatsappNumber, whatsappVerificationCode: $whatsappVerificationCode, address: $address) {\n    actionInfo {\n      hasError\n      message\n    }\n    store {\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '95a1e2d55b52a97378bd15072cdc5b27';

module.exports = node;
