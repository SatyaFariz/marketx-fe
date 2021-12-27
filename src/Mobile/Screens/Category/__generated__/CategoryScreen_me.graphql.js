/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CategoryScreen_me$ref: FragmentReference;
declare export opaque type CategoryScreen_me$fragmentType: CategoryScreen_me$ref;
export type CategoryScreen_me = {|
  +id: ?string,
  +isAdmin: ?boolean,
  +$refType: CategoryScreen_me$ref,
|};
export type CategoryScreen_me$data = CategoryScreen_me;
export type CategoryScreen_me$key = {
  +$data?: CategoryScreen_me$data,
  +$fragmentRefs: CategoryScreen_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CategoryScreen_me",
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
(node/*: any*/).hash = '35735d4c54c478513028f3e4363a45e8';

module.exports = node;
