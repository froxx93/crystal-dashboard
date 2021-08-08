import Type from './Type'

export default interface Pokemon {
  id: string
  name: string
  types: Type[]
  evolvesTo: Pokemon[] // only next stage (e.g. [Slowbro, Slowking])
}
