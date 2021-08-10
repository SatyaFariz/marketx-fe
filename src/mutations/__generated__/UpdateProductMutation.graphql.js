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
  specs: $ReadOnlyArray<SpecificationInput>,
  rentalDurationId?: ?string,
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
      +images: ?$ReadOnlyArray<?{|
        +id: ?string,
        +url: ?string,
      |}>,
      +category: ?$ReadOnlyArray<?{|
        +id: ?string,
        +name: ?string,
      |}>,
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
v1 = [
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
  "name": "desc",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "price",
  "storageKey": null
},
v7 = [
  (v3/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
],
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "Image",
  "kind": "LinkedField",
  "name": "images",
  "plural": true,
  "selections": (v7/*: any*/),
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "Category",
  "kind": "LinkedField",
  "name": "category",
  "plural": true,
  "selections": [
    (v3/*: any*/),
    (v4/*: any*/)
  ],
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "display",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "Specification",
  "kind": "LinkedField",
  "name": "specs",
  "plural": true,
  "selections": [
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Attribute",
      "kind": "LinkedField",
      "name": "attribute",
      "plural": false,
      "selections": [
        (v3/*: any*/),
        (v4/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Image",
          "kind": "LinkedField",
          "name": "icon",
          "plural": false,
          "selections": (v7/*: any*/),
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
v12 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "merchant",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v4/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "profilePicture",
      "plural": false,
      "selections": (v7/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "concreteType": "Store",
  "kind": "LinkedField",
  "name": "store",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v4/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateProductMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ActionOnProductPayload",
        "kind": "LinkedField",
        "name": "updateProduct",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Product",
            "kind": "LinkedField",
            "name": "product",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Unit",
                "kind": "LinkedField",
                "name": "rentalDuration",
                "plural": false,
                "selections": [
                  (v10/*: any*/)
                ],
                "storageKey": null
              },
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/)
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
    "name": "UpdateProductMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ActionOnProductPayload",
        "kind": "LinkedField",
        "name": "updateProduct",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Product",
            "kind": "LinkedField",
            "name": "product",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Unit",
                "kind": "LinkedField",
                "name": "rentalDuration",
                "plural": false,
                "selections": [
                  (v10/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5cbe8cf4a57d46f4c3ee7b3644813074",
    "id": null,
    "metadata": {},
    "name": "UpdateProductMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateProductMutation(\n  $id: String!\n  $input: ProductInput!\n) {\n  updateProduct(id: $id, input: $input) {\n    actionInfo {\n      hasError\n      message\n    }\n    product {\n      id\n      name\n      desc\n      price\n      images {\n        id\n        url\n      }\n      category {\n        id\n        name\n      }\n      rentalDuration {\n        display\n        id\n      }\n      specs {\n        id\n        attribute {\n          id\n          name\n          icon {\n            id\n            url\n          }\n        }\n        value\n      }\n      merchant {\n        id\n        name\n        profilePicture {\n          id\n          url\n        }\n      }\n      store {\n        id\n        name\n        whatsappLink\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '99323c4684763359375ab00c791bd4ff';

module.exports = node;
