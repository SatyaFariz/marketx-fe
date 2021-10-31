/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateFAQPageQueryVariables = {||};
export type CreateFAQPageQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +isAdmin: ?boolean,
  |}
|};
export type CreateFAQPageQuery = {|
  variables: CreateFAQPageQueryVariables,
  response: CreateFAQPageQueryResponse,
|};
*/


/*
query CreateFAQPageQuery {
  me {
    id
    isAdmin
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "me",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateFAQPageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CreateFAQPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "c60649b2fcaa332141a2fd77f8810c91",
    "id": null,
    "metadata": {},
    "name": "CreateFAQPageQuery",
    "operationKind": "query",
    "text": "query CreateFAQPageQuery {\n  me {\n    id\n    isAdmin\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '75b42561ba2043a7f5cfe321d515a652';

module.exports = node;
