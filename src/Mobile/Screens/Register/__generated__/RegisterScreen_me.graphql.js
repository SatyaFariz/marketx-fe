/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type RegisterScreen_me$ref: FragmentReference;
declare export opaque type RegisterScreen_me$fragmentType: RegisterScreen_me$ref;
export type RegisterScreen_me = {|
  +id: ?string,
  +$refType: RegisterScreen_me$ref,
|};
export type RegisterScreen_me$data = RegisterScreen_me;
export type RegisterScreen_me$key = {
  +$data?: RegisterScreen_me$data,
  +$fragmentRefs: RegisterScreen_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RegisterScreen_me",
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
(node/*: any*/).hash = 'e1978c1859e6d1b8aca4f3f88245fe6b';

module.exports = node;
