/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FixedAddressBar_me$ref = any;
type PrivacyPolicyScreen_me$ref = any;
type PrivacyPolicyScreen_posts$ref = any;
export type PrivacyPolicyScreenQueryVariables = {||};
export type PrivacyPolicyScreenQueryResponse = {|
  +posts: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: PrivacyPolicyScreen_posts$ref,
  |}>,
  +me: ?{|
    +id: ?string,
    +$fragmentRefs: PrivacyPolicyScreen_me$ref & FixedAddressBar_me$ref,
  |},
|};
export type PrivacyPolicyScreenQuery = {|
  variables: PrivacyPolicyScreenQueryVariables,
  response: PrivacyPolicyScreenQueryResponse,
|};
*/


/*
query PrivacyPolicyScreenQuery {
  posts(type: privacy_policy, limit: 1) {
    id
    ...PrivacyPolicyScreen_posts
  }
  me {
    id
    ...PrivacyPolicyScreen_me
    ...FixedAddressBar_me
  }
}

fragment FixedAddressBar_me on User {
  id
  isAdmin
}

fragment PrivacyPolicyPage_me on User {
  id
  isAdmin
}

fragment PrivacyPolicyPage_posts on Post {
  id
  title
  content
  updatedAt
}

fragment PrivacyPolicyScreen_me on User {
  id
  ...PrivacyPolicyPage_me
}

fragment PrivacyPolicyScreen_posts on Post {
  id
  title
  content
  updatedAt
  ...PrivacyPolicyPage_posts
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
    "value": "privacy_policy"
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
    "name": "PrivacyPolicyScreenQuery",
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
            "name": "PrivacyPolicyScreen_posts"
          }
        ],
        "storageKey": "posts(limit:1,type:\"privacy_policy\")"
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
            "name": "PrivacyPolicyScreen_me"
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
    "name": "PrivacyPolicyScreenQuery",
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
        "storageKey": "posts(limit:1,type:\"privacy_policy\")"
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
    "cacheID": "041760e347510de9d9bef46def31b05d",
    "id": null,
    "metadata": {},
    "name": "PrivacyPolicyScreenQuery",
    "operationKind": "query",
    "text": "query PrivacyPolicyScreenQuery {\n  posts(type: privacy_policy, limit: 1) {\n    id\n    ...PrivacyPolicyScreen_posts\n  }\n  me {\n    id\n    ...PrivacyPolicyScreen_me\n    ...FixedAddressBar_me\n  }\n}\n\nfragment FixedAddressBar_me on User {\n  id\n  isAdmin\n}\n\nfragment PrivacyPolicyPage_me on User {\n  id\n  isAdmin\n}\n\nfragment PrivacyPolicyPage_posts on Post {\n  id\n  title\n  content\n  updatedAt\n}\n\nfragment PrivacyPolicyScreen_me on User {\n  id\n  ...PrivacyPolicyPage_me\n}\n\nfragment PrivacyPolicyScreen_posts on Post {\n  id\n  title\n  content\n  updatedAt\n  ...PrivacyPolicyPage_posts\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2789e61600116c1d99c27d85658b3f82';

module.exports = node;
