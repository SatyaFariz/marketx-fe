/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SpecificationFieldInput = {|
  attributeId: string,
  type: string,
  options: $ReadOnlyArray<string>,
  isRequired: boolean,
  isPublished?: ?boolean,
  isAutocomplete?: ?boolean,
  isEnum?: ?boolean,
  isMulti?: ?boolean,
  max?: ?number,
  min?: ?number,
  numberOfLines?: ?number,
  maxLength?: ?number,
  prefix?: ?string,
  suffix?: ?string,
  emptyErrorMessage?: ?string,
  helperText?: ?string,
  includePivotFieldOptionIds?: ?$ReadOnlyArray<string>,
  excludePivotFieldOptionIds?: ?$ReadOnlyArray<string>,
|};
export type CreateSpecificationFieldsMutationVariables = {|
  categoryId: string,
  fields: $ReadOnlyArray<SpecificationFieldInput>,
|};
export type CreateSpecificationFieldsMutationResponse = {|
  +createSpecificationFields: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |},
    +category: ?{|
      +id: ?string,
      +specFields: ?$ReadOnlyArray<?{|
        +type: ?string,
        +isRequired: ?boolean,
        +isEnum: ?boolean,
        +isMulti: ?boolean,
        +suffix: ?string,
        +prefix: ?string,
        +isAutocomplete: ?boolean,
        +options: ?$ReadOnlyArray<?string>,
        +max: ?number,
        +min: ?number,
        +numberOfLines: ?number,
        +maxLength: ?number,
        +attribute: ?{|
          +id: ?string,
          +name: ?string,
        |},
      |}>,
    |},
  |}
|};
export type CreateSpecificationFieldsMutation = {|
  variables: CreateSpecificationFieldsMutationVariables,
  response: CreateSpecificationFieldsMutationResponse,
|};
*/


/*
mutation CreateSpecificationFieldsMutation(
  $categoryId: String!
  $fields: [SpecificationFieldInput!]!
) {
  createSpecificationFields(categoryId: $categoryId, fields: $fields) {
    actionInfo {
      hasError
      message
    }
    category {
      id
      specFields {
        type
        isRequired
        isEnum
        isMulti
        suffix
        prefix
        isAutocomplete
        options
        max
        min
        numberOfLines
        maxLength
        attribute {
          id
          name
        }
        id
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
    "name": "fields"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "categoryId",
    "variableName": "categoryId"
  },
  {
    "kind": "Variable",
    "name": "fields",
    "variableName": "fields"
  }
],
v2 = {
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isRequired",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isEnum",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isMulti",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "suffix",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "prefix",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isAutocomplete",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "options",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "max",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "min",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "numberOfLines",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "maxLength",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "concreteType": "Attribute",
  "kind": "LinkedField",
  "name": "attribute",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateSpecificationFieldsMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ActionOnCategoryPayload",
        "kind": "LinkedField",
        "name": "createSpecificationFields",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Category",
            "kind": "LinkedField",
            "name": "category",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "SpecificationField",
                "kind": "LinkedField",
                "name": "specFields",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/)
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateSpecificationFieldsMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ActionOnCategoryPayload",
        "kind": "LinkedField",
        "name": "createSpecificationFields",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Category",
            "kind": "LinkedField",
            "name": "category",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "SpecificationField",
                "kind": "LinkedField",
                "name": "specFields",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/),
                  (v3/*: any*/)
                ],
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
    "cacheID": "b791b8ff5d5be5d7fd441ce4fc530629",
    "id": null,
    "metadata": {},
    "name": "CreateSpecificationFieldsMutation",
    "operationKind": "mutation",
    "text": "mutation CreateSpecificationFieldsMutation(\n  $categoryId: String!\n  $fields: [SpecificationFieldInput!]!\n) {\n  createSpecificationFields(categoryId: $categoryId, fields: $fields) {\n    actionInfo {\n      hasError\n      message\n    }\n    category {\n      id\n      specFields {\n        type\n        isRequired\n        isEnum\n        isMulti\n        suffix\n        prefix\n        isAutocomplete\n        options\n        max\n        min\n        numberOfLines\n        maxLength\n        attribute {\n          id\n          name\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '637cfb616f0fb6d078ec012cf26a42ae';

module.exports = node;
