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
  isForBusiness: boolean,
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
  $isForBusiness: Boolean!
  $address: AddressInput!
) {
  createStore(name: $name, whatsappNumber: $whatsappNumber, whatsappVerificationCode: $whatsappVerificationCode, isForBusiness: $isForBusiness, address: $address) {
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
  "name": "isForBusiness"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "whatsappNumber"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "whatsappVerificationCode"
},
v5 = [
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
        "name": "isForBusiness",
        "variableName": "isForBusiness"
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
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateStoreMutation",
    "selections": (v5/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateStoreMutation",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "f9b78bfbf89fb68e22e2edae80e973c9",
    "id": null,
    "metadata": {},
    "name": "CreateStoreMutation",
    "operationKind": "mutation",
    "text": "mutation CreateStoreMutation(\n  $name: String!\n  $whatsappNumber: String!\n  $whatsappVerificationCode: String!\n  $isForBusiness: Boolean!\n  $address: AddressInput!\n) {\n  createStore(name: $name, whatsappNumber: $whatsappNumber, whatsappVerificationCode: $whatsappVerificationCode, isForBusiness: $isForBusiness, address: $address) {\n    actionInfo {\n      hasError\n      message\n    }\n    store {\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '958f5e06998119107deac04d7582641d';

module.exports = node;
