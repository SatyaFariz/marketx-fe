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
  +listingType: ?string,
  +icon: ?{|
    +url: ?string
  |},
  +children: ?$ReadOnlyArray<?{|
    +id: ?string,
    +name: ?string,
    +level: ?number,
    +icon: ?{|
      +url: ?string
    |},
  |}>,
  +$refType: Categories_categories$ref,
|}>;
export type Categories_categories$data = Categories_categories;
export type Categories_categories$key = $ReadOnlyArray<{
  +$data?: Categories_categories$data,
  +$fragmentRefs: Categories_categories$ref,
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
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "level",
  "storageKey": null
},
v3 = {
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
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "Categories_categories",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "listingType",
      "storageKey": null
    },
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Category",
      "kind": "LinkedField",
      "name": "children",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        (v2/*: any*/),
        (v3/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Category",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dd7d97880b4da35ad8e4d4fab4e9afaf';

module.exports = node;
