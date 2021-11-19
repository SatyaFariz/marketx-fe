/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SearchResultsList_me$ref: FragmentReference;
declare export opaque type SearchResultsList_me$fragmentType: SearchResultsList_me$ref;
export type SearchResultsList_me = {|
  +id: ?string,
  +store: ?{|
    +id: ?string
  |},
  +$refType: SearchResultsList_me$ref,
|};
export type SearchResultsList_me$data = SearchResultsList_me;
export type SearchResultsList_me$key = {
  +$data?: SearchResultsList_me$data,
  +$fragmentRefs: SearchResultsList_me$ref,
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
  "name": "SearchResultsList_me",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Store",
      "kind": "LinkedField",
      "name": "store",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '19000cf0f6f3c56cfe528d64fb69d589';

module.exports = node;
