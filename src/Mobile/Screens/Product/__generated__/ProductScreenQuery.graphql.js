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
  desc
  price
  images {
    id
    url
  }
  category {
    id
    name
  }
  rentalPeriodUnit {
    display
    id
  }
  specs {
    id
    attribute {
      id
      name
      icon {
        id
        url
      }
    }
    value
  }
  merchant {
    id
    name
    profilePicture {
      id
      url
    }
  }
  store {
    id
    name
    whatsappLink
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
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
];
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
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "desc",
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
            "selections": (v4/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Category",
            "kind": "LinkedField",
            "name": "category",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Unit",
            "kind": "LinkedField",
            "name": "rentalPeriodUnit",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "display",
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Specification",
            "kind": "LinkedField",
            "name": "specs",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Attribute",
                "kind": "LinkedField",
                "name": "attribute",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Image",
                    "kind": "LinkedField",
                    "name": "icon",
                    "plural": false,
                    "selections": (v4/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "value",
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
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "profilePicture",
                "plural": false,
                "selections": (v4/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Store",
            "kind": "LinkedField",
            "name": "store",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "whatsappLink",
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
    "cacheID": "b701e89b71d5eacaa6eb8f918385ea16",
    "id": null,
    "metadata": {},
    "name": "ProductScreenQuery",
    "operationKind": "query",
    "text": "query ProductScreenQuery(\n  $id: String!\n) {\n  product(id: $id) {\n    id\n    ...ProductScreen_product\n  }\n}\n\nfragment ProductScreen_product on Product {\n  id\n  name\n  desc\n  price\n  images {\n    id\n    url\n  }\n  category {\n    id\n    name\n  }\n  rentalPeriodUnit {\n    display\n    id\n  }\n  specs {\n    id\n    attribute {\n      id\n      name\n      icon {\n        id\n        url\n      }\n    }\n    value\n  }\n  merchant {\n    id\n    name\n    profilePicture {\n      id\n      url\n    }\n  }\n  store {\n    id\n    name\n    whatsappLink\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd3040c209754b15ab0f7ed5b42ecf79e';

module.exports = node;
