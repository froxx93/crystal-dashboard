<template>
  <b-nav-item @click="skin = isDark ? 'light' : 'dark'">
    <feather-icon size="21" :icon="`${isDark ? 'Sun' : 'Moon'}Icon`" />
  </b-nav-item>
</template>

<script>
import useAppConfig from '@/utils/app-config/useAppConfig'
import { computed } from '@vue/composition-api'
import { BNavItem } from 'bootstrap-vue'

export default {
  components: {
    BNavItem,
  },
  setup() {
    const { skin } = useAppConfig(this.$store)

    const isDark = computed(() => skin.value === 'dark')

    return { skin, isDark }
  },
}
</script>
