/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AboutUsScreen_posts$ref = any;
export type AboutUsScreenQueryVariables = {||};
export type AboutUsScreenQueryResponse = {|
  +posts: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: AboutUsScreen_posts$ref,
  |}>
|};
export type AboutUsScreenQuery = {|
  variables: AboutUsScreenQueryVariables,
  response: AboutUsScreenQueryResponse,
|};
*/


/*
query AboutUsScreenQuery {
  posts(type: about_us, limit: 1) {
    id
    ...AboutUsScreen_posts
  }
}

fragment AboutUsScreen_posts on Post {
  id
  title
  content
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "limit",
    "value": 1
  },
  {
    "kind": "Literal",
    "name": "type",
    "value": "about_us"
  }
],
v1 = {
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
    "name": "AboutUsScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "posts",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AboutUsScreen_posts"
          }
        ],
        "storageKey": "posts(limit:1,type:\"about_us\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AboutUsScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "posts",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "content",
            "storageKey": null
          }
        ],
        "storageKey": "posts(limit:1,type:\"about_us\")"
      }
    ]
  },
  "params": {
    "cacheID": "512986321d2207dc91bc34820c630d6a",
    "id": null,
    "metadata": {},
    "name": "AboutUsScreenQuery",
    "operationKind": "query",
    "text": "query AboutUsScreenQuery {\n  posts(type: about_us, limit: 1) {\n    id\n    ...AboutUsScreen_posts\n  }\n}\n\nfragment AboutUsScreen_posts on Post {\n  id\n  title\n  content\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e28be5897945f8ae4bbd171b3d894275';

module.exports = node;
