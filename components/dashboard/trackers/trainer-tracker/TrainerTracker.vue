<template>
  <b-col cols="8">
    <b-card :title="trainerType ? trainerType.name : tracker.label">
      <template v-if="trainerType">
        <b-row>
          <!-- regions -->
          <b-col cols="6">
            <div class="d-flex">
              <map-wrapper
                v-for="(regionMap, index) in regionMaps"
                :key="index"
                :map="regionMap"
                :markers="getAreaMarkers(regionMap)"
              />
            </div>
          </b-col>

          <b-col cols="6">
            <map-wrapper
              v-if="selectedArea"
              :map="selectedArea"
              :markers="getTrainerMarkers(selectedArea)"
            />
          </b-col>
        </b-row>

        <!-- <div v-for="(trainer, index) in trainers" :key="index" class="mb-1">
          {{
            `${trainer.type.name} ${trainer.name} (${trainer.pokemon.length})`
          }}
          <div
            v-for="(pokemon, index2) in trainer.pokemon"
            :key="`${index}-${index2}`"
          >
            {{ `${pokemon.species.name} (${pokemon.level})` }}
          </div>
        </div> -->
      </template>

      <b-row v-else>
        <b-col>
          <button-grid
            id="tm-list"
            :options="trainerTypeOptions"
            @change="onSelectTrainerType"
          />
        </b-col>
      </b-row>

      <slot />
    </b-card>
  </b-col>
</template>

<script lang="ts">
import Vue from 'vue'
import { Tracker } from '../Tracker.vue'
import TRAINER_TYPES from '~/assets/data/trainerTypes'
import TRAINERS from '~/assets/data/trainers'
import MAPS, * as ALL_MAPS from '~/assets/data/maps'
import Trainer from '~/domains/Trainer'
import Location from '~/domains/Location'
import Map from '~/domains/Map'
import { getMapParent } from '~/utils/domain-utils/mapUtils'
import Marker from '~/domains/Marker'

export default Vue.extend({
  props: {
    tracker: {
      type: Object as () => Tracker,
      required: true,
    },
  },
  data() {
    const defaultSettings = {
      trainerType: undefined,
      selectedArea: ALL_MAPS.ROUTE_36 as Map | undefined,
    }
    const { trainerType, selectedArea } = this.tracker.value || defaultSettings

    return {
      trainerType,
      selectedArea,

      trainerTypeOptions: TRAINER_TYPES.filter((type) =>
        TRAINERS.find((trainer) => trainer.type === type)
      ).map(({ id, name }) => ({
        value: id,
        text: name,
      })),
    }
  },
  computed: {
    trainers(): Trainer[] {
      return TRAINERS.filter(({ type }) => type.id === this.trainerType.id)
    },
    regionMaps(): Map[] {
      return MAPS.filter(({ type }) => type === 'region')
    },
  },
  watch: {
    trainerType() {
      this.updatePersistableData()
    },
  },
  methods: {
    onSelectTrainerType(trainerTypeId: string): void {
      const trainerType = TRAINER_TYPES.find(({ id }) => id === trainerTypeId)

      if (trainerType) {
        this.trainerType = trainerType
      }
    },
    getAreaMarkers(map: Map): Marker[] {
      const locations: Location[] = this.trainers
        .filter((trainer) => getMapParent(trainer.location.map).id === map.id)
        .map(
          (trainer) =>
            getMapParent(trainer.location.map, 'area')
              .parentLocation as Location
        )

      return locations.map(({ x, y, width, height }) => ({
        x,
        y,
        width,
        height,
      }))
    },
    getTrainerMarkers(map: Map): Marker[] {
      const locations: Location[] = this.trainers
        .filter(
          (trainer) =>
            getMapParent(trainer.location.map, map.type).id === map.id
        )
        .map((trainer) => trainer.location)

      return locations.map(({ x, y, width, height }) => ({
        x,
        y,
        width,
        height,
      }))
    },
    updatePersistableData(): void {
      const { trainerType } = this

      this.$emit('change', {
        trainerType,
      })
    },
  },
})
</script>
