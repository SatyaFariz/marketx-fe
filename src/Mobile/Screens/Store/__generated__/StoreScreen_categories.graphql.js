/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SelectCategoryView_categories$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type StoreScreen_categories$ref: FragmentReference;
declare export opaque type StoreScreen_categories$fragmentType: StoreScreen_categories$ref;
export type StoreScreen_categories = $ReadOnlyArray<{|
  +id: ?string,
  +$fragmentRefs: SelectCategoryView_categories$ref,
  +$refType: StoreScreen_categories$ref,
|}>;
export type StoreScreen_categories$data = StoreScreen_categories;
export type StoreScreen_categories$key = $ReadOnlyArray<{
  +$data?: StoreScreen_categories$data,
  +$fragmentRefs: StoreScreen_categories$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "StoreScreen_categories",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SelectCategoryView_categories"
    }
  ],
  "type": "Category",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'e94884b3cd3959bb2dbe36622b5438f9';

module.exports = node;
