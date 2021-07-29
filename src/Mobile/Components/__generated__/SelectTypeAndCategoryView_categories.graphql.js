/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SelectTypeAndCategoryView_categories$ref: FragmentReference;
declare export opaque type SelectTypeAndCategoryView_categories$fragmentType: SelectTypeAndCategoryView_categories$ref;
export type SelectTypeAndCategoryView_categories = $ReadOnlyArray<{|
  +id: ?string,
  +name: ?string,
  +$refType: SelectTypeAndCategoryView_categories$ref,
|}>;
export type SelectTypeAndCategoryView_categories$data = SelectTypeAndCategoryView_categories;
export type SelectTypeAndCategoryView_categories$key = $ReadOnlyArray<{
  +$data?: SelectTypeAndCategoryView_categories$data,
  +$fragmentRefs: SelectTypeAndCategoryView_categories$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "SelectTypeAndCategoryView_categories",
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
    }
  ],
  "type": "Category",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '790a546b35da21d7574329dc54dfcae0';

module.exports = node;
