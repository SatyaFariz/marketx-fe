/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type FixedAddressBar_me$ref: FragmentReference;
declare export opaque type FixedAddressBar_me$fragmentType: FixedAddressBar_me$ref;
export type FixedAddressBar_me = {|
  +id: ?string,
  +isAdmin: ?boolean,
  +$refType: FixedAddressBar_me$ref,
|};
export type FixedAddressBar_me$data = FixedAddressBar_me;
export type FixedAddressBar_me$key = {
  +$data?: FixedAddressBar_me$data,
  +$fragmentRefs: FixedAddressBar_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FixedAddressBar_me",
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
(node/*: any*/).hash = '7ba45441e547b84da4b88955739bd1a8';

module.exports = node;
