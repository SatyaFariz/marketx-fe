/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AdministrativeAreasLoaderQueryVariables = {|
  parentId: number
|};
export type AdministrativeAreasLoaderQueryResponse = {|
  +administrativeAreas: ?$ReadOnlyArray<?{|
    +administrativeAreaId: ?number,
    +name: ?string,
  |}>
|};
export type AdministrativeAreasLoaderQuery = {|
  variables: AdministrativeAreasLoaderQueryVariables,
  response: AdministrativeAreasLoaderQueryResponse,
|};
*/


/*
query AdministrativeAreasLoaderQuery(
  $parentId: Int!
) {
  administrativeAreas(parentId: $parentId) {
    administrativeAreaId
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "parentId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "parentId",
        "variableName": "parentId"
      }
    ],
    "concreteType": "AdministrativeArea",
    "kind": "LinkedField",
    "name": "administrativeAreas",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "administrativeAreaId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
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
    "name": "AdministrativeAreasLoaderQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AdministrativeAreasLoaderQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "efd8caac07bf0d6e5a0829ff31bab204",
    "id": null,
    "metadata": {},
    "name": "AdministrativeAreasLoaderQuery",
    "operationKind": "query",
    "text": "query AdministrativeAreasLoaderQuery(\n  $parentId: Int!\n) {\n  administrativeAreas(parentId: $parentId) {\n    administrativeAreaId\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ec3b4d6f20d600037bb36003cbe7bd51';

module.exports = node;
