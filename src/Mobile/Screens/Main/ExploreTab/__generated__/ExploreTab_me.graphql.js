/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExploreTab_me$ref: FragmentReference;
declare export opaque type ExploreTab_me$fragmentType: ExploreTab_me$ref;
export type ExploreTab_me = {|
  +id: ?string,
  +name: ?string,
  +profilePicture: ?{|
    +id: ?string,
    +url: ?string,
  |},
  +store: ?{|
    +id: ?string
  |},
  +$refType: ExploreTab_me$ref,
|};
export type ExploreTab_me$data = ExploreTab_me;
export type ExploreTab_me$key = {
  +$data?: ExploreTab_me$data,
  +$fragmentRefs: ExploreTab_me$ref,
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
  "name": "ExploreTab_me",
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
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "profilePicture",
      "plural": false,
      "selections": [
        (v0/*: any*/),
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
(node/*: any*/).hash = 'b08bfb18d5a9d582d0e76597ff18c9f0';

module.exports = node;
