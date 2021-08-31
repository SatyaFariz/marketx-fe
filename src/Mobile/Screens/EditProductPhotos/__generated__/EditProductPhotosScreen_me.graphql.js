/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EditProductPhotosScreen_me$ref: FragmentReference;
declare export opaque type EditProductPhotosScreen_me$fragmentType: EditProductPhotosScreen_me$ref;
export type EditProductPhotosScreen_me = {|
  +id: ?string,
  +$refType: EditProductPhotosScreen_me$ref,
|};
export type EditProductPhotosScreen_me$data = EditProductPhotosScreen_me;
export type EditProductPhotosScreen_me$key = {
  +$data?: EditProductPhotosScreen_me$data,
  +$fragmentRefs: EditProductPhotosScreen_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EditProductPhotosScreen_me",
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
(node/*: any*/).hash = 'a9b8e34dbc9400e1ad3c570a9d3fbcaf';

module.exports = node;
