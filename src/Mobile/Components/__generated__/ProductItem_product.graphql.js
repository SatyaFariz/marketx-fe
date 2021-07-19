/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProductItem_product$ref: FragmentReference;
declare export opaque type ProductItem_product$fragmentType: ProductItem_product$ref;
export type ProductItem_product = {|
  +id: ?string,
  +name: ?string,
  +price: ?number,
  +images: ?$ReadOnlyArray<?{|
    +url: ?string
  |}>,
  +rentalPeriodUnit: ?{|
    +display: ?string
  |},
  +$refType: ProductItem_product$ref,
|};
export type ProductItem_product$data = ProductItem_product;
export type ProductItem_product$key = {
  +$data?: ProductItem_product$data,
  +$fragmentRefs: ProductItem_product$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProductItem_product",
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
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "price",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "images",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "url",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Unit",
      "kind": "LinkedField",
      "name": "rentalPeriodUnit",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "display",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Product",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '79ca828f5c513dafa8f4eaf2fb89ad12';

module.exports = node;
