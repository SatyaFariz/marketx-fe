/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MerchantScreen_merchant$ref = any;
export type MerchantScreenQueryVariables = {|
  id: string
|};
export type MerchantScreenQueryResponse = {|
  +user: ?{|
    +id: ?string,
    +$fragmentRefs: MerchantScreen_merchant$ref,
  |}
|};
export type MerchantScreenQuery = {|
  variables: MerchantScreenQueryVariables,
  response: MerchantScreenQueryResponse,
|};
*/


/*
query MerchantScreenQuery(
  $id: String!
) {
  user(id: $id) {
    id
    ...MerchantScreen_merchant
  }
}

fragment MerchantScreen_merchant on User {
  id
  name
  profilePicture {
    id
    url
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MerchantScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MerchantScreen_merchant"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MerchantScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "profilePicture",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "url",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0d7a0d1d36f775482b5ce18c00e8c35a",
    "id": null,
    "metadata": {},
    "name": "MerchantScreenQuery",
    "operationKind": "query",
    "text": "query MerchantScreenQuery(\n  $id: String!\n) {\n  user(id: $id) {\n    id\n    ...MerchantScreen_merchant\n  }\n}\n\nfragment MerchantScreen_merchant on User {\n  id\n  name\n  profilePicture {\n    id\n    url\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd33e9910890582e8676597ff05f33f43';

module.exports = node;
