/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EditPivotFieldModal_attributes$ref: FragmentReference;
declare export opaque type EditPivotFieldModal_attributes$fragmentType: EditPivotFieldModal_attributes$ref;
export type EditPivotFieldModal_attributes = $ReadOnlyArray<{|
  +id: ?string,
  +name: ?string,
  +$refType: EditPivotFieldModal_attributes$ref,
|}>;
export type EditPivotFieldModal_attributes$data = EditPivotFieldModal_attributes;
export type EditPivotFieldModal_attributes$key = $ReadOnlyArray<{
  +$data?: EditPivotFieldModal_attributes$data,
  +$fragmentRefs: EditPivotFieldModal_attributes$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "EditPivotFieldModal_attributes",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Attribute",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '6e4b8dc61c131bfdc472f57b77b4a0b1';

module.exports = node;
