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

        <dropdown
          id="type-counter-uncaught-dropdown"
          text="+"
          class="mt-md-1"
          :items="
            uncaughtPokemonListOfSelectedType.map((pokemon) => ({
              value: pokemon.id,
              label: pokemon.name,
            }))
          "
          @item-click="onClickUntrackedPokemon"
        />

        <button-grid
          id="type-counter-tracked-list"
          class="mt-1"
          :options="trackedPokemonOptions"
          multi
          :initially-selected="caughtPokemonIds"
          removeable-options
          @remove="onRemoveOption"
          @select="onSelectTrackedPokemon"
          @dblclick="onDoubleClick"
        />
        <p v-if="trackedPokemonOptions.length" class="text-muted small">
          Double click to evolve a tracked Pokémon
        </p>
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
      <b-modal id="evolution-modal">
        <button-grid
          id="evolution-modal-options"
          :options="evolutionOptions"
          @select="onEvolutionSelect"
        />
      </b-modal>
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
import { DropdownItem } from '~/components/dropdown/Dropdown.vue'

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

      pokemonToEvolve: undefined as Pokemon | undefined,
      evolutionOptions: [] as ButtonGridOption[],
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
        .filter(
          (pokemon) =>
            !this.trackedPokemonList.find(({ id }) => id === pokemon.id)
        )
        .sort(({ name: nameA }, { name: nameB }) => (nameA < nameB ? -1 : 1))
    },
    amountTracked(): number {
      return this.trackedPokemonList.length
    },
    amountCaught(): number {
      return this.caughtPokemonIds.length
    },
    trackedPokemonOptions(): ButtonGridOption[] {
      return this.trackedPokemonList
        .map(({ id, name }) => ({
          value: id,
          text: name,
        }))
        .sort(({ text: textA }, { text: textB }) => (textA < textB ? -1 : 1))
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
    onClickUntrackedPokemon(item: DropdownItem): void {
      const pokemon = this.uncaughtPokemonListOfSelectedType.find(
        (pokemon) => pokemon.id === item.value
      )
      if (pokemon) {
        this.trackedPokemonList.push(pokemon)
      }
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
    onDoubleClick(option: ButtonGridOption): void {
      const pokemon = this.trackedPokemonList.find(
        ({ id }) => id === option.value
      )
      if (!pokemon) {
        return
      }

      // Only handle double click for pokemon that can evolve
      const evolutionsOfSelectedType = pokemon.evolvesTo.filter(
        ({ types }) =>
          this.selectedType &&
          types.find(({ id }) => id === this.selectedType?.id)
      )
      if (!evolutionsOfSelectedType.length) {
        return
      }

      const trackedIndex = this.trackedPokemonList
        .map(({ id }) => id)
        .indexOf(pokemon.id)
      if (trackedIndex === -1) {
        return
      }

      if (evolutionsOfSelectedType.length === 1) {
        const evolution = evolutionsOfSelectedType[0]
        this.evolveTrackedPokemon(trackedIndex, evolution)
      } else {
        this.evolutionOptions = evolutionsOfSelectedType.map(
          ({ id, name }) => ({
            value: id,
            text: name,
          })
        )
        this.pokemonToEvolve = pokemon
        this.$bvModal.show('evolution-modal')
      }
    },
    evolveTrackedPokemon(trackedIndex: number, evolution: Pokemon): void {
      const pokemon = this.trackedPokemonList[trackedIndex]
      if (!this.trackedPokemonList.map(({ id }) => id).includes(evolution.id)) {
        this.trackedPokemonList.splice(trackedIndex, 1, evolution)
      } else {
        this.trackedPokemonList.splice(trackedIndex, 1)
      }

      const caughtIndex = this.caughtPokemonIds.indexOf(pokemon.id)
      if (caughtIndex !== -1) {
        this.caughtPokemonIds.splice(caughtIndex, 1)
      }
      this.caughtPokemonIds.push(evolution.id)
    },
    onEvolutionSelect(selectedOption: string): void {
      this.$bvModal.hide('evolution-modal')
      this.evolutionOptions = []

      if (!this.pokemonToEvolve) {
        return
      }

      const evolution = pokemon.find(({ id }) => id === selectedOption)
      if (!evolution) {
        return
      }

      const trackedIndex = this.trackedPokemonList
        .map(({ id }) => id)
        .indexOf(this.pokemonToEvolve.id)
      this.evolveTrackedPokemon(trackedIndex, evolution)
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
