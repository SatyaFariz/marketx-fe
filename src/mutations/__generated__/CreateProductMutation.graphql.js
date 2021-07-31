/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProductTypeEnum = "for_rent" | "for_sale" | "service" | "%future added value";
export type ProductInput = {|
  name: string,
  desc: string,
  price: number,
  specs: $ReadOnlyArray<SpecificationInput>,
  rentalDurationId?: ?string,
|};
export type SpecificationInput = {|
  attributeId: string,
  value: string,
|};
export type CreateProductMutationVariables = {|
  storeId: string,
  type: ProductTypeEnum,
  categoryId: string,
  input: ProductInput,
|};
export type CreateProductMutationResponse = {|
  +createProduct: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |},
    +product: ?{|
      +id: ?string,
      +name: ?string,
      +desc: ?string,
      +price: ?number,
      +images: ?$ReadOnlyArray<?{|
        +id: ?string,
        +url: ?string,
      |}>,
      +category: ?{|
        +id: ?string,
        +name: ?string,
      |},
      +rentalDuration: ?{|
        +display: ?string
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
        +whatsappLink: ?string,
      |},
    |},
  |}
|};
export type CreateProductMutation = {|
  variables: CreateProductMutationVariables,
  response: CreateProductMutationResponse,
|};
*/


/*
mutation CreateProductMutation(
  $storeId: String!
  $type: ProductTypeEnum!
  $categoryId: String!
  $input: ProductInput!
) {
  createProduct(storeId: $storeId, type: $type, categoryId: $categoryId, input: $input) {
    actionInfo {
      hasError
      message
    }
    product {
      id
      name
      desc
      price
      images {
        id
        url
      }
      category {
        id
        name
      }
      rentalDuration {
        display
        id
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
        whatsappLink
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "categoryId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "storeId"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "type"
},
v4 = [
  {
    "kind": "Variable",
    "name": "categoryId",
    "variableName": "categoryId"
  },
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  },
  {
    "kind": "Variable",
    "name": "storeId",
    "variableName": "storeId"
  },
  {
    "kind": "Variable",
    "name": "type",
    "variableName": "type"
  }
],
v5 = {
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
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "desc",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "price",
  "storageKey": null
},
v10 = [
  (v6/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
],
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "images",
  "plural": true,
  "selections": (v10/*: any*/),
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "concreteType": "Category",
  "kind": "LinkedField",
  "name": "category",
  "plural": false,
  "selections": [
    (v6/*: any*/),
    (v7/*: any*/)
  ],
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "display",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "concreteType": "Specification",
  "kind": "LinkedField",
  "name": "specs",
  "plural": true,
  "selections": [
    (v6/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Attribute",
      "kind": "LinkedField",
      "name": "attribute",
      "plural": false,
      "selections": [
        (v6/*: any*/),
        (v7/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Image",
          "kind": "LinkedField",
          "name": "icon",
          "plural": false,
          "selections": (v10/*: any*/),
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
v15 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "merchant",
  "plural": false,
  "selections": [
    (v6/*: any*/),
    (v7/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "profilePicture",
      "plural": false,
      "selections": (v10/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "concreteType": "Store",
  "kind": "LinkedField",
  "name": "store",
  "plural": false,
  "selections": [
    (v6/*: any*/),
    (v7/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "whatsappLink",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateProductMutation",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "ActionOnProductPayload",
        "kind": "LinkedField",
        "name": "createProduct",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Product",
            "kind": "LinkedField",
            "name": "product",
            "plural": false,
            "selections": [
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Unit",
                "kind": "LinkedField",
                "name": "rentalDuration",
                "plural": false,
                "selections": [
                  (v13/*: any*/)
                ],
                "storageKey": null
              },
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateProductMutation",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "ActionOnProductPayload",
        "kind": "LinkedField",
        "name": "createProduct",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Product",
            "kind": "LinkedField",
            "name": "product",
            "plural": false,
            "selections": [
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Unit",
                "kind": "LinkedField",
                "name": "rentalDuration",
                "plural": false,
                "selections": [
                  (v13/*: any*/),
                  (v6/*: any*/)
                ],
                "storageKey": null
              },
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "dedd7f3778c94e89d7d07936b103fc59",
    "id": null,
    "metadata": {},
    "name": "CreateProductMutation",
    "operationKind": "mutation",
    "text": "mutation CreateProductMutation(\n  $storeId: String!\n  $type: ProductTypeEnum!\n  $categoryId: String!\n  $input: ProductInput!\n) {\n  createProduct(storeId: $storeId, type: $type, categoryId: $categoryId, input: $input) {\n    actionInfo {\n      hasError\n      message\n    }\n    product {\n      id\n      name\n      desc\n      price\n      images {\n        id\n        url\n      }\n      category {\n        id\n        name\n      }\n      rentalDuration {\n        display\n        id\n      }\n      specs {\n        id\n        attribute {\n          id\n          name\n          icon {\n            id\n            url\n          }\n        }\n        value\n      }\n      merchant {\n        id\n        name\n        profilePicture {\n          id\n          url\n        }\n      }\n      store {\n        id\n        name\n        whatsappLink\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd7406ec5eca5757a44d1a14241625292';

module.exports = node;
