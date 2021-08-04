<template>
  <div>
    <component
      :is="multi ? 'b-form-checkbox-group' : 'b-form-radio-group'"
      :id="id"
      v-model="selected"
      class="radio-group"
      :options="items"
      :name="id"
      buttons
      button-variant="light"
      size="sm"
      @change="onChange"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export interface ButtonGridItem {
  value: string
  text: string
}

export default Vue.extend({
  props: {
    id: {
      type: String,
      required: true,
    },
    items: {
      type: Array as () => ButtonGridItem[],
      required: true,
    },
    multi: {
      type: Boolean,
      default: false,
    },
    initiallySelected: {
      type: [String, Array],
      default: undefined,
    },
  },
  data() {
    return {
      with: 3,
      selected:
        this.initiallySelected || ((this.multi ? [] : '') as string[] | string),
    }
  },
  watch: {
    selected(): void {
      this.$emit('select', this.selected)
    },
  },
  methods: {
    onChange(value: string): void {
      this.selected = value
      this.$emit('change', value)
    },
  },
})
</script>

<style lang="scss">
.radio-group {
  display: block;
}

.btn-light {
  &:focus,
  &.focus {
    // use regular styles instead of focus styles
    color: #2a2e30;
    background-color: #f6f6f6;
    border-top-color: transparent;
    border-bottom-color: transparent;
  }
}
</style>
