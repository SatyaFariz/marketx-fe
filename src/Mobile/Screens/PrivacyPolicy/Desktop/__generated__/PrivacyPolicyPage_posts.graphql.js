/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PrivacyPolicyPage_posts$ref: FragmentReference;
declare export opaque type PrivacyPolicyPage_posts$fragmentType: PrivacyPolicyPage_posts$ref;
export type PrivacyPolicyPage_posts = $ReadOnlyArray<{|
  +id: ?string,
  +title: ?string,
  +content: ?string,
  +updatedAt: ?string,
  +$refType: PrivacyPolicyPage_posts$ref,
|}>;
export type PrivacyPolicyPage_posts$data = PrivacyPolicyPage_posts;
export type PrivacyPolicyPage_posts$key = $ReadOnlyArray<{
  +$data?: PrivacyPolicyPage_posts$data,
  +$fragmentRefs: PrivacyPolicyPage_posts$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "PrivacyPolicyPage_posts",
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
(node/*: any*/).hash = '19967f60f6aaca9c7cd78b323169c55a';

module.exports = node;
