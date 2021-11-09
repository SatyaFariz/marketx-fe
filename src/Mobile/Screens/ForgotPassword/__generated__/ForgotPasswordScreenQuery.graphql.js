/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FixedAddressBar_me$ref = any;
type ForgotPasswordScreen_me$ref = any;
export type ForgotPasswordScreenQueryVariables = {||};
export type ForgotPasswordScreenQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +$fragmentRefs: ForgotPasswordScreen_me$ref & FixedAddressBar_me$ref,
  |}
|};
export type ForgotPasswordScreenQuery = {|
  variables: ForgotPasswordScreenQueryVariables,
  response: ForgotPasswordScreenQueryResponse,
|};
*/


/*
query ForgotPasswordScreenQuery {
  me {
    id
    ...ForgotPasswordScreen_me
    ...FixedAddressBar_me
  }
}

fragment FixedAddressBar_me on User {
  id
  isAdmin
}

fragment ForgotPasswordScreen_me on User {
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
    "name": "ForgotPasswordScreenQuery",
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
            "name": "ForgotPasswordScreen_me"
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
    "name": "ForgotPasswordScreenQuery",
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
    "cacheID": "b251e53bfa8ad33c22fb2a5b4d543cd4",
    "id": null,
    "metadata": {},
    "name": "ForgotPasswordScreenQuery",
    "operationKind": "query",
    "text": "query ForgotPasswordScreenQuery {\n  me {\n    id\n    ...ForgotPasswordScreen_me\n    ...FixedAddressBar_me\n  }\n}\n\nfragment FixedAddressBar_me on User {\n  id\n  isAdmin\n}\n\nfragment ForgotPasswordScreen_me on User {\n  id\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '47df2457f9a54aa90139db664f96e547';

module.exports = node;
