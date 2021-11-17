/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type IncrementViewsMutationVariables = {|
  productId: string
|};
export type IncrementViewsMutationResponse = {|
  +incrementViews: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean
    |}
  |}
|};
export type IncrementViewsMutation = {|
  variables: IncrementViewsMutationVariables,
  response: IncrementViewsMutationResponse,
|};
*/


/*
mutation IncrementViewsMutation(
  $productId: String!
) {
  incrementViews(productId: $productId) {
    actionInfo {
      hasError
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "productId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "productId",
        "variableName": "productId"
      }
    ],
    "concreteType": "ActionOnProductPayload",
    "kind": "LinkedField",
    "name": "incrementViews",
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
    "name": "IncrementViewsMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IncrementViewsMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f0f48812a20d11cb2cb064045daea555",
    "id": null,
    "metadata": {},
    "name": "IncrementViewsMutation",
    "operationKind": "mutation",
    "text": "mutation IncrementViewsMutation(\n  $productId: String!\n) {\n  incrementViews(productId: $productId) {\n    actionInfo {\n      hasError\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4f5e948b971525a87d482481bfe89c78';

module.exports = node;
