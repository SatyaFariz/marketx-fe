/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LoginScreen_me$ref = any;
export type LoginScreenQueryVariables = {||};
export type LoginScreenQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +$fragmentRefs: LoginScreen_me$ref,
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
  }
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
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8ee1e31aae77c1dac27577cc23be3fba",
    "id": null,
    "metadata": {},
    "name": "LoginScreenQuery",
    "operationKind": "query",
    "text": "query LoginScreenQuery {\n  me {\n    id\n    ...LoginScreen_me\n  }\n}\n\nfragment LoginScreen_me on User {\n  id\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '048e7a671b055353c0fed0cf253f9a6f';

module.exports = node;
