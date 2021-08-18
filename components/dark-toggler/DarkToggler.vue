<template>
  <b-button
    size="sm"
    :variant="`${isDark ? 'light' : 'dark'}`"
    @click="updateSkin"
  >
    <feather-icon size="21" :icon="`${isDark ? 'Sun' : 'Moon'}Icon`" />
  </b-button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    isDark(): boolean {
      return this.$store.getters['app-config/skin'] === 'dark'
    },
  },
  methods: {
    updateSkin(): void {
      const { isDark } = this
      this.$store.dispatch('app-config/updateSkin', {
        skin: isDark ? 'light' : 'dark',
      })
    },
  },
})
</script>
