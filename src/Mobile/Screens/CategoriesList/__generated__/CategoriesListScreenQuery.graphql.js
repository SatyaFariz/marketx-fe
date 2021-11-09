/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CategoriesListScreen_categories$ref = any;
type FixedAddressBar_me$ref = any;
export type CategoriesListScreenQueryVariables = {||};
export type CategoriesListScreenQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +isAdmin: ?boolean,
    +$fragmentRefs: FixedAddressBar_me$ref,
  |},
  +categories: ?$ReadOnlyArray<?{|
    +$fragmentRefs: CategoriesListScreen_categories$ref
  |}>,
|};
export type CategoriesListScreenQuery = {|
  variables: CategoriesListScreenQueryVariables,
  response: CategoriesListScreenQueryResponse,
|};
*/


/*
query CategoriesListScreenQuery {
  me {
    id
    isAdmin
    ...FixedAddressBar_me
  }
  categories(hasChild: false) {
    ...CategoriesListScreen_categories
    id
  }
}

fragment CategoriesListScreen_categories on Category {
  id
  name
  ancestors {
    id
    name
  }
}

fragment FixedAddressBar_me on User {
  id
  isAdmin
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
  "name": "isAdmin",
  "storageKey": null
},
v2 = [
  {
    "kind": "Literal",
    "name": "hasChild",
    "value": false
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CategoriesListScreenQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "FixedAddressBar_me"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Category",
        "kind": "LinkedField",
        "name": "categories",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CategoriesListScreen_categories"
          }
        ],
        "storageKey": "categories(hasChild:false)"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CategoriesListScreenQuery",
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
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Category",
        "kind": "LinkedField",
        "name": "categories",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Category",
            "kind": "LinkedField",
            "name": "ancestors",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "categories(hasChild:false)"
      }
    ]
  },
  "params": {
    "cacheID": "57a55fc58f98d9abfd360551844d1129",
    "id": null,
    "metadata": {},
    "name": "CategoriesListScreenQuery",
    "operationKind": "query",
    "text": "query CategoriesListScreenQuery {\n  me {\n    id\n    isAdmin\n    ...FixedAddressBar_me\n  }\n  categories(hasChild: false) {\n    ...CategoriesListScreen_categories\n    id\n  }\n}\n\nfragment CategoriesListScreen_categories on Category {\n  id\n  name\n  ancestors {\n    id\n    name\n  }\n}\n\nfragment FixedAddressBar_me on User {\n  id\n  isAdmin\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd0ae895d68dea8ac8c237e3c1fb3e93d';

module.exports = node;
