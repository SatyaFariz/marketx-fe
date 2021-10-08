/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AttributesListScreen_attributes$ref: FragmentReference;
declare export opaque type AttributesListScreen_attributes$fragmentType: AttributesListScreen_attributes$ref;
export type AttributesListScreen_attributes = $ReadOnlyArray<{|
  +id: ?string,
  +name: ?string,
  +$refType: AttributesListScreen_attributes$ref,
|}>;
export type AttributesListScreen_attributes$data = AttributesListScreen_attributes;
export type AttributesListScreen_attributes$key = $ReadOnlyArray<{
  +$data?: AttributesListScreen_attributes$data,
  +$fragmentRefs: AttributesListScreen_attributes$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "AttributesListScreen_attributes",
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
(node/*: any*/).hash = '10ca225078c9a472994cce81a707e2b1';

module.exports = node;
