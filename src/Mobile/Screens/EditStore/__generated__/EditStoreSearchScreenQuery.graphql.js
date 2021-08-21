/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EditStoreScreen_provinces$ref = any;
type EditStoreScreen_store$ref = any;
export type EditStoreSearchScreenQueryVariables = {||};
export type EditStoreSearchScreenQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +store: ?{|
      +id: ?string,
      +$fragmentRefs: EditStoreScreen_store$ref,
    |},
  |},
  +administrativeAreas: ?$ReadOnlyArray<?{|
    +$fragmentRefs: EditStoreScreen_provinces$ref
  |}>,
|};
export type EditStoreSearchScreenQuery = {|
  variables: EditStoreSearchScreenQueryVariables,
  response: EditStoreSearchScreenQueryResponse,
|};
*/


/*
query EditStoreSearchScreenQuery {
  me {
    id
    store {
      id
      ...EditStoreScreen_store
    }
  }
  administrativeAreas {
    ...EditStoreScreen_provinces
  }
}

fragment EditStoreScreen_provinces on AdministrativeArea {
  administrativeAreaId
  name
}

fragment EditStoreScreen_store on Store {
  id
  name
  whatsappNumber
  profilePicture {
    id
    url
  }
  banner {
    id
    url
  }
  address {
    fullAddress
    province {
      administrativeAreaId
      name
    }
    city {
      administrativeAreaId
      name
    }
    district {
      administrativeAreaId
      name
    }
  }
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  (v0/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "url",
    "storageKey": null
  }
],
v3 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "administrativeAreaId",
    "storageKey": null
  },
  (v1/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "EditStoreSearchScreenQuery",
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
            "concreteType": "Store",
            "kind": "LinkedField",
            "name": "store",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "EditStoreScreen_store"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "AdministrativeArea",
        "kind": "LinkedField",
        "name": "administrativeAreas",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "EditStoreScreen_provinces"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "EditStoreSearchScreenQuery",
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
            "concreteType": "Store",
            "kind": "LinkedField",
            "name": "store",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "whatsappNumber",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "profilePicture",
                "plural": false,
                "selections": (v2/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Image",
                "kind": "LinkedField",
                "name": "banner",
                "plural": false,
                "selections": (v2/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Address",
                "kind": "LinkedField",
                "name": "address",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "fullAddress",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AdministrativeArea",
                    "kind": "LinkedField",
                    "name": "province",
                    "plural": false,
                    "selections": (v3/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AdministrativeArea",
                    "kind": "LinkedField",
                    "name": "city",
                    "plural": false,
                    "selections": (v3/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AdministrativeArea",
                    "kind": "LinkedField",
                    "name": "district",
                    "plural": false,
                    "selections": (v3/*: any*/),
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "AdministrativeArea",
        "kind": "LinkedField",
        "name": "administrativeAreas",
        "plural": true,
        "selections": (v3/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0ae3b611ac66d61bfb04ad997c8eb657",
    "id": null,
    "metadata": {},
    "name": "EditStoreSearchScreenQuery",
    "operationKind": "query",
    "text": "query EditStoreSearchScreenQuery {\n  me {\n    id\n    store {\n      id\n      ...EditStoreScreen_store\n    }\n  }\n  administrativeAreas {\n    ...EditStoreScreen_provinces\n  }\n}\n\nfragment EditStoreScreen_provinces on AdministrativeArea {\n  administrativeAreaId\n  name\n}\n\nfragment EditStoreScreen_store on Store {\n  id\n  name\n  whatsappNumber\n  profilePicture {\n    id\n    url\n  }\n  banner {\n    id\n    url\n  }\n  address {\n    fullAddress\n    province {\n      administrativeAreaId\n      name\n    }\n    city {\n      administrativeAreaId\n      name\n    }\n    district {\n      administrativeAreaId\n      name\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '35703adfe12d07dc04347a2ee50efce0';

module.exports = node;
