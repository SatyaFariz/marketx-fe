/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EditProductScreen_me$ref = any;
type EditProductScreen_product$ref = any;
type EditProductScreen_productConditions$ref = any;
type EditProductScreen_rentalDurations$ref = any;
export type EditProductScreenQueryVariables = {|
  id: string
|};
export type EditProductScreenQueryResponse = {|
  +product: ?{|
    +id: ?string,
    +$fragmentRefs: EditProductScreen_product$ref,
  |},
  +productConditions: ?$ReadOnlyArray<?{|
    +$fragmentRefs: EditProductScreen_productConditions$ref
  |}>,
  +rentalDurations: ?$ReadOnlyArray<?{|
    +$fragmentRefs: EditProductScreen_rentalDurations$ref
  |}>,
  +me: ?{|
    +$fragmentRefs: EditProductScreen_me$ref
  |},
|};
export type EditProductScreenQuery = {|
  variables: EditProductScreenQueryVariables,
  response: EditProductScreenQueryResponse,
|};
*/


/*
query EditProductScreenQuery(
  $id: String!
) {
  product(id: $id) {
    id
    ...EditProductScreen_product
  }
  productConditions {
    ...EditProductScreen_productConditions
    id
  }
  rentalDurations {
    ...EditProductScreen_rentalDurations
    id
  }
  me {
    ...EditProductScreen_me
    id
  }
}

fragment EditProductScreen_me on User {
  id
}

fragment EditProductScreen_product on Product {
  id
  name
  price
  desc
  isPublished
  isDeleted
  images {
    id
    url
  }
  specs {
    id
    attribute {
      id
    }
    value
  }
  condition {
    id
  }
  rentalDuration {
    id
  }
  merchant {
    id
  }
  category {
    id
    name
    requiresProductCondition
    showsProductConditionField
    listingType
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
      isMulti
      prefix
      suffix
      numberOfLines
    }
  }
}

fragment EditProductScreen_productConditions on ProductCondition {
  id
  display
}

fragment EditProductScreen_rentalDurations on Unit {
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
  (v2/*: any*/)
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v6 = {
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
    "name": "EditProductScreenQuery",
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
            "name": "EditProductScreen_product"
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
            "name": "EditProductScreen_productConditions"
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
            "name": "EditProductScreen_rentalDurations"
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
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "EditProductScreen_me"
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
    "name": "EditProductScreenQuery",
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
            "name": "price",
            "storageKey": null
          },
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
            "name": "isPublished",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isDeleted",
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
                "selections": (v4/*: any*/),
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ProductCondition",
            "kind": "LinkedField",
            "name": "condition",
            "plural": false,
            "selections": (v4/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Unit",
            "kind": "LinkedField",
            "name": "rentalDuration",
            "plural": false,
            "selections": (v4/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "merchant",
            "plural": false,
            "selections": (v4/*: any*/),
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
              (v3/*: any*/),
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isMulti",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "prefix",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "suffix",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "numberOfLines",
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
          (v6/*: any*/)
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
          (v6/*: any*/),
          (v3/*: any*/),
          (v5/*: any*/)
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
        "selections": (v4/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ae379b1717edc8fbb6bd45ed56146ad7",
    "id": null,
    "metadata": {},
    "name": "EditProductScreenQuery",
    "operationKind": "query",
    "text": "query EditProductScreenQuery(\n  $id: String!\n) {\n  product(id: $id) {\n    id\n    ...EditProductScreen_product\n  }\n  productConditions {\n    ...EditProductScreen_productConditions\n    id\n  }\n  rentalDurations {\n    ...EditProductScreen_rentalDurations\n    id\n  }\n  me {\n    ...EditProductScreen_me\n    id\n  }\n}\n\nfragment EditProductScreen_me on User {\n  id\n}\n\nfragment EditProductScreen_product on Product {\n  id\n  name\n  price\n  desc\n  isPublished\n  isDeleted\n  images {\n    id\n    url\n  }\n  specs {\n    id\n    attribute {\n      id\n    }\n    value\n  }\n  condition {\n    id\n  }\n  rentalDuration {\n    id\n  }\n  merchant {\n    id\n  }\n  category {\n    id\n    name\n    requiresProductCondition\n    showsProductConditionField\n    listingType\n    specFields {\n      id\n      attribute {\n        id\n        name\n      }\n      isAutocomplete\n      isRequired\n      type\n      max\n      min\n      options\n      isEnum\n      isMulti\n      prefix\n      suffix\n      numberOfLines\n    }\n  }\n}\n\nfragment EditProductScreen_productConditions on ProductCondition {\n  id\n  display\n}\n\nfragment EditProductScreen_rentalDurations on Unit {\n  id\n  display\n  name\n  value\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dad36fa12375c9b6663139f55756ebe3';

module.exports = node;
