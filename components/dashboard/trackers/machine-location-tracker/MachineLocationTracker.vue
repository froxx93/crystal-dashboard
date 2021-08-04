<template>
  <b-col cols="4" class="machine-tracker">
    <b-card
      :title="selectedMachine ? infoHeadline : ''"
      :no-body="!selectedMachine"
    >
      <template v-if="selectedMachine">
        <machine-location-tracker-content-wrapper
          :selected-machine="selectedMachine"
          :active-item-source-index="0"
        />
      </template>

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
import { Tracker } from '../Tracker.vue'
import MachineLocationTrackerContentWrapper from '../machine-location-tracker/MachineLocationTrackerContentWrapper.vue'
import machines from '~/assets/data/machines'
import { ButtonGridItem } from '~/components/button-grid/ButtonGrid.vue'
import { Machine } from '~/domains/Machine'

export default Vue.extend({
  components: {
    MachineLocationTrackerContentWrapper,
  },
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
    }
  },
  watch: {
    selectedMachine: {
      immediate: true,
      handler(machine: Machine): void {
        this.$emit('change', this.selectedMachine?.id || '')
        this.infoHeadline = machine
          ? `${machine.name} (${machine.move.name})`
          : ''
      },
    },
  },
  methods: {
    onChangeMachine(machineId: string): void {
      const machine = machines.find(({ id }) => id === machineId)
      this.selectedMachine = machine
    },
  },
})
</script>
