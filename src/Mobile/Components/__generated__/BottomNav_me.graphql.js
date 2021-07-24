/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type BottomNav_me$ref: FragmentReference;
declare export opaque type BottomNav_me$fragmentType: BottomNav_me$ref;
export type BottomNav_me = {|
  +id: ?string,
  +name: ?string,
  +$refType: BottomNav_me$ref,
|};
export type BottomNav_me$data = BottomNav_me;
export type BottomNav_me$key = {
  +$data?: BottomNav_me$data,
  +$fragmentRefs: BottomNav_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BottomNav_me",
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
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'ab84ede8b71ae328c346a6e22b862a1a';

module.exports = node;
