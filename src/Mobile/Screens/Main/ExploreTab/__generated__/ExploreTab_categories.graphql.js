/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Categories_categories$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExploreTab_categories$ref: FragmentReference;
declare export opaque type ExploreTab_categories$fragmentType: ExploreTab_categories$ref;
export type ExploreTab_categories = $ReadOnlyArray<{|
  +id: ?string,
  +$fragmentRefs: Categories_categories$ref,
  +$refType: ExploreTab_categories$ref,
|}>;
export type ExploreTab_categories$data = ExploreTab_categories;
export type ExploreTab_categories$key = $ReadOnlyArray<{
  +$data?: ExploreTab_categories$data,
  +$fragmentRefs: ExploreTab_categories$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "ExploreTab_categories",
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
      "name": "Categories_categories"
    }
  ],
  "type": "Category",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'c3bb0c4287bccfd9e9bca210bc8a0277';

module.exports = node;
