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
  level
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
          (v3/*: any*/),
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
            "concreteType": "Category",
            "kind": "LinkedField",
            "name": "ancestors",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8599c3d4798bf8db4b5f8e97b1c6659c",
    "id": null,
    "metadata": {},
    "name": "CategorySearchScreenQuery",
    "operationKind": "query",
    "text": "query CategorySearchScreenQuery(\n  $id: String!\n) {\n  category(id: $id) {\n    id\n    ...CategoryScreen_category\n  }\n}\n\nfragment CategoryScreen_category on Category {\n  id\n  name\n  level\n  ancestors {\n    id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2731c383189db97e1e3c97f795328860';

module.exports = node;
