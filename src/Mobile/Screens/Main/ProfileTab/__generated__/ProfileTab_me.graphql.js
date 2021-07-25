/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProfileTab_me$ref: FragmentReference;
declare export opaque type ProfileTab_me$fragmentType: ProfileTab_me$ref;
export type ProfileTab_me = {|
  +id: ?string,
  +name: ?string,
  +mobileNumber: ?string,
  +profilePicture: ?{|
    +url: ?string
  |},
  +$refType: ProfileTab_me$ref,
|};
export type ProfileTab_me$data = ProfileTab_me;
export type ProfileTab_me$key = {
  +$data?: ProfileTab_me$data,
  +$fragmentRefs: ProfileTab_me$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProfileTab_me",
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
(node/*: any*/).hash = '0512608e96cf0db8d5751e1407e3ff1d';

module.exports = node;
