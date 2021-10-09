import TrainerType from './TrainerType'
import Pokemon from './Pokemon'
import Location from './Location'

export default interface Trainer {
  id: string
  type: TrainerType
  name: string
  location: Location
  pokemon: Pokemon[]
}
