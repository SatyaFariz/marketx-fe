/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EditProductScreen_product$ref: FragmentReference;
declare export opaque type EditProductScreen_product$fragmentType: EditProductScreen_product$ref;
export type EditProductScreen_product = {|
  +id: ?string,
  +name: ?string,
  +price: ?number,
  +desc: ?string,
  +images: ?$ReadOnlyArray<?{|
    +id: ?string,
    +url: ?string,
  |}>,
  +specs: ?$ReadOnlyArray<?{|
    +id: ?string,
    +attribute: ?{|
      +id: ?string
    |},
    +value: ?string,
  |}>,
  +category: ?{|
    +id: ?string,
    +name: ?string,
    +specFields: ?$ReadOnlyArray<?{|
      +id: ?string,
      +attribute: ?{|
        +id: ?string,
        +name: ?string,
      |},
      +isRequired: ?boolean,
    |}>,
  |},
  +$refType: EditProductScreen_product$ref,
|};
export type EditProductScreen_product$data = EditProductScreen_product;
export type EditProductScreen_product$key = {
  +$data?: EditProductScreen_product$data,
  +$fragmentRefs: EditProductScreen_product$ref,
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
  "name": "EditProductScreen_product",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "price",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "desc",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "images",
      "plural": true,
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
      "concreteType": "Specification",
      "kind": "LinkedField",
      "name": "specs",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Attribute",
          "kind": "LinkedField",
          "name": "attribute",
          "plural": false,
          "selections": [
            (v0/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "value",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Category",
      "kind": "LinkedField",
      "name": "category",
      "plural": false,
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
            (v0/*: any*/),
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
      "storageKey": null
    }
  ],
  "type": "Product",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '6ae3df0e6c105fa33458d19b656d8a5a';

module.exports = node;
