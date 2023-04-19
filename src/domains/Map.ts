import type Location from "./Location";

export type MapType = "region" | "area" | "house";

export default interface Map {
  id: string;
  name: string;
  type: MapType; // may not be needed
  width: number; // in tiles
  height: number; // in tiles
  fileName: string;
  parentLocation?: Location;
}

export const getDeepestParent = (map: Map): Map => {
  if (map.parentLocation) {
    return getDeepestParent(map.parentLocation.map);
  } else {
    // If no parentLocation is defined, type should be region
    return map;
  }
};
