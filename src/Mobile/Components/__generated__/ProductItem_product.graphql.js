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
  +merchantId: ?string,
  +name: ?string,
  +price: ?number,
  +listingType: ?string,
  +isPublished: ?boolean,
  +isSuspended: ?boolean,
  +views: ?number,
  +leads: ?number,
  +mainImage: ?{|
    +id: ?string,
    +url: ?string,
  |},
  +rentalDuration: ?{|
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


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProductItem_product",
  "selections": [
    (v0/*: any*/),
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
      "kind": "ScalarField",
      "name": "listingType",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isPublished",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isSuspended",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "views",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "leads",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "mainImage",
      "plural": false,
      "selections": [
        (v0/*: any*/),
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
      "name": "rentalDuration",
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
})();
// prettier-ignore
(node/*: any*/).hash = '3aec0cc9b3710b256719b1362bdfb4ac';

module.exports = node;
