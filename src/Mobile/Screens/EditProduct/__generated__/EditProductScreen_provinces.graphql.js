/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EditProductScreen_provinces$ref: FragmentReference;
declare export opaque type EditProductScreen_provinces$fragmentType: EditProductScreen_provinces$ref;
export type EditProductScreen_provinces = $ReadOnlyArray<{|
  +administrativeAreaId: ?number,
  +name: ?string,
  +$refType: EditProductScreen_provinces$ref,
|}>;
export type EditProductScreen_provinces$data = EditProductScreen_provinces;
export type EditProductScreen_provinces$key = $ReadOnlyArray<{
  +$data?: EditProductScreen_provinces$data,
  +$fragmentRefs: EditProductScreen_provinces$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "EditProductScreen_provinces",
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
(node/*: any*/).hash = '96d111acc2b53f44b59eea6adc58a042';

module.exports = node;
