/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type LocationSearchModal_popularLocations$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CategoryScreen_popularLocations$ref: FragmentReference;
declare export opaque type CategoryScreen_popularLocations$fragmentType: CategoryScreen_popularLocations$ref;
export type CategoryScreen_popularLocations = $ReadOnlyArray<{|
  +$fragmentRefs: LocationSearchModal_popularLocations$ref,
  +$refType: CategoryScreen_popularLocations$ref,
|}>;
export type CategoryScreen_popularLocations$data = CategoryScreen_popularLocations;
export type CategoryScreen_popularLocations$key = $ReadOnlyArray<{
  +$data?: CategoryScreen_popularLocations$data,
  +$fragmentRefs: CategoryScreen_popularLocations$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "CategoryScreen_popularLocations",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "LocationSearchModal_popularLocations"
    }
  ],
  "type": "AdministrativeArea",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'bb68e810a25202ecc527aeda74009a88';

module.exports = node;
