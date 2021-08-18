<template>
  <div class="dropdown">
    <b-dropdown
      :id="id"
      ref="dropdown"
      :text="text"
      :variant="variant"
      no-caret
      @shown="showItems"
    >
      <b-dropdown-form
        @submit.stop.prevent
        @submit="submitFilter"
        @keydown="onFormKeyPressed"
      >
        <b-input :id="`${id}-filter`" v-model="filter" placeholder="Search" />
      </b-dropdown-form>
      <div class="list-wrapper">
        <b-dropdown-item
          v-for="(item, index) in filteredItems"
          :key="`dropdown-${id}-${item.value}`"
          :active="index === activeItemIndex"
          @click="() => onItemClick(item)"
          >{{ item.label }}</b-dropdown-item
        >
        <b-dropdown-item v-if="!filteredItems.length">{{
          emptyListItem.label
        }}</b-dropdown-item>
      </div>
    </b-dropdown>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export interface DropdownItem {
  value: string
  label: string
}

export default Vue.extend({
  props: {
    id: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    items: {
      type: Array as () => DropdownItem[],
      required: true,
    },
    variant: {
      type: String,
      default: 'outline-primary',
    },
  },
  data() {
    return {
      emptyListItem: { value: '', label: 'No entries found' } as DropdownItem,

      filter: '',
      activeItemIndex: 0,
    }
  },
  computed: {
    filteredItems(): DropdownItem[] {
      return this.items.filter(
        (item) => !this.filter || item.label.toLowerCase().includes(this.filter)
      )
    },
  },
  watch: {
    filter(): void {
      // reset first shown item
      this.activeItemIndex = 0
    },
  },
  methods: {
    onItemClick(item: DropdownItem): void {
      this.$emit('item-click', item)
    },
    showItems(): void {
      // reset filter value
      this.filter = ''

      // preselect first shown item
      this.activeItemIndex = 0

      // select filter input
      const input: HTMLElement | null = document.querySelector(
        `#${this.id}-filter`
      )
      if (input) {
        input.focus()
      }
    },
    submitFilter(): void {
      if (this.filteredItems.length) {
        const item = this.filteredItems[this.activeItemIndex]
        if (item) {
          this.onItemClick(item)
          const dropdown: any = this.$refs.dropdown
          if (dropdown) {
            dropdown.hide(true)
          }
        }
      }
    },
    onFormKeyPressed(ev: KeyboardEvent): void {
      switch (ev.key) {
        case 'ArrowDown':
          ev.preventDefault()
          this.nextItem()
          break
        case 'ArrowUp':
          ev.preventDefault()
          this.previousItem()
          break
      }
    },
    nextItem(): void {
      if (this.activeItemIndex + 1 >= this.filteredItems.length) {
        this.activeItemIndex = 0
      } else {
        this.activeItemIndex++
      }
    },
    previousItem(): void {
      if (this.activeItemIndex - 1 < 0) {
        this.activeItemIndex = this.filteredItems.length - 1
      } else {
        this.activeItemIndex--
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.list-wrapper {
  max-height: 300px;
  overflow-y: auto;
}
</style>
