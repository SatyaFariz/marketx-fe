/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CreateStoreScreen_store$ref: FragmentReference;
declare export opaque type CreateStoreScreen_store$fragmentType: CreateStoreScreen_store$ref;
export type CreateStoreScreen_store = {|
  +id: ?string,
  +$refType: CreateStoreScreen_store$ref,
|};
export type CreateStoreScreen_store$data = CreateStoreScreen_store;
export type CreateStoreScreen_store$key = {
  +$data?: CreateStoreScreen_store$data,
  +$fragmentRefs: CreateStoreScreen_store$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CreateStoreScreen_store",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Store",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'a54ab9ce6e43e1a19dd130d1b1938ac1';

module.exports = node;
