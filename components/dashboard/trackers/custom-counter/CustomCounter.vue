<template>
  <b-col cols="4" class="custom-counter">
    <b-card :title="name || tracker.type.label">
      <template v-if="name">
        <b-row>
          <b-col cols="12">
            <span class="amount">{{ amount }}</span>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button :variant="buttonVariant" @click="() => amount--"
              >-</b-button
            >
            <b-button :variant="buttonVariant" @click="() => amount++"
              >+</b-button
            >
          </b-col>
          <b-col class="d-flex justify-content-end">
            <b-button variant="outline-danger" @click="() => (amount = 0)"
              >Reset</b-button
            >
          </b-col>
        </b-row>
      </template>

      <b-form v-else @submit="onTrackSubmit">
        <b-row>
          <b-col cols="12">
            <b-form-group description="What is there to track?">
              <b-form-input v-model="nameTemp" autofocus />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <b-button variant="outline-primary" type="submit">Track</b-button>
          </b-col>
        </b-row>
      </b-form>

      <slot />
    </b-card>
  </b-col>
</template>

<script lang="ts">
import Vue from 'vue'
import { Tracker } from '../Tracker.vue'

export default Vue.extend({
  props: {
    tracker: {
      type: Object as () => Tracker,
      required: true,
    },
  },
  data() {
    const defaultSettings = {
      name: '',
      amount: 0,
    }
    const { name, amount } = this.tracker.value || defaultSettings

    return {
      name,
      amount,

      nameTemp: '',
    }
  },
  computed: {
    buttonVariant(): string {
      return this.$store.getters['app-config/skin'] === 'dark'
        ? 'outline-light'
        : 'outline-dark'
    },
  },
  watch: {
    name(): void {
      this.updatePersistableData()
    },
    amount(): void {
      this.updatePersistableData()
    },
  },
  methods: {
    onTrackSubmit(): void {
      this.name = this.nameTemp
    },
    updatePersistableData(): any {
      const { name, amount } = this

      this.$emit('change', {
        name,
        amount,
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.card-title {
  text-transform: capitalize;
}

.amount {
  font-size: 3rem;
}
</style>
