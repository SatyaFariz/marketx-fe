/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CategoryScreen_category$ref = any;
type CategoryScreen_me$ref = any;
type CategoryScreen_popularLocations$ref = any;
type FixedAddressBar_me$ref = any;
export type CategorySearchScreenQueryVariables = {|
  id: string
|};
export type CategorySearchScreenQueryResponse = {|
  +category: ?{|
    +id: ?string,
    +$fragmentRefs: CategoryScreen_category$ref,
  |},
  +me: ?{|
    +id: ?string,
    +$fragmentRefs: CategoryScreen_me$ref & FixedAddressBar_me$ref,
  |},
  +administrativeAreas: ?$ReadOnlyArray<?{|
    +$fragmentRefs: CategoryScreen_popularLocations$ref
  |}>,
|};
export type CategorySearchScreenQuery = {|
  variables: CategorySearchScreenQueryVariables,
  response: CategorySearchScreenQueryResponse,
|};
*/


/*
query CategorySearchScreenQuery(
  $id: String!
) {
  category(id: $id) {
    id
    ...CategoryScreen_category
  }
  me {
    id
    ...CategoryScreen_me
    ...FixedAddressBar_me
  }
  administrativeAreas(isPopular: true) {
    ...CategoryScreen_popularLocations
  }
}

fragment CategoryScreen_category on Category {
  id
  name
  slug
  level
  ancestors {
    id
    name
  }
}

fragment CategoryScreen_me on User {
  id
  isAdmin
}

fragment CategoryScreen_popularLocations on AdministrativeArea {
  ...LocationSearchModal_popularLocations
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  {
    "kind": "Literal",
    "name": "isPopular",
    "value": true
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "administrativeAreaId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CategorySearchScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Category",
        "kind": "LinkedField",
        "name": "category",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CategoryScreen_category"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CategoryScreen_me"
          },
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
        "args": (v3/*: any*/),
        "concreteType": "AdministrativeArea",
        "kind": "LinkedField",
        "name": "administrativeAreas",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CategoryScreen_popularLocations"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CategorySearchScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Category",
        "kind": "LinkedField",
        "name": "category",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "slug",
            "storageKey": null
          },
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
              (v2/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
        "args": (v3/*: any*/),
        "concreteType": "AdministrativeArea",
        "kind": "LinkedField",
        "name": "administrativeAreas",
        "plural": true,
        "selections": [
          (v5/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "AdministrativeArea",
            "kind": "LinkedField",
            "name": "ancestors",
            "plural": true,
            "selections": [
              (v5/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "administrativeAreas(isPopular:true)"
      }
    ]
  },
  "params": {
    "cacheID": "bfc71050212d1300c7673af471549c17",
    "id": null,
    "metadata": {},
    "name": "CategorySearchScreenQuery",
    "operationKind": "query",
    "text": "query CategorySearchScreenQuery(\n  $id: String!\n) {\n  category(id: $id) {\n    id\n    ...CategoryScreen_category\n  }\n  me {\n    id\n    ...CategoryScreen_me\n    ...FixedAddressBar_me\n  }\n  administrativeAreas(isPopular: true) {\n    ...CategoryScreen_popularLocations\n  }\n}\n\nfragment CategoryScreen_category on Category {\n  id\n  name\n  slug\n  level\n  ancestors {\n    id\n    name\n  }\n}\n\nfragment CategoryScreen_me on User {\n  id\n  isAdmin\n}\n\nfragment CategoryScreen_popularLocations on AdministrativeArea {\n  ...LocationSearchModal_popularLocations\n}\n\nfragment FixedAddressBar_me on User {\n  id\n  isAdmin\n}\n\nfragment LocationSearchModal_popularLocations on AdministrativeArea {\n  administrativeAreaId\n  name\n  ancestors {\n    administrativeAreaId\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c4acfb65cf5dd327c827f1d632bb4d32';

module.exports = node;
