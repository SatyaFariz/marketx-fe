/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeletePostMutationVariables = {|
  id: string
|};
export type DeletePostMutationResponse = {|
  +deletePost: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |},
    +post: ?{|
      +id: ?string,
      +isDeleted: ?boolean,
    |},
  |}
|};
export type DeletePostMutation = {|
  variables: DeletePostMutationVariables,
  response: DeletePostMutationResponse,
|};
*/


/*
mutation DeletePostMutation(
  $id: String!
) {
  deletePost(id: $id) {
    actionInfo {
      hasError
      message
    }
    post {
      id
      isDeleted
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
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "ActionOnPostPayload",
    "kind": "LinkedField",
    "name": "deletePost",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ActionInfo",
        "kind": "LinkedField",
        "name": "actionInfo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "hasError",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "message",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "post",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isDeleted",
            "storageKey": null
          }
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
    "name": "DeletePostMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeletePostMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ff6fc573b785c5de792ce960683932e4",
    "id": null,
    "metadata": {},
    "name": "DeletePostMutation",
    "operationKind": "mutation",
    "text": "mutation DeletePostMutation(\n  $id: String!\n) {\n  deletePost(id: $id) {\n    actionInfo {\n      hasError\n      message\n    }\n    post {\n      id\n      isDeleted\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b356abf881f9d554f0417e5cc8819d28';

module.exports = node;
