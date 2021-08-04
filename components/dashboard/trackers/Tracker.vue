<template>
  <component
    :is="currentComp"
    class="tracker"
    :tracker="tracker"
    @change="onChange"
  >
    <feather-icon icon="XIcon" size="16" class="remove-icon" @click="remove" />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import MachineLocationTracker from './machine-location-tracker/MachineLocationTracker.vue'
import MachineListTracker from './machine-list-tracker/MachineListTracker.vue'

export interface TrackerType {
  value: string
  label: string
  unique: boolean
}

export const TRACKER_TYPES: TrackerType[] = [
  { value: 'machine-location', label: 'Machine Location', unique: false },
  { value: 'machine-list', label: 'TM List', unique: true },
]

export interface Tracker {
  type: TrackerType
  value?: any // some trackers get their value by post-creation user input -> optional
  createdAt: string // used for vue key
}

export default Vue.extend({
  components: {
    MachineLocationTracker,
    MachineListTracker,
  },
  props: {
    tracker: {
      type: Object as () => Tracker,
      required: true,
    },
  },
  computed: {
    currentComp() {
      switch (this.tracker.type.value) {
        case 'machine-location':
          return MachineLocationTracker
        case 'machine-list':
          return MachineListTracker

        default:
          return undefined
      }
    },
  },
  methods: {
    remove(): void {
      this.$emit('remove', this.tracker)
    },
    onChange(value: any): void {
      this.$emit('change', value)
    },
  },
})
</script>

<style lang="scss">
.remove-icon {
  cursor: pointer;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>
