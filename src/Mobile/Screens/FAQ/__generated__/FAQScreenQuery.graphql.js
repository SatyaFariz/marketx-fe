/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FAQScreen_me$ref = any;
type FAQScreen_posts$ref = any;
type FixedAddressBar_me$ref = any;
export type FAQScreenQueryVariables = {||};
export type FAQScreenQueryResponse = {|
  +posts: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: FAQScreen_posts$ref,
  |}>,
  +me: ?{|
    +id: ?string,
    +$fragmentRefs: FAQScreen_me$ref & FixedAddressBar_me$ref,
  |},
|};
export type FAQScreenQuery = {|
  variables: FAQScreenQueryVariables,
  response: FAQScreenQueryResponse,
|};
*/


/*
query FAQScreenQuery {
  posts(type: faq, limit: 100) {
    id
    ...FAQScreen_posts
  }
  me {
    id
    ...FAQScreen_me
    ...FixedAddressBar_me
  }
}

fragment FAQDetailPage_me on User {
  id
  isAdmin
}

fragment FAQPage_me on User {
  id
  isAdmin
  ...FAQDetailPage_me
}

fragment FAQPage_posts on Post {
  id
  title
  content
  isDeleted
}

fragment FAQScreen_me on User {
  id
  isAdmin
  ...FAQPage_me
}

fragment FAQScreen_posts on Post {
  id
  title
  content
  ...FAQPage_posts
}

fragment FixedAddressBar_me on User {
  id
  isAdmin
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "limit",
    "value": 100
  },
  {
    "kind": "Literal",
    "name": "type",
    "value": "faq"
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
    "name": "FAQScreenQuery",
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
            "name": "FAQScreen_posts"
          }
        ],
        "storageKey": "posts(limit:100,type:\"faq\")"
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
            "name": "FAQScreen_me"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FixedAddressBar_me"
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
    "name": "FAQScreenQuery",
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
            "name": "isDeleted",
            "storageKey": null
          }
        ],
        "storageKey": "posts(limit:100,type:\"faq\")"
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
    "cacheID": "88030230055ae45269bd2a7a37835786",
    "id": null,
    "metadata": {},
    "name": "FAQScreenQuery",
    "operationKind": "query",
    "text": "query FAQScreenQuery {\n  posts(type: faq, limit: 100) {\n    id\n    ...FAQScreen_posts\n  }\n  me {\n    id\n    ...FAQScreen_me\n    ...FixedAddressBar_me\n  }\n}\n\nfragment FAQDetailPage_me on User {\n  id\n  isAdmin\n}\n\nfragment FAQPage_me on User {\n  id\n  isAdmin\n  ...FAQDetailPage_me\n}\n\nfragment FAQPage_posts on Post {\n  id\n  title\n  content\n  isDeleted\n}\n\nfragment FAQScreen_me on User {\n  id\n  isAdmin\n  ...FAQPage_me\n}\n\nfragment FAQScreen_posts on Post {\n  id\n  title\n  content\n  ...FAQPage_posts\n}\n\nfragment FixedAddressBar_me on User {\n  id\n  isAdmin\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a1facdc6d0b2fb040659c92dc162edca';

module.exports = node;
