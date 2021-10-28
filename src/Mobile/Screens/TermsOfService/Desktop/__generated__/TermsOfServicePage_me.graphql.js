/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TermsOfServicePage_me$ref: FragmentReference;
declare export opaque type TermsOfServicePage_me$fragmentType: TermsOfServicePage_me$ref;
export type TermsOfServicePage_me = {|
  +id: ?string,
  +isAdmin: ?boolean,
  +$refType: TermsOfServicePage_me$ref,
|};
export type TermsOfServicePage_me$data = TermsOfServicePage_me;
export type TermsOfServicePage_me$key = {
  +$data?: TermsOfServicePage_me$data,
  +$fragmentRefs: TermsOfServicePage_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TermsOfServicePage_me",
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
(node/*: any*/).hash = '095234ddf0c32a9232efb126f4b8a59b';

module.exports = node;
