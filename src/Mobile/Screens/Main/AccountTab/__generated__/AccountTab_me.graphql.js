/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AccountTab_me$ref: FragmentReference;
declare export opaque type AccountTab_me$fragmentType: AccountTab_me$ref;
export type AccountTab_me = {|
  +id: ?string,
  +name: ?string,
  +mobileNumber: ?string,
  +profilePicture: ?{|
    +url: ?string
  |},
  +$refType: AccountTab_me$ref,
|};
export type AccountTab_me$data = AccountTab_me;
export type AccountTab_me$key = {
  +$data?: AccountTab_me$data,
  +$fragmentRefs: AccountTab_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AccountTab_me",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "mobileNumber",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "profilePicture",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "url",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '2d7da709cc8e3b37a80b653f1cbc7d9c';

module.exports = node;
