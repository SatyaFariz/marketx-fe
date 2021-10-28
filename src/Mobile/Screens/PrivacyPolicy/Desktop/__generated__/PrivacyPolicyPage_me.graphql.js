/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PrivacyPolicyPage_me$ref: FragmentReference;
declare export opaque type PrivacyPolicyPage_me$fragmentType: PrivacyPolicyPage_me$ref;
export type PrivacyPolicyPage_me = {|
  +id: ?string,
  +isAdmin: ?boolean,
  +$refType: PrivacyPolicyPage_me$ref,
|};
export type PrivacyPolicyPage_me$data = PrivacyPolicyPage_me;
export type PrivacyPolicyPage_me$key = {
  +$data?: PrivacyPolicyPage_me$data,
  +$fragmentRefs: PrivacyPolicyPage_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PrivacyPolicyPage_me",
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
(node/*: any*/).hash = 'a897431ad192ba8a9be166b3b85cac5b';

module.exports = node;
