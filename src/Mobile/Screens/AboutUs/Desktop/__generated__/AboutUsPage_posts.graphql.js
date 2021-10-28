/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AboutUsPage_posts$ref: FragmentReference;
declare export opaque type AboutUsPage_posts$fragmentType: AboutUsPage_posts$ref;
export type AboutUsPage_posts = $ReadOnlyArray<{|
  +id: ?string,
  +title: ?string,
  +content: ?string,
  +updatedAt: ?string,
  +$refType: AboutUsPage_posts$ref,
|}>;
export type AboutUsPage_posts$data = AboutUsPage_posts;
export type AboutUsPage_posts$key = $ReadOnlyArray<{
  +$data?: AboutUsPage_posts$data,
  +$fragmentRefs: AboutUsPage_posts$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "AboutUsPage_posts",
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
(node/*: any*/).hash = '9770e5ac96d48d6cf3d43273f2655f85';

module.exports = node;
