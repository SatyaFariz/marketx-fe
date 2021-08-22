/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CategoryScreen_category$ref: FragmentReference;
declare export opaque type CategoryScreen_category$fragmentType: CategoryScreen_category$ref;
export type CategoryScreen_category = {|
  +id: ?string,
  +name: ?string,
  +listingType: ?string,
  +$refType: CategoryScreen_category$ref,
|};
export type CategoryScreen_category$data = CategoryScreen_category;
export type CategoryScreen_category$key = {
  +$data?: CategoryScreen_category$data,
  +$fragmentRefs: CategoryScreen_category$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CategoryScreen_category",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "listingType",
      "storageKey": null
    }
  ],
  "type": "Category",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'd519df7ed3ca4324eb9366d894dfd2cd';

module.exports = node;
