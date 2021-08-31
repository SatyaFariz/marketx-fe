/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type FAQScreen_posts$ref: FragmentReference;
declare export opaque type FAQScreen_posts$fragmentType: FAQScreen_posts$ref;
export type FAQScreen_posts = $ReadOnlyArray<{|
  +id: ?string,
  +title: ?string,
  +content: ?string,
  +$refType: FAQScreen_posts$ref,
|}>;
export type FAQScreen_posts$data = FAQScreen_posts;
export type FAQScreen_posts$key = $ReadOnlyArray<{
  +$data?: FAQScreen_posts$data,
  +$fragmentRefs: FAQScreen_posts$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "FAQScreen_posts",
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
(node/*: any*/).hash = '46ced8cb6154f2894966cb2bfedd32ac';

module.exports = node;
