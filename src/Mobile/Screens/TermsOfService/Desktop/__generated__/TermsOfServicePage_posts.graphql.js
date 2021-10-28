/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TermsOfServicePage_posts$ref: FragmentReference;
declare export opaque type TermsOfServicePage_posts$fragmentType: TermsOfServicePage_posts$ref;
export type TermsOfServicePage_posts = $ReadOnlyArray<{|
  +id: ?string,
  +title: ?string,
  +content: ?string,
  +updatedAt: ?string,
  +$refType: TermsOfServicePage_posts$ref,
|}>;
export type TermsOfServicePage_posts$data = TermsOfServicePage_posts;
export type TermsOfServicePage_posts$key = $ReadOnlyArray<{
  +$data?: TermsOfServicePage_posts$data,
  +$fragmentRefs: TermsOfServicePage_posts$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "TermsOfServicePage_posts",
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
(node/*: any*/).hash = '7cb07db5caee65bd6091ad9d7be5a107';

module.exports = node;
