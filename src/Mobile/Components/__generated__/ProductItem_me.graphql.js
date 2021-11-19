/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProductItem_me$ref: FragmentReference;
declare export opaque type ProductItem_me$fragmentType: ProductItem_me$ref;
export type ProductItem_me = {|
  +id: ?string,
  +$refType: ProductItem_me$ref,
|};
export type ProductItem_me$data = ProductItem_me;
export type ProductItem_me$key = {
  +$data?: ProductItem_me$data,
  +$fragmentRefs: ProductItem_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProductItem_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '4bf3c8f092e4601ed273c7a850f5e16a';

module.exports = node;
