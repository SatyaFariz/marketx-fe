/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type TermsOfServicePage_me$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TermsOfServiceScreen_me$ref: FragmentReference;
declare export opaque type TermsOfServiceScreen_me$fragmentType: TermsOfServiceScreen_me$ref;
export type TermsOfServiceScreen_me = {|
  +id: ?string,
  +$fragmentRefs: TermsOfServicePage_me$ref,
  +$refType: TermsOfServiceScreen_me$ref,
|};
export type TermsOfServiceScreen_me$data = TermsOfServiceScreen_me;
export type TermsOfServiceScreen_me$key = {
  +$data?: TermsOfServiceScreen_me$data,
  +$fragmentRefs: TermsOfServiceScreen_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TermsOfServiceScreen_me",
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
      "name": "TermsOfServicePage_me"
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '1b39c1181add01aff210dfafa1ded040';

module.exports = node;
