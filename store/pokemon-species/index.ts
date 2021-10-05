import PokemonSpecies from '~/domains/PokemonSpecies'
import { $axios } from '~/utils/api'

const capitalize = (s: string) => {
  return s[0].toUpperCase() + s.slice(1)
}

interface PokemonSpeciesState {
  list: PokemonSpecies[]
}

export default {
  namespaced: true,
  state: {
    list: [],
  } as PokemonSpeciesState,
  getters: {},
  mutations: {
    setList: (state: PokemonSpeciesState, list: PokemonSpecies[]): void => {
      state.list = list
    },
  },
  actions: {
    async fetchList({ commit }: any): Promise<void> {
      const min = 1
      const max = 251
      const ps: Promise<any>[] = []
      const pokemonSpecies: PokemonSpecies[] = []
      for (let index = min; index <= max; index++) {
        // get data for single pokemonSpecies
        const { name, types: typesTemp } = await $axios.$get(
          `/pokemon/${index}`
        )

        const actualTypeStrings: string[] = typesTemp
          .map((type: any) => type.type.name)
          .map((typeName: string) => `types.${typeName.toUpperCase()}`)

        pokemonSpecies.push({
          id: name,
          name: capitalize(name),
          types: actualTypeStrings as any,
          evolvesTo: [],
        })
      }
      await Promise.all(ps)

      commit('setList', pokemonSpecies)
    },
  },
}
