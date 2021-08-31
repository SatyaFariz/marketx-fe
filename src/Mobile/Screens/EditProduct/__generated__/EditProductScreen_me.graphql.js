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
  +$refType: EditProductScreen_me$ref,
|};
export type EditProductScreen_me$data = EditProductScreen_me;
export type EditProductScreen_me$key = {
  +$data?: EditProductScreen_me$data,
  +$fragmentRefs: EditProductScreen_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EditProductScreen_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '00bafbb01307598c0e2cd43f03c25b47';

module.exports = node;
