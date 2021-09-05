/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CategoriesListScreen_categories$ref: FragmentReference;
declare export opaque type CategoriesListScreen_categories$fragmentType: CategoriesListScreen_categories$ref;
export type CategoriesListScreen_categories = $ReadOnlyArray<{|
  +id: ?string,
  +name: ?string,
  +ancestors: ?$ReadOnlyArray<?{|
    +id: ?string,
    +name: ?string,
  |}>,
  +$refType: CategoriesListScreen_categories$ref,
|}>;
export type CategoriesListScreen_categories$data = CategoriesListScreen_categories;
export type CategoriesListScreen_categories$key = $ReadOnlyArray<{
  +$data?: CategoriesListScreen_categories$data,
  +$fragmentRefs: CategoriesListScreen_categories$ref,
  ...
}>;
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
  "metadata": {
    "plural": true
  },
  "name": "CategoriesListScreen_categories",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Category",
      "kind": "LinkedField",
      "name": "ancestors",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Category",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '09b70fab360f780c3d2af0d80b39ad35';

module.exports = node;
