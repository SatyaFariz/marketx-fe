/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type FAQPage_me$ref: FragmentReference;
declare export opaque type FAQPage_me$fragmentType: FAQPage_me$ref;
export type FAQPage_me = {|
  +id: ?string,
  +isAdmin: ?boolean,
  +$refType: FAQPage_me$ref,
|};
export type FAQPage_me$data = FAQPage_me;
export type FAQPage_me$key = {
  +$data?: FAQPage_me$data,
  +$fragmentRefs: FAQPage_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FAQPage_me",
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
(node/*: any*/).hash = '1a293db16ebdf9e3c8d913572fe6c9e0';

module.exports = node;
