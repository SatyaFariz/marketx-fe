/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CreateProductScreen_category$ref = any;
type CreateProductScreen_me$ref = any;
type CreateProductScreen_productConditions$ref = any;
export type CreateProductScreenQueryVariables = {|
  categoryId: string
|};
export type CreateProductScreenQueryResponse = {|
  +category: ?{|
    +id: ?string,
    +$fragmentRefs: CreateProductScreen_category$ref,
  |},
  +me: ?{|
    +id: ?string,
    +$fragmentRefs: CreateProductScreen_me$ref,
  |},
  +productConditions: ?$ReadOnlyArray<?{|
    +$fragmentRefs: CreateProductScreen_productConditions$ref
  |}>,
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
  me {
    id
    ...CreateProductScreen_me
  }
  productConditions {
    ...CreateProductScreen_productConditions
    id
  }
}

fragment CreateProductScreen_category on Category {
  id
  name
  path
  requiresProductCondition
  showsProductConditionField
  ancestors {
    id
    name
  }
  specFields {
    id
    attribute {
      id
      name
    }
    isAutocomplete
    isRequired
    type
    max
    min
    options
    isEnum
  }
}

fragment CreateProductScreen_me on User {
  id
  store {
    id
  }
}

fragment CreateProductScreen_productConditions on ProductCondition {
  id
  display
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
},
v4 = [
  (v2/*: any*/),
  (v3/*: any*/)
];
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
            "name": "CreateProductScreen_me"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "ProductCondition",
        "kind": "LinkedField",
        "name": "productConditions",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CreateProductScreen_productConditions"
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
            "kind": "ScalarField",
            "name": "path",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "requiresProductCondition",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "showsProductConditionField",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Category",
            "kind": "LinkedField",
            "name": "ancestors",
            "plural": true,
            "selections": (v4/*: any*/),
            "storageKey": null
          },
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
                "selections": (v4/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isAutocomplete",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isRequired",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "type",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "max",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "min",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "options",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isEnum",
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
            "concreteType": "Store",
            "kind": "LinkedField",
            "name": "store",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "ProductCondition",
        "kind": "LinkedField",
        "name": "productConditions",
        "plural": true,
        "selections": [
          (v2/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "b2107aa9dc72529dfbf774b901cb41e8",
    "id": null,
    "metadata": {},
    "name": "CreateProductScreenQuery",
    "operationKind": "query",
    "text": "query CreateProductScreenQuery(\n  $categoryId: String!\n) {\n  category(id: $categoryId) {\n    id\n    ...CreateProductScreen_category\n  }\n  me {\n    id\n    ...CreateProductScreen_me\n  }\n  productConditions {\n    ...CreateProductScreen_productConditions\n    id\n  }\n}\n\nfragment CreateProductScreen_category on Category {\n  id\n  name\n  path\n  requiresProductCondition\n  showsProductConditionField\n  ancestors {\n    id\n    name\n  }\n  specFields {\n    id\n    attribute {\n      id\n      name\n    }\n    isAutocomplete\n    isRequired\n    type\n    max\n    min\n    options\n    isEnum\n  }\n}\n\nfragment CreateProductScreen_me on User {\n  id\n  store {\n    id\n  }\n}\n\nfragment CreateProductScreen_productConditions on ProductCondition {\n  id\n  display\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6879bafc21705ea3efb77ef4006bcf22';

module.exports = node;
