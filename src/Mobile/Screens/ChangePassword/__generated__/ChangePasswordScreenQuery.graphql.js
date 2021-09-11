/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ChangePasswordScreen_me$ref = any;
export type ChangePasswordScreenQueryVariables = {||};
export type ChangePasswordScreenQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +$fragmentRefs: ChangePasswordScreen_me$ref,
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
  }
}

fragment ChangePasswordScreen_me on User {
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
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0768b8ef74cc858de7d22a5991945a41",
    "id": null,
    "metadata": {},
    "name": "ChangePasswordScreenQuery",
    "operationKind": "query",
    "text": "query ChangePasswordScreenQuery {\n  me {\n    id\n    ...ChangePasswordScreen_me\n  }\n}\n\nfragment ChangePasswordScreen_me on User {\n  id\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '47b4b714e9bcd5c7e87ddbdea1306c8b';

module.exports = node;
