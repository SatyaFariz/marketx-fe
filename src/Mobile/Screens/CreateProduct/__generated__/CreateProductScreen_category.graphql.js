/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CreateProductScreen_category$ref: FragmentReference;
declare export opaque type CreateProductScreen_category$fragmentType: CreateProductScreen_category$ref;
export type CreateProductScreen_category = {|
  +id: ?string,
  +name: ?string,
  +path: ?string,
  +requiresProductCondition: ?boolean,
  +showsProductConditionField: ?boolean,
  +forceLocationInput: ?boolean,
  +rentalDurationIds: ?$ReadOnlyArray<?string>,
  +maxImageUpload: ?number,
  +listingType: ?string,
  +ancestors: ?$ReadOnlyArray<?{|
    +id: ?string,
    +name: ?string,
  |}>,
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
  +$refType: CreateProductScreen_category$ref,
|};
export type CreateProductScreen_category$data = CreateProductScreen_category;
export type CreateProductScreen_category$key = {
  +$data?: CreateProductScreen_category$data,
  +$fragmentRefs: CreateProductScreen_category$ref,
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
v2 = [
  (v0/*: any*/),
  (v1/*: any*/)
],
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "Attribute",
  "kind": "LinkedField",
  "name": "attribute",
  "plural": false,
  "selections": (v2/*: any*/),
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CreateProductScreen_category",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "path",
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
      "selections": (v2/*: any*/),
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
        (v3/*: any*/),
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
        (v0/*: any*/),
        (v3/*: any*/),
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
  "type": "Category",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '8120d8884c32b4a4f5de80dbfcd29fef';

module.exports = node;
