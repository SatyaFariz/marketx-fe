/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CategoryItem_me$ref: FragmentReference;
declare export opaque type CategoryItem_me$fragmentType: CategoryItem_me$ref;
export type CategoryItem_me = {|
  +id: ?string,
  +isAdmin: ?boolean,
  +$refType: CategoryItem_me$ref,
|};
export type CategoryItem_me$data = CategoryItem_me;
export type CategoryItem_me$key = {
  +$data?: CategoryItem_me$data,
  +$fragmentRefs: CategoryItem_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CategoryItem_me",
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
(node/*: any*/).hash = 'b134f2a0eaf05c5a5e935adc10896cab';

module.exports = node;
