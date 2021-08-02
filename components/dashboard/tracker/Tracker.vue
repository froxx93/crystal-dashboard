<template>
  <component :is="currentComp" class="tracker" :tracker="tracker">
    <feather-icon icon="XIcon" size="16" class="remove-icon" @click="remove" />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import MachineTracker from './MachineTracker.vue'

export interface TrackerType {
  value: string
  label: string
}

export const TRACKER_TYPES: TrackerType[] = [
  { value: 'machine', label: 'Machine' },
]

export interface Tracker {
  type: TrackerType
  createdAt: string // used for vue key
}

export default Vue.extend({
  components: {
    MachineTracker,
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
        case 'machine':
          return MachineTracker

        default:
          return undefined
      }
    },
  },
  methods: {
    remove(): void {
      this.$emit('remove', this.tracker)
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
