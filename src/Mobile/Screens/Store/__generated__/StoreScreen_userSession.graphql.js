/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ProductItem_userSession$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type StoreScreen_userSession$ref: FragmentReference;
declare export opaque type StoreScreen_userSession$fragmentType: StoreScreen_userSession$ref;
export type StoreScreen_userSession = {|
  +userId: ?string,
  +$fragmentRefs: ProductItem_userSession$ref,
  +$refType: StoreScreen_userSession$ref,
|};
export type StoreScreen_userSession$data = StoreScreen_userSession;
export type StoreScreen_userSession$key = {
  +$data?: StoreScreen_userSession$data,
  +$fragmentRefs: StoreScreen_userSession$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StoreScreen_userSession",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "userId",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ProductItem_userSession"
    }
  ],
  "type": "UserSession",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '6fae16b574210ec1cd42c1f37e2d9035';

module.exports = node;
