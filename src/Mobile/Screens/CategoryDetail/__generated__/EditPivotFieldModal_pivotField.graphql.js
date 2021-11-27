/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EditPivotFieldModal_pivotField$ref: FragmentReference;
declare export opaque type EditPivotFieldModal_pivotField$fragmentType: EditPivotFieldModal_pivotField$ref;
export type EditPivotFieldModal_pivotField = {|
  +id: ?string,
  +emptyErrorMessage: ?string,
  +helperText: ?string,
  +attribute: ?{|
    +id: ?string,
    +name: ?string,
  |},
  +options: ?$ReadOnlyArray<?{|
    +id: ?string,
    +label: ?string,
    +desc: ?string,
    +isDefault: ?boolean,
  |}>,
  +$refType: EditPivotFieldModal_pivotField$ref,
|};
export type EditPivotFieldModal_pivotField$data = EditPivotFieldModal_pivotField;
export type EditPivotFieldModal_pivotField$key = {
  +$data?: EditPivotFieldModal_pivotField$data,
  +$fragmentRefs: EditPivotFieldModal_pivotField$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EditPivotFieldModal_pivotField",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "emptyErrorMessage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "helperText",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Attribute",
      "kind": "LinkedField",
      "name": "attribute",
      "plural": false,
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
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "PivotFieldOption",
      "kind": "LinkedField",
      "name": "options",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "label",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "desc",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isDefault",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "PivotField",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '5cb8521c08b6685e28b64474a6e42f24';

module.exports = node;
