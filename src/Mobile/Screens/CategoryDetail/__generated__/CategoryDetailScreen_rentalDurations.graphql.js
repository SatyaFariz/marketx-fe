/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CategoryDetailScreen_rentalDurations$ref: FragmentReference;
declare export opaque type CategoryDetailScreen_rentalDurations$fragmentType: CategoryDetailScreen_rentalDurations$ref;
export type CategoryDetailScreen_rentalDurations = $ReadOnlyArray<{|
  +id: ?string,
  +display: ?string,
  +name: ?string,
  +value: ?number,
  +$refType: CategoryDetailScreen_rentalDurations$ref,
|}>;
export type CategoryDetailScreen_rentalDurations$data = CategoryDetailScreen_rentalDurations;
export type CategoryDetailScreen_rentalDurations$key = $ReadOnlyArray<{
  +$data?: CategoryDetailScreen_rentalDurations$data,
  +$fragmentRefs: CategoryDetailScreen_rentalDurations$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "CategoryDetailScreen_rentalDurations",
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
      "name": "display",
      "storageKey": null
    },
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
      "kind": "ScalarField",
      "name": "value",
      "storageKey": null
    }
  ],
  "type": "Unit",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'e66cd86da11c86d7c26b6492116da271';

module.exports = node;
