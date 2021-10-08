/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateAttributesMutationVariables = {|
  names: $ReadOnlyArray<string>
|};
export type CreateAttributesMutationResponse = {|
  +createAttributes: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |},
    +attributes: ?$ReadOnlyArray<?{|
      +id: ?string,
      +name: ?string,
    |}>,
  |}
|};
export type CreateAttributesMutation = {|
  variables: CreateAttributesMutationVariables,
  response: CreateAttributesMutationResponse,
|};
*/


/*
mutation CreateAttributesMutation(
  $names: [String!]!
) {
  createAttributes(names: $names) {
    actionInfo {
      hasError
      message
    }
    attributes {
      id
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "names"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "names",
        "variableName": "names"
      }
    ],
    "concreteType": "CreateAttributesPayload",
    "kind": "LinkedField",
    "name": "createAttributes",
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
        "concreteType": "Attribute",
        "kind": "LinkedField",
        "name": "attributes",
        "plural": true,
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
            "name": "name",
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
    "name": "CreateAttributesMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateAttributesMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5942c24980020f8dd736f3d1eb72ab78",
    "id": null,
    "metadata": {},
    "name": "CreateAttributesMutation",
    "operationKind": "mutation",
    "text": "mutation CreateAttributesMutation(\n  $names: [String!]!\n) {\n  createAttributes(names: $names) {\n    actionInfo {\n      hasError\n      message\n    }\n    attributes {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '32b883ec1c0ce57302d9b0aa8548c3e6';

module.exports = node;
