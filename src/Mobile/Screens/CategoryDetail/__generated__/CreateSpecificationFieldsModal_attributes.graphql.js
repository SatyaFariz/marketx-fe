/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CreateSpecificationFieldsModal_attributes$ref: FragmentReference;
declare export opaque type CreateSpecificationFieldsModal_attributes$fragmentType: CreateSpecificationFieldsModal_attributes$ref;
export type CreateSpecificationFieldsModal_attributes = $ReadOnlyArray<{|
  +id: ?string,
  +name: ?string,
  +$refType: CreateSpecificationFieldsModal_attributes$ref,
|}>;
export type CreateSpecificationFieldsModal_attributes$data = CreateSpecificationFieldsModal_attributes;
export type CreateSpecificationFieldsModal_attributes$key = $ReadOnlyArray<{
  +$data?: CreateSpecificationFieldsModal_attributes$data,
  +$fragmentRefs: CreateSpecificationFieldsModal_attributes$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "CreateSpecificationFieldsModal_attributes",
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
(node/*: any*/).hash = '0cd1437b14f55f145de0addce583f005';

module.exports = node;
