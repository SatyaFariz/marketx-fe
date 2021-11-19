/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProductItem_query$ref: FragmentReference;
declare export opaque type ProductItem_query$fragmentType: ProductItem_query$ref;
export type ProductItem_query = {|
  +myId: ?string,
  +$refType: ProductItem_query$ref,
|};
export type ProductItem_query$data = ProductItem_query;
export type ProductItem_query$key = {
  +$data?: ProductItem_query$data,
  +$fragmentRefs: ProductItem_query$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProductItem_query",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "myId",
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '40111f89313de7aef82e0efd1ccc33eb';

module.exports = node;
