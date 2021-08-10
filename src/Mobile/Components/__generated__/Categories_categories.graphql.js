/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Categories_categories$ref: FragmentReference;
declare export opaque type Categories_categories$fragmentType: Categories_categories$ref;
export type Categories_categories = $ReadOnlyArray<{|
  +id: ?string,
  +name: ?string,
  +level: ?number,
  +icon: ?{|
    +url: ?string
  |},
  +$refType: Categories_categories$ref,
|}>;
export type Categories_categories$data = Categories_categories;
export type Categories_categories$key = $ReadOnlyArray<{
  +$data?: Categories_categories$data,
  +$fragmentRefs: Categories_categories$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "Categories_categories",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "level",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "icon",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "url",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Category",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '7983f5cd8c8419f042707b0b4c3bf987';

module.exports = node;
