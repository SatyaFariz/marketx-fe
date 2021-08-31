/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateMainProductImageMutationVariables = {|
  id: string,
  imageId: string,
|};
export type UpdateMainProductImageMutationResponse = {|
  +updateMainProductImage: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |},
    +product: ?{|
      +id: ?string,
      +images: ?$ReadOnlyArray<?{|
        +id: ?string,
        +url: ?string,
        +display: ?number,
      |}>,
    |},
  |}
|};
export type UpdateMainProductImageMutation = {|
  variables: UpdateMainProductImageMutationVariables,
  response: UpdateMainProductImageMutationResponse,
|};
*/


/*
mutation UpdateMainProductImageMutation(
  $id: String!
  $imageId: String!
) {
  updateMainProductImage(id: $id, imageId: $imageId) {
    actionInfo {
      hasError
      message
    }
    product {
      id
      images {
        id
        url
        display
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
    "name": "imageId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
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
        "name": "imageId",
        "variableName": "imageId"
      }
    ],
    "concreteType": "ActionOnProductPayload",
    "kind": "LinkedField",
    "name": "updateMainProductImage",
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
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "images",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "url",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "display",
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
    "name": "UpdateMainProductImageMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateMainProductImageMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "2d862c9f489faa104f59e9f9c482aa05",
    "id": null,
    "metadata": {},
    "name": "UpdateMainProductImageMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateMainProductImageMutation(\n  $id: String!\n  $imageId: String!\n) {\n  updateMainProductImage(id: $id, imageId: $imageId) {\n    actionInfo {\n      hasError\n      message\n    }\n    product {\n      id\n      images {\n        id\n        url\n        display\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '76f87ab9ec9ac8c61b07ddb2ad4411b0';

module.exports = node;
