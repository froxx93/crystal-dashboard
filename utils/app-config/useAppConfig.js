import { computed, watch } from '@vue/composition-api'

export default function useAppConfig(store) {
  // ------------------------------------------------
  // isVerticalMenuCollapsed
  // ------------------------------------------------
  const isVerticalMenuCollapsed = computed({
    get: () => store.state.verticalMenu.isVerticalMenuCollapsed,
    set: (val) => {
      store.commit('verticalMenu/updateVerticalMenuCollapsed', val)
    },
  })

  // ------------------------------------------------
  // RTL
  // ------------------------------------------------
  const isRTL = computed({
    get: () => store.state.appConfig.layout.isRTL,
    set: (val) => {
      store.commit('appConfig/toggleRtl', val)
    },
  })

  // ------------------------------------------------
  // Skin
  // ------------------------------------------------
  const skin = computed({
    get: () => store.state.appConfig.layout.skin,
    set: (val) => {
      store.commit('appConfig/updateSkin', val)
    },
  })

  const skinClasses = computed(() => {
    if (skin.value === 'bordered') return 'bordered-layout'
    if (skin.value === 'semi-dark') return 'semi-dark-layout'

    // Do not return any class for dark layout because dark layout updates class in body
    // Do not return any class for light layout as that is default layout
    return null
  })

  // ------------------------------------------------
  // routerTransition
  // ------------------------------------------------
  const routerTransition = computed({
    get: () => store.state.appConfig.layout.routerTransition,
    set: (val) => {
      store.commit('appConfig/updateRouterTransition', val)
    },
  })

  // *===============================================---*
  // *--------- LAYOUT ---------------------------------------*
  // *===============================================---*

  // ------------------------------------------------
  // layoutType
  // ------------------------------------------------

  const layoutType = computed({
    get: () => store.state.appConfig.layout.type,
    set: (val) => {
      store.commit('appConfig/updateLayoutType', val)
    },
  })

  // Reset skin if skin is semi-dark and move to horizontal layout
  watch(layoutType, (val) => {
    if (val === 'horizontal' && skin.value === 'semi-dark') skin.value = 'light'
  })

  // ------------------------------------------------
  // Content Width (Full/Boxed)
  // ------------------------------------------------
  const contentWidth = computed({
    get: () => store.state.appConfig.layout.contentWidth,
    set: (val) => {
      store.commit('appConfig/updateContentWidth', val)
    },
  })

  // ------------------------------------------------
  // isNavMenuHidden
  // ------------------------------------------------
  const isNavMenuHidden = computed({
    get: () => store.state.appConfig.layout.menu.hidden,
    set: (val) => {
      store.commit('appConfig/updateNavMenuHidden', val)
    },
  })

  // *===============================================---*
  // *--------- NAVBAR ---------------------------------------*
  // *===============================================---*

  const navbarBackgroundColor = computed({
    get: () => store.state.appConfig.layout.navbar.backgroundColor,
    set: (val) => {
      store.commit('appConfig/updateNavbarConfig', { backgroundColor: val })
    },
  })

  const navbarType = computed({
    get: () => store.state.appConfig.layout.navbar.type,
    set: (val) => {
      store.commit('appConfig/updateNavbarConfig', { type: val })
    },
  })

  // *===============================================---*
  // *--------- FOOTER ---------------------------------------*
  // *===============================================---*

  const footerType = computed({
    get: () => store.state.appConfig.layout.footer.type,
    set: (val) => {
      store.commit('appConfig/updateFooterConfig', { type: val })
    },
  })

  return {
    isVerticalMenuCollapsed,
    isRTL,
    skin,
    skinClasses,
    routerTransition,

    // Navbar
    navbarBackgroundColor,
    navbarType,

    // Footer
    footerType,

    // Layout
    layoutType,
    contentWidth,
    isNavMenuHidden,
  }
}
