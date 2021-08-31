/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type EditAddressView_store$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type StoreScreen_store$ref: FragmentReference;
declare export opaque type StoreScreen_store$fragmentType: StoreScreen_store$ref;
export type StoreScreen_store = {|
  +id: ?string,
  +name: ?string,
  +whatsappNumber: ?string,
  +isVerified: ?boolean,
  +merchantId: ?string,
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
    +city: ?{|
      +name: ?string
    |},
    +district: ?{|
      +name: ?string
    |},
  |},
  +$fragmentRefs: EditAddressView_store$ref,
  +$refType: StoreScreen_store$ref,
|};
export type StoreScreen_store$data = StoreScreen_store;
export type StoreScreen_store$key = {
  +$data?: StoreScreen_store$data,
  +$fragmentRefs: StoreScreen_store$ref,
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
  (v1/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StoreScreen_store",
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
      "kind": "ScalarField",
      "name": "isVerified",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "merchantId",
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
(node/*: any*/).hash = 'a63d3fabeea47f3fdbdca99e2719d304';

module.exports = node;
