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

<style lang="scss" scoped>
.radio-group {
  display: block;
}

/* The heart of the matter */
$width: 3;
.btn-matrix > .btn {
  &:nth-child(#{$width}n + #{$width + 1}) {
    clear: left;
    margin-left: 0;
  }
  &:nth-child(n + #{$width + 1}) {
    margin-top: -1px;
  }
  &:first-child {
    border-bottom-left-radius: 0;
  }
  &:nth-child(#{$width}) {
    border-top-right-radius: 4px !important;
  }
  &:nth-last-child(#{$width}) {
    border-bottom-left-radius: 4px !important;
  }
  &:last-child {
    border-top-right-radius: 0;
  }
}
</style>
