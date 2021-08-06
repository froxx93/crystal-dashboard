import Pokemon from '~/domains/Pokemon'
import { $axios } from '~/utils/api'

const capitalize = (s: string) => {
  return s[0].toUpperCase() + s.slice(1)
}

interface PokemonState {
  list: Pokemon[]
}

export default {
  namespaced: true,
  state: {
    list: [],
  } as PokemonState,
  getters: {},
  mutations: {
    setList: (state: PokemonState, list: Pokemon[]): void => {
      state.list = list
    },
  },
  actions: {
    async fetchList({ commit }: any): Promise<void> {
      const min = 1
      const max = 251
      const ps: Promise<any>[] = []
      const pokemon: Pokemon[] = []
      for (let index = min; index <= max; index++) {
        // get data for single pokemon
        const { name, types: typesTemp } = await $axios.$get(
          `/pokemon/${index}`
        )

        const actualTypeStrings: string[] = typesTemp
          .map((type: any) => type.type.name)
          .map((typeName: string) => `types.${typeName.toUpperCase()}`)

        pokemon.push({
          id: name,
          name: capitalize(name),
          types: actualTypeStrings as any,
        })
      }
      await Promise.all(ps)

      commit('setList', pokemon)
    },
  },
}
