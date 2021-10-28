/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type AboutUsPage_me$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AboutUsScreen_me$ref: FragmentReference;
declare export opaque type AboutUsScreen_me$fragmentType: AboutUsScreen_me$ref;
export type AboutUsScreen_me = {|
  +id: ?string,
  +$fragmentRefs: AboutUsPage_me$ref,
  +$refType: AboutUsScreen_me$ref,
|};
export type AboutUsScreen_me$data = AboutUsScreen_me;
export type AboutUsScreen_me$key = {
  +$data?: AboutUsScreen_me$data,
  +$fragmentRefs: AboutUsScreen_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AboutUsScreen_me",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AboutUsPage_me"
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'd0a768c0654b0557114e7a0d4823c2fd';

module.exports = node;
