/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FixedAddressBar_me$ref = any;
type SearchScreen_popularLocations$ref = any;
export type SearchScreenRootQueryVariables = {||};
export type SearchScreenRootQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +$fragmentRefs: FixedAddressBar_me$ref,
  |},
  +administrativeAreas: ?$ReadOnlyArray<?{|
    +$fragmentRefs: SearchScreen_popularLocations$ref
  |}>,
|};
export type SearchScreenRootQuery = {|
  variables: SearchScreenRootQueryVariables,
  response: SearchScreenRootQueryResponse,
|};
*/


/*
query SearchScreenRootQuery {
  me {
    id
    ...FixedAddressBar_me
  }
  administrativeAreas(isPopular: true) {
    ...SearchScreen_popularLocations
  }
}

fragment FixedAddressBar_me on User {
  id
  isAdmin
}

fragment LocationSearchModal_popularLocations on AdministrativeArea {
  administrativeAreaId
  name
  ancestors {
    administrativeAreaId
    name
  }
}

fragment SearchScreen_popularLocations on AdministrativeArea {
  ...LocationSearchModal_popularLocations
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "isPopular",
    "value": true
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "administrativeAreaId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchScreenRootQuery",
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
            "name": "FixedAddressBar_me"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AdministrativeArea",
        "kind": "LinkedField",
        "name": "administrativeAreas",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SearchScreen_popularLocations"
          }
        ],
        "storageKey": "administrativeAreas(isPopular:true)"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SearchScreenRootQuery",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isAdmin",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AdministrativeArea",
        "kind": "LinkedField",
        "name": "administrativeAreas",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "AdministrativeArea",
            "kind": "LinkedField",
            "name": "ancestors",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "administrativeAreas(isPopular:true)"
      }
    ]
  },
  "params": {
    "cacheID": "5bd462c26df2d3df9ceeb3977596064f",
    "id": null,
    "metadata": {},
    "name": "SearchScreenRootQuery",
    "operationKind": "query",
    "text": "query SearchScreenRootQuery {\n  me {\n    id\n    ...FixedAddressBar_me\n  }\n  administrativeAreas(isPopular: true) {\n    ...SearchScreen_popularLocations\n  }\n}\n\nfragment FixedAddressBar_me on User {\n  id\n  isAdmin\n}\n\nfragment LocationSearchModal_popularLocations on AdministrativeArea {\n  administrativeAreaId\n  name\n  ancestors {\n    administrativeAreaId\n    name\n  }\n}\n\nfragment SearchScreen_popularLocations on AdministrativeArea {\n  ...LocationSearchModal_popularLocations\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'af3db550a660fc3c9611afde3e027ad1';

module.exports = node;
