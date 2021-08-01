/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddProductImagesMutationVariables = {|
  id: string
|};
export type AddProductImagesMutationResponse = {|
  +addProductImages: ?{|
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
export type AddProductImagesMutation = {|
  variables: AddProductImagesMutationVariables,
  response: AddProductImagesMutationResponse,
|};
*/


/*
mutation AddProductImagesMutation(
  $id: String!
) {
  addProductImages(id: $id) {
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
      }
    ],
    "concreteType": "ActionOnProductPayload",
    "kind": "LinkedField",
    "name": "addProductImages",
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
    "name": "AddProductImagesMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddProductImagesMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "5d35a079ea8b8443638713bd6851f030",
    "id": null,
    "metadata": {},
    "name": "AddProductImagesMutation",
    "operationKind": "mutation",
    "text": "mutation AddProductImagesMutation(\n  $id: String!\n) {\n  addProductImages(id: $id) {\n    actionInfo {\n      hasError\n      message\n    }\n    product {\n      id\n      images {\n        id\n        url\n        display\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5d2d3508580b3fec26913394ebd10424';

module.exports = node;
