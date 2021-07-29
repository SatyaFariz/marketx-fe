/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type EditAddressView_store$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type StoreScreen_store$ref: FragmentReference;
declare export opaque type StoreScreen_store$fragmentType: StoreScreen_store$ref;
export type StoreScreen_store = {|
  +id: ?string,
  +$fragmentRefs: EditAddressView_store$ref,
  +$refType: StoreScreen_store$ref,
|};
export type StoreScreen_store$data = StoreScreen_store;
export type StoreScreen_store$key = {
  +$data?: StoreScreen_store$data,
  +$fragmentRefs: StoreScreen_store$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StoreScreen_store",
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
      "name": "EditAddressView_store"
    }
  ],
  "type": "Store",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '30829ed37b64c9160b7e3b7a352ab7a7';

module.exports = node;
