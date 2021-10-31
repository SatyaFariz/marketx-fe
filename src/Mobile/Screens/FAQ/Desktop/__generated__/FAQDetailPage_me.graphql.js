/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type FAQDetailPage_me$ref: FragmentReference;
declare export opaque type FAQDetailPage_me$fragmentType: FAQDetailPage_me$ref;
export type FAQDetailPage_me = {|
  +id: ?string,
  +isAdmin: ?boolean,
  +$refType: FAQDetailPage_me$ref,
|};
export type FAQDetailPage_me$data = FAQDetailPage_me;
export type FAQDetailPage_me$key = {
  +$data?: FAQDetailPage_me$data,
  +$fragmentRefs: FAQDetailPage_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FAQDetailPage_me",
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
(node/*: any*/).hash = '5c1b493fb1c046e8e28a7b0add633cec';

module.exports = node;
