/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SelectCategoryView_categories$ref: FragmentReference;
declare export opaque type SelectCategoryView_categories$fragmentType: SelectCategoryView_categories$ref;
export type SelectCategoryView_categories = $ReadOnlyArray<{|
  +id: ?string,
  +name: ?string,
  +path: ?string,
  +parents: ?$ReadOnlyArray<?{|
    +id: ?string,
    +name: ?string,
  |}>,
  +$refType: SelectCategoryView_categories$ref,
|}>;
export type SelectCategoryView_categories$data = SelectCategoryView_categories;
export type SelectCategoryView_categories$key = $ReadOnlyArray<{
  +$data?: SelectCategoryView_categories$data,
  +$fragmentRefs: SelectCategoryView_categories$ref,
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
  "name": "SelectCategoryView_categories",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "path",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Category",
      "kind": "LinkedField",
      "name": "parents",
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
(node/*: any*/).hash = 'fbbfcb44bad2ec2d0bcfb395043de34f';

module.exports = node;