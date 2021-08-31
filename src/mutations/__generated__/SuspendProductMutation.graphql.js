/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SuspendProductMutationVariables = {|
  id: string,
  suspensionReasonId: string,
|};
export type SuspendProductMutationResponse = {|
  +suspendProduct: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |},
    +product: ?{|
      +id: ?string,
      +isSuspended: ?boolean,
    |},
  |}
|};
export type SuspendProductMutation = {|
  variables: SuspendProductMutationVariables,
  response: SuspendProductMutationResponse,
|};
*/


/*
mutation SuspendProductMutation(
  $id: String!
  $suspensionReasonId: String!
) {
  suspendProduct(id: $id, suspensionReasonId: $suspensionReasonId) {
    actionInfo {
      hasError
      message
    }
    product {
      id
      isSuspended
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
    "name": "suspensionReasonId"
  }
],
v1 = [
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
        "name": "suspensionReasonId",
        "variableName": "suspensionReasonId"
      }
    ],
    "concreteType": "ActionOnProductPayload",
    "kind": "LinkedField",
    "name": "suspendProduct",
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
            "name": "isSuspended",
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
    "name": "SuspendProductMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SuspendProductMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2151053e4188c7ab769bb9c0cb9fe4fb",
    "id": null,
    "metadata": {},
    "name": "SuspendProductMutation",
    "operationKind": "mutation",
    "text": "mutation SuspendProductMutation(\n  $id: String!\n  $suspensionReasonId: String!\n) {\n  suspendProduct(id: $id, suspensionReasonId: $suspensionReasonId) {\n    actionInfo {\n      hasError\n      message\n    }\n    product {\n      id\n      isSuspended\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '384796161d75b05f2a5b582a4288098a';

module.exports = node;
