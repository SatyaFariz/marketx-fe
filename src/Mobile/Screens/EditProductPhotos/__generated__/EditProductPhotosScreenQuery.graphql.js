/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EditProductPhotosScreen_me$ref = any;
type EditProductPhotosScreen_product$ref = any;
type FixedAddressBar_me$ref = any;
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
    +$fragmentRefs: EditProductPhotosScreen_me$ref & FixedAddressBar_me$ref,
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
    ...FixedAddressBar_me
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
  category {
    id
    maxImageUpload
  }
}

fragment FixedAddressBar_me on User {
  id
  isAdmin
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
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FixedAddressBar_me"
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
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Category",
            "kind": "LinkedField",
            "name": "category",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "maxImageUpload",
                "storageKey": null
              }
            ],
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
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isAdmin",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f8a7e4bbd3bfd4afe5dca6a7c878f7fc",
    "id": null,
    "metadata": {},
    "name": "EditProductPhotosScreenQuery",
    "operationKind": "query",
    "text": "query EditProductPhotosScreenQuery(\n  $productId: String!\n) {\n  product(id: $productId) {\n    id\n    ...EditProductPhotosScreen_product\n  }\n  me {\n    id\n    ...EditProductPhotosScreen_me\n    ...FixedAddressBar_me\n  }\n}\n\nfragment EditProductPhotosScreen_me on User {\n  id\n}\n\nfragment EditProductPhotosScreen_product on Product {\n  id\n  images {\n    id\n    url\n  }\n  merchant {\n    id\n  }\n  category {\n    id\n    maxImageUpload\n  }\n}\n\nfragment FixedAddressBar_me on User {\n  id\n  isAdmin\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '24bddaf3cec40f7038c5f2df88dbd0f3';

module.exports = node;
