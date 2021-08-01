/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EditProductPhotosScreen_product$ref: FragmentReference;
declare export opaque type EditProductPhotosScreen_product$fragmentType: EditProductPhotosScreen_product$ref;
export type EditProductPhotosScreen_product = {|
  +id: ?string,
  +images: ?$ReadOnlyArray<?{|
    +id: ?string,
    +url: ?string,
    +display: ?number,
  |}>,
  +$refType: EditProductPhotosScreen_product$ref,
|};
export type EditProductPhotosScreen_product$data = EditProductPhotosScreen_product;
export type EditProductPhotosScreen_product$key = {
  +$data?: EditProductPhotosScreen_product$data,
  +$fragmentRefs: EditProductPhotosScreen_product$ref,
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
  "name": "EditProductPhotosScreen_product",
  "selections": [
    (v0/*: any*/),
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
        },
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
(node/*: any*/).hash = '6c9d9617c40c396069516fe4cdf17a0b';

module.exports = node;
