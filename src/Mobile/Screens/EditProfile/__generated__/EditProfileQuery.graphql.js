/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EditProfileScreen_me$ref = any;
export type EditProfileQueryVariables = {||};
export type EditProfileQueryResponse = {|
  +me: ?{|
    +id: ?string,
    +$fragmentRefs: EditProfileScreen_me$ref,
  |}
|};
export type EditProfileQuery = {|
  variables: EditProfileQueryVariables,
  response: EditProfileQueryResponse,
|};
*/


/*
query EditProfileQuery {
  me {
    id
    ...EditProfileScreen_me
  }
}

fragment EditProfileScreen_me on User {
  id
  name
  email
  profilePicture {
    url
    id
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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "EditProfileQuery",
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
            "name": "EditProfileScreen_me"
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
    "name": "EditProfileQuery",
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
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Image",
            "kind": "LinkedField",
            "name": "profilePicture",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "url",
                "storageKey": null
              },
              (v0/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8e134120b139609f1d538b7148d67041",
    "id": null,
    "metadata": {},
    "name": "EditProfileQuery",
    "operationKind": "query",
    "text": "query EditProfileQuery {\n  me {\n    id\n    ...EditProfileScreen_me\n  }\n}\n\nfragment EditProfileScreen_me on User {\n  id\n  name\n  email\n  profilePicture {\n    url\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '59b66f7fe2cdb93c1d8819745b4b1bbd';

module.exports = node;
