/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PrivacyPolicyScreen_posts$ref: FragmentReference;
declare export opaque type PrivacyPolicyScreen_posts$fragmentType: PrivacyPolicyScreen_posts$ref;
export type PrivacyPolicyScreen_posts = $ReadOnlyArray<{|
  +id: ?string,
  +title: ?string,
  +content: ?string,
  +updatedAt: ?string,
  +$refType: PrivacyPolicyScreen_posts$ref,
|}>;
export type PrivacyPolicyScreen_posts$data = PrivacyPolicyScreen_posts;
export type PrivacyPolicyScreen_posts$key = $ReadOnlyArray<{
  +$data?: PrivacyPolicyScreen_posts$data,
  +$fragmentRefs: PrivacyPolicyScreen_posts$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "PrivacyPolicyScreen_posts",
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
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "updatedAt",
      "storageKey": null
    }
  ],
  "type": "Post",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '69554c3d20fc11444bcf4d154a0ab608';

module.exports = node;
