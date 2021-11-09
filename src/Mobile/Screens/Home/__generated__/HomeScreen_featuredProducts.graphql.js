/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FeaturedProductsList_featuredProducts$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HomeScreen_featuredProducts$ref: FragmentReference;
declare export opaque type HomeScreen_featuredProducts$fragmentType: HomeScreen_featuredProducts$ref;
export type HomeScreen_featuredProducts = $ReadOnlyArray<{|
  +id: ?string,
  +$fragmentRefs: FeaturedProductsList_featuredProducts$ref,
  +$refType: HomeScreen_featuredProducts$ref,
|}>;
export type HomeScreen_featuredProducts$data = HomeScreen_featuredProducts;
export type HomeScreen_featuredProducts$key = $ReadOnlyArray<{
  +$data?: HomeScreen_featuredProducts$data,
  +$fragmentRefs: HomeScreen_featuredProducts$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "HomeScreen_featuredProducts",
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
      "name": "FeaturedProductsList_featuredProducts"
    }
  ],
  "type": "Product",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'b86c812796c4636c4f232e8c117e8273';

module.exports = node;
