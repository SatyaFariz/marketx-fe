/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type RegisterScreen_me$ref = any;
export type RegisterQueryVariables = {||};
export type RegisterQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +$fragmentRefs: RegisterScreen_me$ref,
  |}
|};
export type RegisterQuery = {|
  variables: RegisterQueryVariables,
  response: RegisterQueryResponse,
|};
*/


/*
query RegisterQuery {
  me {
    id
    ...RegisterScreen_me
  }
}

fragment RegisterScreen_me on User {
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
    "name": "RegisterQuery",
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
            "name": "RegisterScreen_me"
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
    "name": "RegisterQuery",
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
    "cacheID": "55b69e762dec3e88eb24fc7a7c472f9f",
    "id": null,
    "metadata": {},
    "name": "RegisterQuery",
    "operationKind": "query",
    "text": "query RegisterQuery {\n  me {\n    id\n    ...RegisterScreen_me\n  }\n}\n\nfragment RegisterScreen_me on User {\n  id\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7bff1360153a135b43cf1523f2a751f3';

module.exports = node;
