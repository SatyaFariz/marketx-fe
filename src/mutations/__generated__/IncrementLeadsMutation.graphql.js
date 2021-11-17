/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type IncrementLeadsMutationVariables = {|
  productId: string
|};
export type IncrementLeadsMutationResponse = {|
  +incrementLeads: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean
    |}
  |}
|};
export type IncrementLeadsMutation = {|
  variables: IncrementLeadsMutationVariables,
  response: IncrementLeadsMutationResponse,
|};
*/


/*
mutation IncrementLeadsMutation(
  $productId: String!
) {
  incrementLeads(productId: $productId) {
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
    "name": "incrementLeads",
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
    "name": "IncrementLeadsMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IncrementLeadsMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "97d8fde8ad192de7d6963cc17f4bd116",
    "id": null,
    "metadata": {},
    "name": "IncrementLeadsMutation",
    "operationKind": "mutation",
    "text": "mutation IncrementLeadsMutation(\n  $productId: String!\n) {\n  incrementLeads(productId: $productId) {\n    actionInfo {\n      hasError\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8763499adc471a91c24e7a27eab3b596';

module.exports = node;
