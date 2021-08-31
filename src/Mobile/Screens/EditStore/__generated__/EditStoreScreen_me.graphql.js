/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EditStoreScreen_me$ref: FragmentReference;
declare export opaque type EditStoreScreen_me$fragmentType: EditStoreScreen_me$ref;
export type EditStoreScreen_me = {|
  +id: ?string,
  +store: ?{|
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
  |},
  +$refType: EditStoreScreen_me$ref,
|};
export type EditStoreScreen_me$data = EditStoreScreen_me;
export type EditStoreScreen_me$key = {
  +$data?: EditStoreScreen_me$data,
  +$fragmentRefs: EditStoreScreen_me$ref,
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
  "name": "EditStoreScreen_me",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Store",
      "kind": "LinkedField",
      "name": "store",
      "plural": false,
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '49db9b2d06fa5b08403e002e11cf34cb';

module.exports = node;
