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
  +store: ?{|
    +id: ?string
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


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AccountTab_me",
  "selections": [
    (v0/*: any*/),
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
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Store",
      "kind": "LinkedField",
      "name": "store",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f73818033de72fc6c377a86265387440';

module.exports = node;
