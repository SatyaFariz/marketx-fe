/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PublishPostMutationVariables = {|
  id: string,
  content: string,
|};
export type PublishPostMutationResponse = {|
  +publishPost: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |},
    +post: ?{|
      +id: ?string,
      +content: ?string,
    |},
  |}
|};
export type PublishPostMutation = {|
  variables: PublishPostMutationVariables,
  response: PublishPostMutationResponse,
|};
*/


/*
mutation PublishPostMutation(
  $id: String!
  $content: String!
) {
  publishPost(id: $id, content: $content) {
    actionInfo {
      hasError
      message
    }
    post {
      id
      content
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "content"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "content",
        "variableName": "content"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "ActionOnPostPayload",
    "kind": "LinkedField",
    "name": "publishPost",
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
            "name": "content",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PublishPostMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "PublishPostMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "bb339f01297ad3216d4ea84aa7ea8c2e",
    "id": null,
    "metadata": {},
    "name": "PublishPostMutation",
    "operationKind": "mutation",
    "text": "mutation PublishPostMutation(\n  $id: String!\n  $content: String!\n) {\n  publishPost(id: $id, content: $content) {\n    actionInfo {\n      hasError\n      message\n    }\n    post {\n      id\n      content\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b52b94e22d7bf6abeafb407e60cd5bb4';

module.exports = node;
