/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CategoryDetailScreen_attributes$ref = any;
type CategoryDetailScreen_category$ref = any;
type CategoryDetailScreen_rentalDurations$ref = any;
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
  +rentalDurations: ?$ReadOnlyArray<?{|
    +$fragmentRefs: CategoryDetailScreen_rentalDurations$ref
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
  rentalDurations {
    ...CategoryDetailScreen_rentalDurations
    id
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
  rentalDurationIds
  maxImageUpload
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
  pivotField {
    id
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
  specFields {
    type
    isRequired
    isPublished
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
    emptyErrorMessage
    helperText
    attribute {
      id
      name
    }
    includePivotFieldOptionIds
    excludePivotFieldOptionIds
    id
  }
}

fragment CategoryDetailScreen_rentalDurations on Unit {
  id
  display
  name
  value
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
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isPublished",
  "storageKey": null
},
v6 = [
  (v1/*: any*/),
  (v4/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "Attribute",
  "kind": "LinkedField",
  "name": "attribute",
  "plural": false,
  "selections": (v6/*: any*/),
  "storageKey": null
};
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Unit",
        "kind": "LinkedField",
        "name": "rentalDurations",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CategoryDetailScreen_rentalDurations"
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
          (v5/*: any*/),
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
            "name": "rentalDurationIds",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "maxImageUpload",
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
            "selections": (v6/*: any*/),
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
            "concreteType": "PivotField",
            "kind": "LinkedField",
            "name": "pivotField",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v7/*: any*/),
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
              (v5/*: any*/),
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
              (v7/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "includePivotFieldOptionIds",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "excludePivotFieldOptionIds",
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
        "selections": (v6/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Unit",
        "kind": "LinkedField",
        "name": "rentalDurations",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "display",
            "storageKey": null
          },
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "value",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "023beaaca648ba0a4d5a1285fe852bba",
    "id": null,
    "metadata": {},
    "name": "CategoryDetailScreenQuery",
    "operationKind": "query",
    "text": "query CategoryDetailScreenQuery(\n  $id: String!\n) {\n  me {\n    id\n    isAdmin\n    ...FixedAddressBar_me\n  }\n  category(id: $id) {\n    ...CategoryDetailScreen_category\n    id\n  }\n  attributes {\n    id\n    ...CategoryDetailScreen_attributes\n  }\n  rentalDurations {\n    ...CategoryDetailScreen_rentalDurations\n    id\n  }\n}\n\nfragment CategoryDetailScreen_attributes on Attribute {\n  id\n  ...CreateSpecificationFieldsModal_attributes\n}\n\nfragment CategoryDetailScreen_category on Category {\n  id\n  name\n  isPublished\n  showsProductConditionField\n  requiresProductCondition\n  forceLocationInput\n  rentalDurationIds\n  maxImageUpload\n  listingType\n  ...CreateSpecificationFieldsModal_category\n  ancestors {\n    id\n    name\n  }\n  icon {\n    url\n    id\n  }\n  pivotField {\n    id\n    attribute {\n      id\n      name\n    }\n    options {\n      id\n      label\n      desc\n      isDefault\n    }\n  }\n  specFields {\n    type\n    isRequired\n    isPublished\n    isEnum\n    isMulti\n    suffix\n    prefix\n    isAutocomplete\n    options\n    max\n    min\n    numberOfLines\n    maxLength\n    emptyErrorMessage\n    helperText\n    attribute {\n      id\n      name\n    }\n    includePivotFieldOptionIds\n    excludePivotFieldOptionIds\n    id\n  }\n}\n\nfragment CategoryDetailScreen_rentalDurations on Unit {\n  id\n  display\n  name\n  value\n}\n\nfragment CreateSpecificationFieldsModal_attributes on Attribute {\n  id\n  name\n}\n\nfragment CreateSpecificationFieldsModal_category on Category {\n  id\n}\n\nfragment FixedAddressBar_me on User {\n  id\n  isAdmin\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '48326263821deb15a208801296462771';

module.exports = node;
