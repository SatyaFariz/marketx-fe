/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type FAQPage_posts$ref: FragmentReference;
declare export opaque type FAQPage_posts$fragmentType: FAQPage_posts$ref;
export type FAQPage_posts = $ReadOnlyArray<{|
  +id: ?string,
  +title: ?string,
  +content: ?string,
  +$refType: FAQPage_posts$ref,
|}>;
export type FAQPage_posts$data = FAQPage_posts;
export type FAQPage_posts$key = $ReadOnlyArray<{
  +$data?: FAQPage_posts$data,
  +$fragmentRefs: FAQPage_posts$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "FAQPage_posts",
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
    }
  ],
  "type": "Post",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '91cf10036a9fc23cb8502a9310fa3c00';

module.exports = node;
