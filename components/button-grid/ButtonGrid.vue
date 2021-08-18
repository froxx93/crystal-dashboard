<template>
  <div>
    <component
      :is="multi ? 'b-form-checkbox-group' : 'b-form-radio-group'"
      :id="`button-grid-${id}`"
      v-model="selected"
      class="button-grid"
      :name="id"
      buttons
      :button-variant="buttonVariant"
      size="sm"
      @change="onChange"
      ><span
        v-for="option in options"
        :key="`button-grid-${id}-${option.value}`"
        class="button-grid-option-wrapper"
        @dblclick="() => onDoubleClick(option)"
      >
        <component
          :is="multi ? 'b-form-checkbox' : 'b-form-radio'"
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
      </span>
    </component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { $themeConfig } from '~/themeConfig'

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
  computed: {
    buttonVariant(): string {
      return this.$store.getters['app-config/skin'] === 'dark'
        ? 'dark'
        : 'light'
    },
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
    onDoubleClick(option: ButtonGridOption): void {
      this.$emit('dblclick', option)
    },
  },
})
</script>

<style lang="scss">
.button-grid {
  display: block;

  .button-grid-option-wrapper input {
    display: none;
  }
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
