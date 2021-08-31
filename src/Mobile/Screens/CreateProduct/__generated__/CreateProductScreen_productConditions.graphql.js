/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CreateProductScreen_productConditions$ref: FragmentReference;
declare export opaque type CreateProductScreen_productConditions$fragmentType: CreateProductScreen_productConditions$ref;
export type CreateProductScreen_productConditions = $ReadOnlyArray<{|
  +id: ?string,
  +display: ?string,
  +$refType: CreateProductScreen_productConditions$ref,
|}>;
export type CreateProductScreen_productConditions$data = CreateProductScreen_productConditions;
export type CreateProductScreen_productConditions$key = $ReadOnlyArray<{
  +$data?: CreateProductScreen_productConditions$data,
  +$fragmentRefs: CreateProductScreen_productConditions$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "CreateProductScreen_productConditions",
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
      "name": "display",
      "storageKey": null
    }
  ],
  "type": "ProductCondition",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'c95f95faebab0c3b81d7a520cfc40494';

module.exports = node;
