/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type TermsOfServicePage_posts$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TermsOfServiceScreen_posts$ref: FragmentReference;
declare export opaque type TermsOfServiceScreen_posts$fragmentType: TermsOfServiceScreen_posts$ref;
export type TermsOfServiceScreen_posts = $ReadOnlyArray<{|
  +id: ?string,
  +title: ?string,
  +content: ?string,
  +updatedAt: ?string,
  +$fragmentRefs: TermsOfServicePage_posts$ref,
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TermsOfServicePage_posts"
    }
  ],
  "type": "Post",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '1f45019bc892b368f91a1a699535db7b';

module.exports = node;
