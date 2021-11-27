/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EditProductScreen_product$ref: FragmentReference;
declare export opaque type EditProductScreen_product$fragmentType: EditProductScreen_product$ref;
export type EditProductScreen_product = {|
  +id: ?string,
  +name: ?string,
  +price: ?number,
  +desc: ?string,
  +isPublished: ?boolean,
  +isDeleted: ?boolean,
  +isSuspended: ?boolean,
  +syncLocationWithStoreAddress: ?boolean,
  +pivotFieldOptionId: ?string,
  +images: ?$ReadOnlyArray<?{|
    +id: ?string,
    +url: ?string,
  |}>,
  +specs: ?$ReadOnlyArray<?{|
    +id: ?string,
    +attribute: ?{|
      +id: ?string
    |},
    +value: ?string,
  |}>,
  +condition: ?{|
    +id: ?string
  |},
  +rentalDuration: ?{|
    +id: ?string
  |},
  +merchant: ?{|
    +id: ?string
  |},
  +location: ?{|
    +province: ?{|
      +administrativeAreaId: ?number,
      +name: ?string,
    |},
    +city: ?{|
      +administrativeAreaId: ?number,
      +name: ?string,
    |},
    +district: ?{|
      +administrativeAreaId: ?number,
      +name: ?string,
    |},
  |},
  +category: ?$ReadOnlyArray<?{|
    +id: ?string,
    +name: ?string,
    +requiresProductCondition: ?boolean,
    +showsProductConditionField: ?boolean,
    +forceLocationInput: ?boolean,
    +rentalDurationIds: ?$ReadOnlyArray<?string>,
    +listingType: ?string,
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
    +specFields: ?$ReadOnlyArray<?{|
      +id: ?string,
      +attribute: ?{|
        +id: ?string,
        +name: ?string,
      |},
      +isAutocomplete: ?boolean,
      +isRequired: ?boolean,
      +type: ?string,
      +max: ?number,
      +min: ?number,
      +options: ?$ReadOnlyArray<?string>,
      +isEnum: ?boolean,
      +isMulti: ?boolean,
      +prefix: ?string,
      +suffix: ?string,
      +numberOfLines: ?number,
      +maxLength: ?number,
      +emptyErrorMessage: ?string,
      +helperText: ?string,
      +excludePivotFieldOptionIds: ?$ReadOnlyArray<?string>,
      +includePivotFieldOptionIds: ?$ReadOnlyArray<?string>,
    |}>,
  |}>,
  +$refType: EditProductScreen_product$ref,
|};
export type EditProductScreen_product$data = EditProductScreen_product;
export type EditProductScreen_product$key = {
  +$data?: EditProductScreen_product$data,
  +$fragmentRefs: EditProductScreen_product$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "desc",
  "storageKey": null
},
v3 = [
  (v0/*: any*/)
],
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "administrativeAreaId",
    "storageKey": null
  },
  (v1/*: any*/)
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "emptyErrorMessage",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "helperText",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "Attribute",
  "kind": "LinkedField",
  "name": "attribute",
  "plural": false,
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/)
  ],
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EditProductScreen_product",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "price",
      "storageKey": null
    },
    (v2/*: any*/),
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
      "name": "isDeleted",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isSuspended",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "syncLocationWithStoreAddress",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "pivotFieldOptionId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "images",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "url",
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
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Attribute",
          "kind": "LinkedField",
          "name": "attribute",
          "plural": false,
          "selections": (v3/*: any*/),
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
      "concreteType": "ProductCondition",
      "kind": "LinkedField",
      "name": "condition",
      "plural": false,
      "selections": (v3/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Unit",
      "kind": "LinkedField",
      "name": "rentalDuration",
      "plural": false,
      "selections": (v3/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "merchant",
      "plural": false,
      "selections": (v3/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Location",
      "kind": "LinkedField",
      "name": "location",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "AdministrativeArea",
          "kind": "LinkedField",
          "name": "province",
          "plural": false,
          "selections": (v4/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "AdministrativeArea",
          "kind": "LinkedField",
          "name": "city",
          "plural": false,
          "selections": (v4/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "AdministrativeArea",
          "kind": "LinkedField",
          "name": "district",
          "plural": false,
          "selections": (v4/*: any*/),
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
      "plural": true,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
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
          "name": "showsProductConditionField",
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
          "name": "listingType",
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
            (v0/*: any*/),
            (v5/*: any*/),
            (v6/*: any*/),
            (v7/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "PivotFieldOption",
              "kind": "LinkedField",
              "name": "options",
              "plural": true,
              "selections": [
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "label",
                  "storageKey": null
                },
                (v2/*: any*/),
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
            (v0/*: any*/),
            (v7/*: any*/),
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
              "name": "isRequired",
              "storageKey": null
            },
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
              "name": "options",
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
              "name": "prefix",
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
            (v5/*: any*/),
            (v6/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "excludePivotFieldOptionIds",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "includePivotFieldOptionIds",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Product",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a05a7bd05b9a5ccc17d9d5604dd9a257';

module.exports = node;
