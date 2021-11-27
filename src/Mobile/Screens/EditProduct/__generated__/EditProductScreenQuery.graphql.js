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
type EditProductScreen_provinces$ref = any;
type EditProductScreen_rentalDurations$ref = any;
type FixedAddressBar_me$ref = any;
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
    +$fragmentRefs: EditProductScreen_me$ref & FixedAddressBar_me$ref
  |},
  +administrativeAreas: ?$ReadOnlyArray<?{|
    +$fragmentRefs: EditProductScreen_provinces$ref
  |}>,
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
    ...FixedAddressBar_me
    id
  }
  administrativeAreas {
    ...EditProductScreen_provinces
  }
}

fragment EditProductScreen_me on User {
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

fragment EditProductScreen_product on Product {
  id
  name
  price
  desc
  isPublished
  isDeleted
  isSuspended
  syncLocationWithStoreAddress
  pivotFieldOptionId
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
  location {
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
  category {
    id
    name
    requiresProductCondition
    showsProductConditionField
    forceLocationInput
    rentalDurationIds
    listingType
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
}

fragment EditProductScreen_productConditions on ProductCondition {
  id
  display
}

fragment EditProductScreen_provinces on AdministrativeArea {
  administrativeAreaId
  name
}

fragment EditProductScreen_rentalDurations on Unit {
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
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "desc",
  "storageKey": null
},
v5 = [
  (v2/*: any*/)
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v7 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "administrativeAreaId",
    "storageKey": null
  },
  (v3/*: any*/)
],
v8 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "AdministrativeArea",
    "kind": "LinkedField",
    "name": "province",
    "plural": false,
    "selections": (v7/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "AdministrativeArea",
    "kind": "LinkedField",
    "name": "city",
    "plural": false,
    "selections": (v7/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "AdministrativeArea",
    "kind": "LinkedField",
    "name": "district",
    "plural": false,
    "selections": (v7/*: any*/),
    "storageKey": null
  }
],
v9 = {
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
v10 = {
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
        "concreteType": "AdministrativeArea",
        "kind": "LinkedField",
        "name": "administrativeAreas",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "EditProductScreen_provinces"
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
          (v4/*: any*/),
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
            "kind": "ScalarField",
            "name": "isSuspended",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "syncLocationWithStoreAddress",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "pivotFieldOptionId",
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
                "selections": (v5/*: any*/),
                "storageKey": null
              },
              (v6/*: any*/)
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
            "selections": (v5/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Unit",
            "kind": "LinkedField",
            "name": "rentalDuration",
            "plural": false,
            "selections": (v5/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "merchant",
            "plural": false,
            "selections": (v5/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Location",
            "kind": "LinkedField",
            "name": "location",
            "plural": false,
            "selections": (v8/*: any*/),
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
                "name": "listingType",
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
                  (v9/*: any*/),
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
                      (v4/*: any*/),
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
                  (v9/*: any*/),
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
          (v10/*: any*/)
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
          (v10/*: any*/),
          (v3/*: any*/),
          (v6/*: any*/)
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
                "selections": (v8/*: any*/),
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
        "concreteType": "AdministrativeArea",
        "kind": "LinkedField",
        "name": "administrativeAreas",
        "plural": true,
        "selections": (v7/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "00c59381c682217a486c4a9496bb3f6f",
    "id": null,
    "metadata": {},
    "name": "EditProductScreenQuery",
    "operationKind": "query",
    "text": "query EditProductScreenQuery(\n  $id: String!\n) {\n  product(id: $id) {\n    id\n    ...EditProductScreen_product\n  }\n  productConditions {\n    ...EditProductScreen_productConditions\n    id\n  }\n  rentalDurations {\n    ...EditProductScreen_rentalDurations\n    id\n  }\n  me {\n    ...EditProductScreen_me\n    ...FixedAddressBar_me\n    id\n  }\n  administrativeAreas {\n    ...EditProductScreen_provinces\n  }\n}\n\nfragment EditProductScreen_me on User {\n  id\n  store {\n    id\n    address {\n      province {\n        administrativeAreaId\n        name\n      }\n      city {\n        administrativeAreaId\n        name\n      }\n      district {\n        administrativeAreaId\n        name\n      }\n    }\n  }\n}\n\nfragment EditProductScreen_product on Product {\n  id\n  name\n  price\n  desc\n  isPublished\n  isDeleted\n  isSuspended\n  syncLocationWithStoreAddress\n  pivotFieldOptionId\n  images {\n    id\n    url\n  }\n  specs {\n    id\n    attribute {\n      id\n    }\n    value\n  }\n  condition {\n    id\n  }\n  rentalDuration {\n    id\n  }\n  merchant {\n    id\n  }\n  location {\n    province {\n      administrativeAreaId\n      name\n    }\n    city {\n      administrativeAreaId\n      name\n    }\n    district {\n      administrativeAreaId\n      name\n    }\n  }\n  category {\n    id\n    name\n    requiresProductCondition\n    showsProductConditionField\n    forceLocationInput\n    rentalDurationIds\n    listingType\n    pivotField {\n      id\n      attribute {\n        id\n        name\n      }\n      options {\n        id\n        label\n        desc\n        isDefault\n      }\n    }\n    specFields {\n      id\n      attribute {\n        id\n        name\n      }\n      isAutocomplete\n      isRequired\n      type\n      max\n      min\n      options\n      isEnum\n      isMulti\n      prefix\n      suffix\n      numberOfLines\n      maxLength\n      emptyErrorMessage\n      helperText\n      excludePivotFieldOptionIds\n      includePivotFieldOptionIds\n    }\n  }\n}\n\nfragment EditProductScreen_productConditions on ProductCondition {\n  id\n  display\n}\n\nfragment EditProductScreen_provinces on AdministrativeArea {\n  administrativeAreaId\n  name\n}\n\nfragment EditProductScreen_rentalDurations on Unit {\n  id\n  display\n  name\n  value\n}\n\nfragment FixedAddressBar_me on User {\n  id\n  isAdmin\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '98548bc3db658be2bce1791d83ff9a19';

module.exports = node;
