/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MobileNumberCheckerQueryVariables = {|
  mobileNumber: string
|};
export type MobileNumberCheckerQueryResponse = {|
  +mobileNumberExists: ?boolean
|};
export type MobileNumberCheckerQuery = {|
  variables: MobileNumberCheckerQueryVariables,
  response: MobileNumberCheckerQueryResponse,
|};
*/


/*
query MobileNumberCheckerQuery(
  $mobileNumber: String!
) {
  mobileNumberExists(mobileNumber: $mobileNumber)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "mobileNumber"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "mobileNumber",
        "variableName": "mobileNumber"
      }
    ],
    "kind": "ScalarField",
    "name": "mobileNumberExists",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MobileNumberCheckerQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MobileNumberCheckerQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d5cd9ff4cdb001ca1aa64f99702da971",
    "id": null,
    "metadata": {},
    "name": "MobileNumberCheckerQuery",
    "operationKind": "query",
    "text": "query MobileNumberCheckerQuery(\n  $mobileNumber: String!\n) {\n  mobileNumberExists(mobileNumber: $mobileNumber)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8850f8cbccd34c82716f436dadd57083';

module.exports = node;
