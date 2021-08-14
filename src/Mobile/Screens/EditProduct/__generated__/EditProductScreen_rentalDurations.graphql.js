/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EditProductScreen_rentalDurations$ref: FragmentReference;
declare export opaque type EditProductScreen_rentalDurations$fragmentType: EditProductScreen_rentalDurations$ref;
export type EditProductScreen_rentalDurations = $ReadOnlyArray<{|
  +id: ?string,
  +display: ?string,
  +$refType: EditProductScreen_rentalDurations$ref,
|}>;
export type EditProductScreen_rentalDurations$data = EditProductScreen_rentalDurations;
export type EditProductScreen_rentalDurations$key = $ReadOnlyArray<{
  +$data?: EditProductScreen_rentalDurations$data,
  +$fragmentRefs: EditProductScreen_rentalDurations$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "EditProductScreen_rentalDurations",
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
      "name": "display",
      "storageKey": null
    }
  ],
  "type": "Unit",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '5770efb28b8172a126215f72a629548b';

module.exports = node;
