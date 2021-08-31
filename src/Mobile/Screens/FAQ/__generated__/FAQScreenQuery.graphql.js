/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FAQScreen_posts$ref = any;
export type FAQScreenQueryVariables = {||};
export type FAQScreenQueryResponse = {|
  +posts: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: FAQScreen_posts$ref,
  |}>
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
}

fragment FAQScreen_posts on Post {
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
          }
        ],
        "storageKey": "posts(limit:100,type:\"faq\")"
      }
    ]
  },
  "params": {
    "cacheID": "76e2b1695bfc5fd6b54421d08196d842",
    "id": null,
    "metadata": {},
    "name": "FAQScreenQuery",
    "operationKind": "query",
    "text": "query FAQScreenQuery {\n  posts(type: faq, limit: 100) {\n    id\n    ...FAQScreen_posts\n  }\n}\n\nfragment FAQScreen_posts on Post {\n  id\n  title\n  content\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '038127726e42c0de6790cea95097ebaf';

module.exports = node;
