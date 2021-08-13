/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UnsuspendProductMutationVariables = {|
  id: string
|};
export type UnsuspendProductMutationResponse = {|
  +unsuspendProduct: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |},
    +product: ?{|
      +id: ?string,
      +isSuspended: ?boolean,
    |},
  |}
|};
export type UnsuspendProductMutation = {|
  variables: UnsuspendProductMutationVariables,
  response: UnsuspendProductMutationResponse,
|};
*/


/*
mutation UnsuspendProductMutation(
  $id: String!
) {
  unsuspendProduct(id: $id) {
    actionInfo {
      hasError
      message
    }
    product {
      id
      isSuspended
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
      }
    ],
    "concreteType": "ActionOnProductPayload",
    "kind": "LinkedField",
    "name": "unsuspendProduct",
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
        "concreteType": "Product",
        "kind": "LinkedField",
        "name": "product",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isSuspended",
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
    "name": "UnsuspendProductMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UnsuspendProductMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c4899fc4ffbe53c845f97e2c51372a73",
    "id": null,
    "metadata": {},
    "name": "UnsuspendProductMutation",
    "operationKind": "mutation",
    "text": "mutation UnsuspendProductMutation(\n  $id: String!\n) {\n  unsuspendProduct(id: $id) {\n    actionInfo {\n      hasError\n      message\n    }\n    product {\n      id\n      isSuspended\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9321188f34f35a0cecdffaaf11473a69';

module.exports = node;
