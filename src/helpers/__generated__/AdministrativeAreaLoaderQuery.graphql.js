/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AdministrativeAreaLoaderQueryVariables = {|
  id: number
|};
export type AdministrativeAreaLoaderQueryResponse = {|
  +administrativeArea: ?{|
    +administrativeAreaId: ?number,
    +name: ?string,
    +ancestors: ?$ReadOnlyArray<?{|
      +administrativeAreaId: ?number,
      +name: ?string,
    |}>,
  |}
|};
export type AdministrativeAreaLoaderQuery = {|
  variables: AdministrativeAreaLoaderQueryVariables,
  response: AdministrativeAreaLoaderQueryResponse,
|};
*/


/*
query AdministrativeAreaLoaderQuery(
  $id: Int!
) {
  administrativeArea(id: $id) {
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
    "name": "id"
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
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "AdministrativeArea",
    "kind": "LinkedField",
    "name": "administrativeArea",
    "plural": false,
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
    "name": "AdministrativeAreaLoaderQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AdministrativeAreaLoaderQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "6127068cb26ea4cbc7db80a2466ac5a2",
    "id": null,
    "metadata": {},
    "name": "AdministrativeAreaLoaderQuery",
    "operationKind": "query",
    "text": "query AdministrativeAreaLoaderQuery(\n  $id: Int!\n) {\n  administrativeArea(id: $id) {\n    administrativeAreaId\n    name\n    ancestors {\n      administrativeAreaId\n      name\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e7358e23ba535cd3ba7cf55973b12aee';

module.exports = node;
