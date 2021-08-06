<template>
  <div>
    <component
      :is="multi ? 'b-form-checkbox-group' : 'b-form-radio-group'"
      :id="`button-grid-${id}`"
      v-model="selected"
      class="radio-group"
      :name="id"
      buttons
      button-variant="light"
      size="sm"
      @change="onChange"
    >
      <component
        :is="multi ? 'b-form-checkbox' : 'b-form-radio'"
        v-for="option in options"
        :key="`button-grid-${id}-${option.value}`"
        :value="option.value"
        >{{ option.text }}
        <feather-icon
          v-if="removeableOptions"
          icon="XIcon"
          size="16"
          class="button-grid-remove-icon"
          @click="() => removeOption(option)"
        />
      </component>
    </component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export interface ButtonGridOption {
  value: string
  text: string
}

export default Vue.extend({
  props: {
    id: {
      type: String,
      required: true,
    },
    options: {
      type: Array as () => ButtonGridOption[],
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
    removeableOptions: {
      type: Boolean,
      default: false,
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
      this.$emit('change', value)
    },
    removeOption(option: ButtonGridOption): void {
      this.$emit('remove', option)
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
