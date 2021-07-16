import { Example } from '@/domains/Example'
import { $axios } from '@/utils/api'
import fetchListStub from './fetchListStub'

interface ExampleState {
  list: Example[]
}

export default {
  namespaced: true,
  state: {
    list: [],
  } as ExampleState,
  getters: {
    getList: (state: ExampleState): Example[] => {
      return state.list
    },
  },
  mutations: {
    setList: (state: ExampleState, list: Example[]): void => {
      state.list = list
    },
    addExample: (state: ExampleState, example: Example): void => {
      state.list.push(example)
    },
  },
  actions: {
    fetchList({ commit }: any): void {
      // call api endpoint here instead of commiting stub data
      commit('setList', fetchListStub)
    },
    async create({ commit }: any, example: Example): Promise<void> {
      await $axios.$post('/example', example)

      commit('addExample', example)
    },
  },
}
