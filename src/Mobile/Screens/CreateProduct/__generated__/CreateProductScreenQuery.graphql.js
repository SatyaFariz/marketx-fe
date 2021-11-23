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
type FixedAddressBar_me$ref = any;
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
    +$fragmentRefs: CreateProductScreen_me$ref & FixedAddressBar_me$ref,
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
    ...FixedAddressBar_me
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
  forceLocationInput
  rentalDurationIds
  maxImageUpload
  listingType
  ancestors {
    id
    name
  }
  pivotField {
    id
    attribute {
      id
      name
    }
    options {
      id
      label
      desc
      isDefault
    }
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
    maxLength
    emptyErrorMessage
    helperText
    excludePivotFieldOptionIds
    includePivotFieldOptionIds
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
  "concreteType": "Attribute",
  "kind": "LinkedField",
  "name": "attribute",
  "plural": false,
  "selections": (v4/*: any*/),
  "storageKey": null
},
v6 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "administrativeAreaId",
    "storageKey": null
  },
  (v3/*: any*/)
],
v7 = {
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
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FixedAddressBar_me"
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
            "name": "forceLocationInput",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "rentalDurationIds",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "maxImageUpload",
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
            "concreteType": "PivotField",
            "kind": "LinkedField",
            "name": "pivotField",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "PivotFieldOption",
                "kind": "LinkedField",
                "name": "options",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "label",
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
                    "name": "isDefault",
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
            "concreteType": "SpecificationField",
            "kind": "LinkedField",
            "name": "specFields",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v5/*: any*/),
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
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "maxLength",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "emptyErrorMessage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "helperText",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "excludePivotFieldOptionIds",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "includePivotFieldOptionIds",
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
                    "selections": (v6/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AdministrativeArea",
                    "kind": "LinkedField",
                    "name": "city",
                    "plural": false,
                    "selections": (v6/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AdministrativeArea",
                    "kind": "LinkedField",
                    "name": "district",
                    "plural": false,
                    "selections": (v6/*: any*/),
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
            "kind": "ScalarField",
            "name": "isAdmin",
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
          (v7/*: any*/)
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
          (v7/*: any*/),
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
        "selections": (v6/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "33c34fc4cab96c6aaee6c73a56aa5a80",
    "id": null,
    "metadata": {},
    "name": "CreateProductScreenQuery",
    "operationKind": "query",
    "text": "query CreateProductScreenQuery(\n  $categoryId: String!\n) {\n  category(id: $categoryId) {\n    id\n    ...CreateProductScreen_category\n  }\n  me {\n    id\n    ...CreateProductScreen_me\n    ...FixedAddressBar_me\n  }\n  productConditions {\n    ...CreateProductScreen_productConditions\n    id\n  }\n  rentalDurations {\n    ...CreateProductScreen_rentalDurations\n    id\n  }\n  administrativeAreas {\n    ...CreateProductScreen_provinces\n  }\n}\n\nfragment CreateProductScreen_category on Category {\n  id\n  name\n  path\n  requiresProductCondition\n  showsProductConditionField\n  forceLocationInput\n  rentalDurationIds\n  maxImageUpload\n  listingType\n  ancestors {\n    id\n    name\n  }\n  pivotField {\n    id\n    attribute {\n      id\n      name\n    }\n    options {\n      id\n      label\n      desc\n      isDefault\n    }\n  }\n  specFields {\n    id\n    attribute {\n      id\n      name\n    }\n    isAutocomplete\n    isRequired\n    type\n    max\n    min\n    options\n    isEnum\n    isMulti\n    prefix\n    suffix\n    numberOfLines\n    maxLength\n    emptyErrorMessage\n    helperText\n    excludePivotFieldOptionIds\n    includePivotFieldOptionIds\n  }\n}\n\nfragment CreateProductScreen_me on User {\n  id\n  store {\n    id\n    address {\n      province {\n        administrativeAreaId\n        name\n      }\n      city {\n        administrativeAreaId\n        name\n      }\n      district {\n        administrativeAreaId\n        name\n      }\n    }\n  }\n}\n\nfragment CreateProductScreen_productConditions on ProductCondition {\n  id\n  display\n}\n\nfragment CreateProductScreen_provinces on AdministrativeArea {\n  administrativeAreaId\n  name\n}\n\nfragment CreateProductScreen_rentalDurations on Unit {\n  id\n  display\n  name\n  value\n}\n\nfragment FixedAddressBar_me on User {\n  id\n  isAdmin\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ad9e27d3a3b9cf7cf970614ba20ffbe1';

module.exports = node;
