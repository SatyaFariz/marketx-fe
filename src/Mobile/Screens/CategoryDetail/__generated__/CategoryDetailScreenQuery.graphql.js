/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CategoryDetailScreen_attributes$ref = any;
type CategoryDetailScreen_category$ref = any;
type FixedAddressBar_me$ref = any;
export type CategoryDetailScreenQueryVariables = {|
  id: string
|};
export type CategoryDetailScreenQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +isAdmin: ?boolean,
    +$fragmentRefs: FixedAddressBar_me$ref,
  |},
  +category: ?{|
    +$fragmentRefs: CategoryDetailScreen_category$ref
  |},
  +attributes: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: CategoryDetailScreen_attributes$ref,
  |}>,
|};
export type CategoryDetailScreenQuery = {|
  variables: CategoryDetailScreenQueryVariables,
  response: CategoryDetailScreenQueryResponse,
|};
*/


/*
query CategoryDetailScreenQuery(
  $id: String!
) {
  me {
    id
    isAdmin
    ...FixedAddressBar_me
  }
  category(id: $id) {
    ...CategoryDetailScreen_category
    id
  }
  attributes {
    id
    ...CategoryDetailScreen_attributes
  }
}

fragment CategoryDetailScreen_attributes on Attribute {
  id
  ...CreateSpecificationFieldsModal_attributes
}

fragment CategoryDetailScreen_category on Category {
  id
  name
  isPublished
  showsProductConditionField
  requiresProductCondition
  forceLocationInput
  listingType
  ...CreateSpecificationFieldsModal_category
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

fragment CreateSpecificationFieldsModal_attributes on Attribute {
  id
  name
}

fragment CreateSpecificationFieldsModal_category on Category {
  id
}

fragment FixedAddressBar_me on User {
  id
  isAdmin
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
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
  "name": "isAdmin",
  "storageKey": null
},
v3 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = [
  (v1/*: any*/),
  (v4/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CategoryDetailScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FixedAddressBar_me"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Category",
        "kind": "LinkedField",
        "name": "category",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CategoryDetailScreen_category"
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
          (v1/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CategoryDetailScreen_attributes"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CategoryDetailScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Category",
        "kind": "LinkedField",
        "name": "category",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v4/*: any*/),
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
            "kind": "ScalarField",
            "name": "showsProductConditionField",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "requiresProductCondition",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "forceLocationInput",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "listingType",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Category",
            "kind": "LinkedField",
            "name": "ancestors",
            "plural": true,
            "selections": (v5/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "icon",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "url",
                "storageKey": null
              },
              (v1/*: any*/)
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "type",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isRequired",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isEnum",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isMulti",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "suffix",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "prefix",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isAutocomplete",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "options",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "max",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "min",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "numberOfLines",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "maxLength",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Attribute",
                "kind": "LinkedField",
                "name": "attribute",
                "plural": false,
                "selections": (v5/*: any*/),
                "storageKey": null
              },
              (v1/*: any*/)
            ],
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
        "selections": (v5/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b8f3d1f9bd65492e05463686c82b5f59",
    "id": null,
    "metadata": {},
    "name": "CategoryDetailScreenQuery",
    "operationKind": "query",
    "text": "query CategoryDetailScreenQuery(\n  $id: String!\n) {\n  me {\n    id\n    isAdmin\n    ...FixedAddressBar_me\n  }\n  category(id: $id) {\n    ...CategoryDetailScreen_category\n    id\n  }\n  attributes {\n    id\n    ...CategoryDetailScreen_attributes\n  }\n}\n\nfragment CategoryDetailScreen_attributes on Attribute {\n  id\n  ...CreateSpecificationFieldsModal_attributes\n}\n\nfragment CategoryDetailScreen_category on Category {\n  id\n  name\n  isPublished\n  showsProductConditionField\n  requiresProductCondition\n  forceLocationInput\n  listingType\n  ...CreateSpecificationFieldsModal_category\n  ancestors {\n    id\n    name\n  }\n  icon {\n    url\n    id\n  }\n  specFields {\n    type\n    isRequired\n    isEnum\n    isMulti\n    suffix\n    prefix\n    isAutocomplete\n    options\n    max\n    min\n    numberOfLines\n    maxLength\n    attribute {\n      id\n      name\n    }\n    id\n  }\n}\n\nfragment CreateSpecificationFieldsModal_attributes on Attribute {\n  id\n  name\n}\n\nfragment CreateSpecificationFieldsModal_category on Category {\n  id\n}\n\nfragment FixedAddressBar_me on User {\n  id\n  isAdmin\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '76587ad496e8e8d0c5389ff2a46b5bd6';

module.exports = node;
