/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AboutUsScreen_me$ref = any;
type AboutUsScreen_posts$ref = any;
export type AboutUsScreenQueryVariables = {||};
export type AboutUsScreenQueryResponse = {|
  +posts: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: AboutUsScreen_posts$ref,
  |}>,
  +me: ?{|
    +id: ?string,
    +$fragmentRefs: AboutUsScreen_me$ref,
  |},
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
  me {
    id
    ...AboutUsScreen_me
  }
}

fragment AboutUsPage_me on User {
  id
  isAdmin
}

fragment AboutUsPage_posts on Post {
  id
  title
  content
  updatedAt
}

fragment AboutUsScreen_me on User {
  id
  ...AboutUsPage_me
}

fragment AboutUsScreen_posts on Post {
  id
  title
  content
  ...AboutUsPage_posts
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AboutUsScreen_me"
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updatedAt",
            "storageKey": null
          }
        ],
        "storageKey": "posts(limit:1,type:\"about_us\")"
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
    "cacheID": "9af7d7664bf2b27c9f84982c7372fd47",
    "id": null,
    "metadata": {},
    "name": "AboutUsScreenQuery",
    "operationKind": "query",
    "text": "query AboutUsScreenQuery {\n  posts(type: about_us, limit: 1) {\n    id\n    ...AboutUsScreen_posts\n  }\n  me {\n    id\n    ...AboutUsScreen_me\n  }\n}\n\nfragment AboutUsPage_me on User {\n  id\n  isAdmin\n}\n\nfragment AboutUsPage_posts on Post {\n  id\n  title\n  content\n  updatedAt\n}\n\nfragment AboutUsScreen_me on User {\n  id\n  ...AboutUsPage_me\n}\n\nfragment AboutUsScreen_posts on Post {\n  id\n  title\n  content\n  ...AboutUsPage_posts\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f60792b0a51ae3952ff5ce9b70246911';

module.exports = node;
