/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EditStoreScreen_provinces$ref: FragmentReference;
declare export opaque type EditStoreScreen_provinces$fragmentType: EditStoreScreen_provinces$ref;
export type EditStoreScreen_provinces = $ReadOnlyArray<{|
  +administrativeAreaId: ?number,
  +name: ?string,
  +$refType: EditStoreScreen_provinces$ref,
|}>;
export type EditStoreScreen_provinces$data = EditStoreScreen_provinces;
export type EditStoreScreen_provinces$key = $ReadOnlyArray<{
  +$data?: EditStoreScreen_provinces$data,
  +$fragmentRefs: EditStoreScreen_provinces$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "EditStoreScreen_provinces",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "administrativeAreaId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "AdministrativeArea",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'b7ee4a49792360220807f711ccb7373d';

module.exports = node;
