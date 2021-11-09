/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FixedAddressBar_me$ref = any;
type ResetPasswordScreen_me$ref = any;
export type ResetPasswordScreenQueryVariables = {||};
export type ResetPasswordScreenQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +$fragmentRefs: ResetPasswordScreen_me$ref & FixedAddressBar_me$ref,
  |}
|};
export type ResetPasswordScreenQuery = {|
  variables: ResetPasswordScreenQueryVariables,
  response: ResetPasswordScreenQueryResponse,
|};
*/


/*
query ResetPasswordScreenQuery {
  me {
    id
    ...ResetPasswordScreen_me
    ...FixedAddressBar_me
  }
}

fragment FixedAddressBar_me on User {
  id
  isAdmin
}

fragment ResetPasswordScreen_me on User {
  id
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
    "name": "ResetPasswordScreenQuery",
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
            "name": "ResetPasswordScreen_me"
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
    "name": "ResetPasswordScreenQuery",
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
    "cacheID": "c5cbf9fe61b508f87cf2366cb2564919",
    "id": null,
    "metadata": {},
    "name": "ResetPasswordScreenQuery",
    "operationKind": "query",
    "text": "query ResetPasswordScreenQuery {\n  me {\n    id\n    ...ResetPasswordScreen_me\n    ...FixedAddressBar_me\n  }\n}\n\nfragment FixedAddressBar_me on User {\n  id\n  isAdmin\n}\n\nfragment ResetPasswordScreen_me on User {\n  id\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e390e90e0dbb76d62ca55a30473249c2';

module.exports = node;
