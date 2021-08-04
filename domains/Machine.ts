import { Move } from './Move'
import { ItemSource } from './ItemSource'

export type MachineType = 'tm' | 'hm'

export interface Machine {
  id: string
  type: MachineType
  name: string
  move: Move
  itemSources: ItemSource[]
}
