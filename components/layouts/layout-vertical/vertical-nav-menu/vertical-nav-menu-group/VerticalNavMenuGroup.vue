<template>
  <li
    v-if="canViewVerticalNavMenuGroup(item)"
    class="nav-item has-sub"
    :class="{
      open: isOpen,
      disabled: item.disabled,
      'sidebar-group-active': isActive,
    }"
  >
    <b-link
      class="d-flex align-items-center"
      @click="() => updateGroupOpen(!isOpen)"
    >
      <feather-icon :icon="item.icon || 'CircleIcon'" />
      <span class="menu-title text-truncate">{{ t(item.title) }}</span>
      <b-badge
        v-if="item.tag"
        pill
        :variant="item.tagVariant || 'primary'"
        class="mr-1 ml-auto"
      >
        {{ item.tag }}
      </b-badge>
    </b-link>
    <b-collapse v-model="isOpen" class="menu-content" tag="ul">
      <component
        :is="resolveNavItemComponent(child)"
        v-for="child in item.children"
        :key="child.header || child.title"
        ref="groupChild"
        :item="child"
      />
    </b-collapse>
  </li>
</template>

<script>
import { BLink, BBadge, BCollapse } from 'bootstrap-vue'
import {
  resolveVerticalNavMenuItemComponent as resolveNavItemComponent,
  isNavGroupActive,
} from '@/components/layouts/utils'
import { useUtils as useI18nUtils } from '@/utils/i18n'
import { useUtils as useAclUtils } from '@/utils/acl'
import VerticalNavMenuHeader from '../vertical-nav-menu-header'
import VerticalNavMenuLink from '../vertical-nav-menu-link/VerticalNavMenuLink.vue'

// Composition Function
import mixinVerticalNavMenuGroup from './mixinVerticalNavMenuGroup'

export default {
  name: 'VerticalNavMenuGroup',
  components: {
    VerticalNavMenuHeader,
    VerticalNavMenuLink,
    BLink,
    BBadge,
    BCollapse,
  },
  mixins: [mixinVerticalNavMenuGroup],
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    const { t } = useI18nUtils()
    const { canViewVerticalNavMenuGroup } = useAclUtils()

    return {
      isOpen: isNavGroupActive(this.$props.item.children, this.$router),
      isActive: false,
      t,
      canViewVerticalNavMenuGroup,
    }
  },
  methods: {
    updateGroupOpen(val) {
      this.isOpen = val
    },
    updateIsActive() {
      this.isActive = isNavGroupActive(this.$props.item.children, this.$router)
    },
    resolveNavItemComponent(child) {
      return resolveNavItemComponent(child, this.$router)
    },
  },
}
</script>

<style></style>
