/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ForgotPasswordScreen_me$ref: FragmentReference;
declare export opaque type ForgotPasswordScreen_me$fragmentType: ForgotPasswordScreen_me$ref;
export type ForgotPasswordScreen_me = {|
  +id: ?string,
  +$refType: ForgotPasswordScreen_me$ref,
|};
export type ForgotPasswordScreen_me$data = ForgotPasswordScreen_me;
export type ForgotPasswordScreen_me$key = {
  +$data?: ForgotPasswordScreen_me$data,
  +$fragmentRefs: ForgotPasswordScreen_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ForgotPasswordScreen_me",
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
(node/*: any*/).hash = 'e40e392618f39ff5cb65b040b09c5804';

module.exports = node;
