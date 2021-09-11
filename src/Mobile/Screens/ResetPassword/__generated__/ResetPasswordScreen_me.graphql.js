/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ResetPasswordScreen_me$ref: FragmentReference;
declare export opaque type ResetPasswordScreen_me$fragmentType: ResetPasswordScreen_me$ref;
export type ResetPasswordScreen_me = {|
  +id: ?string,
  +$refType: ResetPasswordScreen_me$ref,
|};
export type ResetPasswordScreen_me$data = ResetPasswordScreen_me;
export type ResetPasswordScreen_me$key = {
  +$data?: ResetPasswordScreen_me$data,
  +$fragmentRefs: ResetPasswordScreen_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ResetPasswordScreen_me",
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
(node/*: any*/).hash = '3c87ca91bcff7eb37c789d9db3cf9d66';

module.exports = node;
