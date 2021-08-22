/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CategoryScreen_category$ref = any;
export type CategorySearchScreenQueryVariables = {|
  id: string
|};
export type CategorySearchScreenQueryResponse = {|
  +category: ?{|
    +id: ?string,
    +$fragmentRefs: CategoryScreen_category$ref,
  |}
|};
export type CategorySearchScreenQuery = {|
  variables: CategorySearchScreenQueryVariables,
  response: CategorySearchScreenQueryResponse,
|};
*/


/*
query CategorySearchScreenQuery(
  $id: String!
) {
  category(id: $id) {
    id
    ...CategoryScreen_category
  }
}

fragment CategoryScreen_category on Category {
  id
  name
  listingType
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CategorySearchScreenQuery",
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
            "name": "CategoryScreen_category"
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
    "name": "CategorySearchScreenQuery",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "listingType",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "963ccbb676dfbf686ca1d30fc22a498c",
    "id": null,
    "metadata": {},
    "name": "CategorySearchScreenQuery",
    "operationKind": "query",
    "text": "query CategorySearchScreenQuery(\n  $id: String!\n) {\n  category(id: $id) {\n    id\n    ...CategoryScreen_category\n  }\n}\n\nfragment CategoryScreen_category on Category {\n  id\n  name\n  listingType\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2731c383189db97e1e3c97f795328860';

module.exports = node;
