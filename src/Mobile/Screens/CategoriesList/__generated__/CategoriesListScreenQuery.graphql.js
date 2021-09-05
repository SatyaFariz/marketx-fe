/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CategoriesListScreen_categories$ref = any;
export type CategoriesListScreenQueryVariables = {||};
export type CategoriesListScreenQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +isAdmin: ?boolean,
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
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "me",
  "plural": false,
  "selections": [
    (v0/*: any*/),
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
      (v1/*: any*/),
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
      (v1/*: any*/),
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
    "cacheID": "f1862c93503ef4a04652daec3c5867c8",
    "id": null,
    "metadata": {},
    "name": "CategoriesListScreenQuery",
    "operationKind": "query",
    "text": "query CategoriesListScreenQuery {\n  me {\n    id\n    isAdmin\n  }\n  categories(hasChild: false) {\n    ...CategoriesListScreen_categories\n    id\n  }\n}\n\nfragment CategoriesListScreen_categories on Category {\n  id\n  name\n  ancestors {\n    id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b70e186fbebdfb88bc1c80a5515d6a48';

module.exports = node;
