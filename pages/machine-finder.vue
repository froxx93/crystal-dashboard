<template>
  <div>
    <h1>Machine Finder</h1>
    <section id="machine-finder">
      <b-row class="finders">
        <b-col>
          <b-card no-body>
            <b-card-body>
              <b-card-title>TMs</b-card-title>
              <button-grid
                id="tm-list"
                :options="tmOptions"
                @change="onChangeMachine"
              />
            </b-card-body>
            <b-card-body>
              <b-card-title>HMs</b-card-title>
              <button-grid
                id="hm-list"
                :options="hmOptions"
                @change="onChangeMachine"
              />
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
      <b-row v-if="selectedMachine" class="map">
        <b-col>
          <b-card :title="infoHeadline">
            <machine-location-tracker-content-wrapper
              :selected-machine="selectedMachine"
              :active-item-source-index="0"
            />
          </b-card>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import machines from '@/assets/data/machines'
import { ButtonGridOption } from '~/components/button-grid/ButtonGrid.vue'
import { Machine } from '~/domains/Machine'
import MachineLocationTrackerContentWrapper from '~/components/dashboard/trackers/machine-location-tracker/MachineLocationTrackerContentWrapper.vue'

export default Vue.extend({
  components: {
    MachineLocationTrackerContentWrapper,
  },
  data() {
    const allMachineOptions: ButtonGridOption[] = machines.map(
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
      tmOptions: allMachineOptions.filter(({ value }) =>
        value.startsWith('tm')
      ),
      hmOptions: allMachineOptions.filter(({ value }) =>
        value.startsWith('hm')
      ),
      infoHeadline: '',
      selectedMachine: undefined as Machine | undefined,
    }
  },
  created(): void {
    const { machineId } = this.$route.query as { [key: string]: string }

    if (machineId) {
      this.onChangeMachine(machineId, false)
    }
  },
  methods: {
    onChangeMachine(machineId: string, reroute: boolean = true): void {
      const machine = machines.find(({ id }) => id === machineId)
      this.selectedMachine = machine
      this.infoHeadline = machine
        ? `${machine.name} (${machine.move.name})`
        : ''

      if (reroute) {
        this.$router.replace({ query: { machineId } })
      }
    },
  },
})
</script>

<style></style>
