/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EditProductPhotosScreen_me$ref = any;
type EditProductPhotosScreen_product$ref = any;
export type EditProductPhotosScreenQueryVariables = {|
  productId: string
|};
export type EditProductPhotosScreenQueryResponse = {|
  +product: ?{|
    +id: ?string,
    +$fragmentRefs: EditProductPhotosScreen_product$ref,
  |},
  +me: ?{|
    +id: ?string,
    +$fragmentRefs: EditProductPhotosScreen_me$ref,
  |},
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
  me {
    id
    ...EditProductPhotosScreen_me
  }
}

fragment EditProductPhotosScreen_me on User {
  id
}

fragment EditProductPhotosScreen_product on Product {
  id
  images {
    id
    url
  }
  merchant {
    id
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
},
v3 = [
  (v2/*: any*/)
];
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "EditProductPhotosScreen_me"
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
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "merchant",
            "plural": false,
            "selections": (v3/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3f7afcb3afaee04ba2b279d007da7cfe",
    "id": null,
    "metadata": {},
    "name": "EditProductPhotosScreenQuery",
    "operationKind": "query",
    "text": "query EditProductPhotosScreenQuery(\n  $productId: String!\n) {\n  product(id: $productId) {\n    id\n    ...EditProductPhotosScreen_product\n  }\n  me {\n    id\n    ...EditProductPhotosScreen_me\n  }\n}\n\nfragment EditProductPhotosScreen_me on User {\n  id\n}\n\nfragment EditProductPhotosScreen_product on Product {\n  id\n  images {\n    id\n    url\n  }\n  merchant {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '189b67543ed5f6531d4e82d884eae522';

module.exports = node;
