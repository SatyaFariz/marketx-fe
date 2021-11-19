/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type StoreScreen_me$ref: FragmentReference;
declare export opaque type StoreScreen_me$fragmentType: StoreScreen_me$ref;
export type StoreScreen_me = {|
  +id: ?string,
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
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '040c159884f3a65b492b90df5be22ffb';

module.exports = node;
