/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FixedAddressBar_me$ref = any;
type TermsOfServiceScreen_me$ref = any;
type TermsOfServiceScreen_posts$ref = any;
export type TermsOfServiceScreenQueryVariables = {||};
export type TermsOfServiceScreenQueryResponse = {|
  +posts: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: TermsOfServiceScreen_posts$ref,
  |}>,
  +me: ?{|
    +id: ?string,
    +$fragmentRefs: TermsOfServiceScreen_me$ref & FixedAddressBar_me$ref,
  |},
|};
export type TermsOfServiceScreenQuery = {|
  variables: TermsOfServiceScreenQueryVariables,
  response: TermsOfServiceScreenQueryResponse,
|};
*/


/*
query TermsOfServiceScreenQuery {
  posts(type: terms_of_service, limit: 1) {
    id
    ...TermsOfServiceScreen_posts
  }
  me {
    id
    ...TermsOfServiceScreen_me
    ...FixedAddressBar_me
  }
}

fragment FixedAddressBar_me on User {
  id
  isAdmin
}

fragment TermsOfServicePage_me on User {
  id
  isAdmin
}

fragment TermsOfServicePage_posts on Post {
  id
  title
  content
  updatedAt
}

fragment TermsOfServiceScreen_me on User {
  id
  ...TermsOfServicePage_me
}

fragment TermsOfServiceScreen_posts on Post {
  id
  title
  content
  updatedAt
  ...TermsOfServicePage_posts
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
    "value": "terms_of_service"
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
    "name": "TermsOfServiceScreenQuery",
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
            "name": "TermsOfServiceScreen_posts"
          }
        ],
        "storageKey": "posts(limit:1,type:\"terms_of_service\")"
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
            "name": "TermsOfServiceScreen_me"
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
    "name": "TermsOfServiceScreenQuery",
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
        "storageKey": "posts(limit:1,type:\"terms_of_service\")"
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
    "cacheID": "ebb07227053664efdfe266c354e75137",
    "id": null,
    "metadata": {},
    "name": "TermsOfServiceScreenQuery",
    "operationKind": "query",
    "text": "query TermsOfServiceScreenQuery {\n  posts(type: terms_of_service, limit: 1) {\n    id\n    ...TermsOfServiceScreen_posts\n  }\n  me {\n    id\n    ...TermsOfServiceScreen_me\n    ...FixedAddressBar_me\n  }\n}\n\nfragment FixedAddressBar_me on User {\n  id\n  isAdmin\n}\n\nfragment TermsOfServicePage_me on User {\n  id\n  isAdmin\n}\n\nfragment TermsOfServicePage_posts on Post {\n  id\n  title\n  content\n  updatedAt\n}\n\nfragment TermsOfServiceScreen_me on User {\n  id\n  ...TermsOfServicePage_me\n}\n\nfragment TermsOfServiceScreen_posts on Post {\n  id\n  title\n  content\n  updatedAt\n  ...TermsOfServicePage_posts\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '01d0020e9a5287a696228eea8b5f6f44';

module.exports = node;
