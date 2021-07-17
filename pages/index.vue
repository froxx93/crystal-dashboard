<template>
  <div>
    <h1>Welcome to Crystal Dashboard!</h1>
    <section id="dashboard">
      <b-row class="finders">
        <b-col>
          <b-card no-body>
            <b-card-body>
              <b-card-title>Machine Finder</b-card-title>
              <b-card-sub-title class="mb-2">TMs</b-card-sub-title>
              <button-grid
                id="tm-list"
                :items="tmList"
                @change="onChangeMachine"
              />
            </b-card-body>
            <b-card-body>
              <b-card-sub-title class="mb-2">HMs</b-card-sub-title>
              <button-grid
                id="hm-list"
                :items="hmList"
                @change="onChangeMachine"
              />
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
      <!-- <b-row>
        <b-col>
          <b-card title="Trainer Finder">
            <b-card-text
              >Display radio button grid for trainer types here</b-card-text
            >
          </b-card>
        </b-col>
      </b-row> -->
      <b-row class="map">
        <b-col>
          <b-card>
            <b-row>
              <b-col cols="3">
                <p>
                  <strong>{{ infoHeadline }}</strong>
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
                  cols="3"
                />
              </template>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script lang="ts">
import machines from '@/assets/data/machines'
import { ButtonGridItem } from '~/components/button-grid/ButtonGrid.vue'
import { Machine } from '~/domains/Machine'
import Location from '~/domains/Location'

export default {
  data() {
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
      tmList: allMachines.filter(({ value }) => value.startsWith('tm')),
      hmList: allMachines.filter(({ value }) => value.startsWith('hm')),
      infoHeadline: '',
      infoCopy: [] as string[],
      selectedMachine: undefined as Machine | undefined,
    }
  },
  methods: {
    onChangeMachine(machineId: string) {
      const machine = machines.find(({ id }) => id === machineId)
      this.selectedMachine = machine
      this.infoHeadline = machine
        ? `${machine.name} (${machine.move.name})`
        : ''
      this.infoCopy = machine?.itemSource?.conditions || []
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
}
</script>

<style></style>
