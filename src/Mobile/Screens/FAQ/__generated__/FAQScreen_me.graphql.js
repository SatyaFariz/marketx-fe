/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FAQPage_me$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FAQScreen_me$ref: FragmentReference;
declare export opaque type FAQScreen_me$fragmentType: FAQScreen_me$ref;
export type FAQScreen_me = {|
  +id: ?string,
  +isAdmin: ?boolean,
  +$fragmentRefs: FAQPage_me$ref,
  +$refType: FAQScreen_me$ref,
|};
export type FAQScreen_me$data = FAQScreen_me;
export type FAQScreen_me$key = {
  +$data?: FAQScreen_me$data,
  +$fragmentRefs: FAQScreen_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FAQScreen_me",
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
      "name": "FAQPage_me"
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'd9158179799589d675af2f935c0b5f06';

module.exports = node;
