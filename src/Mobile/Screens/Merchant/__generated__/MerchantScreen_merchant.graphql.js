/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type MerchantScreen_merchant$ref: FragmentReference;
declare export opaque type MerchantScreen_merchant$fragmentType: MerchantScreen_merchant$ref;
export type MerchantScreen_merchant = {|
  +id: ?string,
  +name: ?string,
  +profilePicture: ?{|
    +id: ?string,
    +url: ?string,
  |},
  +$refType: MerchantScreen_merchant$ref,
|};
export type MerchantScreen_merchant$data = MerchantScreen_merchant;
export type MerchantScreen_merchant$key = {
  +$data?: MerchantScreen_merchant$data,
  +$fragmentRefs: MerchantScreen_merchant$ref,
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
  "name": "MerchantScreen_merchant",
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
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '03b4c632e294a40ba4d2d3d4c165e7f1';

module.exports = node;
