/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AttributesListScreen_attributes$ref = any;
type FixedAddressBar_me$ref = any;
export type AttributesListScreenQueryVariables = {||};
export type AttributesListScreenQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +isAdmin: ?boolean,
    +$fragmentRefs: FixedAddressBar_me$ref,
  |},
  +attributes: ?$ReadOnlyArray<?{|
    +id: ?string,
    +$fragmentRefs: AttributesListScreen_attributes$ref,
  |}>,
|};
export type AttributesListScreenQuery = {|
  variables: AttributesListScreenQueryVariables,
  response: AttributesListScreenQueryResponse,
|};
*/


/*
query AttributesListScreenQuery {
  me {
    id
    isAdmin
    ...FixedAddressBar_me
  }
  attributes {
    id
    ...AttributesListScreen_attributes
  }
}

fragment AttributesListScreen_attributes on Attribute {
  id
  name
}

fragment FixedAddressBar_me on User {
  id
  isAdmin
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
  "name": "isAdmin",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AttributesListScreenQuery",
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
          (v1/*: any*/),
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
        "args": null,
        "concreteType": "Attribute",
        "kind": "LinkedField",
        "name": "attributes",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AttributesListScreen_attributes"
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
    "name": "AttributesListScreenQuery",
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
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Attribute",
        "kind": "LinkedField",
        "name": "attributes",
        "plural": true,
        "selections": [
          (v0/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "3941ddb26153bacb9fcbe78dc2d6c299",
    "id": null,
    "metadata": {},
    "name": "AttributesListScreenQuery",
    "operationKind": "query",
    "text": "query AttributesListScreenQuery {\n  me {\n    id\n    isAdmin\n    ...FixedAddressBar_me\n  }\n  attributes {\n    id\n    ...AttributesListScreen_attributes\n  }\n}\n\nfragment AttributesListScreen_attributes on Attribute {\n  id\n  name\n}\n\nfragment FixedAddressBar_me on User {\n  id\n  isAdmin\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7b748d56c3c80b506dd1d8e5399e131c';

module.exports = node;
