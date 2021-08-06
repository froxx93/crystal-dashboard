<template>
  <b-col cols="4">
    <b-card :title="tracker.type.label">
      <template v-if="selectedType">
        <b-row>
          <b-col>
            <b-badge
              pill
              class="type-badge"
              :style="`background-color: ${selectedType.color};`"
              >{{ selectedType.name }}</b-badge
            >
          </b-col>
          <b-col
            ><span>Tracked: {{ amountTracked }}</span>
          </b-col>
          <b-col
            ><span>Caught: {{ amountCaught }}</span></b-col
          >
        </b-row>

        <b-dropdown
          id="type-counter-uncaught-dropdown"
          text="+"
          class="mt-md-1"
          variant="outline-primary"
          no-caret
        >
          <b-dropdown-item
            v-for="pokemon in uncaughtPokemonListOfSelectedType"
            :key="`type-counter-uncaught-${pokemon.id}`"
            @click="() => onClickUntrackedPokemon(pokemon)"
            >{{ pokemon.name }}</b-dropdown-item
          >
        </b-dropdown>

        <button-grid
          id="type-counter-tracked-list"
          class="mt-1"
          :options="trackedPokemonOptions"
          multi
          :initially-selected="caughtPokemonIds"
          removeable-options
          @remove="onRemoveOption"
          @select="onSelectTrackedPokemon"
        />
      </template>
      <b-row v-else class="finders">
        <b-col>
          <button-grid
            id="tm-list"
            :options="typeOptions"
            @change="onChangeType"
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
import Type from '~/domains/Type'
import Pokemon from '~/domains/Pokemon'
import types from '~/assets/data/types'
import pokemon from '~/assets/data/pokemon'
import { ButtonGridOption } from '~/components/button-grid/ButtonGrid.vue'

export default Vue.extend({
  props: {
    tracker: {
      type: Object as () => Tracker,
      required: true,
    },
  },
  data() {
    const typeOptions: ButtonGridOption[] = types.map(({ id, name }) => ({
      value: id,
      text: name,
    }))

    const defaultSettings = {
      selectedType: undefined,
      trackedPokemonList: [],
      caughtPokemonIds: [],
    }
    const { selectedType, trackedPokemonList, caughtPokemonIds } =
      this.tracker.value || defaultSettings

    return {
      typeOptions,

      selectedType: selectedType as Type | undefined,
      trackedPokemonList: trackedPokemonList as Pokemon[],
      caughtPokemonIds: caughtPokemonIds as string[],
    }
  },
  computed: {
    uncaughtPokemonListOfSelectedType(): Pokemon[] {
      if (!this.selectedType) {
        return []
      }

      return pokemon
        .filter(({ types }) =>
          types.find((type) => type.id === this.selectedType?.id)
        )
        .filter((pokemon) => !this.trackedPokemonList.includes(pokemon))
        .sort(({ name: nameA }, { name: nameB }) => (nameA < nameB ? -1 : 1))
    },
    amountTracked(): number {
      return this.trackedPokemonList.length
    },
    amountCaught(): number {
      return this.caughtPokemonIds.length
    },
    trackedPokemonOptions(): ButtonGridOption[] {
      return this.trackedPokemonList.map(({ id, name }) => ({
        value: id,
        text: name,
      }))
    },
  },
  watch: {
    selectedType(): void {
      this.updatePersistableData()
    },
    trackedPokemonList(): void {
      this.updatePersistableData()
    },
    caughtPokemonIds(): void {
      this.updatePersistableData()
    },
  },
  methods: {
    onChangeType(typeId: string): void {
      this.selectedType = types.find((type) => type.id === typeId)
    },
    onClickUntrackedPokemon(pokemon: Pokemon): void {
      this.trackedPokemonList.push(pokemon)
    },
    removeCaughtPokemon(pokemon: Pokemon): void {
      const index = this.trackedPokemonList.indexOf(pokemon)
      this.trackedPokemonList.splice(index, 1)
    },
    onSelectTrackedPokemon(selected: string[]): void {
      this.caughtPokemonIds = selected
    },
    onRemoveOption(option: ButtonGridOption) {
      const removingPokemon = this.trackedPokemonList.find(
        ({ id }) => option.value === id
      )
      if (!removingPokemon) {
        return
      }

      const caughtIndex = this.caughtPokemonIds.indexOf(removingPokemon.id)
      if (caughtIndex !== -1) {
        this.caughtPokemonIds.splice(caughtIndex, 1)
      }

      const trackedIndex = this.trackedPokemonList.indexOf(removingPokemon)
      this.trackedPokemonList.splice(trackedIndex, 1)
    },
    updatePersistableData(): any {
      const { selectedType, trackedPokemonList, caughtPokemonIds } = this

      this.$emit('change', {
        selectedType,
        trackedPokemonList,
        caughtPokemonIds,
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.type-badge {
  font-size: 1rem;
}
.remove-icon {
  cursor: pointer;
}
</style>
