/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type AccountTab_me$ref = any;
type BottomNav_me$ref = any;
type ExploreTab_categories$ref = any;
type ExploreTab_featuredProducts$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MainScreen_data$ref: FragmentReference;
declare export opaque type MainScreen_data$fragmentType: MainScreen_data$ref;
export type MainScreen_data = {|
  +me: ?{|
    +id: ?string,
    +$fragmentRefs: BottomNav_me$ref & AccountTab_me$ref,
  |},
  +categories: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: ExploreTab_categories$ref,
  |}>,
  +featuredProducts: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: ExploreTab_featuredProducts$ref,
  |}>,
  +$refType: MainScreen_data$ref,
|};
export type MainScreen_data$data = MainScreen_data;
export type MainScreen_data$key = {
  +$data?: MainScreen_data$data,
  +$fragmentRefs: MainScreen_data$ref,
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
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MainScreen_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "me",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "BottomNav_me"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AccountTab_me"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Category",
      "kind": "LinkedField",
      "name": "categories",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ExploreTab_categories"
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Product",
      "kind": "LinkedField",
      "name": "featuredProducts",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ExploreTab_featuredProducts"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b680f4e58678887719c2827e8f70a346';

module.exports = node;
