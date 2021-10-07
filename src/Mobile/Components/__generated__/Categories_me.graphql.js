/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type CategoryItem_me$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Categories_me$ref: FragmentReference;
declare export opaque type Categories_me$fragmentType: Categories_me$ref;
export type Categories_me = {|
  +id: ?string,
  +$fragmentRefs: CategoryItem_me$ref,
  +$refType: Categories_me$ref,
|};
export type Categories_me$data = Categories_me;
export type Categories_me$key = {
  +$data?: Categories_me$data,
  +$fragmentRefs: Categories_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Categories_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CategoryItem_me"
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '593f1ae230ca37a5dc02da7a85a6c91d';

module.exports = node;
