/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Categories_categories$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HomeScreen_categories$ref: FragmentReference;
declare export opaque type HomeScreen_categories$fragmentType: HomeScreen_categories$ref;
export type HomeScreen_categories = $ReadOnlyArray<{|
  +id: ?string,
  +$fragmentRefs: Categories_categories$ref,
  +$refType: HomeScreen_categories$ref,
|}>;
export type HomeScreen_categories$data = HomeScreen_categories;
export type HomeScreen_categories$key = $ReadOnlyArray<{
  +$data?: HomeScreen_categories$data,
  +$fragmentRefs: HomeScreen_categories$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "HomeScreen_categories",
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
(node/*: any*/).hash = '8ba1ea27c99e0edf0e131074c986a2d9';

module.exports = node;
