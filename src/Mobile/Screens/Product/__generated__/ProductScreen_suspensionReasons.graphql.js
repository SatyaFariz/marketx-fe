/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProductScreen_suspensionReasons$ref: FragmentReference;
declare export opaque type ProductScreen_suspensionReasons$fragmentType: ProductScreen_suspensionReasons$ref;
export type ProductScreen_suspensionReasons = $ReadOnlyArray<{|
  +id: ?string,
  +title: ?string,
  +$refType: ProductScreen_suspensionReasons$ref,
|}>;
export type ProductScreen_suspensionReasons$data = ProductScreen_suspensionReasons;
export type ProductScreen_suspensionReasons$key = $ReadOnlyArray<{
  +$data?: ProductScreen_suspensionReasons$data,
  +$fragmentRefs: ProductScreen_suspensionReasons$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "ProductScreen_suspensionReasons",
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
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "SuspensionReason",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'e4b7fbac6e42853989c0f103752ec13c';

module.exports = node;
