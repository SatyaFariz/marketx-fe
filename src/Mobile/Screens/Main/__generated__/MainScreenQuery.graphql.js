/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MainScreen_data$ref = any;
export type MainScreenQueryVariables = {||};
export type MainScreenQueryResponse = {|
  +$fragmentRefs: MainScreen_data$ref
|};
export type MainScreenQuery = {|
  variables: MainScreenQueryVariables,
  response: MainScreenQueryResponse,
|};
*/


/*
query MainScreenQuery {
  ...MainScreen_data
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

fragment ExploreTab_categories on Category {
  id
  ...Categories_categories
}

fragment ExploreTab_featuredProducts on Product {
  id
  ...FeaturedProductsList_featuredProducts
}

fragment ExploreTab_me on User {
  id
  name
  isAdmin
  profilePicture {
    id
    url
  }
  store {
    id
  }
}

fragment FeaturedProductsList_featuredProducts on Product {
  id
  ...ProductItem_product
}

fragment MainScreen_data on Query {
  me {
    id
    ...ExploreTab_me
  }
  categories {
    id
    ...ExploreTab_categories
  }
  featuredProducts {
    id
    ...ExploreTab_featuredProducts
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
    "name": "MainScreenQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "MainScreen_data"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MainScreenQuery",
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
    "cacheID": "963955f2261c2b3e9840c68d05d394da",
    "id": null,
    "metadata": {},
    "name": "MainScreenQuery",
    "operationKind": "query",
    "text": "query MainScreenQuery {\n  ...MainScreen_data\n}\n\nfragment Categories_categories on Category {\n  id\n  name\n  level\n  isPublished\n  listingType\n  icon {\n    url\n    id\n  }\n  children {\n    id\n    name\n    isPublished\n    level\n    icon {\n      url\n      id\n    }\n  }\n}\n\nfragment ExploreTab_categories on Category {\n  id\n  ...Categories_categories\n}\n\nfragment ExploreTab_featuredProducts on Product {\n  id\n  ...FeaturedProductsList_featuredProducts\n}\n\nfragment ExploreTab_me on User {\n  id\n  name\n  isAdmin\n  profilePicture {\n    id\n    url\n  }\n  store {\n    id\n  }\n}\n\nfragment FeaturedProductsList_featuredProducts on Product {\n  id\n  ...ProductItem_product\n}\n\nfragment MainScreen_data on Query {\n  me {\n    id\n    ...ExploreTab_me\n  }\n  categories {\n    id\n    ...ExploreTab_categories\n  }\n  featuredProducts {\n    id\n    ...ExploreTab_featuredProducts\n  }\n}\n\nfragment ProductItem_product on Product {\n  id\n  name\n  price\n  listingType\n  isPublished\n  isSuspended\n  mainImage {\n    id\n    url\n  }\n  rentalDuration {\n    display\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7b9bb10b3f3320386e2118b029d1129c';

module.exports = node;
