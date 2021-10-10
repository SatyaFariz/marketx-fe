/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CreateSpecificationFieldsModal_category$ref: FragmentReference;
declare export opaque type CreateSpecificationFieldsModal_category$fragmentType: CreateSpecificationFieldsModal_category$ref;
export type CreateSpecificationFieldsModal_category = {|
  +id: ?string,
  +$refType: CreateSpecificationFieldsModal_category$ref,
|};
export type CreateSpecificationFieldsModal_category$data = CreateSpecificationFieldsModal_category;
export type CreateSpecificationFieldsModal_category$key = {
  +$data?: CreateSpecificationFieldsModal_category$data,
  +$fragmentRefs: CreateSpecificationFieldsModal_category$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CreateSpecificationFieldsModal_category",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Category",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'e5d3fa8ef93ce37b965b0ee8978e64da';

module.exports = node;
