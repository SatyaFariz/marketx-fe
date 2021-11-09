/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FAQDetailPage_me$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FAQPage_me$ref: FragmentReference;
declare export opaque type FAQPage_me$fragmentType: FAQPage_me$ref;
export type FAQPage_me = {|
  +id: ?string,
  +isAdmin: ?boolean,
  +$fragmentRefs: FAQDetailPage_me$ref,
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FAQDetailPage_me"
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'fdc99b91371dc7fd896ae9c32d5a94ff';

module.exports = node;