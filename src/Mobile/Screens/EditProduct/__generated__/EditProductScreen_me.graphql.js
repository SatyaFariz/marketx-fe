/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EditProductScreen_me$ref: FragmentReference;
declare export opaque type EditProductScreen_me$fragmentType: EditProductScreen_me$ref;
export type EditProductScreen_me = {|
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
  +$refType: EditProductScreen_me$ref,
|};
export type EditProductScreen_me$data = EditProductScreen_me;
export type EditProductScreen_me$key = {
  +$data?: EditProductScreen_me$data,
  +$fragmentRefs: EditProductScreen_me$ref,
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
  "name": "EditProductScreen_me",
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
(node/*: any*/).hash = 'a3b72fdaa946f30b98b6f56a34f1ce2f';

module.exports = node;
