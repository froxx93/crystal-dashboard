<template>
  <li
    v-if="canViewVerticalNavMenuLink(item)"
    class="nav-item"
    :class="{
      active: isActive,
      disabled: item.disabled,
    }"
  >
    <BLink v-bind="linkProps" class="d-flex align-items-center">
      <feather-icon :icon="item.icon || 'CircleIcon'" />
      <span class="menu-title text-truncate">{{ t(item.title) }}</span>
      <BBadge
        v-if="item.tag"
        pill
        :variant="item.tagVariant || 'primary'"
        class="mr-1 ml-auto"
      >
        {{ item.tag }}
      </BBadge>
    </BLink>
  </li>
</template>

<script>
import { useUtils as useAclUtils } from '@/utils/acl'
import { BLink, BBadge } from 'bootstrap-vue'
import { useUtils as useI18nUtils } from '@/utils/i18n'
import { isNavLinkActive, navLinkProps } from '@/components/layouts/utils'
import mixinVerticalNavMenuLink from './mixinVerticalNavMenuLink'

export default {
  components: {
    BLink,
    BBadge,
  },
  mixins: [mixinVerticalNavMenuLink],
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    const { t } = useI18nUtils()
    const { canViewVerticalNavMenuLink } = useAclUtils()

    return {
      isActive: false,
      t,
      canViewVerticalNavMenuLink,
    }
  },
  computed: {
    linkProps() {
      return navLinkProps(this.$props.item)()
    },
  },
  methods: {
    updateIsActive() {
      this.isActive = isNavLinkActive(this.$props.item, this.$router)
    },
  },
}
</script>
