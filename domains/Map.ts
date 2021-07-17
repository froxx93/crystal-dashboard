import Location from './Location'

export type MapType = 'world' | 'route' | 'house'

export default interface Map {
  id: string
  name: string
  type: MapType // may not be needed
  width: number // in tiles
  height: number // in tiles
  fileName: string
  parentLocation?: Location
}
