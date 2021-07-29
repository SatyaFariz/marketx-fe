/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CreateProductScreen_category$ref = any;
export type CreateProductScreenQueryVariables = {|
  categoryId: string
|};
export type CreateProductScreenQueryResponse = {|
  +category: ?{|
    +id: ?string,
    +$fragmentRefs: CreateProductScreen_category$ref,
  |}
|};
export type CreateProductScreenQuery = {|
  variables: CreateProductScreenQueryVariables,
  response: CreateProductScreenQueryResponse,
|};
*/


/*
query CreateProductScreenQuery(
  $categoryId: String!
) {
  category(id: $categoryId) {
    id
    ...CreateProductScreen_category
  }
}

fragment CreateProductScreen_category on Category {
  id
  name
  specFields {
    id
    attribute {
      id
      name
    }
    isRequired
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "categoryId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "categoryId"
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateProductScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Category",
        "kind": "LinkedField",
        "name": "category",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CreateProductScreen_category"
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
    "name": "CreateProductScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Category",
        "kind": "LinkedField",
        "name": "category",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "SpecificationField",
            "kind": "LinkedField",
            "name": "specFields",
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
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isRequired",
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
    "cacheID": "7878d72ab9b79e584683543f7dd32c3b",
    "id": null,
    "metadata": {},
    "name": "CreateProductScreenQuery",
    "operationKind": "query",
    "text": "query CreateProductScreenQuery(\n  $categoryId: String!\n) {\n  category(id: $categoryId) {\n    id\n    ...CreateProductScreen_category\n  }\n}\n\nfragment CreateProductScreen_category on Category {\n  id\n  name\n  specFields {\n    id\n    attribute {\n      id\n      name\n    }\n    isRequired\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ca1aba0b75a682b0785e9287da78071b';

module.exports = node;
