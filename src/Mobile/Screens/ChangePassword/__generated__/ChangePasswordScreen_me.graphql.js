/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ChangePasswordScreen_me$ref: FragmentReference;
declare export opaque type ChangePasswordScreen_me$fragmentType: ChangePasswordScreen_me$ref;
export type ChangePasswordScreen_me = {|
  +id: ?string,
  +$refType: ChangePasswordScreen_me$ref,
|};
export type ChangePasswordScreen_me$data = ChangePasswordScreen_me;
export type ChangePasswordScreen_me$key = {
  +$data?: ChangePasswordScreen_me$data,
  +$fragmentRefs: ChangePasswordScreen_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ChangePasswordScreen_me",
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
(node/*: any*/).hash = '5ce1e5aec290e9e3fc1f47a31d8424c0';

module.exports = node;
