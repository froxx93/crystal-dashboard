import Location from './Location'

export type MapType = 'region' | 'area' | 'house'

export default interface Map {
  id: string
  name: string
  type: MapType // may not be needed
  width: number // in tiles
  height: number // in tiles
  fileName: string
  parentLocation?: Location
}
