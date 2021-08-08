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
) {
  updateStore(id: $id, name: $name, whatsappNumber: $whatsappNumber) {
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "administrativeAreaId",
    "storageKey": null
  },
  (v1/*: any*/)
],
v3 = [
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
          },
          (v1/*: any*/),
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
                "selections": (v2/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "AdministrativeArea",
                "kind": "LinkedField",
                "name": "city",
                "plural": false,
                "selections": (v2/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "AdministrativeArea",
                "kind": "LinkedField",
                "name": "district",
                "plural": false,
                "selections": (v2/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateStoreMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateStoreMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "406c30a874c3e5d8c9dfe43ad86f177f",
    "id": null,
    "metadata": {},
    "name": "UpdateStoreMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateStoreMutation(\n  $id: String!\n  $name: String!\n  $whatsappNumber: String!\n) {\n  updateStore(id: $id, name: $name, whatsappNumber: $whatsappNumber) {\n    actionInfo {\n      hasError\n      message\n    }\n    store {\n      id\n      name\n      whatsappNumber\n      address {\n        fullAddress\n        province {\n          administrativeAreaId\n          name\n        }\n        city {\n          administrativeAreaId\n          name\n        }\n        district {\n          administrativeAreaId\n          name\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a1e4e5d02ba99542a0c111250b2f0dc3';

module.exports = node;
