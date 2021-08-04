<template>
  <b-col cols="4" class="machine-tracker">
    <b-card :title="tracker.type.label">
      <b-row>
        <b-col cols="12">
          <b-form-group label="Regions">
            <b-radio-group
              id="machine-list-tracker-filter-region"
              v-model="selectedRegion"
              :options="regions"
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Exclude Gym TMs">
            <b-checkbox
              id="machine-list-tracker-filter-gym-tms"
              v-model="excludeGymTMs"
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Exclude Game Corners">
            <b-checkbox
              id="machine-list-tracker-filter-game-corners"
              v-model="excludeGameCorners"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <button-grid
        id="machine-list-tracker-machines"
        :items="items"
        multi
        :initially-selected="selected"
        @select="onSelect"
      />
      <slot />
    </b-card>
  </b-col>
</template>

<script lang="ts">
import Vue from 'vue'
import { Tracker } from '../Tracker.vue'
import allMachines from '~/assets/data/machines'
import allMaps from '~/assets/data/maps'
import { ButtonGridItem } from '~/components/button-grid/ButtonGrid.vue'
import { getDeepestParent } from '~/utils/domain-utils/mapUtils'

export default Vue.extend({
  props: {
    tracker: {
      type: Object as () => Tracker,
      required: true,
    },
  },
  data() {
    const allTMs = allMachines.filter((machine) => machine.type === 'tm')
    const allItems: ButtonGridItem[] = allTMs.map((machine) => ({
      value: machine.id,
      text: machine.name,
    }))

    const regions: ButtonGridItem[] = Object.values(allMaps)
      .filter((map) => map.type === 'region')
      .map((map) => ({
        value: map.id,
        text: map.name,
      }))
    regions.splice(0, 0, { value: '', text: 'Both' })

    const defaultSettings = {
      selectedRegion: '',
      excludeGymTMs: false,
      excludeGameCorners: false,
      selected: [],
    }
    const { selectedRegion, excludeGymTMs, excludeGameCorners, selected } =
      this.tracker.value || defaultSettings

    return {
      allTMs,
      allItems,
      regions,
      selectedRegion,
      excludeGymTMs,
      excludeGameCorners,
      selected,
    }
  },
  computed: {
    items(): ButtonGridItem[] {
      let filteredTMs = this.allTMs

      // Apply region filter
      if (this.selectedRegion !== '') {
        filteredTMs = filteredTMs.filter((tm) => {
          return tm.itemSources.find(
            (itemSource) =>
              getDeepestParent(itemSource.location.map).id ===
              this.selectedRegion
          )
        })
      }

      // Apply gym TM filter
      if (this.excludeGymTMs) {
        filteredTMs = filteredTMs.filter((tm) => {
          return tm.itemSources.find((itemSource) => {
            return itemSource.type !== 'gym-leader'
          })
        })
      }

      // Apply game corners filter
      if (this.excludeGameCorners) {
        filteredTMs = filteredTMs.filter((tm) => {
          return tm.itemSources.find((itemSource) => {
            return itemSource.type !== 'game-corner'
          })
        })
      }

      const filteredItems = filteredTMs.map((tm) => ({
        value: tm.id,
        text: tm.name,
      }))

      return filteredItems
    },
  },
  watch: {
    selectedRegion(): void {
      this.updatePersistableData()
    },
    excludeGymTMs(): void {
      this.updatePersistableData()
    },
    excludeGameCorners(): void {
      this.updatePersistableData()
    },
    selected(): void {
      this.updatePersistableData()
    },
  },
  methods: {
    onSelect(value: any): void {
      this.selected = value
    },
    updatePersistableData(): any {
      const { selectedRegion, excludeGymTMs, excludeGameCorners, selected } =
        this
      // TODO: update this
      const data = {
        selectedRegion,
        excludeGymTMs,
        excludeGameCorners,
        selected,
      }

      this.$emit('change', data)
    },
  },
})
</script>
