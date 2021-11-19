/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProductItem_userSession$ref: FragmentReference;
declare export opaque type ProductItem_userSession$fragmentType: ProductItem_userSession$ref;
export type ProductItem_userSession = {|
  +userId: ?string,
  +$refType: ProductItem_userSession$ref,
|};
export type ProductItem_userSession$data = ProductItem_userSession;
export type ProductItem_userSession$key = {
  +$data?: ProductItem_userSession$data,
  +$fragmentRefs: ProductItem_userSession$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProductItem_userSession",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "userId",
      "storageKey": null
    }
  ],
  "type": "UserSession",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'd2e326717b9cc3646a54dd893d5788cb';

module.exports = node;
