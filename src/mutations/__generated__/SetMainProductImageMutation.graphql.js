/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SetMainProductImageMutationVariables = {|
  id: string,
  imageId: string,
|};
export type SetMainProductImageMutationResponse = {|
  +setMainProductImage: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |},
    +product: ?{|
      +id: ?string,
      +images: ?$ReadOnlyArray<?{|
        +id: ?string,
        +url: ?string,
        +display: ?number,
      |}>,
    |},
  |}
|};
export type SetMainProductImageMutation = {|
  variables: SetMainProductImageMutationVariables,
  response: SetMainProductImageMutationResponse,
|};
*/


/*
mutation SetMainProductImageMutation(
  $id: String!
  $imageId: String!
) {
  setMainProductImage(id: $id, imageId: $imageId) {
    actionInfo {
      hasError
      message
    }
    product {
      id
      images {
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
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "imageId"
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
      },
      {
        "kind": "Variable",
        "name": "imageId",
        "variableName": "imageId"
      }
    ],
    "concreteType": "ActionOnProductPayload",
    "kind": "LinkedField",
    "name": "setMainProductImage",
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
        "concreteType": "Product",
        "kind": "LinkedField",
        "name": "product",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "images",
            "plural": true,
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
    "name": "SetMainProductImageMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SetMainProductImageMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "111c9132fc77f4a8e1570a19817fbfe9",
    "id": null,
    "metadata": {},
    "name": "SetMainProductImageMutation",
    "operationKind": "mutation",
    "text": "mutation SetMainProductImageMutation(\n  $id: String!\n  $imageId: String!\n) {\n  setMainProductImage(id: $id, imageId: $imageId) {\n    actionInfo {\n      hasError\n      message\n    }\n    product {\n      id\n      images {\n        id\n        url\n        display\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f417b76611ec1d918864713dd2c98058';

module.exports = node;
