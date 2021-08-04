<template>
  <b-tabs v-if="selectedMachine.itemSources.length > 1">
    <b-tab
      v-for="(itemSource, index) in selectedMachine.itemSources"
      :key="index"
      :title="itemSource.location.map.name"
      :active="index === 0"
    >
      <machine-location-tracker-content
        :selected-machine="selectedMachine"
        :item-source-index="index"
      />
    </b-tab>
  </b-tabs>

  <machine-location-tracker-content
    v-else
    :selected-machine="selectedMachine"
    :item-source-index="0"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import MachineLocationTrackerContent from './MachineLocationTrackerContent.vue'
import { Machine } from '~/domains/Machine'

export default Vue.extend({
  components: {
    MachineLocationTrackerContent,
  },
  props: {
    selectedMachine: {
      type: Object as () => Machine,
      required: true,
    },
    activeItemSourceIndex: {
      type: Number,
      required: true,
    },
  },
})
</script>
