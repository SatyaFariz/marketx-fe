/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AttributesListScreen_attributes$ref = any;
export type AttributesListScreenQueryVariables = {||};
export type AttributesListScreenQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +isAdmin: ?boolean,
  |},
  +attributes: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: AttributesListScreen_attributes$ref,
  |}>,
|};
export type AttributesListScreenQuery = {|
  variables: AttributesListScreenQueryVariables,
  response: AttributesListScreenQueryResponse,
|};
*/


/*
query AttributesListScreenQuery {
  me {
    id
    isAdmin
  }
  attributes {
    id
    ...AttributesListScreen_attributes
  }
}

fragment AttributesListScreen_attributes on Attribute {
  id
  name
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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AttributesListScreenQuery",
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Attribute",
        "kind": "LinkedField",
        "name": "attributes",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AttributesListScreen_attributes"
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
    "name": "AttributesListScreenQuery",
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Attribute",
        "kind": "LinkedField",
        "name": "attributes",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c898d6a00a4f83e63fdcc4088036013b",
    "id": null,
    "metadata": {},
    "name": "AttributesListScreenQuery",
    "operationKind": "query",
    "text": "query AttributesListScreenQuery {\n  me {\n    id\n    isAdmin\n  }\n  attributes {\n    id\n    ...AttributesListScreen_attributes\n  }\n}\n\nfragment AttributesListScreen_attributes on Attribute {\n  id\n  name\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f63b86099378f5bdecbf384c20dad1f2';

module.exports = node;
