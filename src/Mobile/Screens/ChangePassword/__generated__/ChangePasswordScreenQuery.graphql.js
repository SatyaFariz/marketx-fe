/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ChangePasswordScreen_me$ref = any;
type FixedAddressBar_me$ref = any;
export type ChangePasswordScreenQueryVariables = {||};
export type ChangePasswordScreenQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +$fragmentRefs: ChangePasswordScreen_me$ref & FixedAddressBar_me$ref,
  |}
|};
export type ChangePasswordScreenQuery = {|
  variables: ChangePasswordScreenQueryVariables,
  response: ChangePasswordScreenQueryResponse,
|};
*/


/*
query ChangePasswordScreenQuery {
  me {
    id
    ...ChangePasswordScreen_me
    ...FixedAddressBar_me
  }
}

fragment ChangePasswordScreen_me on User {
  id
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
    "name": "ChangePasswordScreenQuery",
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
            "name": "ChangePasswordScreen_me"
          },
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
    "name": "ChangePasswordScreenQuery",
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
    "cacheID": "a0a484e17eafaabdb6ba8a92dfaf7246",
    "id": null,
    "metadata": {},
    "name": "ChangePasswordScreenQuery",
    "operationKind": "query",
    "text": "query ChangePasswordScreenQuery {\n  me {\n    id\n    ...ChangePasswordScreen_me\n    ...FixedAddressBar_me\n  }\n}\n\nfragment ChangePasswordScreen_me on User {\n  id\n}\n\nfragment FixedAddressBar_me on User {\n  id\n  isAdmin\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1f95a8ff6281c568a1f3154cee940bd9';

module.exports = node;
