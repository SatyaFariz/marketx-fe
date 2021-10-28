/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreatePostPageQueryVariables = {||};
export type CreatePostPageQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +isAdmin: ?boolean,
  |}
|};
export type CreatePostPageQuery = {|
  variables: CreatePostPageQueryVariables,
  response: CreatePostPageQueryResponse,
|};
*/


/*
query CreatePostPageQuery {
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
    "name": "CreatePostPageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CreatePostPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "544e49f7719f42751fb107dbd3993a93",
    "id": null,
    "metadata": {},
    "name": "CreatePostPageQuery",
    "operationKind": "query",
    "text": "query CreatePostPageQuery {\n  me {\n    id\n    isAdmin\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '339dd7aa3be5aec6424fc08f0648a088';

module.exports = node;
