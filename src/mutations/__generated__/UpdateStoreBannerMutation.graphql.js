/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateStoreBannerMutationVariables = {|
  id: string
|};
export type UpdateStoreBannerMutationResponse = {|
  +updateStoreBanner: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |},
    +store: ?{|
      +id: ?string,
      +banner: ?{|
        +id: ?string,
        +url: ?string,
        +display: ?number,
      |},
    |},
  |}
|};
export type UpdateStoreBannerMutation = {|
  variables: UpdateStoreBannerMutationVariables,
  response: UpdateStoreBannerMutationResponse,
|};
*/


/*
mutation UpdateStoreBannerMutation(
  $id: String!
) {
  updateStoreBanner(id: $id) {
    actionInfo {
      hasError
      message
    }
    store {
      id
      banner {
        id
        url
        display
      }
    }
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "ActionOnStorePayload",
    "kind": "LinkedField",
    "name": "updateStoreBanner",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ActionInfo",
        "kind": "LinkedField",
        "name": "actionInfo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "hasError",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "message",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Store",
        "kind": "LinkedField",
        "name": "store",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "banner",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "url",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "display",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateStoreBannerMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateStoreBannerMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "3c5ad09a5701d381d01a000e34c27ff6",
    "id": null,
    "metadata": {},
    "name": "UpdateStoreBannerMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateStoreBannerMutation(\n  $id: String!\n) {\n  updateStoreBanner(id: $id) {\n    actionInfo {\n      hasError\n      message\n    }\n    store {\n      id\n      banner {\n        id\n        url\n        display\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b43d5d8156296bbe965e7500f74402a4';

module.exports = node;
