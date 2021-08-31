/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TermsOfServiceScreen_posts$ref: FragmentReference;
declare export opaque type TermsOfServiceScreen_posts$fragmentType: TermsOfServiceScreen_posts$ref;
export type TermsOfServiceScreen_posts = $ReadOnlyArray<{|
  +id: ?string,
  +title: ?string,
  +content: ?string,
  +updatedAt: ?string,
  +$refType: TermsOfServiceScreen_posts$ref,
|}>;
export type TermsOfServiceScreen_posts$data = TermsOfServiceScreen_posts;
export type TermsOfServiceScreen_posts$key = $ReadOnlyArray<{
  +$data?: TermsOfServiceScreen_posts$data,
  +$fragmentRefs: TermsOfServiceScreen_posts$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "TermsOfServiceScreen_posts",
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
(node/*: any*/).hash = '4c69ad9670132ef92ab70bf0e5ac2acd';

module.exports = node;
