/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProductScreen_me$ref: FragmentReference;
declare export opaque type ProductScreen_me$fragmentType: ProductScreen_me$ref;
export type ProductScreen_me = {|
  +id: ?string,
  +isAdmin: ?boolean,
  +$refType: ProductScreen_me$ref,
|};
export type ProductScreen_me$data = ProductScreen_me;
export type ProductScreen_me$key = {
  +$data?: ProductScreen_me$data,
  +$fragmentRefs: ProductScreen_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProductScreen_me",
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
      "name": "isAdmin",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '7ef3497185552245341f40cc57d7563b';

module.exports = node;
