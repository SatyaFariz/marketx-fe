/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type FeaturedProductsList_featuredProducts$ref: FragmentReference;
declare export opaque type FeaturedProductsList_featuredProducts$fragmentType: FeaturedProductsList_featuredProducts$ref;
export type FeaturedProductsList_featuredProducts = $ReadOnlyArray<{|
  +id: ?string,
  +name: ?string,
  +price: ?number,
  +images: ?$ReadOnlyArray<?{|
    +url: ?string
  |}>,
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
      "name": "price",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "images",
      "plural": true,
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
    }
  ],
  "type": "Product",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '095fbd7f37f8bd09d0c2f906fe7302bb';

module.exports = node;
