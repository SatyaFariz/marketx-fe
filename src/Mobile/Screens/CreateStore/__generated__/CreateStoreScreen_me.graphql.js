/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CreateStoreScreen_me$ref: FragmentReference;
declare export opaque type CreateStoreScreen_me$fragmentType: CreateStoreScreen_me$ref;
export type CreateStoreScreen_me = {|
  +id: ?string,
  +store: ?{|
    +id: ?string
  |},
  +$refType: CreateStoreScreen_me$ref,
|};
export type CreateStoreScreen_me$data = CreateStoreScreen_me;
export type CreateStoreScreen_me$key = {
  +$data?: CreateStoreScreen_me$data,
  +$fragmentRefs: CreateStoreScreen_me$ref,
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
  "name": "CreateStoreScreen_me",
  "selections": [
    (v0/*: any*/),
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
(node/*: any*/).hash = 'dc394098a567476bb92afbee76698b7f';

module.exports = node;
