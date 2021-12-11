/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FixedAddressBar_me$ref = any;
type ProductScreen_me$ref = any;
type ProductScreen_product$ref = any;
type ProductScreen_suspensionReasons$ref = any;
export type ProductScreenQueryVariables = {|
  id: string
|};
export type ProductScreenQueryResponse = {|
  +product: ?{|
    +id: ?string,
    +$fragmentRefs: ProductScreen_product$ref,
  |},
  +me: ?{|
    +id: ?string,
    +$fragmentRefs: ProductScreen_me$ref & FixedAddressBar_me$ref,
  |},
  +suspensionReasons: ?$ReadOnlyArray<?{|
    +$fragmentRefs: ProductScreen_suspensionReasons$ref
  |}>,
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
  me {
    id
    ...ProductScreen_me
    ...FixedAddressBar_me
  }
  suspensionReasons {
    ...ProductScreen_suspensionReasons
    id
  }
}

fragment FixedAddressBar_me on User {
  id
  isAdmin
}

fragment ProductScreen_me on User {
  id
  isAdmin
}

fragment ProductScreen_product on Product {
  id
  name
  desc
  price
  isDeleted
  isPublished
  isFeatured
  isSuspended
  createdAt
  renewedAt
  views
  leads
  pivotFieldOptionId
  condition {
    display
    id
  }
  images {
    id
    url
  }
  category {
    id
    name
    pivotField {
      id
      showsInProductDetail
      attribute {
        id
        name
      }
      options {
        id
        label
      }
    }
  }
  rentalDuration {
    display
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
    isMulti
    prefix
    suffix
  }
  store {
    id
    name
    whatsappUrl
    merchantId
    isVerified
    profilePicture {
      id
      url
    }
    address {
      province {
        name
      }
      city {
        name
      }
      district {
        name
      }
    }
  }
}

fragment ProductScreen_suspensionReasons on SuspensionReason {
  id
  title
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
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "display",
    "storageKey": null
  },
  (v2/*: any*/)
],
v5 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
],
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
v7 = [
  (v3/*: any*/)
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
            "name": "ProductScreen_me"
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
        "concreteType": "SuspensionReason",
        "kind": "LinkedField",
        "name": "suspensionReasons",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ProductScreen_suspensionReasons"
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
            "kind": "ScalarField",
            "name": "isDeleted",
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
            "name": "isFeatured",
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
            "name": "createdAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "renewedAt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "views",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "leads",
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
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "images",
            "plural": true,
            "selections": (v5/*: any*/),
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
                "concreteType": "PivotField",
                "kind": "LinkedField",
                "name": "pivotField",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "showsInProductDetail",
                    "storageKey": null
                  },
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
            "concreteType": "Location",
            "kind": "LinkedField",
            "name": "location",
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
                    "selections": (v5/*: any*/),
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
                "name": "whatsappUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "merchantId",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isVerified",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "profilePicture",
                "plural": false,
                "selections": (v5/*: any*/),
                "storageKey": null
              },
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "SuspensionReason",
        "kind": "LinkedField",
        "name": "suspensionReasons",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "049da8391212ed8def101b9ea5bdf824",
    "id": null,
    "metadata": {},
    "name": "ProductScreenQuery",
    "operationKind": "query",
    "text": "query ProductScreenQuery(\n  $id: String!\n) {\n  product(id: $id) {\n    id\n    ...ProductScreen_product\n  }\n  me {\n    id\n    ...ProductScreen_me\n    ...FixedAddressBar_me\n  }\n  suspensionReasons {\n    ...ProductScreen_suspensionReasons\n    id\n  }\n}\n\nfragment FixedAddressBar_me on User {\n  id\n  isAdmin\n}\n\nfragment ProductScreen_me on User {\n  id\n  isAdmin\n}\n\nfragment ProductScreen_product on Product {\n  id\n  name\n  desc\n  price\n  isDeleted\n  isPublished\n  isFeatured\n  isSuspended\n  createdAt\n  renewedAt\n  views\n  leads\n  pivotFieldOptionId\n  condition {\n    display\n    id\n  }\n  images {\n    id\n    url\n  }\n  category {\n    id\n    name\n    pivotField {\n      id\n      showsInProductDetail\n      attribute {\n        id\n        name\n      }\n      options {\n        id\n        label\n      }\n    }\n  }\n  rentalDuration {\n    display\n    id\n  }\n  location {\n    province {\n      administrativeAreaId\n      name\n    }\n    city {\n      administrativeAreaId\n      name\n    }\n    district {\n      administrativeAreaId\n      name\n    }\n  }\n  specs {\n    id\n    attribute {\n      id\n      name\n      icon {\n        id\n        url\n      }\n    }\n    value\n    isMulti\n    prefix\n    suffix\n  }\n  store {\n    id\n    name\n    whatsappUrl\n    merchantId\n    isVerified\n    profilePicture {\n      id\n      url\n    }\n    address {\n      province {\n        name\n      }\n      city {\n        name\n      }\n      district {\n        name\n      }\n    }\n  }\n}\n\nfragment ProductScreen_suspensionReasons on SuspensionReason {\n  id\n  title\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e374f696fed37e4ae7a80e289dd865ae';

module.exports = node;
