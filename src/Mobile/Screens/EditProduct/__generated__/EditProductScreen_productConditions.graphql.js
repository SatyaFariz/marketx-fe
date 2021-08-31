/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EditProductScreen_productConditions$ref: FragmentReference;
declare export opaque type EditProductScreen_productConditions$fragmentType: EditProductScreen_productConditions$ref;
export type EditProductScreen_productConditions = $ReadOnlyArray<{|
  +id: ?string,
  +display: ?string,
  +$refType: EditProductScreen_productConditions$ref,
|}>;
export type EditProductScreen_productConditions$data = EditProductScreen_productConditions;
export type EditProductScreen_productConditions$key = $ReadOnlyArray<{
  +$data?: EditProductScreen_productConditions$data,
  +$fragmentRefs: EditProductScreen_productConditions$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "EditProductScreen_productConditions",
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
(node/*: any*/).hash = '048d5437666d6e429b6ee232dfdc209b';

module.exports = node;
