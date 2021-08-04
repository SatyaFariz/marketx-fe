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
    +fullAddress: ?string
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
v1 = [
  (v0/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StoreScreen_store",
  "selections": [
    (v0/*: any*/),
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
      "name": "whatsappNumber",
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
      "selections": (v1/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "banner",
      "plural": false,
      "selections": (v1/*: any*/),
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
(node/*: any*/).hash = '419dc767c8573f88906d7b8e8a7922b0';

module.exports = node;
