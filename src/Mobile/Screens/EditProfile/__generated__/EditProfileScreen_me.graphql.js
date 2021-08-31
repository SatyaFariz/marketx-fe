/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EditProfileScreen_me$ref: FragmentReference;
declare export opaque type EditProfileScreen_me$fragmentType: EditProfileScreen_me$ref;
export type EditProfileScreen_me = {|
  +id: ?string,
  +name: ?string,
  +mobileNumber: ?string,
  +profilePicture: ?{|
    +url: ?string
  |},
  +$refType: EditProfileScreen_me$ref,
|};
export type EditProfileScreen_me$data = EditProfileScreen_me;
export type EditProfileScreen_me$key = {
  +$data?: EditProfileScreen_me$data,
  +$fragmentRefs: EditProfileScreen_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EditProfileScreen_me",
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
(node/*: any*/).hash = '23e3d2a983021bf7d2667399e7429d07';

module.exports = node;
