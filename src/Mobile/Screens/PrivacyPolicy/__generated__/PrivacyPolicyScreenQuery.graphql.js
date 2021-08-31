/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PrivacyPolicyScreen_posts$ref = any;
export type PrivacyPolicyScreenQueryVariables = {||};
export type PrivacyPolicyScreenQueryResponse = {|
  +posts: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: PrivacyPolicyScreen_posts$ref,
  |}>
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
}

fragment PrivacyPolicyScreen_posts on Post {
  id
  title
  content
  updatedAt
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
      }
    ]
  },
  "params": {
    "cacheID": "32d6d688a662640ffc9c9ec99f699031",
    "id": null,
    "metadata": {},
    "name": "PrivacyPolicyScreenQuery",
    "operationKind": "query",
    "text": "query PrivacyPolicyScreenQuery {\n  posts(type: privacy_policy, limit: 1) {\n    id\n    ...PrivacyPolicyScreen_posts\n  }\n}\n\nfragment PrivacyPolicyScreen_posts on Post {\n  id\n  title\n  content\n  updatedAt\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4d597c2ddf7dba9ddf2ad01b0a4a9489';

module.exports = node;
