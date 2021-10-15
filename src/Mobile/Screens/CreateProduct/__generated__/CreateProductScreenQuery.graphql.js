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
type CreateProductScreen_provinces$ref = any;
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
  +administrativeAreas: ?$ReadOnlyArray<?{|
    +$fragmentRefs: CreateProductScreen_provinces$ref
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
  administrativeAreas {
    ...CreateProductScreen_provinces
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
    isMulti
    prefix
    suffix
    numberOfLines
  }
}

fragment CreateProductScreen_me on User {
  id
  store {
    id
    address {
      province {
        administrativeAreaId
        name
      }
      city {
        administrativeAreaId
        name
      }
      district {
        administrativeAreaId
        name
      }
    }
  }
}

fragment CreateProductScreen_productConditions on ProductCondition {
  id
  display
}

fragment CreateProductScreen_provinces on AdministrativeArea {
  administrativeAreaId
  name
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
v5 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "administrativeAreaId",
    "storageKey": null
  },
  (v3/*: any*/)
],
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "AdministrativeArea",
        "kind": "LinkedField",
        "name": "administrativeAreas",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CreateProductScreen_provinces"
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
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Address",
                "kind": "LinkedField",
                "name": "address",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AdministrativeArea",
                    "kind": "LinkedField",
                    "name": "province",
                    "plural": false,
                    "selections": (v5/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AdministrativeArea",
                    "kind": "LinkedField",
                    "name": "city",
                    "plural": false,
                    "selections": (v5/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AdministrativeArea",
                    "kind": "LinkedField",
                    "name": "district",
                    "plural": false,
                    "selections": (v5/*: any*/),
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
        "concreteType": "AdministrativeArea",
        "kind": "LinkedField",
        "name": "administrativeAreas",
        "plural": true,
        "selections": (v5/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1a5a42da1c080e46f68e870b2b58fa2e",
    "id": null,
    "metadata": {},
    "name": "CreateProductScreenQuery",
    "operationKind": "query",
    "text": "query CreateProductScreenQuery(\n  $categoryId: String!\n) {\n  category(id: $categoryId) {\n    id\n    ...CreateProductScreen_category\n  }\n  me {\n    id\n    ...CreateProductScreen_me\n  }\n  productConditions {\n    ...CreateProductScreen_productConditions\n    id\n  }\n  rentalDurations {\n    ...CreateProductScreen_rentalDurations\n    id\n  }\n  administrativeAreas {\n    ...CreateProductScreen_provinces\n  }\n}\n\nfragment CreateProductScreen_category on Category {\n  id\n  name\n  path\n  requiresProductCondition\n  showsProductConditionField\n  listingType\n  ancestors {\n    id\n    name\n  }\n  specFields {\n    id\n    attribute {\n      id\n      name\n    }\n    isAutocomplete\n    isRequired\n    type\n    max\n    min\n    options\n    isEnum\n    isMulti\n    prefix\n    suffix\n    numberOfLines\n  }\n}\n\nfragment CreateProductScreen_me on User {\n  id\n  store {\n    id\n    address {\n      province {\n        administrativeAreaId\n        name\n      }\n      city {\n        administrativeAreaId\n        name\n      }\n      district {\n        administrativeAreaId\n        name\n      }\n    }\n  }\n}\n\nfragment CreateProductScreen_productConditions on ProductCondition {\n  id\n  display\n}\n\nfragment CreateProductScreen_provinces on AdministrativeArea {\n  administrativeAreaId\n  name\n}\n\nfragment CreateProductScreen_rentalDurations on Unit {\n  id\n  display\n  name\n  value\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '66d87c0ce0976bbc0d800fbc065a6162';

module.exports = node;
