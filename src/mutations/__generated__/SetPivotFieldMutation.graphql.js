/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PivotFieldInput = {|
  attributeId: string,
  emptyErrorMessage?: ?string,
  helperText?: ?string,
  showsInProductDetail?: ?boolean,
  options: $ReadOnlyArray<PivotFieldOptionInput>,
|};
export type PivotFieldOptionInput = {|
  label: string,
  id?: ?string,
  isDefault?: ?boolean,
  desc?: ?string,
|};
export type SetPivotFieldMutationVariables = {|
  categoryId: string,
  pivotField: PivotFieldInput,
|};
export type SetPivotFieldMutationResponse = {|
  +setPivotField: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |},
    +category: ?{|
      +id: ?string,
      +pivotField: ?{|
        +id: ?string,
        +emptyErrorMessage: ?string,
        +helperText: ?string,
        +attribute: ?{|
          +id: ?string,
          +name: ?string,
        |},
        +options: ?$ReadOnlyArray<?{|
          +id: ?string,
          +label: ?string,
          +desc: ?string,
          +isDefault: ?boolean,
        |}>,
      |},
    |},
  |}
|};
export type SetPivotFieldMutation = {|
  variables: SetPivotFieldMutationVariables,
  response: SetPivotFieldMutationResponse,
|};
*/


/*
mutation SetPivotFieldMutation(
  $categoryId: String!
  $pivotField: PivotFieldInput!
) {
  setPivotField(categoryId: $categoryId, pivotField: $pivotField) {
    actionInfo {
      hasError
      message
    }
    category {
      id
      pivotField {
        id
        emptyErrorMessage
        helperText
        attribute {
          id
          name
        }
        options {
          id
          label
          desc
          isDefault
        }
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
    "name": "categoryId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "pivotField"
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
        "name": "categoryId",
        "variableName": "categoryId"
      },
      {
        "kind": "Variable",
        "name": "pivotField",
        "variableName": "pivotField"
      }
    ],
    "concreteType": "ActionOnCategoryPayload",
    "kind": "LinkedField",
    "name": "setPivotField",
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
        "concreteType": "Category",
        "kind": "LinkedField",
        "name": "category",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "PivotField",
            "kind": "LinkedField",
            "name": "pivotField",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "emptyErrorMessage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "helperText",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Attribute",
                "kind": "LinkedField",
                "name": "attribute",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PivotFieldOption",
                "kind": "LinkedField",
                "name": "options",
                "plural": true,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "label",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "desc",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isDefault",
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SetPivotFieldMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SetPivotFieldMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "764f66acb1aad3588fd04aa8b248f273",
    "id": null,
    "metadata": {},
    "name": "SetPivotFieldMutation",
    "operationKind": "mutation",
    "text": "mutation SetPivotFieldMutation(\n  $categoryId: String!\n  $pivotField: PivotFieldInput!\n) {\n  setPivotField(categoryId: $categoryId, pivotField: $pivotField) {\n    actionInfo {\n      hasError\n      message\n    }\n    category {\n      id\n      pivotField {\n        id\n        emptyErrorMessage\n        helperText\n        attribute {\n          id\n          name\n        }\n        options {\n          id\n          label\n          desc\n          isDefault\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '21fe9e7faba08b6aa7ea743094806896';

module.exports = node;
