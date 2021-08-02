<template>
  <div v-dragscroll class="scrollbox">
    <b-row class="map" :style="`width: ${totalCols * 350}px`">
      <b-col v-if="infoCopy && infoCopy.length" :cols="`${colWidth}`">
        <p>
          <strong>Info</strong>
        </p>
        <p v-for="(singleInfo, index) in infoCopy" :key="index">
          {{ singleInfo }}
        </p>
      </b-col>
      <template v-if="selectedMachine && selectedMachine.itemSources">
        <location-col
          v-for="(location, index) in flattenLocations(
            selectedMachine.itemSources[itemSourceIndex].location
          )"
          :key="index"
          :location="location"
          :cols="`${colWidth}`"
        />
      </template>
    </b-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Machine } from '~/domains/Machine'
import Location from '~/domains/Location'

export default Vue.extend({
  props: {
    selectedMachine: {
      type: Object as () => Machine,
      required: true,
    },
    itemSourceIndex: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      infoCopy:
        this.selectedMachine.itemSources[this.itemSourceIndex]?.conditions ||
        [],
    }
  },
  computed: {
    totalCols(): number {
      let cols = 0
      if (this.infoCopy && this.infoCopy.length) {
        cols += 1
      }
      if (this.selectedMachine) {
        cols += this.flattenLocations(
          this.selectedMachine.itemSources[this.itemSourceIndex].location
        ).length
      }

      return cols
    },
    colWidth(): number {
      return 12 / this.totalCols
    },
  },
  methods: {
    flattenLocations(location: Location): Location[] {
      const locations: Location[] = []
      locations.push(location)

      const { parentLocation } = location.map
      if (parentLocation) {
        locations.push(...this.flattenLocations(parentLocation))
      }

      return locations
    },
  },
})
</script>

<style lang="scss">
.scrollbox {
  overflow-x: auto;
}
</style>
