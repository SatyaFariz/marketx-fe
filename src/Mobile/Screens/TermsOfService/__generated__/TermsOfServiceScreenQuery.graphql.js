/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TermsOfServiceScreen_posts$ref = any;
export type TermsOfServiceScreenQueryVariables = {||};
export type TermsOfServiceScreenQueryResponse = {|
  +posts: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: TermsOfServiceScreen_posts$ref,
  |}>
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
}

fragment TermsOfServiceScreen_posts on Post {
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
      }
    ]
  },
  "params": {
    "cacheID": "fee43148b167e4e3ffc70dc3f62474af",
    "id": null,
    "metadata": {},
    "name": "TermsOfServiceScreenQuery",
    "operationKind": "query",
    "text": "query TermsOfServiceScreenQuery {\n  posts(type: terms_of_service, limit: 1) {\n    id\n    ...TermsOfServiceScreen_posts\n  }\n}\n\nfragment TermsOfServiceScreen_posts on Post {\n  id\n  title\n  content\n  updatedAt\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'eb4b5184768a31197a4908dd64acf48f';

module.exports = node;
