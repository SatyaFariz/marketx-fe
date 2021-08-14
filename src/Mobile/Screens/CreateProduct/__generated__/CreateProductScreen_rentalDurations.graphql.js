/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CreateProductScreen_rentalDurations$ref: FragmentReference;
declare export opaque type CreateProductScreen_rentalDurations$fragmentType: CreateProductScreen_rentalDurations$ref;
export type CreateProductScreen_rentalDurations = $ReadOnlyArray<{|
  +id: ?string,
  +display: ?string,
  +name: ?string,
  +value: ?number,
  +$refType: CreateProductScreen_rentalDurations$ref,
|}>;
export type CreateProductScreen_rentalDurations$data = CreateProductScreen_rentalDurations;
export type CreateProductScreen_rentalDurations$key = $ReadOnlyArray<{
  +$data?: CreateProductScreen_rentalDurations$data,
  +$fragmentRefs: CreateProductScreen_rentalDurations$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "CreateProductScreen_rentalDurations",
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
(node/*: any*/).hash = '041ed55ec7cc85cf1e1aeff88fc071a9';

module.exports = node;
