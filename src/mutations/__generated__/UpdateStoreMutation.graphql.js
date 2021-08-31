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
export type UpdateStoreMutationVariables = {|
  id: string,
  name: string,
  whatsappNumber: string,
  address: AddressInput,
|};
export type UpdateStoreMutationResponse = {|
  +updateStore: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |},
    +store: ?{|
      +id: ?string,
      +name: ?string,
      +whatsappNumber: ?string,
      +address: ?{|
        +fullAddress: ?string,
        +province: ?{|
          +administrativeAreaId: ?number,
          +name: ?string,
        |},
        +city: ?{|
          +administrativeAreaId: ?number,
          +name: ?string,
        |},
        +district: ?{|
          +administrativeAreaId: ?number,
          +name: ?string,
        |},
      |},
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
  $address: AddressInput!
) {
  updateStore(id: $id, name: $name, whatsappNumber: $whatsappNumber, address: $address) {
    actionInfo {
      hasError
      message
    }
    store {
      id
      name
      whatsappNumber
      address {
        fullAddress
        province {
          administrativeAreaId
          name
        }
        city {
          administrativeAreaId
          name
        }
        district {
          administrativeAreaId
          name
        }
      }
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "administrativeAreaId",
    "storageKey": null
  },
  (v4/*: any*/)
],
v6 = [
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
          },
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "whatsappNumber",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Address",
            "kind": "LinkedField",
            "name": "address",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "fullAddress",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "AdministrativeArea",
                "kind": "LinkedField",
                "name": "province",
                "plural": false,
                "selections": (v5/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "AdministrativeArea",
                "kind": "LinkedField",
                "name": "city",
                "plural": false,
                "selections": (v5/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "AdministrativeArea",
                "kind": "LinkedField",
                "name": "district",
                "plural": false,
                "selections": (v5/*: any*/),
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
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateStoreMutation",
    "selections": (v6/*: any*/),
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
    "name": "UpdateStoreMutation",
    "selections": (v6/*: any*/)
  },
  "params": {
    "cacheID": "cfb11309d8654af8e95e62d969c5a8bf",
    "id": null,
    "metadata": {},
    "name": "UpdateStoreMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateStoreMutation(\n  $id: String!\n  $name: String!\n  $whatsappNumber: String!\n  $address: AddressInput!\n) {\n  updateStore(id: $id, name: $name, whatsappNumber: $whatsappNumber, address: $address) {\n    actionInfo {\n      hasError\n      message\n    }\n    store {\n      id\n      name\n      whatsappNumber\n      address {\n        fullAddress\n        province {\n          administrativeAreaId\n          name\n        }\n        city {\n          administrativeAreaId\n          name\n        }\n        district {\n          administrativeAreaId\n          name\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e1390e1cc091f6bf0f171b5c31db97cc';

module.exports = node;
