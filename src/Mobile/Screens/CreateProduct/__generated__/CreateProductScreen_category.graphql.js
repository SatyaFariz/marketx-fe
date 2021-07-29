/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CreateProductScreen_category$ref: FragmentReference;
declare export opaque type CreateProductScreen_category$fragmentType: CreateProductScreen_category$ref;
export type CreateProductScreen_category = {|
  +id: ?string,
  +name: ?string,
  +specFields: ?$ReadOnlyArray<?{|
    +attribute: ?{|
      +id: ?string,
      +name: ?string,
    |},
    +isRequired: ?boolean,
  |}>,
  +$refType: CreateProductScreen_category$ref,
|};
export type CreateProductScreen_category$data = CreateProductScreen_category;
export type CreateProductScreen_category$key = {
  +$data?: CreateProductScreen_category$data,
  +$fragmentRefs: CreateProductScreen_category$ref,
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
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CreateProductScreen_category",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "SpecificationField",
      "kind": "LinkedField",
      "name": "specFields",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Attribute",
          "kind": "LinkedField",
          "name": "attribute",
          "plural": false,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isRequired",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Category",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '5cbd01595ca8a8d43d70e62c776242df';

module.exports = node;
