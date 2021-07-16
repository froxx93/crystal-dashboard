<template>
  <div
    class="vertical-layout h-100"
    :class="[layoutClasses]"
    :data-col="isNavMenuHidden ? '1-column' : null"
  >
    <!-- Navbar -->
    <b-navbar
      :toggleable="false"
      :variant="navbarBackgroundColor"
      class="header-navbar navbar navbar-shadow align-items-center"
      :class="[navbarTypeClass]"
    >
      <slot
        name="navbar"
        :toggleVerticalMenuActive="toggleVerticalMenuActive"
        :navbarBackgroundColor="navbarBackgroundColor"
        :navbarTypeClass="[
          ...navbarTypeClass,
          'header-navbar navbar navbar-shadow align-items-center',
        ]"
      >
        <app-navbar-vertical-layout
          :toggle-vertical-menu-active="toggleVerticalMenuActive"
        />
      </slot>
    </b-navbar>
    <!--/ Navbar -->

    <!-- Vertical Nav Menu -->
    <vertical-nav-menu
      v-if="!isNavMenuHidden"
      :is-vertical-menu-active="isVerticalMenuActive"
      :toggle-vertical-menu-active="toggleVerticalMenuActive"
    >
      <template #header="slotProps">
        <slot name="vertical-menu-header" v-bind="slotProps" />
      </template>
    </vertical-nav-menu>
    <!-- /Vertical Nav Menu -->

    <!-- Vertical Nav Menu Overlay -->
    <div
      class="sidenav-overlay"
      :class="overlayClasses"
      @click="isVerticalMenuActive = false"
    />
    <!-- /Vertical Nav Menu Overlay -->

    <!-- Content -->

    <!-- CONTENT TYPE: Left -->
    <transition :name="routerTransition" mode="out-in">
      <component
        :is="layoutContentRenderer"
        :key="
          layoutContentRenderer === 'layout-content-renderer-left'
            ? $route.meta.navActiveLink || $route.name
            : null
        "
      >
        <template v-for="(index, name) in $scopedSlots" #[name]="data">
          <slot :name="name" v-bind="data" />
        </template>
      </component>
    </transition>
    <!--/ Content -->

    <!-- Footer -->
    <footer class="footer footer-light" :class="[footerTypeClass]">
      <slot name="footer">
        <app-footer />
      </slot>
    </footer>
    <!-- /Footer -->

    <slot name="customizer" />
  </div>
</template>

<script>
import { onUnmounted } from '@vue/composition-api'
import AppNavbarVerticalLayout from '@/components/app-navbar/AppNavbarVerticalLayout.vue'
import AppFooter from '@/components/AppFooter.vue'
import { BNavbar } from 'bootstrap-vue'
import LayoutContentRendererDefault from '@/components/layout-content-renderer/LayoutContentRendererDefault.vue'
import LayoutContentRendererLeft from '@/components/layout-content-renderer/LayoutContentRendererLeft.vue'
import LayoutContentRendererLeftDetached from '@/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue'
import VerticalNavMenu from './vertical-nav-menu/VerticalNavMenu.vue'
import mixinVerticalLayout from './mixinVerticalLayout'

export default {
  components: {
    // AppBreadcrumb,
    AppNavbarVerticalLayout,
    AppFooter,
    VerticalNavMenu,
    BNavbar,
    LayoutContentRendererLeftDetached,
    LayoutContentRendererLeft,
    LayoutContentRendererDefault,
  },
  mixins: [mixinVerticalLayout],
  data() {
    return {
      currentBreakpoint: 'xl',
      isVerticalMenuActive: true,
    }
  },
  computed: {
    layoutContentRenderer() {
      const rendererType = this.$route.meta.contentRenderer
      if (rendererType === 'sidebar-left') return 'layout-content-renderer-left'
      if (rendererType === 'sidebar-left-detached')
        return 'layout-content-renderer-left-detached'
      return 'layout-content-renderer-default'
    },
    isVerticalMenuCollapsed() {
      return this.$store.state['vertical-menu'].isVerticalMenuCollapsed
    },
    routerTransition() {
      return this.$store.state['app-config'].layout.routerTransition
    },
    navbarBackgroundColor() {
      return this.$store.state['app-config'].layout.navbar.backgroundColor
    },
    navbarType() {
      return this.$store.state['app-config'].layout.navbar.type
    },
    footerType() {
      return this.$store.state['app-config'].layout.footer.type
    },
    isNavMenuHidden() {
      return this.$store.state['app-config'].layout.menu.hidden
    },
    layoutClasses() {
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
      classes.push(`navbar-${this.navbarType.value}`)

      // Footer
      if (this.footerType.value === 'sticky') classes.push('footer-fixed')
      if (this.footerType.value === 'static') classes.push('footer-static')
      if (this.footerType.value === 'hidden') classes.push('footer-hidden')

      return classes
    },
    overlayClasses() {
      if (this.currentBreakpoint !== 'xl' && this.isVerticalMenuActive)
        return 'show'
      return null
    },
    navbarTypeClass() {
      if (this.navbarType.value === 'sticky') return 'fixed-top'
      if (this.navbarType.value === 'static') return 'navbar-static-top'
      if (this.navbarType.value === 'hidden') return 'd-none'
      return 'floating-nav'
    },
    footerTypeClass() {
      if (this.footerType.value === 'static') return 'footer-static'
      if (this.footerType.value === 'hidden') return 'd-none'
      return ''
    },
  },
  watch: {
    currentBreakpoint(val) {
      this.isVerticalMenuActive = val === 'xl'
    },
  },
  mounted() {
    // Resize handler
    this.resizeHandler()
    window.addEventListener('resize', this.resizeHandler)
    onUnmounted(() => {
      window.removeEventListener('resize', this.resizeHandler)
    })
  },
  methods: {
    toggleVerticalMenuActive() {
      this.isVerticalMenuActive = !this.isVerticalMenuActive
    },
    resizeHandler() {
      // ? This closes vertical menu when title bar is shown/hidden in mobile browsers.
      // ? We will watch for breakpoint to overcome this issue
      // isVerticalMenuActive.value = window.innerWidth >= 1200

      // ! You can use store getter to get breakpoint
      if (window.innerWidth >= 1200) this.currentBreakpoint = 'xl'
      else if (window.innerWidth >= 992) this.currentBreakpoint = 'lg'
      else if (window.innerWidth >= 768) this.currentBreakpoint = 'md'
      else if (window.innerWidth >= 576) this.currentBreakpoint = 'sm'
      else this.currentBreakpoint = 'xs'
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/base/themes/bordered-layout.scss';
</style>
