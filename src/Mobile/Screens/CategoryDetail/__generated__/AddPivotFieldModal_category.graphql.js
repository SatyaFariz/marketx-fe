/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AddPivotFieldModal_category$ref: FragmentReference;
declare export opaque type AddPivotFieldModal_category$fragmentType: AddPivotFieldModal_category$ref;
export type AddPivotFieldModal_category = {|
  +id: ?string,
  +$refType: AddPivotFieldModal_category$ref,
|};
export type AddPivotFieldModal_category$data = AddPivotFieldModal_category;
export type AddPivotFieldModal_category$key = {
  +$data?: AddPivotFieldModal_category$data,
  +$fragmentRefs: AddPivotFieldModal_category$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AddPivotFieldModal_category",
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
(node/*: any*/).hash = '18ce25fbdee56ece4206b8238d62eace';

module.exports = node;
