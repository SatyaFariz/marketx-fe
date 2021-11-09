/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FixedAddressBar_me$ref = any;
export type SearchScreenRootQueryVariables = {||};
export type SearchScreenRootQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +$fragmentRefs: FixedAddressBar_me$ref,
  |}
|};
export type SearchScreenRootQuery = {|
  variables: SearchScreenRootQueryVariables,
  response: SearchScreenRootQueryResponse,
|};
*/


/*
query SearchScreenRootQuery {
  me {
    id
    ...FixedAddressBar_me
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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchScreenRootQuery",
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
            "name": "FixedAddressBar_me"
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
    "name": "SearchScreenRootQuery",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isAdmin",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a01d07bfec727291c67758e3297a017f",
    "id": null,
    "metadata": {},
    "name": "SearchScreenRootQuery",
    "operationKind": "query",
    "text": "query SearchScreenRootQuery {\n  me {\n    id\n    ...FixedAddressBar_me\n  }\n}\n\nfragment FixedAddressBar_me on User {\n  id\n  isAdmin\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '574f0029e8eef66a69e720d792ebe873';

module.exports = node;
