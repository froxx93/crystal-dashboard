import { Machine } from '@/domains/Machine'
import { $axios } from '@/utils/api'

interface ExampleState {
  list: Machine[]
}

export default {
  namespaced: true,
  state: {
    list: [],
  } as ExampleState,
  getters: {
    getList: (state: ExampleState): Machine[] => {
      return state.list
    },
  },
  mutations: {
    setList: (state: ExampleState, list: Machine[]): void => {
      state.list = list
    },
    addExample: (state: ExampleState, example: Machine): void => {
      state.list.push(example)
    },
  },
  actions: {
    async fetchList({ commit, rootState }: any): Promise<void> {
      const { gameName, appLanguage } = rootState['app-config']
      const machines: Machine[] = []

      // get list of all machines
      const { results } = await $axios.$get('/machine')
      await Promise.all(
        results.map(async ({ url }: { url: string }): Promise<void> => {
          // get data for all machines
          const {
            item,
            move: { url: moveUrl },
            version_group: { name: vgName },
          } = await $axios.$get(url)
          if (vgName === gameName) {
            // get item data for machine of regarding game
            const machine = await $axios.$get(item.url)
            const { name: id, names: machineNames } = machine
            const { name: machineName } = machineNames.find(
              ({
                language: { name: lang },
              }: {
                language: { name: string }
              }) => {
                return lang === appLanguage
              }
            )

            // get move data for machine
            const { names: moveNames } = await $axios.$get(moveUrl)
            const { name: moveName } = moveNames.find(
              ({
                language: { name: lang },
              }: {
                language: { name: string }
              }) => {
                return lang === appLanguage
              }
            )

            machines.push({
              id,
              name: machineName,
              move: {
                name: moveName,
              },
            })
          }
        })
      )

      commit('setList', machines)
    },
  },
}
