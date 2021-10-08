/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AttributesListScreen_me$ref: FragmentReference;
declare export opaque type AttributesListScreen_me$fragmentType: AttributesListScreen_me$ref;
export type AttributesListScreen_me = {|
  +id: ?string,
  +isAdmin: ?boolean,
  +$refType: AttributesListScreen_me$ref,
|};
export type AttributesListScreen_me$data = AttributesListScreen_me;
export type AttributesListScreen_me$key = {
  +$data?: AttributesListScreen_me$data,
  +$fragmentRefs: AttributesListScreen_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AttributesListScreen_me",
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
(node/*: any*/).hash = '39b0bec6fc227fd5a3d0942bed9e2996';

module.exports = node;
