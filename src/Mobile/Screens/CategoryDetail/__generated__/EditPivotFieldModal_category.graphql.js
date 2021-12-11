/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EditPivotFieldModal_category$ref: FragmentReference;
declare export opaque type EditPivotFieldModal_category$fragmentType: EditPivotFieldModal_category$ref;
export type EditPivotFieldModal_category = {|
  +id: ?string,
  +pivotField: ?{|
    +id: ?string,
    +emptyErrorMessage: ?string,
    +helperText: ?string,
    +showsInProductDetail: ?boolean,
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
  |},
  +$refType: EditPivotFieldModal_category$ref,
|};
export type EditPivotFieldModal_category$data = EditPivotFieldModal_category;
export type EditPivotFieldModal_category$key = {
  +$data?: EditPivotFieldModal_category$data,
  +$fragmentRefs: EditPivotFieldModal_category$ref,
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
  "name": "EditPivotFieldModal_category",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "PivotField",
      "kind": "LinkedField",
      "name": "pivotField",
      "plural": false,
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
          "kind": "ScalarField",
          "name": "showsInProductDetail",
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
      "storageKey": null
    }
  ],
  "type": "Category",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd54c703ea6e2ac89c7821626710ee414';

module.exports = node;
