/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
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
    +fullAddress: ?string
  |},
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
  "name": "EditStoreScreen_store",
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
    }
  ],
  "type": "Store",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd2a768ff135f9a7e150d45357ced8778';

module.exports = node;
