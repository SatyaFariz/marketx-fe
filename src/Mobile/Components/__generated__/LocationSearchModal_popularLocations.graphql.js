/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type LocationSearchModal_popularLocations$ref: FragmentReference;
declare export opaque type LocationSearchModal_popularLocations$fragmentType: LocationSearchModal_popularLocations$ref;
export type LocationSearchModal_popularLocations = $ReadOnlyArray<{|
  +administrativeAreaId: ?number,
  +name: ?string,
  +ancestors: ?$ReadOnlyArray<?{|
    +administrativeAreaId: ?number,
    +name: ?string,
  |}>,
  +$refType: LocationSearchModal_popularLocations$ref,
|}>;
export type LocationSearchModal_popularLocations$data = LocationSearchModal_popularLocations;
export type LocationSearchModal_popularLocations$key = $ReadOnlyArray<{
  +$data?: LocationSearchModal_popularLocations$data,
  +$fragmentRefs: LocationSearchModal_popularLocations$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "administrativeAreaId",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "LocationSearchModal_popularLocations",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "AdministrativeArea",
      "kind": "LinkedField",
      "name": "ancestors",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "AdministrativeArea",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '6b3532d3d6add3a8f6d2a67eca9ddfca';

module.exports = node;
