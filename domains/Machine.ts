import { Move } from './Move'
import { ItemSource } from './ItemSource'

export interface Machine {
  id: string
  name: string
  move: Move
  itemSources: ItemSource[]
}
