import Map from '~/domains/Map'

export const getDeepestParent = (map: Map): Map => {
  if (map.parentLocation) {
    return getDeepestParent(map.parentLocation.map)
  } else {
    // If no parentLocation is defined, type should be region
    return map
  }
}
