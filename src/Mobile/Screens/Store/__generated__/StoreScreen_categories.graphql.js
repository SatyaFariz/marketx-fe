/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SelectTypeAndCategoryView_categories$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type StoreScreen_categories$ref: FragmentReference;
declare export opaque type StoreScreen_categories$fragmentType: StoreScreen_categories$ref;
export type StoreScreen_categories = $ReadOnlyArray<{|
  +id: ?string,
  +$fragmentRefs: SelectTypeAndCategoryView_categories$ref,
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
      "name": "SelectTypeAndCategoryView_categories"
    }
  ],
  "type": "Category",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'e1bff59e784f6bf5fe1512c451804cbe';

module.exports = node;
