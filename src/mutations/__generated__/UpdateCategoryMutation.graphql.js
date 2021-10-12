/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateCategoryInput = {|
  id: string,
  name: string,
  isPublished: boolean,
  showsProductConditionField?: ?boolean,
  requiresProductCondition?: ?boolean,
  specFields: $ReadOnlyArray<CategorySpecificationFieldInput>,
|};
export type CategorySpecificationFieldInput = {|
  attributeId: string,
  type: string,
  options: $ReadOnlyArray<string>,
  isRequired: boolean,
  isAutocomplete?: ?boolean,
  isEnum?: ?boolean,
  isMulti?: ?boolean,
  max?: ?number,
  min?: ?number,
|};
export type UpdateCategoryMutationVariables = {|
  input: UpdateCategoryInput
|};
export type UpdateCategoryMutationResponse = {|
  +updateCategory: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |},
    +category: ?{|
      +id: ?string,
      +name: ?string,
      +isPublished: ?boolean,
      +showsProductConditionField: ?boolean,
      +requiresProductCondition: ?boolean,
      +listingType: ?string,
      +ancestors: ?$ReadOnlyArray<?{|
        +id: ?string,
        +name: ?string,
      |}>,
      +icon: ?{|
        +url: ?string
      |},
      +specFields: ?$ReadOnlyArray<?{|
        +type: ?string,
        +isRequired: ?boolean,
        +isEnum: ?boolean,
        +isAutocomplete: ?boolean,
        +options: ?$ReadOnlyArray<?string>,
        +max: ?number,
        +min: ?number,
        +attribute: ?{|
          +id: ?string,
          +name: ?string,
        |},
      |}>,
    |},
  |}
|};
export type UpdateCategoryMutation = {|
  variables: UpdateCategoryMutationVariables,
  response: UpdateCategoryMutationResponse,
|};
*/


/*
mutation UpdateCategoryMutation(
  $input: UpdateCategoryInput!
) {
  updateCategory(input: $input) {
    actionInfo {
      hasError
      message
    }
    category {
      id
      name
      isPublished
      showsProductConditionField
      requiresProductCondition
      listingType
      ancestors {
        id
        name
      }
      icon {
        url
        id
      }
      specFields {
        type
        isRequired
        isEnum
        isAutocomplete
        options
        max
        min
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
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
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
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isPublished",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "showsProductConditionField",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "requiresProductCondition",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "listingType",
  "storageKey": null
},
v9 = [
  (v3/*: any*/),
  (v4/*: any*/)
],
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "Category",
  "kind": "LinkedField",
  "name": "ancestors",
  "plural": true,
  "selections": (v9/*: any*/),
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isRequired",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isEnum",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isAutocomplete",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "options",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "max",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "min",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "concreteType": "Attribute",
  "kind": "LinkedField",
  "name": "attribute",
  "plural": false,
  "selections": (v9/*: any*/),
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateCategoryMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ActionOnCategoryPayload",
        "kind": "LinkedField",
        "name": "updateCategory",
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
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v10/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "icon",
                "plural": false,
                "selections": [
                  (v11/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "SpecificationField",
                "kind": "LinkedField",
                "name": "specFields",
                "plural": true,
                "selections": [
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/),
                  (v17/*: any*/),
                  (v18/*: any*/),
                  (v19/*: any*/)
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
    "name": "UpdateCategoryMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ActionOnCategoryPayload",
        "kind": "LinkedField",
        "name": "updateCategory",
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
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v10/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "icon",
                "plural": false,
                "selections": [
                  (v11/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "SpecificationField",
                "kind": "LinkedField",
                "name": "specFields",
                "plural": true,
                "selections": [
                  (v12/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/),
                  (v17/*: any*/),
                  (v18/*: any*/),
                  (v19/*: any*/),
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
    "cacheID": "3aad42f8927d5eb93dfc4c3b12b11c96",
    "id": null,
    "metadata": {},
    "name": "UpdateCategoryMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateCategoryMutation(\n  $input: UpdateCategoryInput!\n) {\n  updateCategory(input: $input) {\n    actionInfo {\n      hasError\n      message\n    }\n    category {\n      id\n      name\n      isPublished\n      showsProductConditionField\n      requiresProductCondition\n      listingType\n      ancestors {\n        id\n        name\n      }\n      icon {\n        url\n        id\n      }\n      specFields {\n        type\n        isRequired\n        isEnum\n        isAutocomplete\n        options\n        max\n        min\n        attribute {\n          id\n          name\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f60a2ee90d3461a5bd2f70c238a3d56b';

module.exports = node;
