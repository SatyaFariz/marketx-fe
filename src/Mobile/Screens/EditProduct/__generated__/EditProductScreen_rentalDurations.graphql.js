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
  +name: ?string,
  +value: ?number,
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "value",
      "storageKey": null
    }
  ],
  "type": "Unit",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'd42521da2b83e82b9bed1c7aa25f6e14';

module.exports = node;
