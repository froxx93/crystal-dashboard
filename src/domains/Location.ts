import type Map from "./Map";

export default interface Location {
  map: Map; // only use maps imported from './Maps' here
  x: number; // in tiles
  y: number; // in tiles
}
