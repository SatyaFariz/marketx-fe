/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PublishPostMutationVariables = {|
  id: string,
  title?: ?string,
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
      +title: ?string,
      +content: ?string,
      +isDeleted: ?boolean,
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
  $title: String
  $content: String!
) {
  publishPost(id: $id, title: $title, content: $content) {
    actionInfo {
      hasError
      message
    }
    post {
      id
      title
      content
      isDeleted
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
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v3 = [
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
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
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
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "content",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PublishPostMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "PublishPostMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "7ef95c1af409567011fbb29f0238d1cd",
    "id": null,
    "metadata": {},
    "name": "PublishPostMutation",
    "operationKind": "mutation",
    "text": "mutation PublishPostMutation(\n  $id: String!\n  $title: String\n  $content: String!\n) {\n  publishPost(id: $id, title: $title, content: $content) {\n    actionInfo {\n      hasError\n      message\n    }\n    post {\n      id\n      title\n      content\n      isDeleted\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5961511011ffa3819732a665aa1ac681';

module.exports = node;
