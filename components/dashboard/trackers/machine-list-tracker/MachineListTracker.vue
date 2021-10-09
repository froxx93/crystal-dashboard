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
          <b-form-group label="Only Field Item TMs">
            <b-checkbox
              id="machine-list-tracker-filter-npc-tms"
              v-model="onlyFieldItemTMs"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <button-grid
        id="machine-list-tracker-machines"
        :options="options"
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
import { ButtonGridOption } from '~/components/button-grid/ButtonGrid.vue'
import { getMapParent } from '~/utils/domain-utils/mapUtils'

export default Vue.extend({
  props: {
    tracker: {
      type: Object as () => Tracker,
      required: true,
    },
  },
  data() {
    const allTMs = allMachines.filter((machine) => machine.type === 'tm')

    const regions: ButtonGridOption[] = Object.values(allMaps)
      .filter((map) => map.type === 'region')
      .map((map) => ({
        value: map.id,
        text: map.name,
      }))
    regions.splice(0, 0, { value: '', text: 'Both' })

    const defaultSettings = {
      selectedRegion: '',
      onlyFieldItemTMs: false,
      selected: [],
    }
    const { selectedRegion, onlyFieldItemTMs, selected } =
      this.tracker.value || defaultSettings

    return {
      allTMs,
      regions,

      selectedRegion,
      onlyFieldItemTMs,
      selected,
    }
  },
  computed: {
    options(): ButtonGridOption[] {
      let filteredTMs = this.allTMs

      // Apply region filter
      if (this.selectedRegion !== '') {
        filteredTMs = filteredTMs.filter((tm) => {
          return tm.itemSources.find(
            (itemSource) =>
              getMapParent(itemSource.location.map).id === this.selectedRegion
          )
        })
      }

      // Apply field item TM filter
      if (this.onlyFieldItemTMs) {
        filteredTMs = filteredTMs.filter((tm) => {
          return tm.itemSources.find((itemSource) => {
            return itemSource.type === 'field-item'
          })
        })
      }

      const filteredOptions = filteredTMs.map((tm) => ({
        value: tm.id,
        text: tm.name,
        action: {
          icon: 'CrosshairIcon',
          alt: 'Locate',
          route: {
            name: 'machine-finder',
            query: {
              machineId: tm.id,
            },
          },
        },
      }))

      return filteredOptions
    },
  },
  watch: {
    selectedRegion(): void {
      this.updatePersistableData()
    },
    onlyFieldItemTMs(): void {
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
      const { selectedRegion, onlyFieldItemTMs, selected } = this

      this.$emit('change', {
        selectedRegion,
        onlyFieldItemTMs,
        selected,
      })
    },
  },
})
</script>
