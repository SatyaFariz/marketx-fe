/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type CreateSpecificationFieldsModal_category$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CategoryDetailScreen_category$ref: FragmentReference;
declare export opaque type CategoryDetailScreen_category$fragmentType: CategoryDetailScreen_category$ref;
export type CategoryDetailScreen_category = {|
  +id: ?string,
  +name: ?string,
  +isPublished: ?boolean,
  +showsProductConditionField: ?boolean,
  +requiresProductCondition: ?boolean,
  +forceLocationInput: ?boolean,
  +rentalDurationIds: ?$ReadOnlyArray<?string>,
  +maxImageUpload: ?number,
  +listingType: ?string,
  +ancestors: ?$ReadOnlyArray<?{|
    +id: ?string,
    +name: ?string,
  |}>,
  +icon: ?{|
    +url: ?string
  |},
  +pivotField: ?{|
    +id: ?string,
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
    +type: ?string,
    +isRequired: ?boolean,
    +isPublished: ?boolean,
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
    +emptyErrorMessage: ?string,
    +helperText: ?string,
    +attribute: ?{|
      +id: ?string,
      +name: ?string,
    |},
    +includePivotFieldOptionIds: ?$ReadOnlyArray<?string>,
    +excludePivotFieldOptionIds: ?$ReadOnlyArray<?string>,
  |}>,
  +$fragmentRefs: CreateSpecificationFieldsModal_category$ref,
  +$refType: CategoryDetailScreen_category$ref,
|};
export type CategoryDetailScreen_category$data = CategoryDetailScreen_category;
export type CategoryDetailScreen_category$key = {
  +$data?: CategoryDetailScreen_category$data,
  +$fragmentRefs: CategoryDetailScreen_category$ref,
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
  "name": "isPublished",
  "storageKey": null
},
v3 = [
  (v0/*: any*/),
  (v1/*: any*/)
],
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "Attribute",
  "kind": "LinkedField",
  "name": "attribute",
  "plural": false,
  "selections": (v3/*: any*/),
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CategoryDetailScreen_category",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    (v2/*: any*/),
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
      "selections": (v3/*: any*/),
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
        }
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
        (v0/*: any*/),
        (v4/*: any*/),
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
        (v2/*: any*/),
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
        (v4/*: any*/),
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
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CreateSpecificationFieldsModal_category"
    }
  ],
  "type": "Category",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '095dcab5cd4309589065af33a7e84cc1';

module.exports = node;
