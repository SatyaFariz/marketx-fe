/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ProductItem_product$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FeaturedProductsList_featuredProducts$ref: FragmentReference;
declare export opaque type FeaturedProductsList_featuredProducts$fragmentType: FeaturedProductsList_featuredProducts$ref;
export type FeaturedProductsList_featuredProducts = $ReadOnlyArray<{|
  +id: ?string,
  +$fragmentRefs: ProductItem_product$ref,
  +$refType: FeaturedProductsList_featuredProducts$ref,
|}>;
export type FeaturedProductsList_featuredProducts$data = FeaturedProductsList_featuredProducts;
export type FeaturedProductsList_featuredProducts$key = $ReadOnlyArray<{
  +$data?: FeaturedProductsList_featuredProducts$data,
  +$fragmentRefs: FeaturedProductsList_featuredProducts$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "FeaturedProductsList_featuredProducts",
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
      "name": "ProductItem_product"
    }
  ],
  "type": "Product",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'd5232e9a7c5e869a938317725d362026';

module.exports = node;
