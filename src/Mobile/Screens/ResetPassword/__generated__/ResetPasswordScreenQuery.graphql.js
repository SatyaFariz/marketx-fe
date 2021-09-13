/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ResetPasswordScreen_me$ref = any;
export type ResetPasswordScreenQueryVariables = {||};
export type ResetPasswordScreenQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +$fragmentRefs: ResetPasswordScreen_me$ref,
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
  }
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
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0dfe3cf1a3827935ca440c21a299fe41",
    "id": null,
    "metadata": {},
    "name": "ResetPasswordScreenQuery",
    "operationKind": "query",
    "text": "query ResetPasswordScreenQuery {\n  me {\n    id\n    ...ResetPasswordScreen_me\n  }\n}\n\nfragment ResetPasswordScreen_me on User {\n  id\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b273b28c0b14211080d447eb48b1f476';

module.exports = node;
