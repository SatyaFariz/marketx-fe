/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type CreateSpecificationFieldsModal_attributes$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CategoryDetailScreen_attributes$ref: FragmentReference;
declare export opaque type CategoryDetailScreen_attributes$fragmentType: CategoryDetailScreen_attributes$ref;
export type CategoryDetailScreen_attributes = $ReadOnlyArray<{|
  +id: ?string,
  +$fragmentRefs: CreateSpecificationFieldsModal_attributes$ref,
  +$refType: CategoryDetailScreen_attributes$ref,
|}>;
export type CategoryDetailScreen_attributes$data = CategoryDetailScreen_attributes;
export type CategoryDetailScreen_attributes$key = $ReadOnlyArray<{
  +$data?: CategoryDetailScreen_attributes$data,
  +$fragmentRefs: CategoryDetailScreen_attributes$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "CategoryDetailScreen_attributes",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CreateSpecificationFieldsModal_attributes"
    }
  ],
  "type": "Attribute",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'efd5c8997f33e8239539abee6865cdc8';

module.exports = node;
