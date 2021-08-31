/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AboutUsScreen_posts$ref: FragmentReference;
declare export opaque type AboutUsScreen_posts$fragmentType: AboutUsScreen_posts$ref;
export type AboutUsScreen_posts = $ReadOnlyArray<{|
  +id: ?string,
  +title: ?string,
  +content: ?string,
  +$refType: AboutUsScreen_posts$ref,
|}>;
export type AboutUsScreen_posts$data = AboutUsScreen_posts;
export type AboutUsScreen_posts$key = $ReadOnlyArray<{
  +$data?: AboutUsScreen_posts$data,
  +$fragmentRefs: AboutUsScreen_posts$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "AboutUsScreen_posts",
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
(node/*: any*/).hash = 'f892d05e2b948d73b2ef644ecc4a757f';

module.exports = node;
