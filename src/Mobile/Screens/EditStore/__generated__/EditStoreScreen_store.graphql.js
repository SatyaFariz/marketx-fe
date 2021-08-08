/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type EditAddressView_store$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type EditStoreScreen_store$ref: FragmentReference;
declare export opaque type EditStoreScreen_store$fragmentType: EditStoreScreen_store$ref;
export type EditStoreScreen_store = {|
  +id: ?string,
  +name: ?string,
  +whatsappNumber: ?string,
  +profilePicture: ?{|
    +id: ?string,
    +url: ?string,
  |},
  +banner: ?{|
    +id: ?string,
    +url: ?string,
  |},
  +address: ?{|
    +fullAddress: ?string,
    +province: ?{|
      +administrativeAreaId: ?number,
      +name: ?string,
    |},
    +city: ?{|
      +administrativeAreaId: ?number,
      +name: ?string,
    |},
    +district: ?{|
      +administrativeAreaId: ?number,
      +name: ?string,
    |},
  |},
  +$fragmentRefs: EditAddressView_store$ref,
  +$refType: EditStoreScreen_store$ref,
|};
export type EditStoreScreen_store$data = EditStoreScreen_store;
export type EditStoreScreen_store$key = {
  +$data?: EditStoreScreen_store$data,
  +$fragmentRefs: EditStoreScreen_store$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  (v0/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
],
v3 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "administrativeAreaId",
    "storageKey": null
  },
  (v1/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EditStoreScreen_store",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "whatsappNumber",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "profilePicture",
      "plural": false,
      "selections": (v2/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "banner",
      "plural": false,
      "selections": (v2/*: any*/),
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
          "concreteType": "AdministrativeArea",
          "kind": "LinkedField",
          "name": "province",
          "plural": false,
          "selections": (v3/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "AdministrativeArea",
          "kind": "LinkedField",
          "name": "city",
          "plural": false,
          "selections": (v3/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "AdministrativeArea",
          "kind": "LinkedField",
          "name": "district",
          "plural": false,
          "selections": (v3/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "EditAddressView_store"
    }
  ],
  "type": "Store",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '06a077af43b5c6c860d83c7d637ae276';

module.exports = node;
