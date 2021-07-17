import Location from './Location'

export type ItemSourceType = 'field-item' | 'hidden-item' | 'npc' | 'other'

export interface ItemSource {
  type: ItemSourceType
  location: Location
  conditions?: string[] // TODO: Make conditions to enum
}
