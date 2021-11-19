/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SearchResultsList_userSession$ref: FragmentReference;
declare export opaque type SearchResultsList_userSession$fragmentType: SearchResultsList_userSession$ref;
export type SearchResultsList_userSession = {|
  +userId: ?string,
  +storeId: ?string,
  +$refType: SearchResultsList_userSession$ref,
|};
export type SearchResultsList_userSession$data = SearchResultsList_userSession;
export type SearchResultsList_userSession$key = {
  +$data?: SearchResultsList_userSession$data,
  +$fragmentRefs: SearchResultsList_userSession$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchResultsList_userSession",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "userId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "storeId",
      "storageKey": null
    }
  ],
  "type": "UserSession",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'd81d959825651c93bf2a1b452762fcc1';

module.exports = node;
