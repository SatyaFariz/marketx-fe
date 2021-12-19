/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type LocationSearchModal_popularLocations$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SearchScreen_popularLocations$ref: FragmentReference;
declare export opaque type SearchScreen_popularLocations$fragmentType: SearchScreen_popularLocations$ref;
export type SearchScreen_popularLocations = $ReadOnlyArray<{|
  +$fragmentRefs: LocationSearchModal_popularLocations$ref,
  +$refType: SearchScreen_popularLocations$ref,
|}>;
export type SearchScreen_popularLocations$data = SearchScreen_popularLocations;
export type SearchScreen_popularLocations$key = $ReadOnlyArray<{
  +$data?: SearchScreen_popularLocations$data,
  +$fragmentRefs: SearchScreen_popularLocations$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "SearchScreen_popularLocations",
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
(node/*: any*/).hash = 'e07df2bac86c41f364f1d17c869b03dc';

module.exports = node;
