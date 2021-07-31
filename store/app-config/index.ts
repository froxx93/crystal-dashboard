import { $themeConfig } from '@/themeConfig'

type Language = 'en' | 'de'

interface AppConfigState {
  gameName: string
  appLanguage: Language
  layout: any
}

export default {
  namespaced: true,
  state: {
    gameName: 'crystal',
    appLanguage: 'en',
    layout: {
      isRTL: $themeConfig.layout.isRTL,
      skin: localStorage.getItem('theme-skin') || $themeConfig.layout.skin,
      routerTransition: $themeConfig.layout.routerTransition,
      type: $themeConfig.layout.type,
      contentWidth: $themeConfig.layout.contentWidth,
      menu: {
        hidden: $themeConfig.layout.menu.hidden,
      },
      navbar: {
        type: $themeConfig.layout.navbar.type,
        backgroundColor: $themeConfig.layout.navbar.backgroundColor,
      },
      footer: {
        type: $themeConfig.layout.footer.type,
      },
    },
  } as AppConfigState,
  getters: {},
  mutations: {
    toggleRtl(state: AppConfigState) {
      state.layout.isRTL = !state.layout.isRTL
      document.documentElement.setAttribute(
        'dir',
        state.layout.isRTL ? 'rtl' : 'ltr'
      )
    },
    updateSkin(state: AppConfigState, skin: string) {
      state.layout.skin = skin

      // Update value in localStorage
      localStorage.setItem('theme-skin', skin)

      // Update DOM for dark-layout
      if (skin === 'dark') document.body.classList.add('dark-layout')
      else if (document.body.className.match('dark-layout'))
        document.body.classList.remove('dark-layout')
    },
    updateRouterTransition(state: AppConfigState, val: string) {
      state.layout.routerTransition = val
    },
    updateLayoutType(state: AppConfigState, val: string) {
      state.layout.type = val
    },
    updateContentWidth(state: AppConfigState, val: string) {
      state.layout.contentWidth = val
    },
    updateNavMenuHidden(state: AppConfigState, val: boolean) {
      state.layout.menu.hidden = val
    },
    updateNavbarConfig(state: AppConfigState, obj: any) {
      Object.assign(state.layout.navbar, obj)
    },
    updateFooterConfig(state: AppConfigState, obj: any) {
      Object.assign(state.layout.footer, obj)
    },
  },
  actions: {},
}
