/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AdministrativeAreasSearchQueryVariables = {|
  searchTerm: string
|};
export type AdministrativeAreasSearchQueryResponse = {|
  +administrativeAreas: ?$ReadOnlyArray<?{|
    +administrativeAreaId: ?number,
    +name: ?string,
    +ancestors: ?$ReadOnlyArray<?{|
      +administrativeAreaId: ?number,
      +name: ?string,
    |}>,
  |}>
|};
export type AdministrativeAreasSearchQuery = {|
  variables: AdministrativeAreasSearchQueryVariables,
  response: AdministrativeAreasSearchQueryResponse,
|};
*/


/*
query AdministrativeAreasSearchQuery(
  $searchTerm: String!
) {
  administrativeAreas(searchTerm: $searchTerm) {
    administrativeAreaId
    name
    ancestors {
      administrativeAreaId
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "searchTerm"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "administrativeAreaId",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "searchTerm",
        "variableName": "searchTerm"
      }
    ],
    "concreteType": "AdministrativeArea",
    "kind": "LinkedField",
    "name": "administrativeAreas",
    "plural": true,
    "selections": [
      (v1/*: any*/),
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "AdministrativeArea",
        "kind": "LinkedField",
        "name": "ancestors",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AdministrativeAreasSearchQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AdministrativeAreasSearchQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "70e9cb4509695085bc395c9cc8012c8a",
    "id": null,
    "metadata": {},
    "name": "AdministrativeAreasSearchQuery",
    "operationKind": "query",
    "text": "query AdministrativeAreasSearchQuery(\n  $searchTerm: String!\n) {\n  administrativeAreas(searchTerm: $searchTerm) {\n    administrativeAreaId\n    name\n    ancestors {\n      administrativeAreaId\n      name\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3419e4a8c79320a55aab5cf21636c35f';

module.exports = node;
