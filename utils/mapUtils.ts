import Map from '~/domains/Map'

export const getFilePath = (map: Map): string => {
  return require(`@/assets/images/maps/${map.fileName}`)
}
