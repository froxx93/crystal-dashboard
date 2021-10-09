import Map from './Map'

export default interface Location {
  map: Map // only use maps imported from './Maps' here
  // all numbers in amount of tiles
  x: number
  y: number
  width?: number
  height?: number
}
