/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ForgotPasswordScreen_me$ref = any;
export type ForgotPasswordScreenQueryVariables = {||};
export type ForgotPasswordScreenQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +$fragmentRefs: ForgotPasswordScreen_me$ref,
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
  }
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
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "481b33dbcb2f335286997f7b357225d1",
    "id": null,
    "metadata": {},
    "name": "ForgotPasswordScreenQuery",
    "operationKind": "query",
    "text": "query ForgotPasswordScreenQuery {\n  me {\n    id\n    ...ForgotPasswordScreen_me\n  }\n}\n\nfragment ForgotPasswordScreen_me on User {\n  id\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '116985c2ea92d43f06cd694a4160fba4';

module.exports = node;
