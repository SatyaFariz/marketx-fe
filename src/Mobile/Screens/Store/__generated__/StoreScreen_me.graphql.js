/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ProductItem_me$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type StoreScreen_me$ref: FragmentReference;
declare export opaque type StoreScreen_me$fragmentType: StoreScreen_me$ref;
export type StoreScreen_me = {|
  +id: ?string,
  +$fragmentRefs: ProductItem_me$ref,
  +$refType: StoreScreen_me$ref,
|};
export type StoreScreen_me$data = StoreScreen_me;
export type StoreScreen_me$key = {
  +$data?: StoreScreen_me$data,
  +$fragmentRefs: StoreScreen_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StoreScreen_me",
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
      "name": "ProductItem_me"
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '7c5d3a74529c148107242bc6e0236fca';

module.exports = node;
