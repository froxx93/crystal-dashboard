<template>
  <b-col cols="4" class="machine-tracker">
    <b-card
      :title="selectedMachine ? infoHeadline : ''"
      :no-body="!selectedMachine"
    >
      <div v-if="selectedMachine" v-dragscroll class="scrollbox">
        <b-row class="map" :style="`width: ${totalCols * 350}px`">
          <b-col v-if="infoCopy && infoCopy.length" :cols="`${colWidth}`">
            <p>
              <strong>Info</strong>
            </p>
            <p v-for="(singleInfo, index) in infoCopy" :key="index">
              {{ singleInfo }}
            </p>
          </b-col>
          <template v-if="selectedMachine && selectedMachine.itemSource">
            <location-col
              v-for="(location, index) in flattenLocations(
                selectedMachine.itemSource.location
              )"
              :key="index"
              :location="location"
              :cols="`${colWidth}`"
            />
          </template>
        </b-row>
      </div>

      <b-row v-else class="finders">
        <b-col>
          <b-card no-body>
            <b-card-body>
              <b-card-title>TMs</b-card-title>
              <button-grid
                id="tm-list"
                :items="tmList"
                @change="onChangeMachine"
              />
            </b-card-body>
            <b-card-body>
              <b-card-title>HMs</b-card-title>
              <button-grid
                id="hm-list"
                :items="hmList"
                @change="onChangeMachine"
              />
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
      <slot />
    </b-card>
  </b-col>
</template>

<script lang="ts">
import Vue from 'vue'
import { Tracker } from './Tracker.vue'
import machines from '~/assets/data/machines'
import { ButtonGridItem } from '~/components/button-grid/ButtonGrid.vue'
import { Machine } from '~/domains/Machine'
import Location from '~/domains/Location'

export default Vue.extend({
  props: {
    tracker: {
      type: Object as () => Tracker,
      required: true,
    },
  },
  data() {
    const selectedMachine = machines.find((m) => m.id === this.tracker.value)

    const allMachines: ButtonGridItem[] = machines.map(
      ({
        id,
        name,
        // move,
      }) => ({
        value: id,
        // text: `${name} (${move.name})`,
        text: `${name}`,
      })
    )

    return {
      selectedMachine,
      tmList: allMachines.filter(({ value }) => value.startsWith('tm')),
      hmList: allMachines.filter(({ value }) => value.startsWith('hm')),
      infoHeadline: '',
      infoCopy: [] as string[],
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
          this.selectedMachine.itemSource.location
        ).length
      }

      return cols
    },
    colWidth(): number {
      return 12 / this.totalCols
    },
  },
  watch: {
    selectedMachine: {
      immediate: true,
      handler(machine: Machine): void {
        this.$emit('select', this.selectedMachine?.id || '')
        this.infoHeadline = machine
          ? `${machine.name} (${machine.move.name})`
          : ''
        this.infoCopy = machine?.itemSource?.conditions || []
      },
    },
  },
  methods: {
    onChangeMachine(machineId: string): void {
      const machine = machines.find(({ id }) => id === machineId)
      this.selectedMachine = machine
    },
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
