/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EditProductPhotosScreen_product$ref: FragmentReference;
declare export opaque type EditProductPhotosScreen_product$fragmentType: EditProductPhotosScreen_product$ref;
export type EditProductPhotosScreen_product = {|
  +id: ?string,
  +$refType: EditProductPhotosScreen_product$ref,
|};
export type EditProductPhotosScreen_product$data = EditProductPhotosScreen_product;
export type EditProductPhotosScreen_product$key = {
  +$data?: EditProductPhotosScreen_product$data,
  +$fragmentRefs: EditProductPhotosScreen_product$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EditProductPhotosScreen_product",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Product",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'c6a16cf6e5e43315ed73ec1bff87bffb';

module.exports = node;
