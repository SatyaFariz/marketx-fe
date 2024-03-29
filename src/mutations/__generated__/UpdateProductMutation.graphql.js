/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProductInput = {|
  name: string,
  desc: string,
  price: number,
  isPublished: boolean,
  specs: $ReadOnlyArray<SpecificationInput>,
  rentalDurationId?: ?string,
  productConditionId?: ?string,
|};
export type SpecificationInput = {|
  attributeId: string,
  value: string,
|};
export type UpdateProductMutationVariables = {|
  id: string,
  input: ProductInput,
|};
export type UpdateProductMutationResponse = {|
  +updateProduct: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |},
    +product: ?{|
      +id: ?string,
      +name: ?string,
      +desc: ?string,
      +price: ?number,
      +isPublished: ?boolean,
      +images: ?$ReadOnlyArray<?{|
        +id: ?string,
        +url: ?string,
      |}>,
      +category: ?$ReadOnlyArray<?{|
        +id: ?string,
        +name: ?string,
      |}>,
      +condition: ?{|
        +id: ?string
      |},
      +rentalDuration: ?{|
        +id: ?string,
        +display: ?string,
      |},
      +specs: ?$ReadOnlyArray<?{|
        +id: ?string,
        +attribute: ?{|
          +id: ?string,
          +name: ?string,
          +icon: ?{|
            +id: ?string,
            +url: ?string,
          |},
        |},
        +value: ?string,
      |}>,
      +merchant: ?{|
        +id: ?string,
        +name: ?string,
        +profilePicture: ?{|
          +id: ?string,
          +url: ?string,
        |},
      |},
      +store: ?{|
        +id: ?string,
        +name: ?string,
        +whatsappUrl: ?string,
      |},
    |},
  |}
|};
export type UpdateProductMutation = {|
  variables: UpdateProductMutationVariables,
  response: UpdateProductMutationResponse,
|};
*/


/*
mutation UpdateProductMutation(
  $id: String!
  $input: ProductInput!
) {
  updateProduct(id: $id, input: $input) {
    actionInfo {
      hasError
      message
    }
    product {
      id
      name
      desc
      price
      isPublished
      images {
        id
        url
      }
      category {
        id
        name
      }
      condition {
        id
      }
      rentalDuration {
        id
        display
      }
      specs {
        id
        attribute {
          id
          name
          icon {
            id
            url
          }
        }
        value
      }
      merchant {
        id
        name
        profilePicture {
          id
          url
        }
      }
      store {
        id
        name
        whatsappUrl
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
    "name": "input"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
],
v4 = [
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
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "ActionOnProductPayload",
    "kind": "LinkedField",
    "name": "updateProduct",
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
          (v2/*: any*/),
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
            "name": "price",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isPublished",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "images",
            "plural": true,
            "selections": (v3/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Category",
            "kind": "LinkedField",
            "name": "category",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ProductCondition",
            "kind": "LinkedField",
            "name": "condition",
            "plural": false,
            "selections": [
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Unit",
            "kind": "LinkedField",
            "name": "rentalDuration",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "display",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Specification",
            "kind": "LinkedField",
            "name": "specs",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Attribute",
                "kind": "LinkedField",
                "name": "attribute",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Image",
                    "kind": "LinkedField",
                    "name": "icon",
                    "plural": false,
                    "selections": (v3/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "value",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "merchant",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "profilePicture",
                "plural": false,
                "selections": (v3/*: any*/),
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
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "whatsappUrl",
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
    "name": "UpdateProductMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateProductMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "240fb2bf040a07b190ed5427ba8897ef",
    "id": null,
    "metadata": {},
    "name": "UpdateProductMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateProductMutation(\n  $id: String!\n  $input: ProductInput!\n) {\n  updateProduct(id: $id, input: $input) {\n    actionInfo {\n      hasError\n      message\n    }\n    product {\n      id\n      name\n      desc\n      price\n      isPublished\n      images {\n        id\n        url\n      }\n      category {\n        id\n        name\n      }\n      condition {\n        id\n      }\n      rentalDuration {\n        id\n        display\n      }\n      specs {\n        id\n        attribute {\n          id\n          name\n          icon {\n            id\n            url\n          }\n        }\n        value\n      }\n      merchant {\n        id\n        name\n        profilePicture {\n          id\n          url\n        }\n      }\n      store {\n        id\n        name\n        whatsappUrl\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dc8289437a56f3e763ef3debc0bb3ad9';

module.exports = node;
