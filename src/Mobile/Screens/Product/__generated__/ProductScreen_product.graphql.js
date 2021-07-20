/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProductScreen_product$ref: FragmentReference;
declare export opaque type ProductScreen_product$fragmentType: ProductScreen_product$ref;
export type ProductScreen_product = {|
  +id: ?string,
  +name: ?string,
  +price: ?number,
  +images: ?$ReadOnlyArray<?{|
    +id: ?string,
    +url: ?string,
  |}>,
  +$refType: ProductScreen_product$ref,
|};
export type ProductScreen_product$data = ProductScreen_product;
export type ProductScreen_product$key = {
  +$data?: ProductScreen_product$data,
  +$fragmentRefs: ProductScreen_product$ref,
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
  "name": "ProductScreen_product",
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
    }
  ],
  "type": "Product",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '4bac6ce8a9f9086bc8e7630c4ed48cae';

module.exports = node;
