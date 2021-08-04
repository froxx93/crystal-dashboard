import Location from './Location'

export type ItemSourceType =
  | 'field-item'
  | 'hidden-item'
  | 'npc'
  | 'gym-leader'
  | 'game-corner'
  | 'other'

export interface ItemSource {
  type: ItemSourceType
  location: Location // TODO: Allow multiple locations
  conditions?: string[] // TODO: Make conditions to enum
}
