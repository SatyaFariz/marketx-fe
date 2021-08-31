/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteProductMutationVariables = {|
  id: string
|};
export type DeleteProductMutationResponse = {|
  +deleteProduct: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |},
    +product: ?{|
      +id: ?string,
      +isDeleted: ?boolean,
    |},
  |}
|};
export type DeleteProductMutation = {|
  variables: DeleteProductMutationVariables,
  response: DeleteProductMutationResponse,
|};
*/


/*
mutation DeleteProductMutation(
  $id: String!
) {
  deleteProduct(id: $id) {
    actionInfo {
      hasError
      message
    }
    product {
      id
      isDeleted
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
    "name": "deleteProduct",
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
            "name": "isDeleted",
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
    "name": "DeleteProductMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteProductMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2746f3e3de818da788daf62a8b96ce15",
    "id": null,
    "metadata": {},
    "name": "DeleteProductMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteProductMutation(\n  $id: String!\n) {\n  deleteProduct(id: $id) {\n    actionInfo {\n      hasError\n      message\n    }\n    product {\n      id\n      isDeleted\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ec8f3ddb5fcf444a3ee20617ee133774';

module.exports = node;
