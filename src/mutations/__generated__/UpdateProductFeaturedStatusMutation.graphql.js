/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateProductFeaturedStatusMutationVariables = {|
  id: string,
  isFeatured: boolean,
|};
export type UpdateProductFeaturedStatusMutationResponse = {|
  +updateProductFeaturedStatus: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |},
    +product: ?{|
      +id: ?string,
      +isFeatured: ?boolean,
    |},
  |}
|};
export type UpdateProductFeaturedStatusMutation = {|
  variables: UpdateProductFeaturedStatusMutationVariables,
  response: UpdateProductFeaturedStatusMutationResponse,
|};
*/


/*
mutation UpdateProductFeaturedStatusMutation(
  $id: String!
  $isFeatured: Boolean!
) {
  updateProductFeaturedStatus(id: $id, isFeatured: $isFeatured) {
    actionInfo {
      hasError
      message
    }
    product {
      id
      isFeatured
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
    "name": "isFeatured"
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
        "name": "isFeatured",
        "variableName": "isFeatured"
      }
    ],
    "concreteType": "ActionOnProductPayload",
    "kind": "LinkedField",
    "name": "updateProductFeaturedStatus",
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
            "name": "isFeatured",
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
    "name": "UpdateProductFeaturedStatusMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateProductFeaturedStatusMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "675d9c5cc413cf2c6e1dc198c5fcf9d0",
    "id": null,
    "metadata": {},
    "name": "UpdateProductFeaturedStatusMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateProductFeaturedStatusMutation(\n  $id: String!\n  $isFeatured: Boolean!\n) {\n  updateProductFeaturedStatus(id: $id, isFeatured: $isFeatured) {\n    actionInfo {\n      hasError\n      message\n    }\n    product {\n      id\n      isFeatured\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'de07402a499682e7d08181dec6a4dd0a';

module.exports = node;
