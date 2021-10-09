import Map, { MapType } from '~/domains/Map'

export const getMapParent = (map: Map, type: MapType = 'region'): Map => {
  if (map.type === type) {
    return map
  }

  if (map.parentLocation) {
    return getMapParent(map.parentLocation.map, type)
  } else {
    // If no parentLocation is defined, type should be region
    return map
  }
}
