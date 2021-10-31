/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreatePostMutationVariables = {|
  title: string,
  content: string,
  isPublished: boolean,
  type: string,
|};
export type CreatePostMutationResponse = {|
  +createPost: ?{|
    +actionInfo: ?{|
      +hasError: ?boolean,
      +message: ?string,
    |},
    +post: ?{|
      +id: ?string,
      +type: ?string,
      +content: ?string,
    |},
  |}
|};
export type CreatePostMutation = {|
  variables: CreatePostMutationVariables,
  response: CreatePostMutationResponse,
|};
*/


/*
mutation CreatePostMutation(
  $title: String!
  $content: String!
  $isPublished: Boolean!
  $type: String!
) {
  createPost(title: $title, content: $content, isPublished: $isPublished, type: $type) {
    actionInfo {
      hasError
      message
    }
    post {
      id
      type
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
  "name": "isPublished"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "type"
},
v4 = [
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
        "name": "isPublished",
        "variableName": "isPublished"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      },
      {
        "kind": "Variable",
        "name": "type",
        "variableName": "type"
      }
    ],
    "concreteType": "ActionOnPostPayload",
    "kind": "LinkedField",
    "name": "createPost",
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
            "name": "type",
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
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreatePostMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreatePostMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "976b48e3ca46280d2f5636c89d0b3601",
    "id": null,
    "metadata": {},
    "name": "CreatePostMutation",
    "operationKind": "mutation",
    "text": "mutation CreatePostMutation(\n  $title: String!\n  $content: String!\n  $isPublished: Boolean!\n  $type: String!\n) {\n  createPost(title: $title, content: $content, isPublished: $isPublished, type: $type) {\n    actionInfo {\n      hasError\n      message\n    }\n    post {\n      id\n      type\n      content\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '58dfb33d2828d23910781a935f08b5e9';

module.exports = node;
