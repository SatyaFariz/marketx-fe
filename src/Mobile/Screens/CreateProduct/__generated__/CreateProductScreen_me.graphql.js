/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CreateProductScreen_me$ref: FragmentReference;
declare export opaque type CreateProductScreen_me$fragmentType: CreateProductScreen_me$ref;
export type CreateProductScreen_me = {|
  +id: ?string,
  +store: ?{|
    +id: ?string
  |},
  +$refType: CreateProductScreen_me$ref,
|};
export type CreateProductScreen_me$data = CreateProductScreen_me;
export type CreateProductScreen_me$key = {
  +$data?: CreateProductScreen_me$data,
  +$fragmentRefs: CreateProductScreen_me$ref,
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
  "name": "CreateProductScreen_me",
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
(node/*: any*/).hash = '3021a1166ef336ec8ea6ed111960c8fa';

module.exports = node;
