/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProductScreen_me$ref: FragmentReference;
declare export opaque type ProductScreen_me$fragmentType: ProductScreen_me$ref;
export type ProductScreen_me = {|
  +id: ?string,
  +$refType: ProductScreen_me$ref,
|};
export type ProductScreen_me$data = ProductScreen_me;
export type ProductScreen_me$key = {
  +$data?: ProductScreen_me$data,
  +$fragmentRefs: ProductScreen_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProductScreen_me",
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
(node/*: any*/).hash = '8d3b3da442654f62341f5f174e77d002';

module.exports = node;
