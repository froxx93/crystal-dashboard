<template>
  <b-col cols="4">
    <b-card :title="trainerType ? trainerType.name : tracker.label">
      <template v-if="trainerType">
        <div v-for="(trainer, index) in trainers" :key="index" class="mb-1">
          {{
            `${trainer.type.name} ${trainer.name} (${trainer.pokemon.length})`
          }}
          <div
            v-for="(pokemon, index2) in trainer.pokemon"
            :key="`${index}-${index2}`"
          >
            {{ `${pokemon.species.name} (${pokemon.level})` }}
          </div>
        </div>
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
import Trainer from '~/domains/Trainer'

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
    }
    const { trainerType } = this.tracker.value || defaultSettings

    return {
      trainerType,

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
    updatePersistableData(): void {
      const { trainerType } = this

      this.$emit('change', {
        trainerType,
      })
    },
  },
})
</script>
