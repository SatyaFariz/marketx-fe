/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CategoryScreen_category$ref: FragmentReference;
declare export opaque type CategoryScreen_category$fragmentType: CategoryScreen_category$ref;
export type CategoryScreen_category = {|
  +id: ?string,
  +name: ?string,
  +slug: ?string,
  +level: ?number,
  +ancestors: ?$ReadOnlyArray<?{|
    +id: ?string,
    +name: ?string,
    +slug: ?string,
  |}>,
  +$refType: CategoryScreen_category$ref,
|};
export type CategoryScreen_category$data = CategoryScreen_category;
export type CategoryScreen_category$key = {
  +$data?: CategoryScreen_category$data,
  +$fragmentRefs: CategoryScreen_category$ref,
  ...
};
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
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CategoryScreen_category",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    (v2/*: any*/),
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
      "concreteType": "Category",
      "kind": "LinkedField",
      "name": "ancestors",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        (v2/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Category",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '81db8b1a07b6a808a4a4ddcd48c9662e';

module.exports = node;
