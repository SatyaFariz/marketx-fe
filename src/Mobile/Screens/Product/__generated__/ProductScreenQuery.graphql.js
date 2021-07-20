/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProductScreen_product$ref = any;
export type ProductScreenQueryVariables = {|
  id: string
|};
export type ProductScreenQueryResponse = {|
  +product: ?{|
    +id: ?string,
    +$fragmentRefs: ProductScreen_product$ref,
  |}
|};
export type ProductScreenQuery = {|
  variables: ProductScreenQueryVariables,
  response: ProductScreenQueryResponse,
|};
*/


/*
query ProductScreenQuery(
  $id: String!
) {
  product(id: $id) {
    id
    ...ProductScreen_product
  }
}

fragment ProductScreen_product on Product {
  id
  name
  price
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
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
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
    "name": "ProductScreenQuery",
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
            "name": "ProductScreen_product"
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
    "name": "ProductScreenQuery",
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
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "price",
            "storageKey": null
          },
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
    "cacheID": "c004e4e802dcfb5ea105049f78e77c9d",
    "id": null,
    "metadata": {},
    "name": "ProductScreenQuery",
    "operationKind": "query",
    "text": "query ProductScreenQuery(\n  $id: String!\n) {\n  product(id: $id) {\n    id\n    ...ProductScreen_product\n  }\n}\n\nfragment ProductScreen_product on Product {\n  id\n  name\n  price\n  images {\n    id\n    url\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd3040c209754b15ab0f7ed5b42ecf79e';

module.exports = node;
