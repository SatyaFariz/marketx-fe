/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CreateProductScreen_me$ref: FragmentReference;
declare export opaque type CreateProductScreen_me$fragmentType: CreateProductScreen_me$ref;
export type CreateProductScreen_me = {|
  +id: ?string,
  +store: ?{|
    +id: ?string,
    +address: ?{|
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
  +$refType: CreateProductScreen_me$ref,
|};
export type CreateProductScreen_me$data = CreateProductScreen_me;
export type CreateProductScreen_me$key = {
  +$data?: CreateProductScreen_me$data,
  +$fragmentRefs: CreateProductScreen_me$ref,
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
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CreateProductScreen_me",
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
              "concreteType": "AdministrativeArea",
              "kind": "LinkedField",
              "name": "province",
              "plural": false,
              "selections": (v1/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "AdministrativeArea",
              "kind": "LinkedField",
              "name": "city",
              "plural": false,
              "selections": (v1/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "AdministrativeArea",
              "kind": "LinkedField",
              "name": "district",
              "plural": false,
              "selections": (v1/*: any*/),
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
(node/*: any*/).hash = '1d72eb34c5d22fca3a2e20a3933dd128';

module.exports = node;
