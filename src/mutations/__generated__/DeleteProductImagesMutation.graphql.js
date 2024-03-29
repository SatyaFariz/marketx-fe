/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteProductImagesMutationVariables = {|
  id: string,
  imageIds: $ReadOnlyArray<string>,
|};
export type DeleteProductImagesMutationResponse = {|
  +deleteProductImages: ?{|
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
export type DeleteProductImagesMutation = {|
  variables: DeleteProductImagesMutationVariables,
  response: DeleteProductImagesMutationResponse,
|};
*/


/*
mutation DeleteProductImagesMutation(
  $id: String!
  $imageIds: [String!]!
) {
  deleteProductImages(id: $id, imageIds: $imageIds) {
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
    "name": "imageIds"
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
        "name": "imageIds",
        "variableName": "imageIds"
      }
    ],
    "concreteType": "ActionOnProductPayload",
    "kind": "LinkedField",
    "name": "deleteProductImages",
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
    "name": "DeleteProductImagesMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteProductImagesMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "2bb6aa3e08b6dd08bf8d17e1a4f3dc02",
    "id": null,
    "metadata": {},
    "name": "DeleteProductImagesMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteProductImagesMutation(\n  $id: String!\n  $imageIds: [String!]!\n) {\n  deleteProductImages(id: $id, imageIds: $imageIds) {\n    actionInfo {\n      hasError\n      message\n    }\n    product {\n      id\n      images {\n        id\n        url\n        display\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '98d483e0030e91dc26aa24532fef5232';

module.exports = node;
