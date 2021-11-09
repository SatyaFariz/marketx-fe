/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HomeScreen_categories$ref = any;
type HomeScreen_featuredProducts$ref = any;
type HomeScreen_me$ref = any;
export type HomeScreenQueryVariables = {||};
export type HomeScreenQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +$fragmentRefs: HomeScreen_me$ref,
  |},
  +categories: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: HomeScreen_categories$ref,
  |}>,
  +featuredProducts: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: HomeScreen_featuredProducts$ref,
  |}>,
|};
export type HomeScreenQuery = {|
  variables: HomeScreenQueryVariables,
  response: HomeScreenQueryResponse,
|};
*/


/*
query HomeScreenQuery {
  me {
    id
    ...HomeScreen_me
  }
  categories {
    id
    ...HomeScreen_categories
  }
  featuredProducts {
    id
    ...HomeScreen_featuredProducts
  }
}

fragment Categories_categories on Category {
  id
  name
  level
  isPublished
  listingType
  icon {
    url
    id
  }
  children {
    id
    name
    isPublished
    level
    icon {
      url
      id
    }
  }
}

fragment Categories_me on User {
  id
  ...CategoryItem_me
}

fragment CategoryItem_me on User {
  id
  isAdmin
}

fragment FeaturedProductsList_featuredProducts on Product {
  id
  ...ProductItem_product
}

fragment HomeScreen_categories on Category {
  id
  ...Categories_categories
}

fragment HomeScreen_featuredProducts on Product {
  id
  ...FeaturedProductsList_featuredProducts
}

fragment HomeScreen_me on User {
  id
  name
  isAdmin
  ...Categories_me
  profilePicture {
    id
    url
  }
  store {
    id
  }
}

fragment ProductItem_product on Product {
  id
  name
  price
  listingType
  isPublished
  isSuspended
  mainImage {
    id
    url
  }
  rentalDuration {
    display
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v3 = [
  (v0/*: any*/),
  (v2/*: any*/)
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "level",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isPublished",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "listingType",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "icon",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v0/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "HomeScreen_me"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Category",
        "kind": "LinkedField",
        "name": "categories",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "HomeScreen_categories"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Product",
        "kind": "LinkedField",
        "name": "featuredProducts",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "HomeScreen_featuredProducts"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isAdmin",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "profilePicture",
            "plural": false,
            "selections": (v3/*: any*/),
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
              (v0/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Category",
        "kind": "LinkedField",
        "name": "categories",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Category",
            "kind": "LinkedField",
            "name": "children",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              (v5/*: any*/),
              (v4/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Product",
        "kind": "LinkedField",
        "name": "featuredProducts",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "price",
            "storageKey": null
          },
          (v6/*: any*/),
          (v5/*: any*/),
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
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "mainImage",
            "plural": false,
            "selections": (v3/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Unit",
            "kind": "LinkedField",
            "name": "rentalDuration",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "display",
                "storageKey": null
              },
              (v0/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e29d1d83acb13d99f86af44fed7bc8b6",
    "id": null,
    "metadata": {},
    "name": "HomeScreenQuery",
    "operationKind": "query",
    "text": "query HomeScreenQuery {\n  me {\n    id\n    ...HomeScreen_me\n  }\n  categories {\n    id\n    ...HomeScreen_categories\n  }\n  featuredProducts {\n    id\n    ...HomeScreen_featuredProducts\n  }\n}\n\nfragment Categories_categories on Category {\n  id\n  name\n  level\n  isPublished\n  listingType\n  icon {\n    url\n    id\n  }\n  children {\n    id\n    name\n    isPublished\n    level\n    icon {\n      url\n      id\n    }\n  }\n}\n\nfragment Categories_me on User {\n  id\n  ...CategoryItem_me\n}\n\nfragment CategoryItem_me on User {\n  id\n  isAdmin\n}\n\nfragment FeaturedProductsList_featuredProducts on Product {\n  id\n  ...ProductItem_product\n}\n\nfragment HomeScreen_categories on Category {\n  id\n  ...Categories_categories\n}\n\nfragment HomeScreen_featuredProducts on Product {\n  id\n  ...FeaturedProductsList_featuredProducts\n}\n\nfragment HomeScreen_me on User {\n  id\n  name\n  isAdmin\n  ...Categories_me\n  profilePicture {\n    id\n    url\n  }\n  store {\n    id\n  }\n}\n\nfragment ProductItem_product on Product {\n  id\n  name\n  price\n  listingType\n  isPublished\n  isSuspended\n  mainImage {\n    id\n    url\n  }\n  rentalDuration {\n    display\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3b74c30f88a9958e67dadcc0000e5bab';

module.exports = node;
