/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FixedAddressBar_me$ref = any;
type LoginScreen_me$ref = any;
export type LoginScreenQueryVariables = {||};
export type LoginScreenQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +$fragmentRefs: LoginScreen_me$ref & FixedAddressBar_me$ref,
  |}
|};
export type LoginScreenQuery = {|
  variables: LoginScreenQueryVariables,
  response: LoginScreenQueryResponse,
|};
*/


/*
query LoginScreenQuery {
  me {
    id
    ...LoginScreen_me
    ...FixedAddressBar_me
  }
}

fragment FixedAddressBar_me on User {
  id
  isAdmin
}

fragment LoginScreen_me on User {
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
    "name": "LoginScreenQuery",
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
            "name": "LoginScreen_me"
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
    "name": "LoginScreenQuery",
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
    "cacheID": "5a678f99072b69742bb64a352a522fbb",
    "id": null,
    "metadata": {},
    "name": "LoginScreenQuery",
    "operationKind": "query",
    "text": "query LoginScreenQuery {\n  me {\n    id\n    ...LoginScreen_me\n    ...FixedAddressBar_me\n  }\n}\n\nfragment FixedAddressBar_me on User {\n  id\n  isAdmin\n}\n\nfragment LoginScreen_me on User {\n  id\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c938c877ff473e064ca14f694c832344';

module.exports = node;
