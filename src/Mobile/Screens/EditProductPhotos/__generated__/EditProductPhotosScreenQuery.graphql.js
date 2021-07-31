/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EditProductPhotosScreen_product$ref = any;
export type EditProductPhotosScreenQueryVariables = {|
  productId: string
|};
export type EditProductPhotosScreenQueryResponse = {|
  +product: ?{|
    +id: ?string,
    +$fragmentRefs: EditProductPhotosScreen_product$ref,
  |}
|};
export type EditProductPhotosScreenQuery = {|
  variables: EditProductPhotosScreenQueryVariables,
  response: EditProductPhotosScreenQueryResponse,
|};
*/


/*
query EditProductPhotosScreenQuery(
  $productId: String!
) {
  product(id: $productId) {
    id
    ...EditProductPhotosScreen_product
  }
}

fragment EditProductPhotosScreen_product on Product {
  id
  images {
    id
    url
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "productId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "productId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EditProductPhotosScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Product",
        "kind": "LinkedField",
        "name": "product",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "EditProductPhotosScreen_product"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditProductPhotosScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Product",
        "kind": "LinkedField",
        "name": "product",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "images",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "url",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5c5fa10d7d8c8ee8ff881bb55d7f95d9",
    "id": null,
    "metadata": {},
    "name": "EditProductPhotosScreenQuery",
    "operationKind": "query",
    "text": "query EditProductPhotosScreenQuery(\n  $productId: String!\n) {\n  product(id: $productId) {\n    id\n    ...EditProductPhotosScreen_product\n  }\n}\n\nfragment EditProductPhotosScreen_product on Product {\n  id\n  images {\n    id\n    url\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4aafbe388caeb589e53730a43560a916';

module.exports = node;
