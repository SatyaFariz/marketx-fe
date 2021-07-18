/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FeaturedProductsList_featuredProducts$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExploreTab_featuredProducts$ref: FragmentReference;
declare export opaque type ExploreTab_featuredProducts$fragmentType: ExploreTab_featuredProducts$ref;
export type ExploreTab_featuredProducts = $ReadOnlyArray<{|
  +id: ?string,
  +$fragmentRefs: FeaturedProductsList_featuredProducts$ref,
  +$refType: ExploreTab_featuredProducts$ref,
|}>;
export type ExploreTab_featuredProducts$data = ExploreTab_featuredProducts;
export type ExploreTab_featuredProducts$key = $ReadOnlyArray<{
  +$data?: ExploreTab_featuredProducts$data,
  +$fragmentRefs: ExploreTab_featuredProducts$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "ExploreTab_featuredProducts",
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
(node/*: any*/).hash = 'a306e21b5782814d2552597c5c019602';

module.exports = node;
