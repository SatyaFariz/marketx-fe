/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ProductItem_query$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type StoreScreen_query$ref: FragmentReference;
declare export opaque type StoreScreen_query$fragmentType: StoreScreen_query$ref;
export type StoreScreen_query = {|
  +myId: ?string,
  +$fragmentRefs: ProductItem_query$ref,
  +$refType: StoreScreen_query$ref,
|};
export type StoreScreen_query$data = StoreScreen_query;
export type StoreScreen_query$key = {
  +$data?: StoreScreen_query$data,
  +$fragmentRefs: StoreScreen_query$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StoreScreen_query",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "myId",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ProductItem_query"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '2a0bae457b2652152d7ec5b0d7553c78';

module.exports = node;
