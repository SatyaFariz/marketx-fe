/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CreateProductScreen_provinces$ref: FragmentReference;
declare export opaque type CreateProductScreen_provinces$fragmentType: CreateProductScreen_provinces$ref;
export type CreateProductScreen_provinces = $ReadOnlyArray<{|
  +administrativeAreaId: ?number,
  +name: ?string,
  +$refType: CreateProductScreen_provinces$ref,
|}>;
export type CreateProductScreen_provinces$data = CreateProductScreen_provinces;
export type CreateProductScreen_provinces$key = $ReadOnlyArray<{
  +$data?: CreateProductScreen_provinces$data,
  +$fragmentRefs: CreateProductScreen_provinces$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "CreateProductScreen_provinces",
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
(node/*: any*/).hash = 'e17db4cacc77b67d2b96586102185159';

module.exports = node;
