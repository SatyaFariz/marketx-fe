/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EditAddressView_store$ref: FragmentReference;
declare export opaque type EditAddressView_store$fragmentType: EditAddressView_store$ref;
export type EditAddressView_store = {|
  +id: ?string,
  +address: ?{|
    +fullAddress: ?string,
    +lat: ?number,
    +lng: ?number,
  |},
  +$refType: EditAddressView_store$ref,
|};
export type EditAddressView_store$data = EditAddressView_store;
export type EditAddressView_store$key = {
  +$data?: EditAddressView_store$data,
  +$fragmentRefs: EditAddressView_store$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EditAddressView_store",
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
      "concreteType": "Address",
      "kind": "LinkedField",
      "name": "address",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "fullAddress",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "lat",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "lng",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Store",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '7547968588ae608d3802284b167921aa';

module.exports = node;
