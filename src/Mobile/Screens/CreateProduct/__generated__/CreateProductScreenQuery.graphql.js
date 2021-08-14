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
type CreateProductScreen_rentalDurations$ref = any;
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
  +rentalDurations: ?$ReadOnlyArray<?{|
    +$fragmentRefs: CreateProductScreen_rentalDurations$ref
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
  rentalDurations {
    ...CreateProductScreen_rentalDurations
    id
  }
}

fragment CreateProductScreen_category on Category {
  id
  name
  path
  requiresProductCondition
  showsProductConditionField
  listingType
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

fragment CreateProductScreen_rentalDurations on Unit {
  id
  display
  name
  value
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
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "display",
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Unit",
        "kind": "LinkedField",
        "name": "rentalDurations",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CreateProductScreen_rentalDurations"
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
            "kind": "ScalarField",
            "name": "listingType",
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
          (v5/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Unit",
        "kind": "LinkedField",
        "name": "rentalDurations",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v5/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "value",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6cec8e49dab32c738d8c3c2ee3c384f0",
    "id": null,
    "metadata": {},
    "name": "CreateProductScreenQuery",
    "operationKind": "query",
    "text": "query CreateProductScreenQuery(\n  $categoryId: String!\n) {\n  category(id: $categoryId) {\n    id\n    ...CreateProductScreen_category\n  }\n  me {\n    id\n    ...CreateProductScreen_me\n  }\n  productConditions {\n    ...CreateProductScreen_productConditions\n    id\n  }\n  rentalDurations {\n    ...CreateProductScreen_rentalDurations\n    id\n  }\n}\n\nfragment CreateProductScreen_category on Category {\n  id\n  name\n  path\n  requiresProductCondition\n  showsProductConditionField\n  listingType\n  ancestors {\n    id\n    name\n  }\n  specFields {\n    id\n    attribute {\n      id\n      name\n    }\n    isAutocomplete\n    isRequired\n    type\n    max\n    min\n    options\n    isEnum\n  }\n}\n\nfragment CreateProductScreen_me on User {\n  id\n  store {\n    id\n  }\n}\n\nfragment CreateProductScreen_productConditions on ProductCondition {\n  id\n  display\n}\n\nfragment CreateProductScreen_rentalDurations on Unit {\n  id\n  display\n  name\n  value\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8df1e86c63d6c934a9239d3bc464d7a9';

module.exports = node;
