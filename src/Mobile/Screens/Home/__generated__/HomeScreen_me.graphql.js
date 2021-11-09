/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Categories_me$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HomeScreen_me$ref: FragmentReference;
declare export opaque type HomeScreen_me$fragmentType: HomeScreen_me$ref;
export type HomeScreen_me = {|
  +id: ?string,
  +name: ?string,
  +isAdmin: ?boolean,
  +profilePicture: ?{|
    +id: ?string,
    +url: ?string,
  |},
  +store: ?{|
    +id: ?string
  |},
  +$fragmentRefs: Categories_me$ref,
  +$refType: HomeScreen_me$ref,
|};
export type HomeScreen_me$data = HomeScreen_me;
export type HomeScreen_me$key = {
  +$data?: HomeScreen_me$data,
  +$fragmentRefs: HomeScreen_me$ref,
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
  "name": "HomeScreen_me",
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
      "name": "isAdmin",
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Categories_me"
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '7fb99c18bd52cab1a462dd3d5b17eb3f';

module.exports = node;
