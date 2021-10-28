/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PrivacyPolicyPage_me$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PrivacyPolicyScreen_me$ref: FragmentReference;
declare export opaque type PrivacyPolicyScreen_me$fragmentType: PrivacyPolicyScreen_me$ref;
export type PrivacyPolicyScreen_me = {|
  +id: ?string,
  +$fragmentRefs: PrivacyPolicyPage_me$ref,
  +$refType: PrivacyPolicyScreen_me$ref,
|};
export type PrivacyPolicyScreen_me$data = PrivacyPolicyScreen_me;
export type PrivacyPolicyScreen_me$key = {
  +$data?: PrivacyPolicyScreen_me$data,
  +$fragmentRefs: PrivacyPolicyScreen_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PrivacyPolicyScreen_me",
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
      "name": "PrivacyPolicyPage_me"
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '389c679c4dc0595e37ca0a745344af9f';

module.exports = node;
