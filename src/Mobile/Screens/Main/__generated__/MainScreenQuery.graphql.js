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

fragment AccountTab_me on User {
  id
  name
  mobileNumber
  profilePicture {
    url
    id
  }
  store {
    id
  }
}

fragment BottomNav_me on User {
  id
  name
}

fragment Categories_categories on Category {
  id
  name
  level
  icon {
    url
    id
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
    ...BottomNav_me
    ...ExploreTab_me
    ...AccountTab_me
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
];
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "mobileNumber",
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "level",
            "storageKey": null
          },
          {
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
    "cacheID": "ad0fb530ac6e636959f0bdd38c2e7496",
    "id": null,
    "metadata": {},
    "name": "MainScreenQuery",
    "operationKind": "query",
    "text": "query MainScreenQuery {\n  ...MainScreen_data\n}\n\nfragment AccountTab_me on User {\n  id\n  name\n  mobileNumber\n  profilePicture {\n    url\n    id\n  }\n  store {\n    id\n  }\n}\n\nfragment BottomNav_me on User {\n  id\n  name\n}\n\nfragment Categories_categories on Category {\n  id\n  name\n  level\n  icon {\n    url\n    id\n  }\n}\n\nfragment ExploreTab_categories on Category {\n  id\n  ...Categories_categories\n}\n\nfragment ExploreTab_featuredProducts on Product {\n  id\n  ...FeaturedProductsList_featuredProducts\n}\n\nfragment ExploreTab_me on User {\n  id\n  name\n  profilePicture {\n    id\n    url\n  }\n  store {\n    id\n  }\n}\n\nfragment FeaturedProductsList_featuredProducts on Product {\n  id\n  ...ProductItem_product\n}\n\nfragment MainScreen_data on Query {\n  me {\n    id\n    ...BottomNav_me\n    ...ExploreTab_me\n    ...AccountTab_me\n  }\n  categories {\n    id\n    ...ExploreTab_categories\n  }\n  featuredProducts {\n    id\n    ...ExploreTab_featuredProducts\n  }\n}\n\nfragment ProductItem_product on Product {\n  id\n  name\n  price\n  mainImage {\n    id\n    url\n  }\n  rentalDuration {\n    display\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7b9bb10b3f3320386e2118b029d1129c';

module.exports = node;
