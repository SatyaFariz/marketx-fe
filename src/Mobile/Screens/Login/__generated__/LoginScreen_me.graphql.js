/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type LoginScreen_me$ref: FragmentReference;
declare export opaque type LoginScreen_me$fragmentType: LoginScreen_me$ref;
export type LoginScreen_me = {|
  +id: ?string,
  +$refType: LoginScreen_me$ref,
|};
export type LoginScreen_me$data = LoginScreen_me;
export type LoginScreen_me$key = {
  +$data?: LoginScreen_me$data,
  +$fragmentRefs: LoginScreen_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LoginScreen_me",
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
(node/*: any*/).hash = '1304dea782979a639ffc201dcf2cf333';

module.exports = node;
