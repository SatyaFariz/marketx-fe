/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CategoryDetailScreen_category$ref: FragmentReference;
declare export opaque type CategoryDetailScreen_category$fragmentType: CategoryDetailScreen_category$ref;
export type CategoryDetailScreen_category = {|
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
      +name: ?string
    |},
  |}>,
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
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CategoryDetailScreen_category",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
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
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/)
      ],
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
          "concreteType": "Attribute",
          "kind": "LinkedField",
          "name": "attribute",
          "plural": false,
          "selections": [
            (v1/*: any*/)
          ],
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
(node/*: any*/).hash = '2b9e873e8048d660c6dad18b3051b4df';

module.exports = node;
