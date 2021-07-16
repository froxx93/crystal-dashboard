<template>
  <div
    class="main-menu menu-fixed menu-accordion menu-shadow"
    :class="[
      {
        expanded:
          !isVerticalMenuCollapsed ||
          (isVerticalMenuCollapsed && isMouseHovered),
      },
      skin === 'semi-dark' ? 'menu-dark' : 'menu-light',
    ]"
    @mouseenter="updateMouseHovered(true)"
    @mouseleave="updateMouseHovered(false)"
  >
    <!-- main menu header-->
    <div class="navbar-header expanded">
      <slot
        name="header"
        :toggleVerticalMenuActive="toggleVerticalMenuActive"
        :toggleCollapsed="toggleCollapsed"
        :collapseTogglerIcon="collapseTogglerIcon"
      >
        <ul class="nav navbar-nav flex-row">
          <!-- Logo & Text -->
          <li class="nav-item mr-auto">
            <b-link class="navbar-brand" to="/">
              <span class="brand-logo">
                <b-img :src="appLogoImage" alt="logo" />
              </span>
            </b-link>
          </li>

          <!-- Toggler Button -->
          <li class="nav-item nav-toggle">
            <b-link class="nav-link modern-nav-toggle">
              <feather-icon
                icon="XIcon"
                size="20"
                class="d-block d-xl-none"
                @click="toggleVerticalMenuActive"
              />
              <feather-icon
                :icon="collapseTogglerIconFeather"
                size="20"
                class="d-none d-xl-block collapse-toggle-icon"
                @click="toggleCollapsed"
              />
            </b-link>
          </li>
        </ul>
      </slot>
    </div>
    <!-- / main menu header-->

    <!-- Shadow -->
    <div :class="{ 'd-block': shallShadowBottom }" class="shadow-bottom" />

    <!-- main menu content-->
    <VuePerfectScrollbar
      :settings="perfectScrollbarSettings"
      class="main-menu-content scroll-area"
      tagname="ul"
      @ps-scroll-y="
        (evt) => {
          shallShadowBottom = evt.srcElement.scrollTop > 0
        }
      "
    >
      <VerticalNavMenuItems
        :items="navMenuItems"
        class="navigation navigation-main"
      />
    </VuePerfectScrollbar>
    <!-- /main menu content-->
  </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { BLink, BImg } from 'bootstrap-vue'
import { $themeConfig } from '@/themeConfig'
import VerticalNavMenuItems from './vertical-nav-menu-items/VerticalNavMenuItems.vue'

export default {
  components: {
    VuePerfectScrollbar,
    VerticalNavMenuItems,
    BLink,
    BImg,
  },
  props: {
    isVerticalMenuActive: {
      type: Boolean,
      required: true,
    },
    toggleVerticalMenuActive: {
      type: Function,
      required: true,
    },
  },
  data() {
    const { appName, appLogoImage } = $themeConfig.app

    const perfectScrollbarSettings = {
      maxScrollbarLength: 60,
      wheelPropagation: false,
    }

    const navMenuItems = [
      {
        title: 'Dashboard',
        route: 'index',
        icon: 'ActivityIcon',
      },
      {
        title: 'Group',
        icon: 'BookOpenIcon',
        children: [
          {
            title: 'Create',
            route: 'create',
            icon: 'FilePlusIcon',
          },
          {
            title: 'List',
            route: 'list',
            icon: 'ListIcon',
          },
          {
            title: 'Details',
            route: 'details',
            icon: 'SearchIcon',
          },
        ],
      },
    ]

    return {
      isVerticalMenuCollapsed:
        this.$store.state['vertical-menu'].isVerticalMenuCollapsed,
      isMouseHovered: false,
      shallShadowBottom: false,

      // App Name
      appName,
      appLogoImage,

      perfectScrollbarSettings,
      navMenuItems,
    }
  },
  computed: {
    collapseTogglerIcon() {
      if (this.$props.isVerticalMenuActive) {
        return this.isVerticalMenuCollapsed ? 'unpinned' : 'pinned'
      }
      return 'close'
    },
    collapseTogglerIconFeather() {
      return this.collapseTogglerIcon === 'unpinned' ? 'CircleIcon' : 'DiscIcon'
    },
    skin() {
      return this.$store.state['app-config'].layout.skin
    },
  },
  watch: {
    isVerticalMenuCollapsed(val) {
      this.$store.commit('verticalMenu/updateVerticalMenuCollapsed', val)
    },
  },
  methods: {
    toggleCollapsed() {
      this.isVerticalMenuCollapsed = !this.isVerticalMenuCollapsed
    },
    updateMouseHovered(val) {
      this.isMouseHovered = val
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/base/core/menu/menu-types/vertical-menu.scss';
</style>
