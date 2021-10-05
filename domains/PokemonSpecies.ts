import Type from './Type'

export default interface PokemonSpecies {
  id: string
  name: string
  types: Type[]
  evolvesTo: PokemonSpecies[] // only next stage (e.g. [Slowbro, Slowking])
}
