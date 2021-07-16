import { $themeConfig } from '@/themeConfig'

export default {
  namespaced: true,
  state: {
    isVerticalMenuCollapsed: $themeConfig.layout.menu.isCollapsed,
  },
  getters: {},
  mutations: {
    updateVerticalMenuCollapsed(state, val) {
      state.isVerticalMenuCollapsed = val
    },
  },
  actions: {},
}
