<template>
  <div
    class="vertical-layout h-100"
    :class="[layoutClasses]"
    :data-col="isNavMenuHidden ? '1-column' : null"
  >
    <!-- <BNavbar
      :toggleable="false"
      :variant="navbarBackgroundColor"
      class="header-navbar navbar navbar-shadow align-items-center"
      :class="[navbarTypeClass]"
    >
      <div class="navbar-container d-flex content align-items-center">
        <BNavbarNav class="nav align-items-center ml-auto">
          <UserDropdown />
        </BNavbarNav>
      </div>
    </BNavbar> -->

    <VerticalNavMenu
      v-if="!isNavMenuHidden"
      :is-vertical-menu-active="isVerticalMenuActive"
      :toggle-vertical-menu-active="toggleVerticalMenuActive"
    >
      <template #header="slotProps">
        <slot name="vertical-menu-header" v-bind="slotProps" />
      </template>
    </VerticalNavMenu>

    <div class="app-content content">
      <div class="content-wrapper">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import UserDropdown from '@/components/app-navbar/components/UserDropdown.vue'
import VerticalNavMenu from '@/components/layouts/layout-vertical/vertical-nav-menu/VerticalNavMenu.vue'
import Vue from 'vue'
import * as ls from 'local-storage'
import { $themeConfig } from '~/themeConfig'

export default Vue.extend({
  // eslint-disable-next-line vue/component-definition-name-casing
  name: 'default',
  components: {
    // UserDropdown,
    VerticalNavMenu,
  },
  data() {
    return {
      currentBreakpoint: 'xl',
      isVerticalMenuActive: true,
    }
  },
  computed: {
    isVerticalMenuCollapsed(): boolean {
      return this.$store.state['vertical-menu'].isVerticalMenuCollapsed
    },
    navbarType(): string {
      return this.$store.state['app-config'].layout.navbar.type
    },
    isNavMenuHidden(): boolean {
      return this.$store.state['app-config'].layout.menu.hidden
    },
    navbarBackgroundColor(): string {
      return this.$store.state['app-config'].layout.navbar.backgroundColor
    },
    layoutClasses(): string[] {
      const classes = []

      if (this.currentBreakpoint === 'xl') {
        classes.push('vertical-menu-modern')
        classes.push(
          this.isVerticalMenuCollapsed ? 'menu-collapsed' : 'menu-expanded'
        )
      } else {
        classes.push('vertical-overlay-menu')
        classes.push(this.isVerticalMenuActive ? 'menu-open' : 'menu-hide')
      }

      // Navbar
      classes.push(`navbar-${this.navbarType}`)

      return classes
    },
    navbarTypeClass(): string {
      if (this.navbarType === 'sticky') return 'fixed-top'
      if (this.navbarType === 'static') return 'navbar-static-top'
      if (this.navbarType === 'hidden') return 'd-none'
      return 'floating-nav'
    },
  },
  watch: {
    currentBreakpoint(val: string): void {
      this.isVerticalMenuActive = val === 'xl'
    },
  },
  created() {
    if (ls.get('version') !== $themeConfig.version) {
      ls.clear()
    }
    ls.set('version', $themeConfig.version)
  },
  methods: {
    toggleVerticalMenuActive(): void {
      this.isVerticalMenuActive = !this.isVerticalMenuActive
    },
  },
})
</script>

<style lang="scss">
@import '@/assets/scss/base/themes/bordered-layout.scss';

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html .content.app-content {
  padding-top: 2rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
