/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DesktopPostsListPageQueryVariables = {||};
export type DesktopPostsListPageQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +isAdmin: ?boolean,
  |}
|};
export type DesktopPostsListPageQuery = {|
  variables: DesktopPostsListPageQueryVariables,
  response: DesktopPostsListPageQueryResponse,
|};
*/


/*
query DesktopPostsListPageQuery {
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
    "name": "DesktopPostsListPageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DesktopPostsListPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "161457cffd761a6bb7d3d39efb1dae6d",
    "id": null,
    "metadata": {},
    "name": "DesktopPostsListPageQuery",
    "operationKind": "query",
    "text": "query DesktopPostsListPageQuery {\n  me {\n    id\n    isAdmin\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '395fe0334d15fa00b30c828247307430';

module.exports = node;
