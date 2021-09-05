/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CategoryDetailScreen_category$ref = any;
export type CategoryDetailScreenQueryVariables = {|
  id: string
|};
export type CategoryDetailScreenQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +isAdmin: ?boolean,
  |},
  +category: ?{|
    +$fragmentRefs: CategoryDetailScreen_category$ref
  |},
|};
export type CategoryDetailScreenQuery = {|
  variables: CategoryDetailScreenQueryVariables,
  response: CategoryDetailScreenQueryResponse,
|};
*/


/*
query CategoryDetailScreenQuery(
  $id: String!
) {
  me {
    id
    isAdmin
  }
  category(id: $id) {
    ...CategoryDetailScreen_category
    id
  }
}

fragment CategoryDetailScreen_category on Category {
  id
  name
  isPublished
  showsProductConditionField
  requiresProductCondition
  listingType
  ancestors {
    id
    name
  }
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "me",
  "plural": false,
  "selections": [
    (v1/*: any*/),
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
v3 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CategoryDetailScreenQuery",
    "selections": [
      (v2/*: any*/),
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Category",
        "kind": "LinkedField",
        "name": "category",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CategoryDetailScreen_category"
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
    "name": "CategoryDetailScreenQuery",
    "selections": [
      (v2/*: any*/),
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Category",
        "kind": "LinkedField",
        "name": "category",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
            "name": "showsProductConditionField",
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
            "selections": [
              (v1/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e624f416b1f251bc9a493c046518b269",
    "id": null,
    "metadata": {},
    "name": "CategoryDetailScreenQuery",
    "operationKind": "query",
    "text": "query CategoryDetailScreenQuery(\n  $id: String!\n) {\n  me {\n    id\n    isAdmin\n  }\n  category(id: $id) {\n    ...CategoryDetailScreen_category\n    id\n  }\n}\n\nfragment CategoryDetailScreen_category on Category {\n  id\n  name\n  isPublished\n  showsProductConditionField\n  requiresProductCondition\n  listingType\n  ancestors {\n    id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0e794e96a62d5481ad950e2165cc2f13';

module.exports = node;
