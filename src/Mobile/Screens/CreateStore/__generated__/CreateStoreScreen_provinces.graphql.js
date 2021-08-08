/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CreateStoreScreen_provinces$ref: FragmentReference;
declare export opaque type CreateStoreScreen_provinces$fragmentType: CreateStoreScreen_provinces$ref;
export type CreateStoreScreen_provinces = $ReadOnlyArray<{|
  +administrativeAreaId: ?number,
  +name: ?string,
  +$refType: CreateStoreScreen_provinces$ref,
|}>;
export type CreateStoreScreen_provinces$data = CreateStoreScreen_provinces;
export type CreateStoreScreen_provinces$key = $ReadOnlyArray<{
  +$data?: CreateStoreScreen_provinces$data,
  +$fragmentRefs: CreateStoreScreen_provinces$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "CreateStoreScreen_provinces",
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
(node/*: any*/).hash = '2f22e59e459f813857bb45b466c079a7';

module.exports = node;
