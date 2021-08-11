/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FeaturedProductsQueryVariables = {||};
export type FeaturedProductsQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +isAdmin: ?boolean,
  |}
|};
export type FeaturedProductsQuery = {|
  variables: FeaturedProductsQueryVariables,
  response: FeaturedProductsQueryResponse,
|};
*/


/*
query FeaturedProductsQuery {
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
    "name": "FeaturedProductsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FeaturedProductsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "f7d493e3fd95509b64593795a4f379ed",
    "id": null,
    "metadata": {},
    "name": "FeaturedProductsQuery",
    "operationKind": "query",
    "text": "query FeaturedProductsQuery {\n  me {\n    id\n    isAdmin\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c49b7ca2eef9626a0f15651da2cea5c4';

module.exports = node;
