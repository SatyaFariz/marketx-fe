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
  +createPost: ?string
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
  createPost(title: $title, content: $content, isPublished: $isPublished, type: $type)
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
    "kind": "ScalarField",
    "name": "createPost",
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
    "cacheID": "20e7ac67265ef4f7687e00b6f634a7bf",
    "id": null,
    "metadata": {},
    "name": "CreatePostMutation",
    "operationKind": "mutation",
    "text": "mutation CreatePostMutation(\n  $title: String!\n  $content: String!\n  $isPublished: Boolean!\n  $type: String!\n) {\n  createPost(title: $title, content: $content, isPublished: $isPublished, type: $type)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f85dc71637136df29a30347e304e5a8a';

module.exports = node;
