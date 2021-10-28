/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AboutUsPage_me$ref: FragmentReference;
declare export opaque type AboutUsPage_me$fragmentType: AboutUsPage_me$ref;
export type AboutUsPage_me = {|
  +id: ?string,
  +isAdmin: ?boolean,
  +$refType: AboutUsPage_me$ref,
|};
export type AboutUsPage_me$data = AboutUsPage_me;
export type AboutUsPage_me$key = {
  +$data?: AboutUsPage_me$data,
  +$fragmentRefs: AboutUsPage_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AboutUsPage_me",
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
(node/*: any*/).hash = 'd7dec997eb429ac361c93aa3ba0d2fdf';

module.exports = node;
